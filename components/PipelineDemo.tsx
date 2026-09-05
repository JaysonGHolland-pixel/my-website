"use client";

import { useEffect, useRef, useState } from "react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import PhaseBar, { type Phase } from "@/components/PhaseBar";

export type PipelineStep = {
  label: string;
  log: string;
  phase: Phase;
};

type Status = "idle" | "running" | "done";

export default function PipelineDemo({
  tag,
  title,
  problem,
  steps,
  architecture,
  accent,
}: {
  tag: string;
  title: string;
  problem: string;
  steps: PipelineStep[];
  architecture: string[];
  accent: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [logs, setLogs] = useState<{ time: string; text: string }[]>([]);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const run = () => {
    setStatus("running");
    setActiveIndex(0);
    setLogs([
      {
        time: new Date().toLocaleTimeString(),
        text: steps[0].log,
      },
    ]);

    let i = 0;
    const advance = () => {
      i += 1;
      if (i >= steps.length) {
        setStatus("done");
        return;
      }
      setActiveIndex(i);
      setLogs((prev) => [
        ...prev,
        { time: new Date().toLocaleTimeString(), text: steps[i].log },
      ]);
      timeoutRef.current = setTimeout(advance, 750);
    };
    timeoutRef.current = setTimeout(advance, 750);
  };

  const reset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStatus("idle");
    setActiveIndex(-1);
    setLogs([]);
  };

  const currentPhase =
    status === "idle" ? null : status === "done" ? "output" : steps[activeIndex]?.phase ?? null;

  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="rounded-full px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase"
            style={{
              backgroundColor: `color-mix(in srgb, ${accent} 20%, transparent)`,
              color: accent,
            }}
          >
            {tag}
          </span>
          <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
            Simulated data — no live backend
          </span>
        </div>
        <span
          className="font-mono text-[10px] font-bold tracking-widest uppercase"
          style={{ color: status === "idle" ? "var(--color-muted)" : accent }}
        >
          {status === "idle" ? "Waiting" : status === "running" ? "Processing" : "Complete"}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
        {problem}
      </p>

      <div className="mt-6 overflow-x-auto pb-1">
        <PhaseBar active={currentPhase} accent={accent} />
      </div>

      {status === "idle" && (
        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <span className="glass-panel rounded-full px-3 py-1.5 font-mono text-[11px] text-starlight/80">
                {step.label}
              </span>
              {i < steps.length - 1 && (
                <span className="text-muted" aria-hidden="true">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {status === "idle" && (
          <button
            type="button"
            onClick={run}
            className="pop-button glow-cta rounded-full px-6 py-3 font-display text-sm font-semibold text-white"
            style={{ background: accent }}
          >
            &#9654; Run demo
          </button>
        )}
        {status !== "idle" && (
          <button
            type="button"
            onClick={reset}
            className="pop-button rounded-full border border-white/15 px-6 py-3 font-display text-sm font-semibold"
          >
            {status === "running" ? "Reset" : "Run again"}
          </button>
        )}
        <button
          type="button"
          onClick={() => setShowArchitecture((v) => !v)}
          className="pop-button rounded-full border border-white/15 px-6 py-3 font-display text-sm font-semibold text-muted"
        >
          {showArchitecture ? "Hide" : "View"} architecture
        </button>
      </div>

      {status !== "idle" && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Status
            </p>
            <ul className="mt-3 space-y-2">
              {steps.map((step, i) => {
                const state =
                  i < activeIndex || status === "done"
                    ? "done"
                    : i === activeIndex
                      ? "active"
                      : "pending";
                return (
                  <li key={step.label} className="flex items-center gap-3 text-sm">
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
                            : accent,
                      }}
                    />
                    <span
                      className={
                        state === "pending" ? "text-muted" : "text-starlight"
                      }
                    >
                      {step.label}
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
            {status === "done" && (
              <p className="mt-4 font-mono text-xs font-bold tracking-widest text-mint uppercase">
                &#10003; Complete
              </p>
            )}
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              System log
            </p>
            <div className="glass-panel mt-3 h-40 overflow-y-auto rounded-xl p-3 font-mono text-[11px] leading-relaxed text-starlight/80">
              {logs.map((log, i) => (
                <p key={i}>
                  <span className="text-muted">[{log.time}]</span> {log.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {showArchitecture && <ArchitectureDiagram steps={architecture} />}
    </div>
  );
}
