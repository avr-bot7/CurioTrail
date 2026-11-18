"""CurioTrail local server: serves the site and the AI endpoint used by the visit planner.

Run:   python server.py              -> http://127.0.0.1:5173
       python server.py --port 8080

AI key: create a file named .env next to this script containing ONE of
        GROQ_API_KEY=your_key        (free at console.groq.com, fast)
        GEMINI_API_KEY=your_key      (free at aistudio.google.com)
        Optional: AI_MODEL=model-id  to pick a specific model.
.env is git-ignored and is never served to the browser, so the key stays on this computer.
Without a key the site still works; the planner then reads requests with its built-in rules.

Only Python's standard library is used. The server listens on 127.0.0.1 only.
"""
import json
import os
import re
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
UA = "CurioTrail/1.0"

# name, env var, OpenAI-compatible base URL, preferred models, model families to fall back on
PROVIDERS = [
    ("Groq", "GROQ_API_KEY", "https://api.groq.com/openai/v1",
     ["llama-3.3-70b-versatile", "openai/gpt-oss-120b", "openai/gpt-oss-20b", "llama-3.1-8b-instant"], ("llama", "gpt-oss", "qwen")),
    ("Gemini", "GEMINI_API_KEY", "https://generativelanguage.googleapis.com/v1beta/openai",
     ["gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-2.0-flash"], ("flash",)),
]
SKIP_WORDS = ("whisper", "tts", "guard", "embed", "image", "vision", "audio", "live", "imagen", "veo", "native", "transcribe")

PARSE_SYSTEM = """You read a traveller's message about visiting a place in India and pull out the trip details.
Today is {today} ({weekday}). Reply with ONE JSON object and nothing else:
{{"place": string or null, "date": "YYYY-MM-DD" or null, "people": integer or null, "budget_inr": integer or null, "interests": [short English words]}}
Rules:
- place: the village, town, district or state they will visit, written in English (Latin) spelling, e.g. "श्रीनगर" -> "Srinagar".
- date: resolve words like tomorrow or this Saturday using today's date.
- people: everyone travelling, including the speaker ("me and 2 friends" = 3).
- budget_inr: rupees ("10k" = 10000, "1 lakh" = 100000).
- interests: what they like, e.g. painting, weaving, embroidery, food, music, pottery. In Hindi or Hinglish, "kadhai/kadai ka kaam" means embroidery, not cooking.
- Use null when the message does not say. The message may be English, Hindi or Hinglish. Never invent details."""

SUMMARY_SYSTEM = """You are CurioTrail's visit planner. Write 2 or 3 short, warm sentences (at most 70 words) in {language} summarising the plan in the JSON you are given.
Strict rules:
- Mention ONLY sessions, hosts, places, times, prices and traditions that appear in the JSON.
- Never add hotels, food, transport, events, prices or places that are not in it.
- Write amounts with the rupee sign, Indian style (e.g. ₹11,200).
- If a budget and the amount left are given, say how much is left for travel and food.
- If no_session_near_requested_place is true, first say there is no listed session near the requested place yet, then offer the suggestions as the nearest options, naming where they are.
- Only describe traditions_nearby as near the requested place. Things in also_that_day_elsewhere or traditions_elsewhere_in_state are elsewhere: name their place and never say "while you're there".
- If nothing is suggested, say so kindly and point to the other days or traditions listed.
- Plain sentences only: no lists, headings or markdown."""


