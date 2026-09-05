"use client";

import { useEffect, useRef, useState } from "react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

type Stage =
  | "idle"
  | "receiving"
  | "analyzing"
  | "qualified"
  | "crmUpdated"
  | "responseGenerated"
  | "salesAlert"
  | "followUp"
  | "complete";

const STAGE_ORDER: Stage[] = [
  "receiving",
  "analyzing",
  "qualified",
  "crmUpdated",
  "responseGenerated",
  "salesAlert",
  "followUp",
  "complete",
];

const DURATIONS: Record<Stage, number> = {
  idle: 0,
  receiving: 700,
  analyzing: 1300,
  qualified: 1400,
  crmUpdated: 1200,
  responseGenerated: 1800,
  salesAlert: 1200,
  followUp: 1200,
  complete: 0,
};

const LOG_CODES: Record<Stage, string> = {
  idle: "",
  receiving: "LEAD_RECEIVED",
  analyzing: "AI_ANALYSIS_STARTED",
  qualified: "LEAD_QUALIFIED",
  crmUpdated: "CRM_RECORD_CREATED",
  responseGenerated: "RESPONSE_GENERATED",
  salesAlert: "SALES_ALERT_TRIGGERED",
  followUp: "FOLLOW_UP_SCHEDULED",
  complete: "WORKFLOW_COMPLETE",
};

const NODES: { key: Stage; label: string }[] = [
  { key: "receiving", label: "New lead" },
  { key: "analyzing", label: "AI qualification" },
  { key: "qualified", label: "Lead score" },
  { key: "crmUpdated", label: "CRM" },
  { key: "responseGenerated", label: "AI response" },
  { key: "salesAlert", label: "Sales alert" },
  { key: "followUp", label: "Follow-up" },
];

const ARCHITECTURE = [
  "Website / form",
  "Webhook",
  "AI Agent",
  "Lead qualification",
  "CRM / database",
  "Personalized response",
  "Sales notification",
  "Follow-up",
  "Logging / monitoring",
];

const ENQUIRY = {
  name: "Sarah Mitchell",
  business: "Mitchell Renovations",
  message:
    "Hi, we're looking for a quote for renovating our kitchen. We'd like to get someone out to look at the property next week.",
};

const EXTRACTED = {
  service: "Kitchen renovation",
  timeframe: "Next week",
  priority: "High",
  score: 87,
};

const AI_RESPONSE = `Hi Sarah,\n\nThanks for reaching out. We'd be happy to help with your kitchen renovation. I've noted that you're looking to arrange a site visit next week and we'll be in touch to arrange a suitable time.`;

