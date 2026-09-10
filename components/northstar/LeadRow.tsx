import Link from "next/link";
import type { Lead } from "@/lib/northstar/types";
import ScoreBadge from "./ScoreBadge";

export default function LeadRow({ lead }: { lead: Lead }) {
  return (
    <Link
      href={`/northstar/leads/${lead.id}`}
      className="glass-panel flex flex-col gap-3 rounded-2xl p-4 transition hover:border-sun/30 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-semibold text-starlight">{lead.customerName}</p>
          {lead.humanReviewRequired && (
            <span className="rounded-full border border-punch/40 bg-punch/10 px-2 py-0.5 font-mono text-[10px] tracking-widest text-punch uppercase">
              Needs review
            </span>
          )}
        </div>
        <p className="mt-1 truncate text-sm text-muted">
          {lead.serviceRequested} · {lead.source} · {lead.receivedAt}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <span className="font-mono text-xs text-muted">{lead.status}</span>
        <ScoreBadge score={lead.opportunityScore} temperature={lead.leadTemperature} />
      </div>
    </Link>
  );
}
