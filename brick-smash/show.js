import { $emit } from "ladrillosjs/events";
import { Canvas2DBricks } from "./canvas2d.js";
import { Fx } from "./fx.js";
import { BIG, BRICK_H, VIEW, buildPieces, clamp, easeOutCubic, lerp, pick, projectU, projectV, rand, randomUnit } from "./math.js";
import { beginFlight, blast, screenToWorld, step, updateFlight } from "./physics.js";
import {
  announce,
  buildSeams,
  freezeStage,
  quipFor,
  releaseStage,
  shockwave,
  showToast,
  spinOutlines,
  splitWords,
  toastPosition,
} from "./page.js";

const CHARGE = 0.42; // anticipation before the blast
const GPU_WAIT = 0.7; // longest the charge stretches while WebGPU finishes initialising
const FREE_MIN = 3.6; // debris time before the rebuild...
const FREE_MAX = 10; // ...extended while someone keeps playing with it
const PLAY_GRACE = 2.2; // the rebuild waits this long after the last swipe or click
const BUILD = 2.1; // stagger window of the brick-by-brick rebuild
const FUSE = 0.32; // mortar lines fade before handing back to the SVG
const HARD_STOP = 18;
const PERSPECTIVE = 7;

export class Show {
  constructor(detail, surfaces, gpu, count) {
    this.d = detail;
    this.el = detail.el;
    this.surfaces = surfaces;
    this.gpu = gpu;
    this.count = count;
    this.fx = new Fx();
    this.ctx = surfaces.fx.getContext("2d");
    this.fine = !gpu.failed;
    this.pieces = buildPieces(this.fine);
    this.seams = buildSeams(this.el.bricks, this.pieces, this.fine ? "fine" : "coarse");
    this.words = splitWords(this.el.title);
    this.phase = "charge";
    this.t = 0;
    this.last = 0;
    this.trauma = 0;
    this.noise = [rand(0, 50), rand(0, 50), rand(0, 50)];
    this.seam = 1;
    this.sparkCarry = 0;
    this.lastLanding = 0;
    this.pointer = { x: 0, y: 0, vx: 0, vy: 0, time: 0, at: -1 };
    const b = BIG[detail.brick ?? 2];
    this.blastCenter = [b[0] + 0.5, b[1] + 0.5, b[2] + BRICK_H / 2];
    this.onMove = (e) => this.move(e);
    this.onDown = (e) => this.punch(e);
    this.onResize = () => this.resize();
  }

  run() {
    return new Promise((resolve) => {
      this.resolve = resolve;
      freezeStage(this.el.stage);
      this.resize();
      this.surfaces.fx.style.display = "block";
      addEventListener("pointermove", this.onMove, { passive: true });
      addEventListener("pointerdown", this.onDown, { passive: true });
      addEventListener("resize", this.onResize);
      this.raf = requestAnimationFrame((t) => this.frame(t));
    });
  }

  resize() {
    this.viewW = document.documentElement.clientWidth;
    this.viewH = document.documentElement.clientHeight;
    this.dpr = Math.min(2, devicePixelRatio || 1);
    this.surfaces.fx.width = Math.round(this.viewW * this.dpr);
    this.surfaces.fx.height = Math.round(this.viewH * this.dpr);
    if (this.bricks3d?.kind === "webgpu") this.bricks3d.resize(this.viewW, this.viewH, this.dpr);
  }

  frame(ms) {
    const now = ms / 1000;
    const real = this.last ? Math.min(0.05, now - this.last) : 1 / 60;
    this.last = now;
    this.t += real;
    const dt = real * this.timeScale();
    this.shake(real);
    this.ctm = this.el.svg.getScreenCTM();
    if (!this.ctm) return this.finish();
    this.unit = 1 / Math.hypot(this.ctm.a, this.ctm.b);

    if (this.phase === "charge") this.charge(real);
    else if (this.phase === "free") {
      this.simulate(dt);
      if (this.t >= this.rebuildAt) this.startBuild();
    } else if (this.phase === "build") this.build(dt);
    else if (this.phase === "fuse") this.fuse();
    else if (this.phase === "outro" && this.t >= this.outroEnd && !this.fx.busy && this.trauma < 0.01) this.phase = "done";
    if (this.t > HARD_STOP && (this.phase === "free" || this.phase === "build")) this.hurry();

    this.fx.update(dt, real);
    this.draw();
    if (this.phase === "done") return this.finish();
    this.raf = requestAnimationFrame((t) => this.frame(t));
  }

