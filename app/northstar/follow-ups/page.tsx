import { LEADS } from "@/lib/northstar/data";
import LeadRow from "@/components/northstar/LeadRow";

export default function FollowUpsPage() {
  const followUps = LEADS.filter(
    (l) => l.status === "Follow-up Scheduled" || l.humanReviewRequired
  );

  return (
    <div>
      <p className="font-mono text-[10px] tracking-widest text-mint uppercase">
        Northstar AI
      </p>
      <h1 className="display-tight mt-1 font-display text-3xl font-bold">
        Follow-ups
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Leads the AI has flagged for a scheduled follow-up or human
        attention, so nothing gets forgotten between the first reply and the
        next step.
      </p>

      <div className="mt-8 space-y-3">
        {followUps.length === 0 ? (
          <p className="text-sm text-muted">Nothing due right now.</p>
        ) : (
          followUps.map((lead) => <LeadRow key={lead.id} lead={lead} />)
        )}
      </div>
    </div>
  );
}
