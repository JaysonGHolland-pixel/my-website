import Link from "next/link";
import { LEADS, getDashboardStats } from "@/lib/northstar/data";
import StatCard from "@/components/northstar/StatCard";
import LeadRow from "@/components/northstar/LeadRow";

export default function NorthstarDashboard() {
  const stats = getDashboardStats();
  const attentionNeeded = LEADS.filter(
    (l) => l.humanReviewRequired || l.leadTemperature === "hot"
  ).slice(0, 4);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-mint uppercase">
            Northstar Home Services · Case study demo
          </p>
          <h1 className="display-tight mt-1 font-display text-3xl font-bold">
            Lead Operations Dashboard
          </h1>
        </div>
        <span className="glass-panel rounded-full px-4 py-1.5 font-mono text-[11px] text-sun">
          DEMO DATA
        </span>
      </div>
      <p className="mt-2 max-w-xl text-sm text-muted">
        AI-assisted lead operations that helps your team respond faster and
        follow up consistently — every number below is demo data for a
        fictional renovation business, not a real client&rsquo;s figures.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <StatCard label="New enquiries (today)" value={stats.newEnquiries} />
        <StatCard label="Hot leads" value={stats.hotLeads} />
        <StatCard label="Follow-ups due" value={stats.followUpsDue} />
        <StatCard
          label="Human reviews required"
          value={stats.humanReviewsRequired}
        />
        <StatCard
          label="Avg. AI response time"
          value={`${stats.avgAiResponseTimeSeconds}s`}
          hint="vs. hours or days manually"
        />
        <StatCard
          label="Estimated pipeline value"
          value={stats.estimatedPipelineValue}
        />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <h2 className="font-display text-lg font-bold">Needs attention</h2>
        <Link
          href="/northstar/leads"
          className="font-mono text-xs text-muted underline decoration-white/20 hover:text-starlight"
        >
          View all leads →
        </Link>
      </div>
      <div className="mt-4 space-y-3">
        {attentionNeeded.map((lead) => (
          <LeadRow key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
}
