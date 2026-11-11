(function () {
  "use strict";
  const { records, tags, trails } = window.CT_DATA;
  const byId = Object.fromEntries(records.map(r => [r.id, r]));
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Practitioner overrides (demo, per browser) ---------- */
  const KEY = "curiotrail.permissions.v1";
  let overrides = {};
  try { overrides = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { overrides = {}; }
  const saveOverrides = () => { try { localStorage.setItem(KEY, JSON.stringify(overrides)); } catch (e) { /* storage blocked */ } };

  function eng(r) {
    const o = overrides[r.id] || {};
    return {
      learn: true,
      visit: !!r.engagement.visit,
      observe: o.observe ?? r.engagement.observe,
      participate: o.participate ?? r.engagement.participate,
      contact: !!o.contact,
      note: o.note || r.note || "",
      confirmedByPractitioner: !!overrides[r.id]
    };
  }

  const LEVELS = [
    ["learn", "lv-learn", "Read"],
    ["visit", "lv-visit", "Visit"],
    ["observe", "lv-observe", "Watch"],
    ["participate", "lv-part", "Try"]
  ];
  function levelsHtml(r) {
    const e = eng(r);
    return LEVELS.map(([k, cls, label]) =>
      `<span class="lv ${e[k] ? cls : "lv-off"}" title="${label}: ${e[k] ? "available" : "not confirmed"}">${label}</span>`).join("");
  }

  const ICONS = {
    "Visual art": '<path d="M18 3l3 3-9.5 9.5-3-3z"/><path d="M8.5 12.5c-2 0-3.5 1.5-3.5 3.5 0 1.5-1 2.5-2 3 3 1 7 0 7-3"/>',
    "Textile": '<rect x="6" y="3" width="12" height="4" rx="1"/><rect x="6" y="17" width="12" height="4" rx="1"/><path d="M8 7v10M16 7v10M8 9.5l8 2M8 13.5l8 2"/>',
    "Craft": '<path d="M9 3h6M10 3v3c-3 1.5-5 4-5 7.5C5 18 8 21 12 21s7-3 7-7.5c0-3.5-2-6-5-7.5V3"/><path d="M6.5 11.5h11"/>',
    "Food": '<path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M9 3c-1 1.5 1 2.5 0 4.5M13 3c-1 1.5 1 2.5 0 4.5"/>',
    "Farming": '<path d="M12 21v-8"/><path d="M12 13c-3 0-5-3-5-7 2.5 0 4 1.5 5 3 1-1.5 2.5-3 5-3 0 4-2 7-5 7z"/><path d="M12 18c-2-2-4-2-6-1M12 18c2-2 4-2 6-1"/>',
    "Performance": '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    "Ritual": '<path d="M3 13c0 4 4 6 9 6s9-2 9-6z"/><path d="M12 3c-2 2.5-2 5 0 7 2-2 2-4.5 0-7z"/>'
  };
  const PHOTOS = window.CT_PHOTOS || {};
  function artHtml(r) {
    if (PHOTOS[r.id]) {
      return `<div class="art has-photo" style="--h:${r.hue}" aria-hidden="true">
        <img src="assets/img/${r.id}.webp" alt="" decoding="async">
        <span class="state-tag">${esc(r.state === "Jammu & Kashmir" ? "J&K" : r.state)}</span></div>`;
    }
    return `<div class="art" style="--h:${r.hue}" aria-hidden="true">
      <span class="state-tag">${esc(r.state === "Jammu & Kashmir" ? "J&K" : r.state)}</span>
      <span class="arch"><svg viewBox="0 0 24 24">${ICONS[r.category] || ICONS.Craft}</svg></span></div>`;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Hero: slideshow synced with the rotating headline ---------- */
  const HERO = [
    { id: "papier-mache", word: "painting", line: "In Srinagar, they paint flowers onto boxes made of paper.",
      hiWord: "चित्रकारी", hiLine: "श्रीनगर में कारीगर काग़ज़ से बने डिब्बों पर फूल रंगते हैं।" },
    { id: "basohli-pashmina", word: "weaving", line: "On a Kashmiri handloom, one pashmina shawl can take weeks.",
      hiWord: "बुनाई", hiLine: "कश्मीरी हथकरघे पर एक पश्मीना शॉल में हफ़्तों लग जाते हैं।" },
    { id: "saffron", word: "flowers", line: "In Pampore, families pick saffron before the sun is up.",
      hiWord: "फूल", hiLine: "पंपोर में परिवार सूरज निकलने से पहले केसर चुनते हैं।" },
    { id: "sozni", word: "embroidery", line: "A single Sozni shawl can hold months of needlework.",
      hiWord: "कढ़ाई", hiLine: "एक सोज़नी शॉल में महीनों की सुई-कारी होती है।" },
    { id: "dogra-dham", word: "cheese", line: "Ramnagar makes kalari — a cheese you fry, not melt.",
      hiWord: "पनीर", hiLine: "रामनगर की कलाड़ी — ऐसा पनीर जिसे पिघलाते नहीं, तलते हैं।" },
    { id: "ganga-aarti", word: "ritual", line: "In Haridwar, the river is offered fire every evening.",
      hiWord: "अनुष्ठान", hiLine: "हरिद्वार में हर शाम गंगा को दीपों की आरती दी जाती है।" }
  ];
  const isHi = () => document.documentElement.lang === "hi";
  function applyHeroLang() {
    const h = HERO[cur];
    $("#htPre").textContent = isHi() ? "" : "Into ";
    $("#htPost").textContent = isHi() ? " पसंद है?" : "?";
    $("#swapWord").textContent = isHi() ? h.hiWord : h.word;
    $("#swapLine").textContent = isHi() ? h.hiLine : h.line;
  }
  const DUR = 6500;
  const media = $("#heroMedia"), prog = $("#heroProgress");
  media.innerHTML = HERO.map((h, i) => `<div class="slide${i === 0 ? " is-active" : ""}"><img src="assets/img/${h.id}.webp" alt="" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async"></div>`).join("");
  prog.innerHTML = HERO.map((h, i) => `<button type="button" role="tab" aria-label="Show ${esc(byId[h.id].name)}" style="--dur:${DUR}ms"></button>`).join("");
  const slides = [...media.children], bars = [...prog.children];
  let cur = 0, timer;

  function swapText(el, text) {
    if (el.textContent === text) return;
    if (reduceMotion) { el.textContent = text; return; }
    el.classList.add("out");
    setTimeout(() => { el.textContent = text; el.classList.remove("out"); }, 230);
  }
  function showSlide(n) {
    cur = (n + HERO.length) % HERO.length;
    const h = HERO[cur], r = byId[h.id];
    slides.forEach((s, i) => s.classList.toggle("is-active", i === cur));
    bars.forEach((b, i) => { b.classList.remove("is-active"); b.classList.toggle("done", i < cur); });
    void prog.offsetWidth; // restart the fill animation
    bars[cur].classList.add("is-active");
    swapText($("#swapWord"), isHi() ? h.hiWord : h.word);
    swapText($("#swapLine"), isHi() ? h.hiLine : h.line);
    $("#nsName").textContent = r.name;
    $("#nsPlace").textContent = `${r.place}, ${r.state === "Jammu & Kashmir" ? "J&K" : r.state}`;
    clearTimeout(timer);
    timer = setTimeout(() => showSlide(cur + 1), DUR);
  }
  prog.addEventListener("click", e => { const i = bars.indexOf(e.target.closest("button")); if (i > -1) showSlide(i); });
  $("#nowShowing").addEventListener("click", () => openRecord(HERO[cur].id));
  document.addEventListener("visibilitychange", () => { if (document.hidden) clearTimeout(timer); else showSlide(cur); });
  showSlide(0);

  // Gentle pointer parallax on the hero photo (desktop / big screens only)
  if (!reduceMotion && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let tx = 0, ty = 0, x = 0, y = 0;
    $(".hero").addEventListener("pointermove", e => {
      tx = (e.clientX / innerWidth - .5) * -24; ty = (e.clientY / innerHeight - .5) * -16;
    });
    (function loop() { x += (tx - x) * .06; y += (ty - y) * .06; media.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`; requestAnimationFrame(loop); })();
  }

  /* ---------- Decorative trail art: a route through each section's empty bands, travelled by a vehicle ---------- */
  const TA_ICONS = { brush: ICONS["Visual art"], spool: ICONS.Textile, vase: ICONS.Craft, bowl: ICONS.Food, crocus: ICONS.Farming, music: ICONS.Performance, diya: ICONS.Ritual };
  const TA_KEYS = Object.keys(TA_ICONS);
  const PLACES = ["Basohli", "Srinagar", "Pampore", "Kanihama", "Ramnagar", "Udhampur", "Patnitop", "Bhaderwah", "Kishtwar", "Anantnag",
    "Kathua", "Jammu", "Sopore", "Budgam", "Amritsar", "Jandiala Guru", "Hoshiarpur", "Almora", "Haridwar", "Rishikesh"];
  // Vehicles face right (+x); the animation mirrors them when they travel left.
  const VEHICLES = {
    plane: '<path class="v-fill" d="M22 12 15.5 10.4 11 3.5H9.3l2.2 6.9H6.2L4.3 7.8H3l1 4.2-1 4.2h1.3l1.9-2.6h5.3L9.3 20.5H11l4.5-6.9z"/>',
    bus: '<rect class="v-fill" x="1.5" y="6" width="20" height="10.5" rx="2.5"/><path class="v-cut" d="M4 8.5h3.2v3H4zM8.6 8.5h3.2v3H8.6zM13.2 8.5h3.2v3h-3.2zM17.8 8.5h2.2v4.5h-2.2z"/><circle class="v-fill" cx="6" cy="17.5" r="2"/><circle class="v-fill" cx="16.5" cy="17.5" r="2"/>',
    shikara: '<path class="v-fill" d="M1 13.5h22c-1.6 3.4-5.4 5-11 5s-9.4-1.6-11-5z"/><path class="v-line" d="M5 13.5V8.2h12.5v5.3M4 8.2 11.2 5l7.3 3.2M2.5 13.2 0.5 10.5"/>'
  };
  const SECTION_VEHICLE = { match: "plane", explore: "bus", trails: "shikara", practitioners: "plane" };
  const seeded = s => () => (s = (s * 16807) % 2147483647) / 2147483647;
  const trailRuns = new Map();

  function buildTrail(sec, k) {
    sec.querySelector(":scope > .trail-art")?.remove();
    trailRuns.delete(sec);
    if (innerWidth < 860) return;
    const W = sec.clientWidth, H = sec.clientHeight, R = seeded(1009 + k * 7919);
    if (W < 10 || H < 10) return;

    // Content boxes (with breathing room) that nothing may touch.
    const sr = sec.getBoundingClientRect();
    const boxes = [...sec.querySelectorAll(".head, .match-box, .chips, .match-card, .empty, .filters, .count-bar, .card, .trail, .rules, .pract-card, .pract-grid > div")]
      .map(e => { const r = e.getBoundingClientRect(); return [r.left - sr.left - 32, r.top - sr.top - 32, r.right - sr.left + 32, r.bottom - sr.top + 32]; })
      .filter(b => b[2] - b[0] > 60);
    const hits = (list, cx, cy, w, h) => list.some(([a, b, c, e]) => cx + w / 2 > a && cx - w / 2 < c && cy + h / 2 > b && cy - h / 2 < e);
    const taken = [];
    const free = (cx, cy, w, h) => cx - w / 2 > 16 && cx + w / 2 < W - 16 && cy - h / 2 > 16 && cy + h / 2 < H - 16 && !hits(boxes, cx, cy, w, h) && !hits(taken, cx, cy, w, h);
    const take = (cx, cy, w, h) => taken.push([cx - w / 2 - 10, cy - h / 2 - 10, cx + w / 2 + 10, cy + h / 2 + 10]);

    // 1) Horizontal bands that are completely empty across the full width.
    const bands = [];
    let startY = null;
    for (let y = 0; y <= H; y += 6) {
      const clear = y < H && !boxes.some(([, b, , e]) => y > b && y < e);
      if (clear && startY === null) startY = y;
      if (!clear && startY !== null) { if (y - startY >= 70) bands.push([startY, y]); startY = null; }
    }
    if (!bands.length) return;
    const maxRows = Math.max(2, Math.round(H / 600));
    const use = bands.length <= maxRows ? bands : Array.from({ length: maxRows }, (_, i) => bands[Math.round(i * (bands.length - 1) / Math.max(1, maxRows - 1))]);

    // 2) Snake through the chosen bands; U-turns happen off-screen beyond the edges.
    const startRight = k % 2 === 1;
    const bandY = ([a, b]) => (a + b) / 2 + (R() - .5) * Math.max(0, (b - a) - 50) * .8;
    let x = startRight ? W + 80 : -80, y = bandY(use[0]), d = `M${x} ${y.toFixed(0)}`;
    use.forEach((band, r) => {
      const ltr = (r + (startRight ? 1 : 0)) % 2 === 0, segs = Math.max(2, Math.round(W / 480));
      for (let s = 1; s <= segs; s++) {
        const nx = ltr ? -80 + (W + 160) * s / segs : W + 80 - (W + 160) * s / segs, ny = bandY(band);
        d += ` C${(x + (nx - x) * .45).toFixed(0)} ${y.toFixed(0)}, ${(nx - (nx - x) * .45).toFixed(0)} ${ny.toFixed(0)}, ${nx.toFixed(0)} ${ny.toFixed(0)}`;
        x = nx; y = ny;
      }
      if (r < use.length - 1) {
        const ny = bandY(use[r + 1]), ex = ltr ? W + 260 : -260;
        d += ` C${ex} ${y.toFixed(0)}, ${ex} ${ny.toFixed(0)}, ${x} ${ny.toFixed(0)}`;
        y = ny;
      }
    });

    const veh = VEHICLES[SECTION_VEHICLE[sec.id] || "shikara"];
    sec.insertAdjacentHTML("afterbegin", `
      <svg class="trail-art" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" aria-hidden="true" focusable="false">
        <path class="ta-path" d="${d}"/><path class="ta-march" d="${d}"/><path class="ta-contrail" d="${d}"/>
        <g class="ta-layer"></g>
        <g class="ta-vehicle"><g transform="translate(-12 -12)">${veh}</g></g>
      </svg>`);
    const svg = sec.firstElementChild, path = svg.querySelector(".ta-path"), layer = svg.querySelector(".ta-layer");
    const len = path.getTotalLength();
    const add = html => layer.insertAdjacentHTML("beforeend", html);

    // 3) A few stops and craft icons along the visible parts of the route — sparse on purpose.
    let place = Math.floor(R() * PLACES.length), icon = Math.floor(R() * TA_KEYS.length), lastStop = -999, lastIcon = -999, n = 0;
    for (let at = 60; at < len - 40; at += 24) {
      const p = path.getPointAtLength(at);
      if (at - lastStop > 560) {
        const right = p.x < W - 180, below = n % 2 === 1, ty = below ? 22 : -12, lx = right ? p.x + 62 : p.x - 62;
        if (free(p.x, p.y, 26, 26) && free(lx, p.y + ty - 5, 112, 26)) {
          add(`<g class="ta-stop" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})">
            <circle r="9" class="ta-ring" style="animation-delay:${(-n * 1.3).toFixed(1)}s"/><circle r="3.5"/>
            <text x="${right ? 14 : -14}" y="${ty}" text-anchor="${right ? "start" : "end"}">${PLACES[place++ % PLACES.length]}</text></g>`);
          take(p.x, p.y, 26, 26); take(lx, p.y + ty - 5, 112, 26);
          lastStop = at; n++; continue;
        }
      }
      if (at - lastIcon > 760 && at - lastStop > 200) {
        const dy = (n % 2 ? -1 : 1) * 52;
        if (free(p.x, p.y + dy, 46, 56) && free(p.x, p.y + dy / 2, 10, Math.abs(dy) - 30)) {
          add(`<g transform="translate(${p.x.toFixed(1)} ${(p.y + dy).toFixed(1)})"><g class="ta-float" style="animation-delay:${(-icon * 1.7).toFixed(1)}s">
            <line x1="0" y1="${dy > 0 ? -19 : 19}" x2="0" y2="${dy > 0 ? -dy + 6 : -dy - 6}" class="ta-tether"/>
            <path d="M-15 19 V-4 A15 15 0 0 1 15 -4 V19 Z" class="ta-arch"/>
            <g transform="translate(-9 -7) scale(.75)" class="ta-icon">${TA_ICONS[TA_KEYS[icon++ % TA_KEYS.length]]}</g></g></g>`);
          take(p.x, p.y + dy, 46, 56);
          lastIcon = at;
        }
      }
    }

    // 4) At most one compass, and a light sprinkle of sparkles, only where nothing else is.
    for (let t = 0; t < 60; t++) {
      const cx = 70 + R() * (W - 140), cy = 70 + R() * (H - 140);
      if (free(cx, cy, 84, 94)) {
        add(`<g class="ta-compass" transform="translate(${cx.toFixed(0)} ${cy.toFixed(0)})"><g class="ta-spin">
          <circle r="22" class="ta-c-ring"/><circle r="15" class="ta-c-ring thin"/>
          <path d="M0 -26 L4 0 L0 26 L-4 0Z" class="ta-c-needle"/><path d="M-26 0 L0 -3 L26 0 L0 3Z" class="ta-c-needle soft"/></g>
          <text y="-31" class="ta-c-n">N</text></g>`);
        take(cx, cy, 84, 94); break;
      }
    }
    for (let t = 0, c = 0, want = Math.max(2, Math.round(W * H / 420000)); t < 100 && c < want; t++) {
      const cx = 30 + R() * (W - 60), cy = 30 + R() * (H - 60);
      if (free(cx, cy, 40, 40)) {
        const s = 3 + R() * 3;
        add(`<path class="ta-spark" style="animation-delay:${(-R() * 6).toFixed(1)}s" transform="translate(${cx.toFixed(0)} ${cy.toFixed(0)})" d="M0 ${-s} Q0 0 ${s} 0 Q0 0 0 ${s} Q0 0 ${-s} 0 Q0 0 0 ${-s}Z"/>`);
        take(cx, cy, 120, 120); c++;
      }
    }

    trailRuns.set(sec, { path, len, veh: svg.querySelector(".ta-vehicle"), trail: svg.querySelector(".ta-contrail"), pos: R() * len, visible: false });
    trailIO.observe(sec);
  }

  // Vehicle animation: only runs for sections on screen; mirrors to face its direction of travel.
  const SPEED = 75, TAIL = 150;
  const trailIO = new IntersectionObserver(es => es.forEach(e => { const t = trailRuns.get(e.target); if (t) t.visible = e.isIntersecting; }));
  let lastT = performance.now();
  function driveTrails(now) {
    const dt = Math.min(.05, (now - lastT) / 1000); lastT = now;
    trailRuns.forEach(t => {
      if (!t.visible) return;
      t.pos = (t.pos + SPEED * dt) % t.len;
      const p = t.path.getPointAtLength(t.pos), q = t.path.getPointAtLength(Math.min(t.len, t.pos + 3));
      const dx = q.x - p.x, dy = q.y - p.y, f = dx < 0 ? -1 : 1;
      const a = Math.max(-35, Math.min(35, Math.atan2(dy, Math.abs(dx) || .001) * 180 / Math.PI));
      t.veh.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) scale(${f} 1) rotate(${a.toFixed(1)})`);
      t.trail.style.strokeDasharray = `0 ${Math.max(0, t.pos - TAIL).toFixed(1)} ${Math.min(TAIL, t.pos).toFixed(1)} ${t.len}`;
    });
    requestAnimationFrame(driveTrails);
  }
  if (!reduceMotion) requestAnimationFrame(driveTrails);

  const trailHosts = [...document.querySelectorAll("[data-trail]")];
  const trailTimers = new Map();
  const queueTrail = (sec, k) => { clearTimeout(trailTimers.get(sec)); trailTimers.set(sec, setTimeout(() => buildTrail(sec, k), 250)); };
  const ro = new ResizeObserver(entries => entries.forEach(en => queueTrail(en.target, trailHosts.indexOf(en.target))));
  trailHosts.forEach(sec => ro.observe(sec));
  // Content shifts once reveals settle and fonts load; redraw so items stay in the gaps.
  document.fonts?.ready.then(() => trailHosts.forEach(queueTrail));
  setTimeout(() => trailHosts.forEach(queueTrail), 1600);

  /* ---------- Marquee ---------- */
  const names = records.map(r => `<span>${esc(r.name)}</span>`).join("");
  $("#marquee").innerHTML = names + names;

  /* ---------- Nav state + statement parallax ---------- */
  const nav = $("#nav"), stBg = $(".statement-bg"), stSec = $(".statement");
  function onScroll() {
    nav.classList.toggle("solid", scrollY > innerHeight * .75);
    if (!reduceMotion && stBg) {
      const r = stSec.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) stBg.style.transform = `translate3d(0, ${((r.top + r.height / 2 - innerHeight / 2) * -.12).toFixed(1)}px, 0)`;
    }
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal + count-up ---------- */
  function countUp(el) {
    const to = +el.dataset.count;
    if (reduceMotion || to === 0) { el.textContent = to; return; }
    const t0 = performance.now(), d = 1400;
    (function tick(t) { const p = Math.min(1, (t - t0) / d); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(tick); })(t0);
  }
  document.querySelectorAll(".rules [data-reveal]").forEach((el, i) => el.style.setProperty("--i", i));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    io.unobserve(en.target);
  }), { threshold: .15, rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));

  // Stats: count up on first view, and again only after the visitor has scrolled
  // well away (more than a screen beyond it) and come back — not on small scroll jiggles.
  const statsEl = $(".stats"), counters = [...document.querySelectorAll("[data-count]")];
  let statsArmed = true;
  addEventListener("scroll", () => {
    const r = statsEl.getBoundingClientRect();
    if (r.bottom < -innerHeight || r.top > innerHeight * 2) {
      if (!statsArmed) counters.forEach(el => { el.textContent = 0; });
      statsArmed = true;
    }
  }, { passive: true });
  new IntersectionObserver(([en]) => {
    if (en.isIntersecting && statsArmed) { statsArmed = false; counters.forEach(countUp); }
  }, { threshold: .4 }).observe(statsEl);

  /* ---------- Explore filters ---------- */
  const fState = $("#fState"), fDistrict = $("#fDistrict"), fCategory = $("#fCategory"), fEngage = $("#fEngage"), fSearch = $("#fSearch");
  const uniq = arr => [...new Set(arr)].sort();
  const opts = (list, allLabel) => `<option value="">${allLabel}</option>` + list.map(v => `<option>${esc(v)}</option>`).join("");

  fState.innerHTML = opts(uniq(records.map(r => r.state)), "All states");
  fCategory.innerHTML = opts(uniq(records.map(r => r.category)), "All categories");
  function fillDistricts() {
    const list = records.filter(r => !fState.value || r.state === fState.value).map(r => r.district);
    fDistrict.innerHTML = opts(uniq(list), "All districts");
  }
  fillDistricts();

  function renderGrid() {
    const q = fSearch.value.trim().toLowerCase();
    const list = records.filter(r =>
      (!fState.value || r.state === fState.value) &&
      (!fDistrict.value || r.district === fDistrict.value) &&
      (!fCategory.value || r.category === fCategory.value) &&
      (!fEngage.value || eng(r)[fEngage.value]) &&
      (!q || [r.name, r.place, r.district, r.state, r.category, r.hook].join(" ").toLowerCase().includes(q)));
    $("#count").textContent = list.length;
    $("#grid").innerHTML = list.length ? list.map((r, i) => `
      <button class="card" style="--i:${i}" data-open="${r.id}" aria-label="Open ${esc(r.name)}">
        ${artHtml(r)}
        <div class="card-body">
          <span class="card-cat">${esc(r.category)}</span>
          <h3>${esc(r.name)}</h3>
          <span class="card-place"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>${esc(r.place)}, ${esc(r.district)}</span>
          <p class="card-hook">${esc(r.hook)}</p>
          <div class="levels">${levelsHtml(r)}</div>
        </div>
      </button>`).join("")
      : `<p class="empty">Nothing matches those filters. Try loosening one.</p>`;
  }
  fState.addEventListener("change", () => { fillDistricts(); renderGrid(); });
  [fDistrict, fCategory, fEngage].forEach(el => el.addEventListener("change", renderGrid));
  fSearch.addEventListener("input", renderGrid);
  renderGrid();

  /* ---------- Curiosity Match ---------- */
  const CHIPS = ["Painting", "Cooking & food", "Weaving & textiles", "Music & dance", "Woodwork", "Metalwork", "Spiritual", "Farming & nature", "History"];
  $("#matchChips").innerHTML = CHIPS.map(c => `<button type="button" class="chip" aria-pressed="false">${c}</button>`).join("");

  function detectTags(text) {
    const t = " " + text.toLowerCase();
    return Object.keys(tags).filter(k => tags[k].words.some(w => t.includes(w)));
  }

  function runMatch(text) {
    const out = $("#matchResults");
    if (!text.trim()) { out.innerHTML = ""; return; }
    const found = detectTags(text);
    let scored = records.map(r => {
      let s = 0; const hit = [];
      r.tags.forEach((t, i) => { if (found.includes(t)) { s += i === 0 ? 1.5 : 1; hit.push(t); } });
      return { r, s, hit };
    }).filter(x => x.s > 0);

    // Fallback: plain text search over records
    if (!scored.length) {
      const q = text.toLowerCase();
      scored = records.filter(r => [r.name, r.place, r.hook, r.category].join(" ").toLowerCase().includes(q))
        .map(r => ({ r, s: 1, hit: [] }));
    }
    scored.sort((a, b) => b.s - a.s || (a.r.state === "Jammu & Kashmir" ? -1 : 1));
    const top = scored.slice(0, 6);

    if (!top.length) {
      out.innerHTML = `<p class="empty">We don't have a match for that yet. Try words like <b>painting</b>, <b>cooking</b>, <b>weaving</b>, <b>music</b> or <b>yoga</b>.</p>`;
      return;
    }
    const labels = found.map(k => tags[k].label.toLowerCase());
    out.innerHTML = `
      <p class="match-intro">${labels.length ? `Sounds like you&rsquo;re into <b>${esc(labels.join(" and "))}</b>. ` : ""}Here&rsquo;s what fits. A match means the interest lines up &mdash; not that the traditions share a history.</p>
      <div class="match-list">${top.map(({ r, s, hit }, i) => {
        const pct = Math.min(97, Math.round(52 + s * 14));
        const why = hit.length ? `Fits your interest in ${hit.map(h => tags[h].label.toLowerCase()).join(" and ")}. ` : "";
        return `<button class="match-card" style="--i:${i};--fit:${pct}%" data-open="${r.id}">
          ${artHtml(r)}
          <div>
            <span class="score">${pct}% fit</span>
            <h3>${esc(r.name)}</h3>
            <span class="card-place">${esc(r.place)}, ${esc(r.state)}</span>
            <p class="match-why">${esc(why + r.hook)}</p>
            <div class="levels">${levelsHtml(r)}</div>
          </div></button>`;
      }).join("")}</div>`;
  }

  $("#matchForm").addEventListener("submit", e => { e.preventDefault(); runMatch($("#matchInput").value); });
  $("#matchChips").addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === b ? "true" : "false"));
    $("#matchInput").value = "I like " + b.textContent.toLowerCase();
    runMatch(b.textContent);
  });

  /* ---------- Trails ---------- */
  $("#trailList").innerHTML = trails.map(t => `
    <article class="trail">
      <span class="mode">${esc(t.mode)}</span>
      <h3>${esc(t.title)}</h3>
      <p class="region">${esc(t.region)} · ${t.stops.length} stops</p>
      <p>${esc(t.blurb)}</p>
      <ol class="stops">${t.stops.map(id => byId[id]).filter(Boolean).map(r =>
        `<li><button data-open="${r.id}">${esc(r.name)}</button><small>${esc(r.place)}</small></li>`).join("")}</ol>
    </article>`).join("");

  /* ---------- Behind the Practice modal ---------- */
  const modal = $("#recordModal");
  function openRecord(id) {
    const r = byId[id]; if (!r) return;
    const e = eng(r);
    const row = (label, ok, yes, no) =>
      `<div class="engage-row"><span>${label}</span><span class="st ${ok ? "st-yes" : "st-no"}">${ok ? yes : no}</span></div>`;
    $("#modalBody").innerHTML = `
      <button class="modal-close" aria-label="Close" data-close>&times;</button>
      ${artHtml(r)}
      <div class="m-head">
        <span class="card-cat">${esc(r.category)} · Behind the Practice</span>
        <h2 id="mTitle">${esc(r.name)}</h2>
        <span class="hi" lang="hi">${esc(r.nameHi)}</span>
        <p class="card-place">${esc(r.place)}, ${esc(r.district)} district, ${esc(r.state)}</p>
        <p class="m-hook">${esc(r.hook)}</p>
      </div>
      <div class="m-cols">
        <div>
          <h4>What people do</h4><p>${esc(r.does)}</p>
          <h4>Process</h4><ol class="steps">${r.process.map(p => `<li>${esc(p)}</li>`).join("")}</ol>
          <h4>Materials &amp; tools</h4><div class="mats">${r.materials.map(m => `<span>${esc(m)}</span>`).join("")}</div>
          <h4>Cultural context</h4><p>${esc(r.context)}</p>
        </div>
        <div>
          <h4>How you can engage</h4>
          <div class="engage">
            ${row("Read about it", true, "Open to all", "")}
            ${row("Visit the place", e.visit, "Public place", "Not listed")}
            ${row("Watch the work", e.observe, "Confirmed", "Not confirmed yet")}
            ${row("Try it yourself", e.participate, "Confirmed", "Not confirmed yet")}
            ${e.contact ? row("Contact practitioner", true, "Allowed", "") : ""}
            <p class="engage-note">${e.note ? esc(e.note) + " " : ""}${e.confirmedByPractitioner ? "Set by the practitioner (demo)." : (!e.participate ? "Nobody has confirmed a session yet, so we won't pretend there is one." : "")}</p>
          </div>
          <h4>Carried by</h4><p>${esc(r.community)}</p>
          <h4>Sources</h4>
          <ul class="m-meta">${r.sources.map(s => `<li>${esc(s)}</li>`).join("")}<li>Last reviewed: ${esc(r.reviewed)}</li></ul>
        </div>
      </div>`;
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
  }
  document.addEventListener("click", e => {
    const o = e.target.closest("[data-open]");
    if (o) { openRecord(o.dataset.open); return; }
    if (e.target.closest("[data-close]") || e.target === modal) modal.close();
  });

  /* ---------- Practitioner panel ---------- */
  const pRecord = $("#pRecord");
  pRecord.innerHTML = records.map(r => `<option value="${r.id}">${esc(r.name)} — ${esc(r.place)}</option>`).join("");
  function loadPract() {
    const r = byId[pRecord.value], e = eng(r);
    $("#pObserve").checked = !!e.observe;
    $("#pParticipate").checked = !!e.participate;
    $("#pContact").checked = !!e.contact;
    $("#pNote").value = (overrides[r.id] || {}).note || "";
    $("#pMsg").textContent = "";
  }
  pRecord.addEventListener("change", loadPract);
  loadPract();
  $("#practForm").addEventListener("submit", e => {
    e.preventDefault();
    const r = byId[pRecord.value];
    overrides[r.id] = { observe: $("#pObserve").checked, participate: $("#pParticipate").checked, contact: $("#pContact").checked, note: $("#pNote").value.trim() };
    saveOverrides(); renderGrid(); runMatch($("#matchInput").value);
    $("#pMsg").textContent = `Saved. "${r.name}" now shows your permissions across CurioTrail.`;
  });
  $("#pReset").addEventListener("click", () => {
    overrides = {}; saveOverrides(); loadPract(); renderGrid(); runMatch($("#matchInput").value);
    $("#pMsg").textContent = "All demo permissions reset.";
  });

  /* ---------- Language toggle (UI labels) ---------- */
  const HI = {
    ticker: "डेमो संग्रह · अवलोकन और भागीदारी केवल तभी दिखाई जाती है जब कलाकार पुष्टि करें · कलाकार अपनी जानकारी जोड़ या सुधार सकते हैं ·",
    navMatch: "रुचि मिलान", navExplore: "खोजें", navTrails: "विरासत यात्राएँ", navPract: "कलाकारों के लिए", navAbout: "परिचय",
    eyebrow: "डिजिटल विरासत · जम्मू-कश्मीर · पंजाब · उत्तराखंड",
    h1a: "अपनी जिज्ञासा का पीछा करें।", h1b: "जीवंत संस्कृति खोजें।",
    lede: "बताइए आपको क्या पसंद है — चित्रकारी, खाना बनाना, संगीत, हस्तकला। CurioTrail उसे असली सांस्कृतिक परंपराओं से जोड़ता है, उनके पीछे के लोग और प्रक्रिया दिखाता है, और ईमानदारी से बताता है कि आप कैसे जुड़ सकते हैं।",
    nowShowing: "अभी दिख रहा है", heroBody: "CurioTrail आपकी पसंद से शुरू करता है और आपको उन लोगों तक ले जाता है जो पीढ़ियों से यह काम कर रहे हैं — काम कैसे होता है, कहाँ होता है, और क्या आप सच में देखने आ सकते हैं।", ctaMatch: "मेरे लिए खोजें", ctaExplore: "सभी 18 परंपराएँ देखें", navMatch: "मिलान", navExplore: "परंपराएँ", navTrails: "यात्राएँ", navPract: "कारीगरों के लिए",
    statRecords: "परंपरा रिकॉर्ड", statJK: "जम्मू-कश्मीर से", statPlaces: "स्थान", statTrails: "विरासत यात्राएँ",
    matchTitle: "बताइए, आपको क्या पसंद है।", matchSub: "जैसे किसी दोस्त से कहते हैं, वैसे ही लिखिए।", matchBtn: "खोजें",
    exploreTitle: "परंपराएँ खोजें", exploreSub: "क्षेत्र चुनें, फिर किसी भी रिकॉर्ड को खोलकर परंपरा के पीछे की कहानी देखें।",
    fState: "राज्य / केंद्रशासित प्रदेश", fDistrict: "ज़िला", fCategory: "श्रेणी", fEngage: "मैं चाहता/चाहती हूँ", fSearch: "खोज",
    allPractices: "सभी परंपराएँ", trailsTitle: "विरासत यात्राएँ",
    trailsSub: "<b>आस-पास खोजें</b> एक क्षेत्र में रखता है। <b>संस्कृति से खोजें</b> एक रुचि के ज़रिए क्षेत्रों को जोड़ता है। हर पड़ाव की पहुँच और समय अलग से जाँचें।",
    practTitle: "आपकी कला, आपका फ़ैसला।", practSub: "कारीगर, रसोइये और कलाकार तय करते हैं कि आगंतुक कैसे जुड़ें। आपकी पुष्टि के बिना 'जानें' से आगे कुछ नहीं दिखाया जाता।"
  };
  const EN = {};
  document.querySelectorAll("[data-i18n]").forEach(el => { if (!(el.dataset.i18n in EN)) EN[el.dataset.i18n] = el.innerHTML; });
  let lang = "en";
  $("#langBtn").addEventListener("click", () => {
    lang = lang === "en" ? "hi" : "en";
    const dict = lang === "hi" ? HI : EN;
    document.querySelectorAll("[data-i18n]").forEach(el => { const v = dict[el.dataset.i18n]; if (v) el.innerHTML = v; });
    document.documentElement.lang = lang;
    $("#langBtn").textContent = lang === "en" ? "हिंदी" : "English";
    applyHeroLang();
    $("#matchInput").placeholder = lang === "en" ? "I like painting and fiddly handwork" : "जैसे: मुझे चित्रकारी और बारीक हस्तकला पसंद है";
  });
})();
