"use client";

import { useEffect, useState } from "react";

const NODES = [
  { x: 130, y: 90, color: "var(--color-sun)" },
  { x: 260, y: 150, color: "var(--color-punch)" },
  { x: 90, y: 200, color: "var(--color-mint)" },
  { x: 230, y: 230, color: "var(--color-volt)" },
];

const ARCS = [
  "M130,90 Q195,40 260,150",
  "M90,200 Q150,260 230,230",
  "M260,150 Q280,190 230,230",
];

export default function HeroGlobe() {
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
        className="absolute h-[24rem] w-[24rem] rounded-full opacity-40 blur-[100px] sm:h-[30rem] sm:w-[30rem]"
        style={{
          background:
            "radial-gradient(45% 45% at 38% 35%, var(--volt), transparent 72%), radial-gradient(50% 50% at 68% 68%, var(--punch), transparent 72%)",
          transform: `translate3d(${offset.x * -14}px, ${offset.y * -14}px, 0)`,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      <div
        className="relative h-72 w-72 sm:h-80 sm:w-80"
        style={{
          transform: `translate3d(${offset.x * 10}px, ${offset.y * 10}px, 0)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          viewBox="0 0 320 320"
          className="h-full w-full"
          role="img"
          aria-label="A wireframe globe with glowing nodes, representing connected systems"
        >
          <defs>
            <radialGradient id="globe-shade" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="var(--color-volt)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--color-volt)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="160" cy="160" r="150" fill="url(#globe-shade)" />
          <circle
            cx="160"
            cy="160"
            r="150"
            fill="none"
            stroke="var(--color-starlight)"
            strokeOpacity="0.25"
            strokeWidth="1"
          />

          <g className="orb-spin-slow" style={{ transformOrigin: "160px 160px" }}>
            {/* latitude lines */}
            {[150, 105, 55].map((ry) => (
              <ellipse
                key={`lat-${ry}`}
                cx="160"
                cy="160"
                rx="150"
                ry={ry}
                fill="none"
                stroke="var(--color-starlight)"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
            ))}
            {/* meridian lines */}
            {[150, 105, 55].map((rx) => (
              <ellipse
                key={`lon-${rx}`}
                cx="160"
                cy="160"
                rx={rx}
                ry="150"
                fill="none"
                stroke="var(--color-starlight)"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
            ))}

            {ARCS.map((d) => (
              <path
                key={d}
                d={d}
                fill="none"
                className="flow-line"
                stroke="var(--color-punch)"
                strokeOpacity="0.55"
                strokeWidth="1.5"
              />
            ))}

            {NODES.map((node) => (
              <circle
                key={`${node.x}-${node.y}`}
                cx={node.x}
                cy={node.y}
                r="5"
                fill={node.color}
                style={{ filter: `drop-shadow(0 0 6px ${node.color})` }}
              />
            ))}
            {NODES.map((node) => (
              <circle
                key={`pulse-${node.x}-${node.y}`}
                cx={node.x}
                cy={node.y}
                r="5"
                fill={node.color}
                className="pulse-dot"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* signal beam feeding into the mission timeline below */}
      <div
        className="energy-line absolute top-full left-1/2 h-24 w-px -translate-x-1/2 sm:h-32"
        aria-hidden="true"
      />
    </div>
  );
}
