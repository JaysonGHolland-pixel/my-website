"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { LEADS } from "@/lib/northstar/data";
import ScoreBadge from "./ScoreBadge";

// The 4 scenarios from the brief — deliberately different outcomes, so
// running the demo repeatedly shows the AI making different decisions
// rather than every enquiry landing as a hot lead.
const DEMO_LEAD_IDS = [
  "kitchen-reno-6wk",
  "bathroom-cost-question",
  "water-damage-urgent",
  "commercial-fitout",
];

const DEMO_LEADS = DEMO_LEAD_IDS.map(
  (id) => LEADS.find((l) => l.id === id)!
);

function formatClock(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

// Generic stage labels the live run narrates as it plays — the specific
// per-lead outcome (score, escalation) only appears once analysis "completes".
const STAGES = [
  "NEW ENQUIRY RECEIVED",
  "AI ANALYSING ENQUIRY",
  "LEAD_QUALIFIED_PLACEHOLDER",
  "RESPONSE DRAFTED",
  "CRM RECORD CREATED",
  "FOLLOW_UP_PLACEHOLDER",
  "AUTOMATION COMPLETE",
];

export default function RunDemo() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [log, setLog] = useState<{ time: string; label: string }[]>([]);
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lead = DEMO_LEADS[selectedIndex];

  const runDemo = () => {
    if (running) return;
    setRunning(true);
    setDone(false);
    setLog([]);

    const stages = STAGES.map((s) => {
      if (s === "LEAD_QUALIFIED_PLACEHOLDER") {
        return `LEAD QUALIFIED — SCORE ${lead.opportunityScore}/100 (${lead.leadTemperature.toUpperCase()})`;
      }
      if (s === "FOLLOW_UP_PLACEHOLDER") {
        return lead.humanReviewRequired
          ? "ESCALATED TO HUMAN REVIEW"
          : "FOLLOW-UP TASK CREATED";
      }
      return s;
    });

    let i = 0;
    const step = () => {
      // Capture this step's entry by value before scheduling/incrementing —
      // setLog's updater runs asynchronously, so reading `stages[i]` lazily
      // inside it would see the already-incremented `i` from later steps.
      const entry = { time: formatClock(new Date()), label: stages[i] };
      setLog((prev) => [...prev, entry]);
      i++;
      if (i < stages.length) {
        timeoutRef.current = setTimeout(step, 650 + Math.random() * 400);
      } else {
        setRunning(false);
        setDone(true);
      }
    };
    step();
  };

  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-mint uppercase">
            Run demo
          </p>
          <h2 className="display-tight mt-1 font-display text-xl font-bold">
            Watch a new enquiry get processed
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {DEMO_LEADS.map((l, i) => (
            <button
              key={l.id}
              type="button"
              disabled={running}
              onClick={() => {
                setSelectedIndex(i);
                setLog([]);
                setDone(false);
              }}
              className={`rounded-full px-3 py-1.5 font-mono text-[11px] transition ${
                i === selectedIndex
                  ? "bg-sun text-void font-semibold"
                  : "glass-panel text-muted hover:text-starlight"
              }`}
            >
              Scenario {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
          Incoming enquiry
        </p>
        <p className="mt-2 text-sm text-starlight/90">
          &ldquo;{lead.originalEnquiry}&rdquo;
        </p>
      </div>

      <button
        type="button"
        onClick={runDemo}
        disabled={running}
        className="pop-button glow-cta mt-5 rounded-full bg-gradient-to-r from-volt to-punch px-6 py-3 font-display text-sm font-semibold text-white shadow-lg disabled:opacity-60"
      >
        {running ? "Processing…" : "Run Demo"}
      </button>

      {log.length > 0 && (
        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
          <ol className="space-y-2">
            {log.map((entry, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                <span className="font-mono text-xs text-muted">{entry.time}</span>
                <span className="font-mono text-xs tracking-wide text-starlight/90">
                  {entry.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {done && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 p-4">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Outcome
            </p>
            <p className="mt-1 text-sm text-starlight">
              {lead.recommendedAction}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ScoreBadge score={lead.opportunityScore} temperature={lead.leadTemperature} />
            <Link
              href={`/northstar/leads/${lead.id}`}
              className="glass-panel pop-button rounded-full px-4 py-2 font-mono text-xs text-starlight"
            >
              View full lead →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
