"use client";

import { useEffect, useState } from "react";

export default function HeroOrb() {
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
    <div className="relative mx-auto flex h-[24rem] w-full max-w-xl items-center justify-center sm:h-[30rem]">
      {/* ambient glow, soft two-color wash */}
      <div
        className="absolute h-[26rem] w-[26rem] rounded-full opacity-60 blur-[80px] sm:h-[32rem] sm:w-[32rem]"
        style={{
          background:
            "radial-gradient(45% 45% at 38% 35%, var(--volt), transparent 72%), radial-gradient(50% 50% at 68% 68%, var(--punch), transparent 72%)",
          transform: `translate3d(${offset.x * -14}px, ${offset.y * -14}px, 0)`,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* slow conic ring for depth */}
      <div
        className="orb-spin absolute h-[20rem] w-[20rem] rounded-full opacity-20 blur-[1px] sm:h-[24rem] sm:w-[24rem]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--volt) 60deg, transparent 140deg, var(--punch) 220deg, transparent 300deg)",
          maskImage:
            "radial-gradient(circle, transparent 58%, black 60%, black 72%, transparent 74%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 58%, black 60%, black 72%, transparent 74%)",
        }}
      />

      {/* the orb itself — two-color gradient, kept clean rather than muddy */}
      <div
        className="orb-morph swatch relative h-52 w-52 sm:h-64 sm:w-64"
        style={{
          background: "linear-gradient(150deg, var(--volt), var(--punch))",
          boxShadow:
            "inset -16px -20px 50px rgba(26,21,51,0.4), inset 12px 14px 36px rgba(255,255,255,0.35), 0 40px 90px -30px rgba(124,58,237,0.5)",
          transform: `translate3d(${offset.x * 16}px, ${offset.y * 16}px, 0)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* specular highlight */}
      <div
        className="absolute h-20 w-28 rounded-full bg-white/60 blur-2xl"
        style={{
          transform: `translate3d(calc(-3.5rem + ${offset.x * 20}px), calc(-4.5rem + ${offset.y * 20}px), 0)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
