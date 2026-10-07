// The hero easter egg: click the bricks and they blow apart into real bricks, then
// rebuild themselves brick by brick. Loaded on demand from index.html the first time
// someone plays with the bricks. Debris renders with WebGPU (instanced, lit and
// shadow-mapped) and falls back to Canvas 2D where WebGPU isn't available.
import { createGpuRenderer } from "./gpu.js";
import { announce, quipFor, showToast, toastPosition } from "./page.js";
import { Show } from "./show.js";

const gpu = { renderer: null, failed: !globalThis.navigator?.gpu, pending: null };
let surfaces = null;
let active = null;
let count = 0;

function layer(zIndex) {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position: "fixed",
    inset: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: String(zIndex),
    display: "none",
  });
  canvas.width = 1;
  canvas.height = 1;
  document.body.append(canvas);
  return canvas;
}

// Two full-viewport layers above the page (below the header): 3D bricks, then effects.
function ensureSurfaces() {
  surfaces ??= { gpu: layer(90), fx: layer(91) };
  return surfaces;
}

function initGpu() {
  if (gpu.pending || gpu.failed) return;
  gpu.pending = createGpuRenderer(ensureSurfaces().gpu)
    .then((renderer) => {
      gpu.renderer = renderer;
      renderer.device.lost.then(() => {
        gpu.renderer = null;
        gpu.failed = true;
      });
    })
    .catch((err) => {
      gpu.failed = true;
      console.info("[LadrillosJS] WebGPU unavailable, bricks fall back to Canvas 2D.", err);
    });
}

export function warmup() {
  ensureSurfaces();
  initGpu();
}

export function smash(detail) {
  active ??= play(detail).finally(() => {
    active = null;
  });
  return active;
}

async function play(detail) {
  count += 1;
  if (detail.reducedMotion) return gentle(detail);
  warmup();
  await new Show(detail, surfaces, gpu, count).run();
}

// prefers-reduced-motion: a warm glow instead of an explosion, and the same message.
async function gentle(detail) {
  const { el } = detail;
  await el.svg
    .animate([{ filter: "none" }, { filter: "brightness(1.12) saturate(1.25)" }, { filter: "none" }], {
      duration: 700,
      easing: "ease-in-out",
    })
    .finished.catch(() => {});
  const quip = quipFor(count);
  const at = toastPosition(el);
  showToast(el.toast, quip, count, at.x, at.y, false);
  announce(el.status, `Bricks rebuilt. ${quip}`);
}
