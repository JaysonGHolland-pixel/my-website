import { LEADS } from "@/lib/northstar/data";
import LeadRow from "@/components/northstar/LeadRow";

export default function LeadsPage() {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-widest text-mint uppercase">
        Northstar AI
      </p>
      <h1 className="display-tight mt-1 font-display text-3xl font-bold">
        Leads
      </h1>
      <p className="mt-2 text-sm text-muted">
        Every enquiry Northstar receives, scored and triaged automatically.
        Click a lead to see the full AI analysis and reasoning.
      </p>

      <div className="mt-8 space-y-3">
        {LEADS.map((lead) => (
          <LeadRow key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
}