function formatClock(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export default function LeadRecoveryDemo() {
  const [stage, setStage] = useState<Stage>("idle");
  const [logs, setLogs] = useState<{ time: string; code: string }[]>([]);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const logStage = (s: Stage) => {
    setLogs((prev) => [
      ...prev,
      { time: formatClock(new Date()), code: LOG_CODES[s] },
    ]);
  };

  const run = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLogs([]);

    let i = 0;
    const step = () => {
      const s = STAGE_ORDER[i];
      setStage(s);
      logStage(s);
      i += 1;
      if (i < STAGE_ORDER.length) {
        timeoutRef.current = setTimeout(step, DURATIONS[s]);
      }
    };
    step();
  };

  const reset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStage("idle");
    setLogs([]);
  };

  const stageIndex = stage === "idle" ? -1 : STAGE_ORDER.indexOf(stage);
  const isDone = stage === "complete";
  const isRunning = stage !== "idle" && !isDone;

  const nodeState = (nodeIndex: number): "waiting" | "processing" | "done" => {
    if (stageIndex < 0) return "waiting";
    if (nodeIndex < stageIndex) return "done";
    if (nodeIndex === stageIndex) return isDone ? "done" : "processing";
    return "waiting";
  };

  return (
    <div className="glass-panel rounded-[2rem] border border-volt/20 p-6 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-volt/20 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-volt uppercase">
            Interactive Prototype
          </span>
          <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
            Simulated data — no live backend
          </span>
        </div>
        <span
          className="font-mono text-[10px] font-bold tracking-widest uppercase"
          style={{ color: stage === "idle" ? "var(--color-muted)" : "var(--color-volt)" }}
        >
          {stage === "idle" ? "Waiting" : isDone ? "Complete" : "Processing"}
        </span>
      </div>

      <h3 className="mt-5 font-display text-3xl font-bold">
        AI Lead Recovery System
      </h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
        See what happens when a new lead arrives — even after hours. Instead
        of sitting in an inbox until tomorrow, the system qualifies the
        lead, updates the CRM, drafts a response, alerts the sales team, and
        schedules follow-up.
      </p>

      {/* incoming enquiry, always visible */}
      <div className="glass-panel mt-6 rounded-2xl p-4">
        <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
          Demo enquiry
        </p>
        <p className="mt-2 text-sm text-starlight/90">
          <strong>{ENQUIRY.name}</strong> — {ENQUIRY.business}
        </p>
        <p className="mt-1 text-sm text-muted italic">
          &ldquo;{ENQUIRY.message}&rdquo;
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {stage === "idle" && (
          <button
            type="button"
            onClick={run}
            className="pop-button glow-cta rounded-full bg-gradient-to-r from-volt to-punch px-7 py-3.5 font-display text-sm font-semibold text-white"
          >
            &#9654; Run the automation
          </button>
        )}
        {isDone && (
          <button
            type="button"
            onClick={run}
            className="pop-button glow-cta rounded-full bg-gradient-to-r from-volt to-punch px-7 py-3.5 font-display text-sm font-semibold text-white"
          >
            &#9654; Run again
          </button>
        )}
        {isRunning && (
          <button
            type="button"
            onClick={reset}
            className="pop-button rounded-full border border-white/15 px-7 py-3.5 font-display text-sm font-semibold"
          >
            Reset
          </button>
        )}
        <button
          type="button"
          onClick={() => setShowArchitecture((v) => !v)}
          className="pop-button rounded-full border border-white/15 px-7 py-3.5 font-display text-sm font-semibold text-muted"
        >
          {showArchitecture ? "Hide" : "View"} architecture
        </button>
      </div>

      {stage !== "idle" && (
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          {/* left: workflow + log */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Workflow
            </p>
            <div className="relative mt-4">
              <ol className="space-y-4">
                {NODES.map((node, i) => {
                  const state = nodeState(i);
                  const nextIsLit = nodeState(i) !== "waiting" && i < NODES.length - 1;
                  return (
                    <li key={node.key} className="flex items-stretch gap-3 pl-0">
                      {/* icon column: circle on top, connector segment fills the rest of the row's height */}
                      <div className="flex flex-col items-center">
                        <span
                          className={state === "processing" ? "pulse-dot" : ""}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 32,
                            height: 32,
                            borderRadius: "999px",
                            background:
                              state === "waiting"
                                ? "rgba(255,255,255,0.06)"
                                : "color-mix(in srgb, var(--color-volt) 25%, transparent)",
                            border:
                              state === "processing"
                                ? "1.5px solid var(--color-volt)"
                                : "1px solid transparent",
                            flexShrink: 0,
                          }}
                        >
                          {state === "done" ? (
                            <span className="font-mono text-xs text-mint">&#10003;</span>
                          ) : (
                            <span
                              className="font-mono text-[10px]"
                              style={{ color: state === "processing" ? "var(--color-volt)" : "var(--color-muted)" }}
                            >
                              {i + 1}
                            </span>
                          )}
                        </span>
                        {i < NODES.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="mt-1.5 mb-1.5 w-[2px] flex-1 rounded-full transition-colors duration-300"
                            style={{
                              minHeight: 6,
                              background: nextIsLit
                                ? "var(--color-volt)"
                                : "rgba(255,255,255,0.12)",
                            }}
                          />
                        )}
                      </div>

                      <div className="flex flex-1 items-center gap-3 self-center">
                        <span
                          className={`text-sm ${state === "waiting" ? "text-muted" : "text-starlight"}`}
                        >
                          {node.label}
                        </span>
                        <span className="ml-auto font-mono text-[9px] tracking-widest text-muted uppercase">
                          {state === "waiting" ? "Waiting" : state === "processing" ? "Processing" : "Complete"}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <p className="mt-8 font-mono text-[10px] tracking-widest text-muted uppercase">
              Event log
            </p>
            <div className="glass-panel mt-3 h-36 overflow-y-auto rounded-xl p-3 font-mono text-[11px] leading-relaxed text-starlight/80">
              {logs.map((log, i) => (
                <p key={i}>
                  <span className="text-muted">{log.time}</span>{" "}
                  <span className="text-volt">{log.code}</span>
                </p>
              ))}
            </div>
          </div>

          {/* right: live detail panel */}
          <div className="glass-panel rounded-2xl p-5">
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Live detail
            </p>

            {stage === "receiving" && (
              <p className="mt-4 text-sm text-muted">
                Capturing the enquiry from the website form...
              </p>
            )}

            {stage === "analyzing" && (
              <div className="mt-4">
                <p className="font-display text-sm font-bold text-volt">
                  Analyzing lead...
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-starlight/80">
                  <li>Intent detected</li>
                  <li>Service identified</li>
                  <li>Timeframe extracted</li>
                  <li>Priority calculated</li>
                </ul>
              </div>
            )}

            {(stage === "qualified" ||
              stage === "crmUpdated" ||
              stage === "responseGenerated" ||
              stage === "salesAlert" ||
              stage === "followUp" ||
              stage === "complete") && (
              <div className="mt-4">
                <p className="font-display text-sm font-bold text-mint">
                  Qualified
                </p>
                <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs text-starlight/80">
                  <dt className="text-muted">Service</dt>
                  <dd>{EXTRACTED.service}</dd>
                  <dt className="text-muted">Timeframe</dt>
                  <dd>{EXTRACTED.timeframe}</dd>
                  <dt className="text-muted">Priority</dt>
                  <dd>{EXTRACTED.priority}</dd>
                  <dt className="text-muted">Lead score</dt>
                  <dd>{EXTRACTED.score}/100</dd>
                </dl>
              </div>
            )}

            {(stage === "crmUpdated" ||
              stage === "responseGenerated" ||
              stage === "salesAlert" ||
              stage === "followUp" ||
              stage === "complete") && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                  New contact
                </p>
                <p className="mt-1 text-sm text-starlight">
                  {ENQUIRY.name} — {ENQUIRY.business}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">
                  Status: Qualified · Priority: {EXTRACTED.priority} · Next:
                  Schedule consultation
                </p>
              </div>
            )}

            {(stage === "responseGenerated" ||
              stage === "salesAlert" ||
              stage === "followUp" ||
              stage === "complete") && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                  AI-drafted response
                </p>
                <p className="mt-2 rounded-xl bg-white/5 p-3 text-sm whitespace-pre-line text-starlight/90">
                  {AI_RESPONSE}
                </p>
              </div>
            )}

            {(stage === "salesAlert" ||
              stage === "followUp" ||
              stage === "complete") && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                  Sales alert
                </p>
                <p className="mt-1 text-sm text-starlight">
                  New high-priority lead — {ENQUIRY.name}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {EXTRACTED.service} · Score {EXTRACTED.score} · Contact
                  within 1 business hour
                </p>
              </div>
            )}

            {(stage === "followUp" || stage === "complete") && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                  Follow-up created
                </p>
                <p className="mt-1 font-mono text-xs text-starlight/90">
                  Task: Contact {ENQUIRY.name} · Priority: {EXTRACTED.priority}{" "}
                  · Status: Scheduled
                </p>
              </div>
            )}

            {isDone && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-mono text-xs font-bold tracking-widest text-mint uppercase">
                  &#10003; Automation complete
                </p>
                <ul className="mt-2 space-y-1 text-xs text-starlight/80">
                  <li>&#10003; Lead qualified</li>
                  <li>&#10003; CRM updated</li>
                  <li>&#10003; Response prepared</li>
                  <li>&#10003; Sales team notified</li>
                  <li>&#10003; Follow-up scheduled</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {showArchitecture && (
        <>
          <ArchitectureDiagram steps={ARCHITECTURE} />
          <p className="mt-3 text-xs text-muted">
            Each component can be replaced or connected to the tools a
            business already uses.
          </p>
        </>
      )}
    </div>
  );
}
