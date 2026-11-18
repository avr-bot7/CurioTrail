// Visit planner ("Ask CurioTrail"): say or type a trip, e.g. "I'm visiting Basohli on 22 November
// with 2 friends, budget 15,000, I like painting", and get the real sessions that run that day nearby,
// what they cost for the group, and what is left of the budget.
//
// How it stays honest:
// - Every suggestion comes from the site's own data (workshops + tradition records). Nothing is invented.
// - Rules read the request instantly. If the AI server (server.py) is running with a key, an AI model
//   reads the request more cleverly and writes a short summary, but only from the plan built here.
// - Voice uses the browser's own speech recognition (Chrome, Edge). Without it, typing still works.
(function () {
  "use strict";
  const A = window.CT_APP;
  if (!A) return;
  const { records, byId, workshops, detectTags, rupees, fmtTime, esc } = A;

  /* ---------- Markup: floating button + dialog ---------- */
  document.body.insertAdjacentHTML("beforeend", `
    <button type="button" class="plan-fab" data-plan-open aria-haspopup="dialog">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
      <span>Plan a visit</span>
    </button>
    <dialog id="planModal" class="modal plan-modal" aria-labelledby="planTitle">
      <div class="plan-body">
        <button class="modal-close" type="button" aria-label="Close" data-plan-close>&times;</button>
        <p class="eyebrow">Ask CurioTrail</p>
        <h2 id="planTitle">Plan a visit</h2>
        <p class="plan-sub">Say or type where you're going, when, how many of you, your budget and what you like. Understands <b>English</b>, <b lang="hi">हिंदी</b> and Hinglish.</p>
        <form class="plan-form" id="planForm">
          <label for="planInput" class="sr-only">Your trip</label>
          <textarea id="planInput" rows="2" maxlength="600" placeholder="I'm visiting Basohli on Saturday with 2 friends. Budget ₹20,000. We like painting."></textarea>
          <div class="plan-actions">
            <div class="plan-voice">
              <button type="button" class="plan-mic" id="planMic" aria-pressed="false">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
                <span>Speak</span>
              </button>
              <div class="plan-lang" role="group" aria-label="Voice language">
                <button type="button" data-voice-lang="en-IN" aria-pressed="true">English</button>
                <button type="button" data-voice-lang="hi-IN" aria-pressed="false" lang="hi">हिंदी</button>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Plan my visit</button>
          </div>
          <p class="plan-hint" id="planHint" aria-live="polite"></p>
        </form>
        <div id="planOut" aria-live="polite"></div>
        <p class="plan-foot" id="planFoot"></p>
      </div>
    </dialog>`);

  const dlg = document.getElementById("planModal");
  const input = document.getElementById("planInput");
  const out = document.getElementById("planOut");
  const hint = document.getElementById("planHint");
  const foot = document.getElementById("planFoot");
  const micBtn = document.getElementById("planMic");

  const open = () => { if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", ""); checkAI(); setTimeout(() => input.focus(), 50); };
  document.addEventListener("click", e => { if (e.target.closest("[data-plan-open]")) open(); });
  dlg.addEventListener("click", e => {
    if (e.target === dlg || e.target.closest("[data-plan-close]")) { stopListening(); dlg.close(); return; }
    // Booking and record popups are handled by app.js; close the planner first so they sit on top.
    if (e.target.closest("[data-book], [data-open]")) { stopListening(); dlg.close(); }
  });
  input.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); plan(); } });
  document.getElementById("planForm").addEventListener("submit", e => { e.preventDefault(); plan(); });

  /* ---------- AI server (optional) ---------- */
  let ai = null; // null = not checked, false = unavailable, object = { provider, model }
  async function checkAI() {
    if (ai !== null) return ai;
    try {
      const r = await fetch("/api/ai/status", { cache: "no-store" });
      const j = r.ok ? await r.json() : null;
      ai = j && j.ok ? j : false;
    } catch (e) { ai = false; }
    foot.textContent = ai
      ? `AI reading and summary: ${ai.provider} · ${ai.model}. Suggestions come only from CurioTrail's listings.`
      : "Suggestions come only from CurioTrail's listings and are worked out on your device.";
    return ai;
  }
  async function askAI(task, payload) {
    if (!(await checkAI())) return null;
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 12000);
    try {
      const r = await fetch("/api/ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ task, ...payload }), signal: ctl.signal });
      const j = await r.json();
      return j.ok ? j.result : null;
    } catch (e) { return null; } finally { clearTimeout(t); }
  }

  /* ---------- Voice (browser speech recognition) ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null, listening = false;
  // Voice language: English (India) or Hindi, picked in the planner; starts from the site's language.
  let voiceLang = document.documentElement.lang === "hi" ? "hi-IN" : "en-IN";
  const langBtns = [...dlg.querySelectorAll("[data-voice-lang]")];
  const syncLang = () => langBtns.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.voiceLang === voiceLang)));
  syncLang();
  langBtns.forEach(b => b.addEventListener("click", () => {
    voiceLang = b.dataset.voiceLang; syncLang();
    input.placeholder = voiceLang === "hi-IN"
      ? "मैं शनिवार को बसोहली जा रहा हूँ, हम तीन लोग हैं, बजट 20000, पेंटिंग पसंद है"
      : "I'm visiting Basohli on Saturday with 2 friends. Budget ₹20,000. We like painting.";
  }));
  if (!SR) { micBtn.disabled = true; micBtn.title = "Voice works in Chrome and Edge"; }
  function stopListening() { if (rec && listening) rec.stop(); }
  micBtn.addEventListener("click", () => {
    if (!SR) return;
    if (listening) { rec.stop(); return; }
    rec = new SR();
    rec.lang = voiceLang;
    rec.interimResults = true;
    rec.continuous = false;
    let finalText = "";
    rec.onstart = () => { listening = true; micBtn.setAttribute("aria-pressed", "true"); micBtn.querySelector("span").textContent = "Listening…"; hint.textContent = voiceLang === "hi-IN" ? "बोलिए… रुकने पर अपने-आप बंद हो जाएगा।" : "Speak now. It stops when you pause."; };
    rec.onresult = ev => {
      let interim = "";
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const t = ev.results[i][0].transcript;
        if (ev.results[i].isFinal) finalText += t; else interim += t;
      }
      input.value = (finalText + " " + interim).trim();
    };
    rec.onerror = ev => { hint.textContent = ev.error === "not-allowed" ? "Microphone permission was blocked. You can type instead." : "Didn't catch that. Try again or type it."; };
    rec.onend = () => {
      listening = false; micBtn.setAttribute("aria-pressed", "false"); micBtn.querySelector("span").textContent = "Speak";
      if (input.value.trim()) { hint.textContent = ""; plan(); }
    };
    rec.start();
  });

  /* ---------- Reading the request (rules, instant) ---------- */
  const NUM = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, a: 1, an: 1,
    "एक": 1, "दो": 2, "तीन": 3, "चार": 4, "पांच": 5, "पाँच": 5, "छह": 6,
    ek: 1, do: 2, teen: 3, char: 4, chaar: 4, paanch: 5, panch: 5, chhe: 6 };
  const HN = "do|teen|char|chaar|paanch|panch|chhe|\\d+";
  const toNum = s => (s in NUM ? NUM[s] : parseInt(s, 10));
  const WEEK = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const WEEK_HI = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
  const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  function parseDate(t) {
    const t0 = today();
    // Hindi words need explicit edges: \b doesn't work for Devanagari ("कल" must not match "कलाकार").
    const hiWord = w => new RegExp(`(?:^|[\\s,.।])${w}(?=$|[\\s,.।])`).test(t);
    if (/day after tomorrow|\bparso(?:n)?\b/.test(t) || hiWord("परसों")) return addDays(t0, 2);
    if (/\btomorrow\b|\bkal\b/.test(t) || hiWord("कल")) return addDays(t0, 1);
    if (/\btoday\b|\baaj\b/.test(t) || hiWord("आज")) return t0;
    let m = t.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s*(?:of\s+)?(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\b/) ||
            t.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+(\d{1,2})(?:st|nd|rd|th)?\b/);
    if (m) {
      const day = +(/\d/.test(m[1]) ? m[1] : m[2]), mon = MONTHS.indexOf(/\d/.test(m[1]) ? m[2] : m[1]);
      let d = new Date(t0.getFullYear(), mon, day);
      if (d < t0) d = new Date(t0.getFullYear() + 1, mon, day);
      return d;
    }
    m = t.match(/\b(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?\b/);
    if (m) {
      const y = m[3] ? (m[3].length === 2 ? 2000 + +m[3] : +m[3]) : t0.getFullYear();
      let d = new Date(y, +m[2] - 1, +m[1]);
      if (!m[3] && d < t0) d = new Date(y + 1, +m[2] - 1, +m[1]);
      return d;
    }
    const wi = WEEK.findIndex(w => new RegExp(`\\b${w}\\b`).test(t));
    const wh = WEEK_HI.findIndex(w => t.includes(w));
    const w = wi >= 0 ? wi : wh;
    if (w >= 0) {
      let diff = (w - t0.getDay() + 7) % 7;
      if (diff === 0) diff = 7; // "Saturday" said on a Saturday means next Saturday
      return addDays(t0, diff);
    }
    return null;
  }

  function parsePeople(t) {
    let m = t.match(/\b(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\s+(?:of us|people|persons|adults|members|travellers|travelers)\b/) ||
            t.match(/\bwe(?:'re| are)\s+(\d+|two|three|four|five|six|seven|eight|nine|ten)\b/) ||
            t.match(/\bfamily of\s+(\d+|two|three|four|five|six|seven|eight)\b/) ||
            t.match(/\bfor\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\b(?!\s*(?:k\b|thousand|rs|rupees|₹|days?|hours?|nights?))/) ||
            t.match(/(\d+|दो|तीन|चार|पांच|पाँच|छह)\s*लोग/);
    if (m) return toNum(m[1]);
    // Hindi / Hinglish: "hum do (dost)" / "हम दो" = the two of us; "teen log" = three people; "main aur do dost" = me + 2.
    m = t.match(new RegExp(`\\bhum\\s+(${HN})\\b`)) || t.match(new RegExp(`\\b(${HN})\\s+log\\b`)) ||
        t.match(/हम\s*(\d+|दो|तीन|चार|पांच|पाँच|छह)/);
    if (m) return toNum(m[1]);
    m = t.match(/(?:मैं|मै)\s*और\s*(?:मेरे\s*)?(\d+|दो|तीन|चार)\s*दोस्त/);
    if (m) return toNum(m[1]) + 1;
    if (/(?:मैं|मै)\s*और\s*(?:मेरी|मेरा|मेरे)\s*(?:पत्नी|पति|दोस्त|माँ|मां|पापा|भाई|बहन|वाइफ)/.test(t)) return 2;
    if (/अकेले|अकेला|अकेली/.test(t)) return 1;
    if (m) return toNum(m[1]);
    m = t.match(new RegExp(`\\b(?:main|mai|me)\\s+(?:aur|or)\\s+(?:mere\\s+)?(${HN})\\s+dost`));
    if (m) return toNum(m[1]) + 1;
    m = t.match(/\b(?:with|me and|i and)\s+(?:my\s+)?(\d+|a|an|one|two|three|four|five|six|seven|eight)\s+(?:friends?|others|people|kids|children|colleagues|classmates|family members)\b/);
    if (m) return toNum(m[1]) + 1;
    if (/\b(?:with|me and|i and)\s+(?:my\s+)?(?:wife|husband|partner|friend|mother|father|mom|dad|mum|sister|brother|son|daughter|girlfriend|boyfriend)\b/.test(t)) return 2;
    if (/\b(?:main|mai)\s+(?:aur|or)\s+(?:meri|mera|mere)\s+(?:wife|biwi|husband|pati|patni|dost|friend|maa|mummy|papa|bhai|behen)\b/.test(t)) return 2;
    m = t.match(/(\d+|दो|तीन|चार)\s*दोस्त/);
    if (m) return toNum(m[1]) + 1;
    if (/\b(alone|solo|myself|just me)\b|अकेले/.test(t)) return 1;
    return null;
  }

  function parseBudget(t) {
    const val = (n, unit) => {
      let v = parseFloat(String(n).replace(/,/g, ""));
      if (/^(k|thousand|हज़ार|हजार)$/.test(unit || "")) v *= 1000;
      if (/^(lakh|lac|लाख)$/.test(unit || "")) v *= 100000;
      return Math.round(v);
    };
    let m = t.match(/(?:₹|rs\.?|inr)\s*([\d,]+(?:\.\d+)?)\s*(k|thousand|lakh|lac)?\b/) ||
            t.match(/(?:budget|बजट)[^\d]{0,15}([\d,]+(?:\.\d+)?)\s*(k|thousand|lakh|lac|हज़ार|हजार|लाख)?/) ||
            t.match(/([\d,]+(?:\.\d+)?)\s*(k|thousand|lakh|lac|हज़ार|हजार|लाख)?\s*(?:₹|rs\b|rupees|inr|रुपये|रुपए)/) ||
            t.match(/\b(\d+(?:\.\d+)?)\s*(k)\b/);
    return m ? val(m[1], m[2]) : null;
  }

  // Places the site knows: tradition places, districts, states and workshop towns.
  const GENERIC = /^(across|village|villages|homes|old city|city|temples|hill villages|fairs|the |old |district|region)/;
  const gaz = [];
  const addPlace = (name, kind, rec) => {
    const n = name.trim().toLowerCase();
    if (n.length < 3 || GENERIC.test(n)) return;
    gaz.push({ name: n, label: name.trim(), kind, district: rec?.district, state: rec?.state });
  };
  records.forEach(r => {
    r.place.split(/,| and | & /).forEach(p => addPlace(p, "place", r));
    if (!/^across/i.test(r.district)) addPlace(r.district, "district", r);
    r.state.split(/,| & /).forEach(s => addPlace(s, "state", { state: s.trim() }));
  });
  workshops.forEach(w => w.place.split(",").forEach(p => addPlace(p, "place", byId[w.record])));
  gaz.sort((a, b) => b.name.length - a.name.length);
  // Hindi spellings of places the site lists, so spoken Hindi finds them too.
  const HINDI_PLACES = {
    "श्रीनगर": "srinagar", "जम्मू": "jammu", "कश्मीर": "jammu & kashmir", "बसोहली": "basohli", "कठुआ": "kathua", "उधमपुर": "udhampur",
    "रामनगर": "ramnagar", "बडगाम": "budgam", "कनिहामा": "kanihama", "पंपोर": "pampore", "पामपोर": "pampore", "किश्तवाड़": "kishtwar",
    "लेह": "leh", "लद्दाख": "ladakh", "कुल्लू": "kullu", "कांगड़ा": "kangra", "चंबा": "chamba", "किन्नौर": "kinnaur", "हिमाचल": "himachal pradesh",
    "पटियाला": "patiala", "अमृतसर": "amritsar", "होशियारपुर": "hoshiarpur", "पंजाब": "punjab", "हरियाणा": "haryana", "पानीपत": "panipat",
    "अल्मोड़ा": "almora", "हरिद्वार": "haridwar", "ऋषिकेश": "rishikesh", "उत्तराखंड": "uttarakhand", "पिथौरागढ़": "pithoragarh",
    "लखनऊ": "lucknow", "वाराणसी": "varanasi", "बनारस": "varanasi", "भदोही": "bhadohi", "आगरा": "agra", "मुरादाबाद": "moradabad",
    "दिल्ली": "delhi", "चंडीगढ़": "chandigarh", "जयपुर": "jaipur", "जोधपुर": "jodhpur", "राजस्थान": "rajasthan", "कच्छ": "kutch",
    "पाटन": "patan", "गुजरात": "gujarat", "पैठण": "paithan", "कोल्हापुर": "kolhapur", "गोवा": "goa", "चंदेरी": "chanderi", "महेश्वर": "maheshwar",
    "बस्तर": "bastar", "कोंडागांव": "kondagaon", "कोलकाता": "kolkata", "बांकुड़ा": "bankura", "पुरी": "puri", "कटक": "cuttack",
    "पटना": "patna", "मधुबनी": "madhubani", "हजारीबाग": "hazaribagh", "मैसूर": "mysuru", "बिदर": "bidar", "कांचीपुरम": "kanchipuram",
    "तंजावुर": "thanjavur", "पोचमपल्ली": "pochampally", "करीमनगर": "karimnagar", "पुडुचेरी": "puducherry",
  };
  function findPlace(t) {
    if (!t) return null;
    let s = " " + t.toLowerCase().replace(/[^\p{L}\p{N}\p{M}&]+/gu, " ") + " ";
    for (const [hi, en] of Object.entries(HINDI_PLACES)) if (s.includes(hi)) s += en + " ";
    return gaz.find(g => s.includes(" " + g.name + " ")) || null;
  }

  // Devanagari digits (०-९) to 0-9, so "बजट २०,०००" reads as 20000.
  const asciiDigits = s => s.replace(/[०-९]/g, d => String("०१२३४५६७८९".indexOf(d)));

  function readRequest(raw) {
    const text = asciiDigits(raw);
    const t = text.toLowerCase();
    return { text, place: findPlace(text), date: parseDate(t), people: parsePeople(t), budget: parseBudget(t), tags: detectTags(text) };
  }

  /* ---------- Building the plan (always from real listings) ---------- */
  const DAYNAME = ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"];
  const fmtLong = d => d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
  const runsOn = w => w.days.map(d => DAYNAME[d]).join(", ");

  function closeness(r, loc) {
    if (!loc) return 1;
    if (loc.kind === "unknown") return 0; // a place we have no listings for
    const has = (a, b) => a && b && a.toLowerCase().includes(b.toLowerCase());
    if (loc.kind !== "state" && (has(r.place, loc.label) || has(r.district, loc.label) || (loc.district && has(r.district, loc.district)))) return 3;
    if (loc.state && has(r.state, loc.state)) return 2;
    return 0;
  }

  function buildPlan(q) {
    const people = q.people || 1;
    const wd = q.date ? q.date.getDay() : null;
    const rows = workshops.filter(w => byId[w.record]).map(w => {
      const r = byId[w.record];
      const fit = r.tags.filter(t => q.tags.includes(t)).length;
      return { w, r, near: closeness(r, q.place), fit, onDay: wd === null || w.days.includes(wd), cost: w.price * people };
    });
    let pool = rows.filter(x => x.near >= (q.place ? 2 : 1));
    const widened = q.place && !pool.length;
    if (widened) pool = rows;
    const sorted = [...pool].sort((a, b) => (b.onDay - a.onDay) || (b.near - a.near) || (b.fit - a.fit) || (a.cost - b.cost));
    const today_ = sorted.filter(x => x.onDay);
    // Suggest from the closest ring that has something on the day (same town/district before same state).
    // If nothing is listed near the place at all, suggest nothing and just show what's bookable elsewhere.
    const best = today_.length ? Math.max(...today_.map(x => x.near)) : 0;
    const picks = [];
    let total = 0;
    for (const x of widened ? [] : today_.filter(x => x.near === best)) {
      if (picks.length >= 2) break;
      if (q.budget && total + x.cost > q.budget) continue;
      picks.push(x); total += x.cost;
    }
    const alsoToday = today_.filter(x => !picks.includes(x));
    const otherDays = widened && today_.length ? [] : sorted.filter(x => !x.onDay).slice(0, 3);
    const others = records
      .map(r => ({ r, near: closeness(r, q.place), fit: r.tags.filter(t => q.tags.includes(t)).length }))
      .filter(x => !picks.some(p => p.r.id === x.r.id))
      .sort((a, b) => (b.near - a.near) || (b.fit - a.fit));
    // Traditions in the same town or district, and (separately) elsewhere in the same state.
    const learn = others.filter(x => x.near >= (q.place ? 3 : 1)).slice(0, 4).map(x => x.r);
    const moreInState = q.place && q.place.state ? others.filter(x => x.near === 2).slice(0, Math.max(0, 4 - learn.length)).map(x => x.r) : [];
    return { people, picks, total, left: q.budget ? q.budget - total : null, alsoToday, otherDays, learn, moreInState, widened };
  }

  /* ---------- Showing it ---------- */
  function summaryText(q, p) {
    const where = q.place ? q.place.label : "your trip";
    const when = q.date ? ` on ${fmtLong(q.date)}` : "";
    if (p.widened) {
      return `There's no listed session near ${where} yet.` +
        (p.learn.length ? ` You can still learn about the traditions there.` : "") +
        (p.alsoToday.length || p.otherDays.length ? ` Below are sessions you can book elsewhere${when}.` : "");
    }
    if (!p.picks.length) {
      if (p.otherDays.length) return `No listed session runs${when} near ${where}. The nearest options run on other days, shown below.`;
      return `We don't have a bookable session near ${where} yet. You can still learn about the traditions below.`;
    }
    const names = p.picks.map(x => x.w.title).join(" and ");
    const money = p.left !== null ? ` That's ${rupees(p.total)} for ${p.people}, leaving ${rupees(p.left)} of your budget for travel and food.` : ` That's ${rupees(p.total)} for ${p.people}.`;
    return `For ${where}${when}, we suggest ${names}.${money}`;
  }

  function render(q, p, aiText) {
    const chips = [
      ["Place", q.place ? q.place.label : "Not given"],
      ["Date", q.date ? fmtLong(q.date) : "Not given"],
      ["People", String(p.people)],
      ["Budget", q.budget ? rupees(q.budget) : "Not given"],
    ];
    if (q.tags.length) chips.push(["Likes", q.tags.map(t => A.tags[t]?.label || t).join(", ")]);
    const sessionCard = (x, pick) => `
      <article class="plan-card${pick ? " is-pick" : ""}">
        <div class="plan-card-main">
          <p class="plan-card-cat">${esc(x.r.category)} · ${esc(x.w.place)}</p>
          <h3>${esc(x.w.title)}</h3>
          <p class="plan-card-meta">with ${esc(x.w.host)} · ${esc(x.w.length)} · ${q.date && x.onDay ? x.w.slots.map(fmtTime).join(" or ") : esc(runsOn(x.w))}</p>
        </div>
        <div class="plan-card-side">
          <p class="plan-cost"><strong>${rupees(x.cost)}</strong>${p.people > 1 ? `<span>${rupees(x.w.price)} × ${p.people}</span>` : ""}</p>
          <button class="btn btn-primary btn-sm" type="button" data-book="${x.w.id}">Book</button>
        </div>
      </article>`;
    const learnItem = r => `
        <button type="button" class="plan-learn-item" data-open="${r.id}"><strong>${esc(r.name)}</strong><span>${esc(r.place)}${r.district && !/^across/i.test(r.district) ? ", " + esc(r.district) : ""}</span></button>`;
    const budgetBar = q.budget ? (() => {
      const pct = Math.min(100, Math.round((p.total / q.budget) * 100));
      return `<div class="plan-budget"><div class="plan-budget-bar"><span style="width:${pct}%"></span></div>
        <p>${rupees(p.total)} of ${rupees(q.budget)} · <strong>${rupees(Math.max(0, p.left))} left</strong> for travel and food</p></div>`;
    })() : "";
    out.innerHTML = `
      <div class="plan-chips">${chips.map(([k, v]) => `<span class="plan-chip"><b>${k}</b> ${esc(v)}</span>`).join("")}</div>
      <p class="plan-summary">${esc(aiText || summaryText(q, p))}</p>
      ${p.picks.length ? `<h4 class="plan-h">Suggested ${q.date ? "for that day" : "sessions"}</h4>${p.picks.map(x => sessionCard(x, true)).join("")}${budgetBar}` : ""}
      ${p.alsoToday.length ? `<h4 class="plan-h">${p.widened ? "Bookable elsewhere" : q.place && q.place.state && p.alsoToday.every(x => x.near < 3) ? `Elsewhere in ${esc(q.place.state)}` : "Also"}${q.date ? " that day" : ""}</h4>${p.alsoToday.slice(0, 3).map(x => sessionCard(x, false)).join("")}` : ""}
      ${!p.picks.length && p.otherDays.length ? `<h4 class="plan-h">On other days</h4>${p.otherDays.map(x => sessionCard(x, false)).join("")}` : ""}
      ${p.learn.length ? `<h4 class="plan-h">Learn about nearby</h4><div class="plan-learn">${p.learn.map(learnItem).join("")}</div>` : ""}
      ${p.moreInState.length ? `<h4 class="plan-h">More from ${esc(q.place.state)}</h4><div class="plan-learn">${p.moreInState.map(learnItem).join("")}</div>` : ""}
      <p class="plan-note">Visiting or watching beyond these sessions happens only if the practitioner allows it.</p>`;
  }

  let runId = 0;
  async function plan() {
    const text = input.value.trim();
    if (!text) { hint.textContent = "Tell us where you're going, or tap Speak."; return; }
    hint.textContent = "";
    const id = ++runId;
    // 1. Instant answer from the rules.
    let q = readRequest(text);
    let p = buildPlan(q);
    render(q, p);
    if (!(await checkAI())) return;
    out.classList.add("is-refining");
    // 2. Let the AI read the request, then rebuild from the same real listings.
    const parsed = await askAI("parse", { text, today: iso(today()) });
    if (id !== runId) return;
    if (parsed) {
      const place = parsed.place
        ? (findPlace(parsed.place) || q.place || { label: String(parsed.place).slice(0, 60), kind: "unknown" })
        : q.place;
      const date = parsed.date && /^\d{4}-\d{2}-\d{2}$/.test(parsed.date) ? new Date(parsed.date + "T00:00:00") : q.date;
      const extra = Array.isArray(parsed.interests) ? detectTags(parsed.interests.join(" ")) : [];
      // The rules are exact for what they can read (weekdays, dates, numbers, known places), so they win;
      // the AI only fills in what the rules missed, e.g. Hinglish phrasing.
      const aiPeople = Number.isInteger(parsed.people) && parsed.people > 0 && parsed.people < 50 ? parsed.people : null;
      const aiBudget = Number.isFinite(parsed.budget_inr) && parsed.budget_inr > 0 ? Math.round(parsed.budget_inr) : null;
      q = { ...q,
            place: q.place || place,
            date: q.date || (isNaN(date) ? null : date),
            people: q.people || aiPeople,
            budget: q.budget || aiBudget,
            tags: [...new Set([...q.tags, ...extra])] };
      p = buildPlan(q);
      render(q, p);
    }
    // 3. A short friendly summary written only from the plan above.
    const facts = {
      requested_place: q.place?.label || null, date: q.date ? fmtLong(q.date) : null, people: p.people, budget: q.budget,
      no_session_near_requested_place: !!p.widened,
      suggested: p.picks.map(x => ({ title: x.w.title, host: x.w.host, where: x.w.place, times: x.w.slots.map(fmtTime), cost: x.cost })),
      also_that_day_elsewhere: p.alsoToday.slice(0, 3).map(x => ({ title: x.w.title, where: x.w.place })), total: p.total, left: p.left,
      traditions_nearby: p.learn.map(r => ({ name: r.name, where: r.place })),
      traditions_elsewhere_in_state: p.moreInState.map(r => ({ name: r.name, where: r.place })),
      other_days: p.picks.length ? [] : p.otherDays.map(x => ({ title: x.w.title, where: x.w.place, runs: runsOn(x.w) })),
    };
    // Answer in Hindi when the request was in Hindi (Devanagari), or when the site is in Hindi.
    const lang = /[ऀ-ॿ]/.test(text) || document.documentElement.lang === "hi" ? "hi" : "en";
    const summary = await askAI("summary", { plan: facts, lang });
    if (id !== runId) return;
    out.classList.remove("is-refining");
    if (summary && typeof summary.text === "string") render(q, p, summary.text.slice(0, 900));
  }
})();
