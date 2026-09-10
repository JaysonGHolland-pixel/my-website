import type { LeadTemperature } from "@/lib/northstar/types";

const TEMP_STYLES: Record<LeadTemperature, string> = {
  hot: "text-punch border-punch/40 bg-punch/10",
  warm: "text-sun border-sun/40 bg-sun/10",
  cold: "text-muted border-white/15 bg-white/5",
};

export default function ScoreBadge({
  score,
  temperature,
}: {
  score: number;
  temperature: LeadTemperature;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs font-semibold ${TEMP_STYLES[temperature]}`}
    >
      {score}/100
      <span className="uppercase tracking-widest opacity-80">
        {temperature}
      </span>
    </span>
  );
}
