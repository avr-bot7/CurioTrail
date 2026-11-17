// Chinar branches that sway in the right margin, with a few leaves drifting down.
// Rendered with three.js on one fixed, click-through canvas.
import * as THREE from "./assets/vendor/three.module.min.js";

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canvas = document.createElement("canvas");
canvas.className = "leaf-layer";
canvas.setAttribute("aria-hidden", "true");
document.body.appendChild(canvas);

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
} catch (e) {
  canvas.remove(); // no WebGL: the page works the same without the leaves
}

if (renderer) {
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(0, 1, 0, -1, -2000, 2000);
  scene.add(new THREE.HemisphereLight(0xfff4e0, 0x5a3020, 2.2));
  const sun = new THREE.DirectionalLight(0xffe2b0, 1.6);
  sun.position.set(-0.4, 0.8, 1);
  scene.add(sun);

  /* ---------- Leaf texture: a five-lobed chinar leaf drawn on a canvas ---------- */
  const PALETTE = [
    ["#e7893a", "#c4501b", "#7e2a10"],
    ["#d9572b", "#a8321f", "#5e1a10"],
    ["#f0b357", "#d98a2a", "#8a4a12"],
    ["#e9c46a", "#c9932e", "#6f4a14"],
    ["#c9603a", "#8f2a1a", "#4a140c"]
  ];
  function leafTexture([light, mid, dark]) {
    const S = 256, c = document.createElement("canvas");
    c.width = c.height = S;
    const g = c.getContext("2d");
    const cx = 128, cy = 140, R = 112;
    const P = (a, r) => [cx + r * Math.sin(a), cy - r * Math.cos(a)];
    const tips = [-1.4, -0.74, 0, 0.74, 1.4], lens = [0.6, 0.86, 1, 0.86, 0.6];
    const path = new Path2D();
    path.moveTo(...P(-2.25, 0.3 * R));
    let prevA = -2.25, prevR = 0.3 * R;
    tips.forEach((a, i) => {
      const r = lens[i] * R;
      // a slightly bulged edge up to the pointed lobe tip
      path.quadraticCurveTo(...P((prevA + a) / 2 - 0.12, (prevR + r) / 2 * 1.08), ...P(a, r));
      const na = i < tips.length - 1 ? (a + tips[i + 1]) / 2 : 2.25;
      const nr = i < tips.length - 1 ? 0.4 * R : 0.3 * R;
      path.quadraticCurveTo(...P((a + na) / 2 + 0.12, (r + nr) / 2 * 1.08), ...P(na, nr));
      prevA = na; prevR = nr;
    });
    path.quadraticCurveTo(cx, cy + 0.42 * R, ...P(-2.25, 0.3 * R));
    const grad = g.createRadialGradient(cx, cy, 6, cx, cy, R);
    grad.addColorStop(0, light); grad.addColorStop(0.55, mid); grad.addColorStop(1, dark);
    g.fillStyle = grad;
    g.fill(path);
    g.save(); g.clip(path);
    g.strokeStyle = "rgba(255, 236, 200, .35)"; g.lineWidth = 2.4; g.lineCap = "round";
    tips.forEach((a, i) => {
      g.beginPath(); g.moveTo(cx, cy + 12);
      const [x, y] = P(a, lens[i] * R * 0.92);
      g.quadraticCurveTo(...P(a * 0.9, lens[i] * R * 0.45), x, y); g.stroke();
    });
    g.restore();
    g.strokeStyle = dark; g.lineWidth = 5; g.lineCap = "round";
    g.beginPath(); g.moveTo(cx, cy + 14); g.lineTo(cx, 252); g.stroke();
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }
  const materials = PALETTE.map(p => new THREE.MeshLambertMaterial({
    map: leafTexture(p), transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, depthWrite: false
  }));
  const leafGeo = new THREE.PlaneGeometry(1, 1);
  leafGeo.translate(0, 0.49, 0); // pivot on the stalk, so leaves swing from where they hang
  const stemMat = new THREE.MeshLambertMaterial({ color: 0x4a2e22 });

  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[(Math.random() * arr.length) | 0];

  let W = 1, H = 1, reach = 0, branches = [], fallers = [];

  function sideReach() {
    const pad = Math.min(72, Math.max(20, W * 0.05));
    const content = Math.min(1400, W - 2 * pad);
    const margin = (W - content) / 2;
    // Only where there is a real side margin, so leaves never sit over the reading column.
    return margin < 60 ? 0 : Math.min(300, margin * 0.92);
  }

  function makeBranch(side, y, len, seed) {
    const group = new THREE.Group();
    const dir = side < 0 ? 1 : -1;
    group.position.set(side < 0 ? -6 : W + 6, -y, 0);
    const droop = len * rand(0.25, 0.45);
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(dir * len * 0.35, -droop * 0.15, 0),
      new THREE.Vector3(dir * len * 0.7, -droop * 0.55, 0),
      new THREE.Vector3(dir * len, -droop, 0)
    ]);
    group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 28, Math.max(1.6, len / 110), 6), stemMat));
    const leaves = [];
    const n = Math.round(len / 34) + 2;
    for (let i = 0; i < n; i++) {
      const t = 0.18 + (i / (n - 1)) * 0.82;
      const p = curve.getPoint(t), tan = curve.getTangent(t);
      const stemAngle = Math.atan2(tan.y, tan.x);
      const flip = i % 2 ? 1 : -1;
      const leaf = new THREE.Mesh(leafGeo, pick(materials));
      const s = rand(0.75, 1.15) * Math.min(72, Math.max(40, len / 3.6)) * (0.8 + t * 0.35);
      leaf.scale.set(s, s, 1);
      leaf.position.set(p.x, p.y, i * 0.6);
      const base = stemAngle - Math.PI / 2 + flip * rand(0.7, 1.2) * dir;
      leaf.userData = { base, phase: rand(0, 6.28), speed: rand(1.1, 1.9), tilt: rand(0.25, 0.45) };
      leaf.rotation.z = base;
      group.add(leaf); leaves.push(leaf);
    }
    // a leaf at the very tip
    const tip = new THREE.Mesh(leafGeo, pick(materials));
    const ts = Math.min(80, Math.max(44, len / 3.2));
    tip.scale.set(ts, ts, 1);
    const end = curve.getPoint(1), et = curve.getTangent(1);
    tip.position.set(end.x, end.y, n * 0.6);
    tip.userData = { base: Math.atan2(et.y, et.x) - Math.PI / 2, phase: rand(0, 6.28), speed: 1.3, tilt: 0.3 };
    tip.rotation.z = tip.userData.base;
    group.add(tip); leaves.push(tip);
    group.userData = { seed, amp: rand(0.025, 0.045), speed: rand(0.45, 0.7), leaves };
    scene.add(group);
    return group;
  }

  function makeFaller(initial) {
    const leaf = new THREE.Mesh(leafGeo, pick(materials));
    const s = rand(26, 46);
    leaf.scale.set(s, s, 1);
    resetFaller(leaf, initial);
    scene.add(leaf);
    return leaf;
  }
  function resetFaller(leaf, initial) {
    const band = Math.max(reach, 60);
    const x = rand(W - band, W - 8); // right margin only
    const y = initial ? rand(0, H) : rand(-120, -40);
    leaf.position.set(x, -y, 50);
    leaf.userData = {
      x0: x, vy: rand(26, 48), swayA: rand(18, 46), swayF: rand(0.5, 1.1), phase: rand(0, 6.28),
      spin: new THREE.Vector3(rand(-1.4, 1.4), rand(-1.8, 1.8), rand(-0.9, 0.9))
    };
  }

  function clear() {
    [...branches, ...fallers].forEach(o => {
      scene.remove(o);
      o.traverse?.(c => { if (c.geometry && c.geometry !== leafGeo) c.geometry.dispose(); });
    });
    branches = []; fallers = [];
  }

  function build() {
    W = innerWidth; H = innerHeight;
    renderer.setSize(W, H, false);
    camera.left = 0; camera.right = W; camera.top = 0; camera.bottom = -H;
    camera.updateProjectionMatrix();
    clear();
    reach = sideReach();
    if (!reach) return;
    const rows = H > 820 ? [0.2, 0.52, 0.84] : [0.26, 0.7];
    rows.forEach((r, i) => {
      branches.push(makeBranch(1, H * r + rand(-30, 30), reach * rand(0.85, 1.05), i + 9));
    });
    if (!reduced) for (let i = 0; i < (W > 1500 ? 6 : 4); i++) fallers.push(makeFaller(true));
  }

  let wind = 0, lastY = scrollY, last = performance.now(), running = true;
  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const t = now / 1000;
    const dy = scrollY - lastY; lastY = scrollY;
    wind += (Math.min(1, Math.abs(dy) / 40) - wind) * 0.06;

    for (const b of branches) {
      const u = b.userData;
      b.rotation.z = (u.amp + wind * 0.05) * Math.sin(t * u.speed + u.seed) + 0.012 * Math.sin(t * 1.7 + u.seed);
      for (const l of u.leaves) {
        const d = l.userData;
        l.rotation.z = d.base + (0.07 + wind * 0.12) * Math.sin(t * d.speed + d.phase);
        l.rotation.x = d.tilt * Math.sin(t * d.speed * 0.8 + d.phase);
        l.rotation.y = (0.25 + wind * 0.4) * Math.sin(t * d.speed * 0.6 + d.phase * 1.3);
      }
    }
    for (const f of fallers) {
      const d = f.userData;
      f.position.y -= (d.vy + wind * 30) * dt;
      f.position.x = d.x0 + d.swayA * Math.sin(t * d.swayF + d.phase);
      f.rotation.x += d.spin.x * dt; f.rotation.y += d.spin.y * dt; f.rotation.z += d.spin.z * dt;
      if (-f.position.y > H + 80) resetFaller(f, false);
    }
    renderer.render(scene, camera);
    if (!reduced) requestAnimationFrame(frame);
  }

  build();
  requestAnimationFrame(frame);
  let rt;
  addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => { build(); if (reduced) requestAnimationFrame(frame); }, 150);
  });
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running && !reduced) { last = performance.now(); requestAnimationFrame(frame); }
  });
}