  // Brief bullet-time right after the blast.
  timeScale() {
    if (!this.boomAt) return 1;
    const since = this.t - this.boomAt;
    if (since < 0.09) return 0.18;
    return since < 0.4 ? lerp(0.18, 1, easeOutCubic((since - 0.09) / 0.31)) : 1;
  }

  // Trauma-based camera shake applied to the hero content; debris follows via the CTM.
  shake(dt) {
    this.trauma = Math.max(0, this.trauma - dt * 1.4);
    const s = this.trauma * this.trauma;
    const { inner } = this.el;
    if (s < 0.0004) {
      if (this.shaking) {
        inner.style.translate = "";
        inner.style.rotate = "";
        this.shaking = false;
      }
      return;
    }
    const n = (i, f) => Math.sin(this.t * f + this.noise[i]) * 0.65 + Math.sin(this.t * f * 2.3 + this.noise[i] * 1.7) * 0.35;
    inner.style.translate = `${(15 * s * n(0, 41)).toFixed(2)}px ${(11 * s * n(1, 47)).toFixed(2)}px`;
    inner.style.rotate = `${(0.6 * s * n(2, 33)).toFixed(3)}deg`;
    this.shaking = true;
  }

  toClient(u, v) {
    const m = this.ctm;
    return { x: m.a * u + m.c * v + m.e, y: m.b * u + m.d * v + m.f };
  }

  worldToClient(x, y, z) {
    return this.toClient(projectU(x, y), projectV(x, y, z));
  }

  charge(real) {
    const c = clamp(this.t / CHARGE, 0, 1);
    const { bricks, svg } = this.el;
    const settle = easeOutCubic(clamp(c * 2.5, 0, 1));
    const amp = 0.4 + 3.6 * c * c;
    bricks.forEach((g, i) => {
      const o = this.d.offsets?.[i] ?? { x: 0, y: 0, sx: 1, sy: 1 };
      const k = i === this.d.brick ? 1.4 : 1;
      const x = o.x * (1 - settle) + rand(-amp, amp) * k;
      const y = o.y * (1 - settle) + rand(-amp, amp) * k;
      g.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
      g.style.scale = `${lerp(o.sx, 1, settle).toFixed(4)} ${lerp(o.sy, 1, settle).toFixed(4)}`;
    });
    for (const s of this.seams) s.style.opacity = String(c ** 1.3);
    svg.style.scale = String(1 - 0.035 * c * c);
    svg.style.filter = `brightness(${1 + 0.07 * c}) saturate(${1 + 0.5 * c})`;
    this.trauma = Math.max(this.trauma, 0.12 + 0.3 * c * c);

    // Sparks leak out of the joints, faster as the charge builds.
    const center = this.worldToClient(1, 0, 0.8);
    this.sparkCarry += (40 + 300 * c) * real;
    while (this.sparkCarry >= 1) {
      this.sparkCarry -= 1;
      const pool = Math.random() < 0.6 ? this.pieces.filter((pc) => pc.brick === this.d.brick) : this.pieces;
      const pc = pick(pool.length ? pool : this.pieces);
      const pt = this.worldToClient(pc.home[0], pc.home[1], pc.home[2] + pc.half[2]);
      const dx = pt.x - center.x;
      const dy = pt.y - center.y;
      const len = Math.hypot(dx, dy) || 1;
      const sp = rand(140, 420) * (0.6 + c);
      this.fx.spark(pt.x, pt.y, (dx / len) * sp, (dy / len) * sp - rand(120, 320), rand(0.25, 0.5));
    }

    const ready = !this.fine || this.gpu.renderer || this.gpu.failed;
    if (c >= 1 && (ready || this.t > CHARGE + GPU_WAIT)) this.boom();
  }

