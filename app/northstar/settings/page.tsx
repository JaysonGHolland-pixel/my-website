import { NORTHSTAR_DEMO_MODE } from "@/lib/northstar/n8n-adapter";

export default function SettingsPage() {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-widest text-mint uppercase">
        Northstar AI
      </p>
      <h1 className="display-tight mt-1 font-display text-3xl font-bold">
        Settings
      </h1>

      <div className="mt-8 space-y-6">
        <section className="glass-panel rounded-2xl p-5">
          <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
            Automation mode
          </h2>
          <p className="mt-3 text-sm text-starlight">
            Currently running in{" "}
            <span className="font-semibold text-sun">
              {NORTHSTAR_DEMO_MODE ? "DEMO MODE" : "LIVE INTEGRATION"}
            </span>
          </p>
          <p className="mt-2 text-xs text-muted">
            Demo mode uses pre-built example leads and does not call any
            external service. Live integration would send real enquiries to
            an n8n workflow that qualifies the lead and drafts a reply — this
            requires n8n to be reachable from wherever the app is running,
            which on this public demo it is not (n8n runs locally, not on
            the public internet).
          </p>
        </section>

        <section className="glass-panel rounded-2xl p-5">
          <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
            Connected services (demo)
          </h2>
          <dl className="mt-3 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-muted">n8n workflow</dt>
              <dd className="text-starlight">
                Lead Response Automation{" "}
                <span className="text-muted">(local instance)</span>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">CRM / database</dt>
              <dd className="text-starlight">Demo data (in-memory)</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">AI model</dt>
              <dd className="text-starlight">Claude</dd>
            </div>
          </dl>
        </section>

        <section className="glass-panel rounded-2xl p-5">
          <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
            How the AI Opportunity Score works
          </h2>
          <p className="mt-3 text-sm text-starlight/90">
            Every lead is scored 0-100 based on a weighted read of: urgency,
            estimated project value, buying intent, how complete the enquiry
            is, stated timeframe, and how well the request matches
            Northstar&rsquo;s actual services. It is a decision-support
            signal for staff, not a scientific or guaranteed measure of
            whether a lead will convert — which is why every score comes
            with plain-language reasons, visible on each lead&rsquo;s detail
            page.
          </p>
        </section>
      </div>
    </div>
  );
}
