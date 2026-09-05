"use client";

import { useEffect, useState } from "react";

export type ServiceExample = {
  heading: string;
  steps: string[];
  note?: string;
};

export default function ServiceCard({
  color,
  title,
  description,
  example,
}: {
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
      <div className="premium-card flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
        <div className="flex h-32 items-center justify-center border-b border-white/10 bg-white/[0.02]">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-full font-display text-2xl font-bold text-white"
            style={{
              background: `radial-gradient(circle at 32% 28%, color-mix(in srgb, ${color} 85%, white), ${color})`,
              boxShadow: `0 0 0 3px color-mix(in srgb, ${color} 30%, transparent), inset 0 -3px 6px rgb(0 0 0 / 0.35)`,
            }}
          >
            {title.charAt(0)}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-xl font-bold">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {description}
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="pop-button mt-6 self-start rounded-full border-2 px-4 py-2 font-display text-xs font-semibold"
            style={{ borderColor: color, color }}
          >
            See an example &rarr;
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-void/70 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="glass-panel max-w-md rounded-3xl p-8 text-starlight shadow-2xl"
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
            <ol className="mt-4 space-y-2 text-sm text-starlight/80">
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
              <p className="mt-4 text-xs text-muted">{example.note}</p>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="pop-button mt-6 rounded-full bg-starlight px-5 py-2 font-display text-xs font-semibold text-void"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