  boom() {
    const { bricks, svg, ground } = this.el;
    this.boomAt = this.t;
    this.phase = "free";
    this.rebuildAt = this.t + FREE_MIN;
    svg.style.scale = "";
    svg.style.filter = "";
    for (const g of bricks) {
      g.style.translate = "";
      g.style.scale = "";
      g.style.visibility = "hidden";
    }
    this.groundAnim = ground?.animate([{ opacity: 1 }, { opacity: 0.08 }], { duration: 260, fill: "forwards" });

    const gpu = this.gpu.renderer;
    if (gpu && !gpu.lost) {
      gpu.resize(this.viewW, this.viewH, this.dpr);
      this.bricks3d = gpu;
    } else {
      this.bricks3d = new Canvas2DBricks(this.pieces);
    }
    for (const pc of this.pieces) pc.state = "free";
    blast(this.pieces, this.blastCenter, 1);

    const o = this.d.x != null ? { x: this.d.x, y: this.d.y } : this.worldToClient(...this.blastCenter);
    const s = clamp(1 / this.unit, 0.5, 1.4);
    this.fx.flash(o.x, o.y, 420 * s);
    this.fx.ring(o.x, o.y, { speed: 2600, life: 0.75, width: 3 });
    this.fx.ring(o.x, o.y, { speed: 1800, life: 0.7, width: 1.5, delay: 0.07, alpha: 0.35 });
    this.fx.floorRing(1, 0, { radius: 3.4, life: 0.95 });
    for (let i = 0; i < 80; i++) {
      const a = rand(0, Math.PI * 2);
      const sp = rand(400, 1500) * s;
      this.fx.spark(o.x, o.y, Math.cos(a) * sp, Math.sin(a) * sp - rand(100, 500) * s);
    }
    for (let i = 0; i < 46; i++) {
      const a = rand(Math.PI * 1.05, Math.PI * 1.95);
      const sp = rand(250, 900) * s;
      this.fx.chip(o.x + rand(-20, 20), o.y + rand(-20, 20), Math.cos(a) * sp, Math.sin(a) * sp);
    }
    for (let i = 0; i < 26; i++) {
      const a = rand(0, Math.PI * 2);
      const r = rand(0.4, 1.6);
      const pt = this.worldToClient(1 + Math.cos(a) * r, Math.sin(a) * r, 0);
      this.fx.puff(pt.x, pt.y, Math.cos(a) * rand(30, 120), rand(-60, -10), rand(18, 42) * s, rand(0.8, 1.4));
    }
    this.trauma = 1;
    shockwave(this.textTargets(), o, { strength: 1 });
    spinOutlines(this.el.card, 1);
    $emit("bricks:blast");
    navigator.vibrate?.([14, 30, 22]);
  }

  textTargets() {
    const list = this.words.map((el) => ({ el, weight: 1.15 }));
    for (const [sel, weight] of [
      [".hero-tagline", 0.7],
      [".hero-subtitle", 0.6],
      ["install-section", 0.45],
    ]) {
      const el = this.el.copy.querySelector(sel);
      if (el) list.push({ el, weight });
    }
    return list;
  }

  simulate(dt) {
    const steps = Math.max(1, Math.ceil(dt * 120));
    const h = dt / steps;
    for (let s = 0; s < steps; s++) {
      for (const pc of this.pieces) {
        if (pc.state !== "free") continue;
        const impact = step(pc, h);
        if (impact > 2.4) this.impact(pc, impact);
      }
    }
    for (const pc of this.pieces) pc.heat = Math.max(0, pc.heat - dt * 1.6);
    this.project();
    this.swipe(dt);
  }

  impact(pc, speed) {
    if (Math.random() > Math.min(0.6, speed * 0.08)) return;
    const pt = this.worldToClient(pc.p[0], pc.p[1], 0);
    const s = clamp(1 / this.unit, 0.5, 1.4);
    this.fx.puff(pt.x, pt.y, rand(-40, 40), rand(-30, -5), rand(8, 16) * s, rand(0.5, 0.9));
    if (Math.random() < 0.5) this.fx.chip(pt.x, pt.y, rand(-160, 160), rand(-420, -160));
  }

