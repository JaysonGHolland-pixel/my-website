"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LampDesk() {
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
    <div className="relative mx-auto mt-12 flex w-full max-w-2xl flex-col items-center">
      <div
        className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl"
        style={{
          boxShadow:
            "0 0 0 1px color-mix(in srgb, var(--color-volt) 30%, transparent), 0 30px 70px -30px rgb(0 0 0 / 0.65), 0 0 90px -20px color-mix(in srgb, var(--color-sun) 45%, transparent)",
          transform: `translate3d(${offset.x * 6}px, ${offset.y * 4}px, 0)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1786522635241-95e7792f705f?w=1400&q=80"
          alt="A warm lamp glowing on a wooden desk, with afternoon light falling through blinds across the surface — the studio this business runs from"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 640px"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--color-void) 15%, transparent) 0%, transparent 35%, color-mix(in srgb, var(--color-void) 55%, transparent) 100%)",
          }}
        />
      </div>

      {/* brass thread feeding into the build-stage timeline below */}
      <div
        className="energy-line relative mt-2 h-24 w-px sm:h-32"
        aria-hidden="true"
      />
    </div>
  );
}
