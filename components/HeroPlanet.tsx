"use client";

import { useEffect, useState } from "react";

export default function HeroPlanet() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x, y });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative mx-auto flex h-[26rem] w-full max-w-xl items-center justify-center sm:h-[32rem]">
      {/* ambient nebula glow */}
      <div
        className="absolute h-[26rem] w-[26rem] rounded-full opacity-50 blur-[90px] sm:h-[34rem] sm:w-[34rem]"
        style={{
          background:
            "radial-gradient(45% 45% at 38% 35%, var(--volt), transparent 72%), radial-gradient(50% 50% at 68% 68%, var(--punch), transparent 72%)",
          transform: `translate3d(${offset.x * -14}px, ${offset.y * -14}px, 0)`,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* orbit ring, tilted like Saturn's */}
      <div
        className="orb-spin-slow absolute h-[19rem] w-[19rem] rounded-full sm:h-[23rem] sm:w-[23rem]"
        style={{
          border: "1px solid color-mix(in srgb, var(--sun) 45%, transparent)",
          transform: "rotateX(72deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <span
          className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sun"
          style={{ boxShadow: "0 0 12px 3px var(--sun)" }}
        />
      </div>

      {/* the planet itself */}
      <div
        className="orb-morph swatch relative h-52 w-52 sm:h-64 sm:w-64"
        style={{
          background: "linear-gradient(150deg, var(--volt), var(--punch))",
          boxShadow:
            "inset -16px -20px 50px rgba(6,5,21,0.55), inset 12px 14px 36px rgba(255,255,255,0.25), 0 0 70px 10px color-mix(in srgb, var(--volt) 45%, transparent)",
          transform: `translate3d(${offset.x * 16}px, ${offset.y * 16}px, 0)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* specular highlight */}
      <div
        className="absolute h-20 w-28 rounded-full bg-white/50 blur-2xl"
        style={{
          transform: `translate3d(calc(-3.5rem + ${offset.x * 20}px), calc(-4.5rem + ${offset.y * 20}px), 0)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* signal beam feeding into the mission timeline below */}
      <div
        className="energy-line absolute top-full left-1/2 h-24 w-px -translate-x-1/2 sm:h-32"
        aria-hidden="true"
      />
    </div>
  );
}
