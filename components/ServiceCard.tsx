"use client";

import { useEffect, useState } from "react";

export type ServiceExample = {
  heading: string;
  steps: string[];
  note?: string;
};

export default function ServiceCard({
  emoji,
  color,
  title,
  description,
  example,
}: {
  emoji: string;
  color: string;
  title: string;
  description: string;
  example: ServiceExample;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="tilt-card flex h-full flex-col rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
        <span
          className="wiggle-hover flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
          style={{
            backgroundColor: `color-mix(in srgb, ${color} 25%, transparent)`,
          }}
        >
          {emoji}
        </span>
        <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-paper/70">
          {description}
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="pop-button mt-5 self-start rounded-full border-2 px-4 py-2 font-display text-xs font-semibold"
          style={{ borderColor: color, color }}
        >
          See an example &rarr;
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-ink/60 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="max-w-md rounded-3xl bg-paper p-8 text-ink shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="example-heading"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-mono text-xs tracking-widest uppercase" style={{ color }}>
              Example
            </p>
            <h4 id="example-heading" className="mt-2 font-display text-xl font-bold">
              {example.heading}
            </h4>
            <ol className="mt-4 space-y-2 text-sm text-ink/80">
              {example.steps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            {example.note && (
              <p className="mt-4 text-xs text-ink/50">{example.note}</p>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="pop-button mt-6 rounded-full bg-ink px-5 py-2 font-display text-xs font-semibold text-paper"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
