"use client";

import { useEffect, useState } from "react";

const LIGHT_BARS = [16, 42, 68, 94, 120, 146, 172].map((y, i) => ({
  y,
  opacity: 0.16 - i * 0.014,
}));

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
    <div className="relative mx-auto flex h-[26rem] w-full max-w-xl items-center justify-center sm:h-[32rem]">
      <svg
        viewBox="0 0 400 320"
        className="h-full w-full max-w-md"
        role="img"
        aria-label="An illustrated banker's lamp glowing on a desk, with light falling through venetian blinds behind it — representing a studio built to run real business systems"
      >
        <defs>
          <linearGradient id="light-bar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-sun)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-sun)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-sun)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="desk-wood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="color-mix(in srgb, var(--color-punch) 70%, #d9a077)" />
            <stop offset="100%" stopColor="color-mix(in srgb, var(--color-punch) 55%, black)" />
          </linearGradient>
          <radialGradient id="lamp-glow-grad" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="var(--color-sun)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="var(--color-sun)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* light through the blinds */}
        <g
          style={{
            transform: `translate3d(${offset.x * -6}px, ${offset.y * -4}px, 0)`,
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {LIGHT_BARS.map((bar) => (
            <rect
              key={bar.y}
              x="-30"
              y={bar.y}
              width="460"
              height="7"
              fill="url(#light-bar)"
              opacity={bar.opacity}
              transform="rotate(9 200 130)"
            />
          ))}
        </g>

        {/* lamp glow, breathing gently */}
        <ellipse
          className="lamp-glow"
          cx="150"
          cy="182"
          rx="120"
          ry="86"
          fill="url(#lamp-glow-grad)"
          style={{ transformOrigin: "150px 182px" }}
        />

        {/* desk surface */}
        <g
          style={{
            transform: `translate3d(${offset.x * 4}px, ${offset.y * 3}px, 0)`,
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <polygon points="18,320 382,320 336,232 64,232" fill="url(#desk-wood)" />
          <path
            d="M64,232 L336,232"
            stroke="var(--color-volt)"
            strokeWidth="2"
            strokeOpacity="0.55"
          />

          {/* open ledger */}
          <g transform="translate(214,246) rotate(-5)">
            <rect width="86" height="52" rx="2" fill="var(--color-starlight)" opacity="0.92" />
            <line x1="10" y1="14" x2="66" y2="14" stroke="var(--color-muted)" strokeWidth="2" />
            <line x1="10" y1="24" x2="72" y2="24" stroke="var(--color-muted)" strokeWidth="2" />
            <line x1="10" y1="34" x2="58" y2="34" stroke="var(--color-muted)" strokeWidth="2" />
            {/* pen */}
            <line x1="18" y1="46" x2="78" y2="10" stroke="var(--color-volt)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="78" cy="10" r="2.6" fill="var(--color-volt)" />
          </g>

          {/* banker's lamp */}
          <g>
            <ellipse cx="112" cy="248" rx="24" ry="8" fill="var(--color-volt)" opacity="0.9" />
            <path
              d="M112,240 C108,190 106,168 132,150"
              fill="none"
              stroke="var(--color-volt)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M96,150 Q132,120 168,150 L162,166 Q132,146 102,166 Z"
              fill="var(--color-mint)"
              stroke="var(--color-volt)"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>

      {/* brass thread feeding into the build-stage timeline below */}
      <div
        className="energy-line absolute top-full left-1/2 h-24 w-px -translate-x-1/2 sm:h-32"
        aria-hidden="true"
      />
    </div>
  );
}