  // Screen position and perspective scale of every brick (for interaction and drawing).
  project() {
    const m = this.ctm;
    for (const pc of this.pieces) {
      const u = projectU(pc.p[0], pc.p[1]);
      const v = projectV(pc.p[0], pc.p[1], pc.p[2]);
      pc.cx = m.a * u + m.c * v + m.e;
      pc.cy = m.b * u + m.d * v + m.f;
      const toward = (pc.p[0] - pc.home[0]) * VIEW[0] + (pc.p[1] - pc.home[1]) * VIEW[1] + (pc.p[2] - pc.home[2]) * VIEW[2];
      pc.scale = clamp(PERSPECTIVE / Math.max(0.5, PERSPECTIVE - toward), 0.55, 2.4);
    }
  }

  move(e) {
    const p = this.pointer;
    const now = performance.now() / 1000;
    if (p.at >= 0) {
      const dt = Math.max(0.004, now - p.time);
      p.vx = lerp(p.vx, (e.clientX - p.x) / dt, 0.6);
      p.vy = lerp(p.vy, (e.clientY - p.y) / dt, 0.6);
    }
    p.x = e.clientX;
    p.y = e.clientY;
    p.time = now;
    p.at = this.t;
  }

  // Swiping through loose bricks bats them around.
  swipe(dt) {
    const p = this.pointer;
    if (p.at < 0 || this.t - p.at > 0.06 || Math.hypot(p.vx, p.vy) < 220) return;
    const radius = 80;
    const target = screenToWorld(this.ctm, p.vx * 0.6, p.vy * 0.6);
    let touched = false;
    for (const pc of this.pieces) {
      if (pc.state !== "free") continue;
      const d = Math.hypot(pc.cx - p.x, pc.cy - p.y);
      if (d > radius) continue;
      const k = Math.min(1, dt * 18) * (1 - d / radius);
      for (let i = 0; i < 3; i++) pc.v[i] += (target[i] - pc.v[i]) * k;
      pc.v[2] += 2.5 * k;
      const axis = randomUnit();
      for (let i = 0; i < 3; i++) pc.w[i] += axis[i] * 10 * k;
      touched = true;
    }
    if (touched) this.extend(PLAY_GRACE);
  }

  // Clicking anywhere while the debris is loose sets off a smaller blast at the pointer.
  punch(e) {
    if (e.button !== 0 || (this.phase !== "free" && this.phase !== "build")) return;
    const { clientX: x, clientY: y } = e;
    const radius = 230;
    let hits = 0;
    for (const pc of this.pieces) {
      if (pc.state === "fly") continue;
      const dx = pc.cx - x;
      const dy = pc.cy - y;
      const d = Math.hypot(dx, dy);
      if (d > radius) continue;
      const f = 1 - d / radius;
      const len = d || 1;
      const push = screenToWorld(this.ctm, (dx / len) * 900 * f, (dy / len) * 900 * f - 500 * f);
      if (pc.state === "home") {
        pc.state = "free";
        pc.start = this.t + rand(0.45, 0.9);
      }
      for (let i = 0; i < 3; i++) pc.v[i] += push[i];
      pc.v[2] += rand(2.5, 5.5) * f;
      const axis = randomUnit();
      const spin = rand(4, 14) * f;
      for (let i = 0; i < 3; i++) pc.w[i] += axis[i] * spin;
      pc.heat = Math.max(pc.heat, 0.5 * f);
      hits++;
    }
    this.fx.flash(x, y, 160, 0.3);
    this.fx.ring(x, y, { speed: 1500, life: 0.5, width: 2.2, alpha: 0.45 });
    for (let i = 0; i < 22; i++) {
      const a = rand(0, Math.PI * 2);
      const sp = rand(250, 800);
      this.fx.spark(x, y, Math.cos(a) * sp, Math.sin(a) * sp - 200, rand(0.25, 0.5));
    }
    this.trauma = Math.min(1, this.trauma + (hits ? 0.4 : 0.15));
    this.extend(PLAY_GRACE);
  }

