# Northstar AI — Lead Operations (Portfolio Case Study)

A case-study demo built into jayson-ai-holland.com at `/northstar`, showing
what an AI-assisted lead operations system looks like for a fictional
home renovation business, **Northstar Home Services**.

## 1. Business problem

Northstar receives enquiries through a website form, email, Facebook/
Instagram DMs, and phone calls staff enter manually. Staff waste time
reading each one, deciding what's urgent, drafting a reply, updating a
CRM, and remembering to follow up — and some enquiries get missed or
answered too slowly to matter.

## 2. Solution

An AI layer that reads every enquiry the moment it arrives, extracts
structured information (service, timeframe, urgency, estimated value),
scores it as an **AI Opportunity Score** with plain-language reasons,
drafts a reply, flags what's missing, and tells staff exactly what to do
next — while keeping a human in the loop for anything uncertain or
urgent.

## 3. How the system works

1. An enquiry comes in (demo: 4 pre-written realistic examples; live: a
   real n8n workflow).
2. The AI analyzes it: summary, service match, urgency, timeframe,
   estimated value, buying intent.
3. It's scored 0-100 with named reasons, not a black-box number.
4. Missing information is listed so staff know what to ask.
5. A recommended action and a drafted reply are produced.
6. Anything urgent or low-confidence is flagged for human review rather
   than auto-sent.
7. Everything lands in a lead record with a visible automation timeline.

## 4. Architecture

```
Website / Email / Facebook / Phone (manual entry)
        ↓
     n8n (webhook → qualification → response)
        ↓
   AI analysis (Claude)
        ↓
  Lead record (score + reasoning)
        ↓
  Follow-up task / human escalation
```

In this build: Next.js frontend + a typed data/adapter layer stand in for
the "CRM / database" and orchestration layer, with a real n8n workflow
(**Lead Response Automation**) already built and callable in LIVE mode.

## 5. Technology used

Next.js (App Router), React, TypeScript, Tailwind CSS — reusing this
site's existing design system (fonts, color tokens, `glass-panel`
styling). n8n for workflow orchestration. Claude for the AI reasoning
layer (conceptually — the demo's scoring/copy is pre-written; live mode
would call Claude via the n8n workflow).

## 6. Example workflow

See `/northstar/activity` → "Run Demo." Pick one of 4 scenarios (a
6-week kitchen reno, a vague pricing question, an urgent water-damage
callout, an out-of-scope commercial enquiry) and watch it get scored
differently in real time — the point being the AI makes different
decisions per enquiry, not "everything is hot."

## 7. Screenshots

See `projects/northstar-shots/` for reference screenshots (dashboard,
lead detail, mobile layout) taken during development.

## 8. Demo instructions

1. `npm run dev` from `projects/my-website`.
2. Visit `/northstar` for the dashboard, `/northstar/leads` for the full
   list, `/northstar/activity` to run the live demo.
3. Everything is labeled **DEMO DATA** — no real business figures.

## 9. What a real deployment would need

- A real CRM/database instead of the in-memory demo array (e.g.
  Postgres/Supabase) with actual enquiry ingestion (webhooks from the
  client's real form/inbox/social channels).
- The n8n workflow deployed somewhere publicly reachable (not
  localhost) so it can receive real webhooks, with the client's own
  n8n instance or a hosted one.
- Real auth (this demo has none — it's a public case study, not a
  logged-in product).
- A real "create enquiry" input path with validation, rather than only
  pre-written scenarios.

## 10. Security considerations

No secrets are hardcoded — the n8n webhook URL and live-mode flag are
environment variables (`.env.example`). Demo mode never makes an
external network call. A real deployment would need per-client auth,
rate limiting on any public intake endpoint, and not exposing the n8n
instance directly to the internet without its own auth.

## 11. Known limitations

- Static demo data — no persistence, no real form to submit a new
  enquiry through (only "Run Demo" replays the 4 written scenarios).
- LIVE INTEGRATION only works locally, since the real n8n instance
  isn't publicly hosted.
- Action buttons on the lead detail page (Approve/Edit/Mark
  Review/Follow-up) are demo interactions — they update local UI state
  only, they don't send real emails or write to a real CRM.
- Only 6 pages of the original spec were fully built (Dashboard, Leads,
  Lead Detail, Automation Activity, Follow-ups, Settings) — Follow-ups
  and Settings are intentionally lighter than Dashboard/Leads/Detail,
  which are the actual sales-demo core.

## 12. Potential integrations

Real CRM (HubSpot/Pipedrive), real form/webhook sources (Typeform,
Facebook Lead Ads, a phone system's call-log API), SMS/email sending for
the drafted response, Slack/email for human-review notifications.
