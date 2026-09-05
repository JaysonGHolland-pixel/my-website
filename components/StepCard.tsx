"use client";

import { useEffect, useState } from "react";

export type StepDemo = {
  heading: string;
  lines: string[];
  note?: string;
};

export default function StepCard({
  number,
  emoji,
  title,
  description,
  demo,
}: {
  number: string;
  emoji: string;
  title: string;
  description: string;
  demo: StepDemo;
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
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="tilt-card flex w-full items-start gap-5 rounded-3xl border-2 border-ink/10 bg-white p-6 text-left shadow-sm"
      >
        <span className="wiggle-hover flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sun/30 text-2xl">
          {emoji}
        </span>
        <div className="flex-1">
          <span className="font-mono text-xs tracking-widest text-ink/40">
            {number}
          </span>
          <h3 className="font-display text-lg font-bold">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/70">
            {description}
          </p>
          <span className="mt-3 inline-block font-display text-xs font-semibold text-punch">
            See what this looks like &rarr;
          </span>
        </div>
      </button>

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
            aria-labelledby="step-demo-heading"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-mono text-xs tracking-widest text-punch uppercase">
              Stage {number}
            </p>
            <h4 id="step-demo-heading" className="mt-2 font-display text-xl font-bold">
              {demo.heading}
            </h4>
            <div className="mt-4 space-y-2 rounded-2xl bg-ink/5 p-4 font-mono text-xs leading-relaxed text-ink/80">
              {demo.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {demo.note && (
              <p className="mt-4 text-xs text-ink/50">{demo.note}</p>
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
