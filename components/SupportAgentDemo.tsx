"use client";

import { useEffect, useRef, useState } from "react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import PhaseBar, { type Phase } from "@/components/PhaseBar";

const QUESTIONS = [
  {
    question: "Where is my order?",
    retrieved: "Order #4821 — shipped Tuesday, in transit, arriving Thursday.",
    reply:
      "Your order (#4821) shipped Tuesday and is on track to arrive Thursday. I'll email you the tracking link now.",
  },
  {
    question: "I want to change my delivery address.",
    retrieved: "Order #4821 — status: processing, address change window: open.",
    reply:
      "Order #4821 hasn't shipped yet, so I can update the address — just reply with the new one and I'll confirm it's changed.",
  },
  {
    question: "What is your refund policy?",
    retrieved: "Policy doc: refunds within 30 days, unused condition.",
    reply:
      "Refunds are accepted within 30 days if the item's unused. Want me to start a refund for a specific order?",
  },
];

const STAGES: { label: string; phase: Phase }[] = [
  { label: "Customer message received", phase: "input" },
  { label: "AI understands request", phase: "logic" },
  { label: "Order information retrieved", phase: "logic" },
  { label: "AI generates response", phase: "automation" },
  { label: "Conversation logged", phase: "output" },
];

const ARCHITECTURE = [
  "Chat widget / support inbox",
  "Webhook receives message",
  "AI Agent (intent + entity extraction)",
  "Order/CRM lookup via API",
  "Response generation",
  "Logging & handoff queue",
];

export default function SupportAgentDemo() {
  const [selected, setSelected] = useState<number | null>(null);
  const [stageIndex, setStageIndex] = useState(-1);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const ask = (i: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSelected(i);
    setStageIndex(0);

    let s = 0;
    const advance = () => {
      s += 1;
      if (s >= STAGES.length) return;
      setStageIndex(s);
      timeoutRef.current = setTimeout(advance, 550);
    };
    timeoutRef.current = setTimeout(advance, 550);
  };

  const active = selected !== null ? QUESTIONS[selected] : null;
  const done = stageIndex >= STAGES.length - 1;
  const currentPhase = active ? (done ? "output" : STAGES[stageIndex]?.phase ?? null) : null;

  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-punch/20 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-punch uppercase">
            Demo Build 02
          </span>
          <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
            Simulated data — no live backend
          </span>
        </div>
        <span
          className="font-mono text-[10px] font-bold tracking-widest uppercase"
          style={{ color: !active ? "var(--color-muted)" : "var(--color-punch)" }}
        >
          {!active ? "Waiting" : done ? "Complete" : "Processing"}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold">
        AI customer support agent
      </h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
        Support inboxes fill up with the same handful of questions. This
        agent reads the request, pulls the real order/account context, and
        drafts a reply — instead of a human retyping the same answer for the
        tenth time today.
      </p>

      <div className="mt-6 overflow-x-auto pb-1">
        <PhaseBar active={currentPhase} accent="var(--color-punch)" />
      </div>

      <p className="mt-6 font-mono text-[10px] tracking-widest text-muted uppercase">
        Try a question
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {QUESTIONS.map((q, i) => (
          <button
            key={q.question}
            type="button"
            onClick={() => ask(i)}
            className={`pop-button rounded-full border px-4 py-2 font-mono text-xs ${
              selected === i
                ? "border-punch bg-punch/15 text-starlight"
                : "border-white/15 text-muted"
            }`}
          >
            &ldquo;{q.question}&rdquo;
          </button>
        ))}
      </div>

      {active && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Pipeline
            </p>
            <ul className="mt-3 space-y-2">
              {STAGES.map((stage, i) => {
                const state =
                  i < stageIndex
                    ? "done"
                    : i === stageIndex
                      ? "active"
                      : "pending";
                return (
                  <li key={stage.label} className="flex items-center gap-3 text-sm">
                    <span
                      className={state === "active" ? "pulse-dot" : ""}
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: "999px",
                        background:
                          state === "pending"
                            ? "rgba(255,255,255,0.2)"
                            : "var(--color-punch)",
                      }}
                    />
                    <span
                      className={
                        state === "pending" ? "text-muted" : "text-starlight"
                      }
                    >
                      {stage.label}
                    </span>
                    {state === "done" && (
                      <span className="ml-auto font-mono text-[10px] text-mint">
                        &#10003;
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Conversation
            </p>
            <div className="mt-3 space-y-3 text-sm">
              <p className="rounded-2xl rounded-tr-sm bg-white/10 px-3 py-2">
                {active.question}
              </p>
              {stageIndex >= 2 && (
                <p className="font-mono text-[11px] text-muted">
                  &#8226; retrieved: {active.retrieved}
                </p>
              )}
              {stageIndex >= 3 && (
                <p className="rounded-2xl rounded-tl-sm bg-punch/20 px-3 py-2 text-starlight">
                  {active.reply}
                </p>
              )}
              {stageIndex >= 4 && (
                <p className="font-mono text-[10px] text-mint">
                  &#10003; logged to conversation history
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setShowArchitecture((v) => !v)}
          className="pop-button rounded-full border border-white/15 px-6 py-3 font-display text-sm font-semibold text-muted"
        >
          {showArchitecture ? "Hide" : "View"} architecture
        </button>
      </div>

      {showArchitecture && <ArchitectureDiagram steps={ARCHITECTURE} />}
    </div>
  );
}
