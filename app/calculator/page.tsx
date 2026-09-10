"use client";

import { useState } from "react";
import Link from "next/link";

export default function CalculatorPage() {
  const [jobValue, setJobValue] = useState(8000);
  const [enquiriesPerWeek, setEnquiriesPerWeek] = useState(10);
  const [missedPercent, setMissedPercent] = useState(20);

  const weeklyLoss = jobValue * enquiriesPerWeek * (missedPercent / 100);
  const monthlyLoss = weeklyLoss * 4.33;
  const yearlyLoss = weeklyLoss * 52;

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <main className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="pop-button glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-xs font-semibold text-starlight"
        >
          &larr; Back to home
        </Link>

        <p className="mt-10 text-center font-mono text-xs tracking-widest text-punch uppercase">
          Quick estimate
        </p>
        <h1 className="display-tight mt-3 text-center font-display text-4xl leading-[1.15] font-bold sm:text-5xl">
          What could a slow reply be{" "}
          <span className="gradient-text">costing you</span>?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-center text-muted">
          A rough, order-of-magnitude estimate based on your own numbers —
          not a guarantee, not a stat we made up. Adjust the sliders to
          match your business.
        </p>

        <div className="glass-panel mt-10 rounded-3xl p-7">
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="jobValue"
                  className="font-mono text-xs tracking-widest text-muted uppercase"
                >
                  Average job value
                </label>
                <span className="font-display text-lg font-bold text-sun">
                  ${fmt(jobValue)}
                </span>
              </div>
              <input
                id="jobValue"
                type="range"
                min={500}
                max={50000}
                step={500}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="mt-3 w-full accent-sun"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="enquiries"
                  className="font-mono text-xs tracking-widest text-muted uppercase"
                >
                  New enquiries per week
                </label>
                <span className="font-display text-lg font-bold text-sun">
                  {enquiriesPerWeek}
                </span>
              </div>
              <input
                id="enquiries"
                type="range"
                min={1}
                max={100}
                step={1}
                value={enquiriesPerWeek}
                onChange={(e) => setEnquiriesPerWeek(Number(e.target.value))}
                className="mt-3 w-full accent-sun"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="missed"
                  className="font-mono text-xs tracking-widest text-muted uppercase"
                >
                  Estimated % lost to a slow/missed reply
                </label>
                <span className="font-display text-lg font-bold text-sun">
                  {missedPercent}%
                </span>
              </div>
              <input
                id="missed"
                type="range"
                min={0}
                max={80}
                step={1}
                value={missedPercent}
                onChange={(e) => setMissedPercent(Number(e.target.value))}
                className="mt-3 w-full accent-sun"
              />
              <p className="mt-2 text-xs text-muted">
                Not sure? Industry conversations commonly cite figures in
                the 10-30% range for after-hours or delayed leads — pick
                whatever feels honest for your business.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Rough estimated cost
            </p>
            <p className="display-tight mt-2 font-display text-4xl font-bold text-starlight sm:text-5xl">
              ${fmt(monthlyLoss)}
              <span className="text-lg font-normal text-muted">/mo</span>
            </p>
            <p className="mt-1 text-sm text-muted">
              ≈ ${fmt(yearlyLoss)} per year, at these numbers
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          This is a simple illustrative multiplication (job value ×
          enquiries × your estimated miss rate), not a scientific or
          audited figure — it&rsquo;s here to make the scale of the problem
          concrete, not to be precise to the dollar.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/northstar"
            className="glass-panel pop-button rounded-full px-8 py-4 font-display text-sm font-semibold text-starlight"
          >
            See how the fix works →
          </Link>
          <Link
            href="/contact"
            className="pop-button glow-cta rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
          >
            Start a build
          </Link>
        </div>
      </div>
    </main>
  );
}
