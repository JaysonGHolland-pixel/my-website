export type Phase = "input" | "logic" | "automation" | "output";

const PHASES: { key: Phase; label: string }[] = [
  { key: "input", label: "Input" },
  { key: "logic", label: "AI / Logic" },
  { key: "automation", label: "Automation" },
  { key: "output", label: "Output" },
];

export default function PhaseBar({
  active,
  accent,
}: {
  active: Phase | null;
  accent: string;
}) {
  return (
    <div className="flex items-center">
      {PHASES.map((phase, i) => {
        const isActive = phase.key === active;
        const isPast =
          active !== null &&
          PHASES.findIndex((p) => p.key === active) > i;
        return (
          <div key={phase.key} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={isActive ? "pulse-dot" : ""}
                style={{
                  display: "block",
                  width: 9,
                  height: 9,
                  borderRadius: "999px",
                  background:
                    isActive || isPast ? accent : "rgba(255,255,255,0.15)",
                  transition: "background 0.3s ease",
                }}
              />
              <span
                className="font-mono text-[9px] tracking-widest uppercase"
                style={{ color: isActive ? accent : "var(--color-muted)" }}
              >
                {phase.label}
              </span>
            </div>
            {i < PHASES.length - 1 && (
              <div
                className="mx-1.5 h-px w-3 sm:mx-2 sm:w-12"
                style={{
                  background: isPast
                    ? accent
                    : "rgba(255,255,255,0.15)",
                  transition: "background 0.3s ease",
                  marginBottom: "1.1rem",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