  extend(seconds) {
    if (this.phase === "free") this.rebuildAt = Math.min(Math.max(this.rebuildAt, this.t + seconds), this.boomAt + FREE_MAX);
  }

  // Bottom course first, back to front, then up: brick by brick.
  startBuild() {
    this.phase = "build";
    const order = this.pieces
      .slice()
      .sort((a, b) => a.home[2] - b.home[2] || a.home[0] + a.home[1] - (b.home[0] + b.home[1]));
    const gap = BUILD / order.length;
    order.forEach((pc, i) => {
      pc.start = this.t + i * gap;
    });
  }

  build(dt) {
    this.simulate(dt);
    for (const pc of this.pieces) {
      if (pc.state === "free" && this.t >= pc.start) beginFlight(pc, this.t);
      if (pc.state === "fly" && updateFlight(pc, this.t)) this.land(pc);
    }
    this.settle();
    const home = this.pieces.reduce((n, pc) => n + (pc.state === "home"), 0);
    this.homeShare = home / this.pieces.length;
    if (home === this.pieces.length && this.t - this.lastLanding > 0.14) {
      this.phase = "fuse";
      this.fuseAt = this.t;
    }
  }

  land(pc) {
    pc.landedAt = this.t;
    this.lastLanding = this.t;
    this.trauma = Math.min(0.32, this.trauma + 0.012);
    if (Math.random() < 0.35) {
      const pt = this.worldToClient(pc.p[0], pc.p[1], pc.p[2] - pc.half[2]);
      const s = clamp(1 / this.unit, 0.5, 1.4);
      this.fx.puff(pt.x, pt.y, rand(-50, 50), rand(-40, -10), rand(6, 12) * s, rand(0.4, 0.7));
      if (Math.random() < 0.5) this.fx.chip(pt.x, pt.y, rand(-180, 180), rand(-380, -140));
    }
  }

  // Landing squash-and-stretch plus a quick highlight.
  settle() {
    for (const pc of this.pieces) {
      if (pc.state !== "home" || pc.landedAt < 0) continue;
      const age = this.t - pc.landedAt;
      if (age < 0.3) {
        pc.sq = 1 - 0.3 * Math.max(0, 1 - age / 0.2) * Math.cos(age * 26);
        pc.flash = Math.max(0, 1 - age / 0.22);
      } else {
        pc.sq = 1;
        pc.flash = 0;
      }
    }
  }

  fuse() {
    this.settle();
    const p = clamp((this.t - this.fuseAt) / FUSE, 0, 1);
    this.seam = 1 - p;
    if (p >= 1) this.swapBack();
  }

  // Past the time limit, everything still loose flies home now.
  hurry() {
    if (this.phase === "free") this.startBuild();
    for (const pc of this.pieces) {
      if (pc.state !== "free") continue;
      beginFlight(pc, this.t);
      pc.dur = 0.35;
    }
  }