def load_env():
    path = os.path.join(ROOT, ".env")
    if not os.path.exists(path):
        return
    for line in open(path, encoding="utf-8"):
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def call(url, key, body=None, timeout=20):
    req = urllib.request.Request(
        url, data=json.dumps(body).encode("utf-8") if body is not None else None, method="POST" if body is not None else "GET",
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json", "User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.load(r)


def first_json(text):
    m = re.search(r"\{.*\}", text or "", re.S)
    return json.loads(m.group(0)) if m else None


class AI:
    def __init__(self):
        self.ready = False
        self.provider = self.model = self.base = self.key = None
        self.error = "No AI key set (add GROQ_API_KEY or GEMINI_API_KEY to .env)"
        self.last_try = 0.0
        self.lock = threading.Lock()
        self.calls = []

    def ensure(self):
        with self.lock:
            if self.ready or time.time() - self.last_try < 30:
                return self.ready
            self.last_try = time.time()
            load_env()
            for name, env, base, prefer, families in PROVIDERS:
                key = os.environ.get(env, "").strip()
                if not key:
                    continue
                model = os.environ.get("AI_MODEL", "").strip()
                try:
                    if not model:
                        ids = []
                        for m in call(base + "/models", key).get("data", []):
                            mid = m.get("id", "")
                            ids.append(mid[len("models/"):] if mid.startswith("models/") else mid)
                        model = next((p for p in prefer if p in ids), None) or next(
                            (i for i in ids if any(f in i for f in families) and not any(s in i for s in SKIP_WORDS)), prefer[0])
                except urllib.error.HTTPError as e:
                    self.error = f"{name} rejected the key or request (HTTP {e.code})"
                    continue
                except Exception as e:
                    self.error = f"Could not reach {name}: {e.__class__.__name__}"
                    continue
                self.provider, self.base, self.key, self.model = name, base, key, model
                self.ready, self.error = True, None
                print(f"AI ready: {name} / {model}")
                return True
            return False

    def allow(self):
        now = time.time()
        self.calls = [t for t in self.calls if now - t < 60]
        if len(self.calls) >= 30:
            return False
        self.calls.append(now)
        return True

    def chat(self, system, user, json_mode=False, max_tokens=1500):
        body = {"model": self.model, "temperature": 0.2, "max_tokens": max_tokens,
                "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}]}
        if json_mode:
            body["response_format"] = {"type": "json_object"}
        if "gpt-oss" in (self.model or ""):
            # Reasoning models can spend the whole token budget thinking; keep it short.
            body["reasoning_effort"] = "low"
        for attempt in range(2):
            try:
                data = call(self.base + "/chat/completions", self.key, body)
            except urllib.error.HTTPError as e:
                if e.code == 400 and ("response_format" in body or "reasoning_effort" in body):
                    body.pop("response_format", None)
                    body.pop("reasoning_effort", None)
                    continue
                raise
            text = (data["choices"][0]["message"].get("content") or "").strip()
            if text:
                return text
        return ""


ai = AI()


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):
        if self.path.startswith("/api/") or (len(args) > 1 and str(args[1])[:1] in "45"):
            sys.stderr.write("%s %s\n" % (self.log_date_time_string(), fmt % args))

    def send_json(self, code, obj):
        data = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def blocked(self):
        # Never serve .env, .git or this script, however the path is written (%2E, backslashes, etc.).
        path = urllib.parse.unquote(self.path.split("?", 1)[0].split("#", 1)[0]).replace("\\", "/")
        parts = [p for p in path.split("/") if p]
        return any(p.startswith(".") for p in parts) or path.lower().endswith((".py", ".pyc"))

    def do_GET(self):
        if self.path.split("?", 1)[0] == "/api/ai/status":
            ok = ai.ensure()
            return self.send_json(200, {"ok": ok, "provider": ai.provider, "model": ai.model, "error": ai.error})
        if self.blocked():
            return self.send_error(403)
        return super().do_GET()

    def do_HEAD(self):
        if self.blocked():
            return self.send_error(403)
        return super().do_HEAD()

    def do_POST(self):
        if self.path.split("?", 1)[0] != "/api/ai":
            return self.send_error(404)
        size = int(self.headers.get("Content-Length") or 0)
        if size <= 0 or size > 16000:
            return self.send_json(413, {"ok": False, "error": "Request too large"})
        try:
            body = json.loads(self.rfile.read(size).decode("utf-8"))
        except Exception:
            return self.send_json(400, {"ok": False, "error": "Bad JSON"})
        if not ai.ensure():
            return self.send_json(503, {"ok": False, "error": ai.error})
        if not ai.allow():
            return self.send_json(429, {"ok": False, "error": "Too many requests, try again in a minute"})
        task = body.get("task")
        try:
            if task == "parse":
                text = str(body.get("text", ""))[:600]
                today = str(body.get("today", ""))
                if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", today):
                    today = time.strftime("%Y-%m-%d")
                weekday = time.strftime("%A", time.strptime(today, "%Y-%m-%d"))
                out = first_json(ai.chat(PARSE_SYSTEM.format(today=today, weekday=weekday), text, json_mode=True))
                return self.send_json(200, {"ok": bool(out), "result": out})
            if task == "summary":
                language = "Hindi" if body.get("lang") == "hi" else "English"
                plan = json.dumps(body.get("plan", {}), ensure_ascii=False)[:6000]
                text = ai.chat(SUMMARY_SYSTEM.format(language=language), plan)
                return self.send_json(200, {"ok": bool(text), "result": {"text": text}})
            return self.send_json(400, {"ok": False, "error": "Unknown task"})
        except urllib.error.HTTPError as e:
            return self.send_json(502, {"ok": False, "error": f"{ai.provider} returned HTTP {e.code}"})
        except Exception as e:
            return self.send_json(502, {"ok": False, "error": f"AI request failed: {e.__class__.__name__}"})


def main():
    port = 5173
    if "--port" in sys.argv:
        port = int(sys.argv[sys.argv.index("--port") + 1])
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"CurioTrail on http://127.0.0.1:{port}  (AI: {'checking .env' if os.path.exists(os.path.join(ROOT, '.env')) else 'no .env, rules only'})")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
