import { LEADS } from "@/lib/northstar/data";
import RunDemo from "@/components/northstar/RunDemo";
import AutomationTimeline from "@/components/northstar/AutomationTimeline";

export default function ActivityPage() {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-widest text-mint uppercase">
        Northstar AI
      </p>
      <h1 className="display-tight mt-1 font-display text-3xl font-bold">
        Automation Activity
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Run a live enquiry through the pipeline below, or scroll down to see
        the automation log for every lead already in the system.
      </p>

      <div className="mt-8">
        <RunDemo />
      </div>

      <h2 className="mt-12 font-display text-lg font-bold">
        Full activity log
      </h2>
      <div className="mt-4 space-y-4">
        {LEADS.map((lead) => (
          <div key={lead.id} className="glass-panel rounded-2xl p-5">
            <p className="font-mono text-xs text-starlight">
              {lead.customerName} — {lead.serviceRequested}
            </p>
            <div className="mt-3">
              <AutomationTimeline events={lead.timeline} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