  // Hands the rebuilt stack back to the SVG with a satisfying thump.
  swapBack() {
    const { bricks, svg, stage, ground, toast, status } = this.el;
    for (const g of bricks) g.style.visibility = "";
    for (const s of this.seams) s.style.opacity = "0";
    this.phase = "outro";
    this.outroEnd = this.t + 0.9;
    this.bricks3d = null;
    this.surfaces.gpu.style.display = "none";
    this.groundAnim?.cancel();
    ground?.animate([{ opacity: 0.08 }, { opacity: 1 }], { duration: 520, easing: "ease-out" });
    stage.animate(
      [
        { filter: "drop-shadow(0 36px 45px rgba(255, 105, 71, 0))" },
        { filter: "drop-shadow(0 36px 45px rgba(255, 105, 71, 0.2))" },
      ],
      { duration: 650, easing: "ease-out" },
    );
    svg.style.transformOrigin = "50% 88%";
    svg
      .animate(
        [
          { transform: "none" },
          { transform: "translateY(5px) scale(1.025, 0.965)", offset: 0.22 },
          { transform: "translateY(-3px) scale(0.99, 1.015)", offset: 0.55 },
          { transform: "none" },
        ],
        { duration: 560, easing: "cubic-bezier(.3,.7,.3,1)" },
      )
      .finished.catch(() => {})
      .finally(() => {
        svg.style.transformOrigin = "";
      });

    const base = this.worldToClient(1, 0, 0);
    const s = clamp(1 / this.unit, 0.5, 1.4);
    this.fx.floorRing(1, 0, { radius: 2.4, life: 0.7 });
    for (let i = 0; i < 14; i++) {
      const a = rand(0, Math.PI * 2);
      const pt = this.worldToClient(1 + Math.cos(a) * 1.3, Math.sin(a) * 1.3, 0);
      this.fx.puff(pt.x, pt.y, (pt.x - base.x) * 0.8, rand(-30, -5), rand(12, 26) * s, rand(0.6, 1));
    }
    this.trauma = Math.max(this.trauma, 0.42);
    shockwave(this.textTargets(), this.worldToClient(1, 0, 0.8), { strength: 0.35, speed: 2000 });

    const quip = quipFor(this.count);
    setTimeout(() => {
      const at = toastPosition(this.el);
      showToast(toast, quip, this.count, at.x, at.y);
    }, 140);
    announce(status, `Bricks rebuilt. ${quip}`);
    $emit("bricks:rebuilt");
  }

  // Shadows fade in after the blast and back out as the stack fills in, so the finished
  // block matches the shadowless SVG it hands back to.
  shadowLevel() {
    if (!this.boomAt) return 0;
    const fade = this.phase === "fuse" ? 1 - clamp((this.t - this.fuseAt) / FUSE, 0, 1) : 1;
    const built = this.phase === "build" || this.phase === "fuse" ? 1 - 0.75 * (this.homeShare ?? 0) : 1;
    return clamp((this.t - this.boomAt) / 0.3, 0, 1) * fade * built;
  }

  draw() {
    const { ctx, dpr, ctm } = this;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.surfaces.fx.width, this.surfaces.fx.height);
    if (this.bricks3d) {
      this.project();
      const frame = {
        pieces: this.pieces,
        ctm,
        viewW: this.viewW,
        viewH: this.viewH,
        seam: this.seam,
        shadow: this.shadowLevel(),
        unit: this.unit,
      };
      if (this.bricks3d.kind === "webgpu") {
        if (this.bricks3d.render(frame)) {
          this.surfaces.gpu.style.display = "block";
        } else {
          this.surfaces.gpu.style.display = "none";
          this.bricks3d = new Canvas2DBricks(this.pieces);
        }
      }
      if (this.bricks3d.kind === "canvas2d") {
        ctx.setTransform(dpr * ctm.a, dpr * ctm.b, dpr * ctm.c, dpr * ctm.d, dpr * ctm.e, dpr * ctm.f);
        this.bricks3d.draw(ctx, frame);
      }
    }
    this.fx.draw(ctx, dpr, ctm);
  }

  finish() {
    cancelAnimationFrame(this.raf);
    removeEventListener("pointermove", this.onMove);
    removeEventListener("pointerdown", this.onDown);
    removeEventListener("resize", this.onResize);
    const { inner, stage, bricks, svg } = this.el;
    inner.style.translate = "";
    inner.style.rotate = "";
    releaseStage(stage);
    for (const g of bricks) {
      g.style.visibility = "";
      g.style.translate = "";
      g.style.scale = "";
    }
    svg.style.scale = "";
    svg.style.filter = "";
    for (const s of this.seams) s.style.opacity = "0";
    this.groundAnim?.cancel();
    this.surfaces.fx.style.display = "none";
    this.surfaces.fx.width = 1;
    this.surfaces.fx.height = 1;
    this.surfaces.gpu.style.display = "none";
    this.gpu.renderer?.release();
    this.resolve();
  }
}
