// Northstar's automation layer talks to n8n through this single adapter.
//
// DEMO MODE (default, and the only mode available on the deployed site):
// returns pre-scored demo leads instantly, no network call. This exists
// because the real n8n instance runs on localhost — it is not, and cannot
// be, reachable from the public Vercel deployment.
//
// LIVE INTEGRATION (local development only, opt-in): posts to the real
// "Lead Response Automation" n8n workflow running at N8N_LEAD_RESPONSE_WEBHOOK_URL.
// This is a genuine webhook call, not a simulation — but it only works when
// n8n is running on the same machine as `next dev`.

export const NORTHSTAR_DEMO_MODE =
  process.env.NEXT_PUBLIC_NORTHSTAR_LIVE_N8N !== "true";

export interface EnquiryInput {
  name: string;
  contact: string;
  message: string;
}

export interface N8nResponse {
  acknowledged: boolean;
  reply: string;
  mode: "demo" | "live";
}

/**
 * Sends an enquiry to the real n8n "Lead Response Automation" workflow.
 * Only call this when NORTHSTAR_DEMO_MODE is false and n8n is reachable
 * (local development). Throws on any network/HTTP failure — callers should
 * fall back to demo behavior rather than pretend this succeeded.
 */
export async function callLiveN8nWorkflow(
  input: EnquiryInput
): Promise<N8nResponse> {
  const url = process.env.N8N_LEAD_RESPONSE_WEBHOOK_URL;
  if (!url) {
    throw new Error(
      "N8N_LEAD_RESPONSE_WEBHOOK_URL is not set — cannot call the live workflow."
    );
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    throw new Error(`n8n webhook returned ${res.status}`);
  }

  const data = await res.json();
  return {
    acknowledged: Boolean(data.acknowledged),
    reply: String(data.reply ?? ""),
    mode: "live",
  };
}
