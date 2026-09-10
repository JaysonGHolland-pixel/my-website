"use client";

import { useState } from "react";
import Link from "next/link";
import type { Lead } from "@/lib/northstar/types";
import ScoreBadge from "@/components/northstar/ScoreBadge";
import AutomationTimeline from "@/components/northstar/AutomationTimeline";

export default function LeadDetailClient({ lead }: { lead: Lead }) {
  const [responseText, setResponseText] = useState(lead.responseDraft);
  const [editing, setEditing] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const flash = (msg: string) => {
    setActionMessage(msg);
    setTimeout(() => setActionMessage(null), 3000);
  };

  return (
    <div>
      <Link
        href="/northstar/leads"
        className="font-mono text-xs text-muted underline decoration-white/20 hover:text-starlight"
      >
        ← Back to leads
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="display-tight font-display text-3xl font-bold">
            {lead.customerName}
          </h1>
          <p className="mt-1 text-sm text-muted">
            {lead.source} · {lead.receivedAt}
          </p>
        </div>
        <ScoreBadge score={lead.opportunityScore} temperature={lead.leadTemperature} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="glass-panel rounded-2xl p-5">
            <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
              Customer
            </h2>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-muted">Name</dt>
                <dd className="mt-0.5 text-starlight">{lead.customerName}</dd>
              </div>
              <div>
                <dt className="text-muted">Contact</dt>
                <dd className="mt-0.5 text-starlight">{lead.contactInfo}</dd>
              </div>
              <div>
                <dt className="text-muted">Source</dt>
                <dd className="mt-0.5 text-starlight">{lead.source}</dd>
              </div>
              <div>
                <dt className="text-muted">Status</dt>
                <dd className="mt-0.5 text-starlight">{lead.status}</dd>
              </div>
            </dl>
          </section>

          <section className="glass-panel rounded-2xl p-5">
            <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
              Enquiry
            </h2>
            <p className="mt-3 text-sm text-starlight/90">
              &ldquo;{lead.originalEnquiry}&rdquo;
            </p>
          </section>

          <section className="glass-panel rounded-2xl p-5">
            <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
              AI analysis
            </h2>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-muted">Summary</dt>
                <dd className="mt-0.5 text-starlight">{lead.enquirySummary}</dd>
              </div>
              <div>
                <dt className="text-muted">Service</dt>
                <dd className="mt-0.5 text-starlight">{lead.serviceRequested}</dd>
              </div>
              <div>
                <dt className="text-muted">Timeframe</dt>
                <dd className="mt-0.5 text-starlight">{lead.timeframe}</dd>
              </div>
              <div>
                <dt className="text-muted">Urgency</dt>
                <dd className="mt-0.5 text-starlight capitalize">{lead.urgency}</dd>
              </div>
              <div>
                <dt className="text-muted">Estimated value</dt>
                <dd className="mt-0.5 text-starlight">{lead.estimatedValue}</dd>
              </div>
              <div>
                <dt className="text-muted">Buying intent</dt>
                <dd className="mt-0.5 text-starlight capitalize">
                  {lead.buyingIntent}
                </dd>
              </div>
            </dl>
          </section>

          <section className="glass-panel rounded-2xl p-5">
            <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
              Why this score?
            </h2>
            <p className="mt-2 text-xs text-muted">
              AI Opportunity Score: {lead.opportunityScore}/100 — not a
              scientific measurement, a weighted read of the signals below.
            </p>
            <ul className="mt-3 space-y-2">
              {lead.scoreReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-starlight/90">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sun" />
                  {reason}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-panel rounded-2xl p-5">
            <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
              Missing information
            </h2>
            {lead.missingInformation.length === 0 ? (
              <p className="mt-2 text-sm text-muted">
                Nothing outstanding — the enquiry included what&rsquo;s needed
                to act.
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {lead.missingInformation.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-starlight/90">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-punch" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="glass-panel rounded-2xl p-5">
            <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
              Recommended action
            </h2>
            <p className="mt-2 text-sm text-starlight/90">
              {lead.recommendedAction}
            </p>
          </section>

          <section className="glass-panel rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
                AI response
              </h2>
              {!editing && (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="font-mono text-[11px] text-muted underline decoration-white/20 hover:text-starlight"
                >
                  Edit
                </button>
              )}
            </div>

            {editing ? (
              <textarea
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                rows={5}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-starlight outline-none focus:border-sun"
              />
            ) : (
              <p className="mt-3 whitespace-pre-line text-sm text-starlight/90">
                {responseText}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setEditing(false);
                  flash("Response approved (demo action — no email actually sent).");
                }}
                className="pop-button rounded-full bg-gradient-to-r from-volt to-punch px-4 py-2 font-mono text-xs font-semibold text-white"
              >
                Approve Response
              </button>
              <button
                type="button"
                onClick={() => setEditing((v) => !v)}
                className="glass-panel pop-button rounded-full px-4 py-2 font-mono text-xs text-starlight"
              >
                {editing ? "Done Editing" : "Edit Response"}
              </button>
              <button
                type="button"
                onClick={() => flash("Marked for human review.")}
                className="glass-panel pop-button rounded-full px-4 py-2 font-mono text-xs text-starlight"
              >
                Mark Human Review
              </button>
              <button
                type="button"
                onClick={() => flash("Follow-up task created.")}
                className="glass-panel pop-button rounded-full px-4 py-2 font-mono text-xs text-starlight"
              >
                Create Follow-up
              </button>
            </div>

            {actionMessage && (
              <p className="mt-3 font-mono text-xs text-mint">{actionMessage}</p>
            )}
          </section>
        </div>

        <div className="lg:col-span-1">
          <section className="glass-panel sticky top-8 rounded-2xl p-5">
            <h2 className="font-mono text-[10px] tracking-widest text-mint uppercase">
              Automation timeline
            </h2>
            <div className="mt-4">
              <AutomationTimeline events={lead.timeline} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
