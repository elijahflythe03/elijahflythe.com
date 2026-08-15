"use client";

import { useEffect, useRef } from "react";

const FONT_SIZE = 15;
const ACCENT_RGB = "97, 175, 239"; // --color-accent (#61afef)
const BG_RGB = "40, 44, 52"; // --color-bg (#282c34)
const FALL_STEP = 0.4;
const FRAME_SKIP = 2; // only draw every Nth animation frame -> slow, ambient fall speed
const TRAIL_ALPHA = 0.07;
const CHAR_ALPHA = 0.14;
const RESET_CHANCE = 0.975;

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let drops: number[] = [];

    // Resizing the canvas element always clears its pixels and resets 2D
    // context state (font, fillStyle), so ctx.font is re-applied here rather
    // than every draw() call. The `drops` array is only rebuilt when the
    // column count actually changes (real width change) - mobile browsers
    // fire `resize` on every address-bar show/hide during scroll (height
    // only, ~50-100px), and rebuilding drops on every one of those caused a
    // visible "reset" glitch mid-scroll.
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      ctx!.font = `${FONT_SIZE}px monospace`;

      const columns = Math.floor(width / FONT_SIZE);
      if (columns !== drops.length) {
        drops = new Array(columns).fill(0).map(() => Math.random() * -50);
      }
    }
    resize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    }
    window.addEventListener("resize", onResize);

    let rafId = 0;
    let frame = 0;
    let running = true;

    function draw() {
      ctx!.fillStyle = `rgba(${BG_RGB}, ${TRAIL_ALPHA})`;
      ctx!.fillRect(0, 0, width, height);

      ctx!.fillStyle = `rgba(${ACCENT_RGB}, ${CHAR_ALPHA})`;

      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? "1" : "0";
        const y = drops[i] * FONT_SIZE;
        if (y >= 0) ctx!.fillText(char, i * FONT_SIZE, y);

        if (y > height && Math.random() > RESET_CHANCE) {
          drops[i] = 0;
        }
        drops[i] += FALL_STEP;
      }
    }

    function loop() {
      if (!running) return;
      frame++;
      if (frame % FRAME_SKIP === 0) draw();
      rafId = requestAnimationFrame(loop);
    }

    function handleVisibility() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        loop();
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);

    rafId = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
    />
  );
}
