import type { DashboardStats, Lead } from "./types";

// DEMO DATA — Northstar Home Services is a fictional company built to
// demonstrate the system. Nothing here reflects a real business or real
// performance figures.

export const LEADS: Lead[] = [
  {
    id: "kitchen-reno-6wk",
    customerName: "Aroha Ngata",
    contactInfo: "aroha.ngata@example.com · 021 555 0142",
    source: "Website Form",
    receivedAt: "Today, 9:14am",
    originalEnquiry:
      "Hi, we're looking to renovate our kitchen. We'd ideally like to start in about six weeks. Can someone come out and give us a quote?",
    enquirySummary:
      "Wants a kitchen renovation with a defined start window (~6 weeks) and is explicitly requesting a quote and site visit.",
    serviceRequested: "Kitchen renovation",
    timeframe: "Starts in ~6 weeks",
    urgency: "medium",
    estimatedValue: "$25,000–40,000",
    buyingIntent: "high",
    opportunityScore: 88,
    scoreReasons: [
      "Explicitly requested a quote, not just information",
      "Clear project start window within 6 weeks",
      "Service matches Northstar's core offering (kitchen renovation)",
      "Estimated project value is well above average job size",
    ],
    leadTemperature: "hot",
    missingInformation: [
      "Property address (needed to schedule the site visit)",
      "Approximate kitchen size or current layout",
      "Any budget range in mind",
    ],
    recommendedAction:
      "Call within 1 hour to book a site visit — high-intent lead with a defined project window.",
    humanReviewRequired: false,
    responseDraft:
      "Hi Aroha,\n\nThanks for reaching out about your kitchen renovation — a 6-week lead time is great timing for us. I'd love to get someone out for a site visit so we can put together an accurate quote. Could you send through your address and a couple of times that suit this week?\n\nLooking forward to it,\nNorthstar Home Services",
    status: "Qualified",
    timeline: [
      { time: "09:14:01", label: "NEW ENQUIRY RECEIVED" },
      { time: "09:14:02", label: "AI ANALYSING ENQUIRY" },
      { time: "09:14:03", label: "LEAD QUALIFIED — SCORE 88/100" },
      { time: "09:14:03", label: "RESPONSE DRAFTED" },
      { time: "09:14:04", label: "CRM RECORD CREATED" },
      { time: "09:14:04", label: "FOLLOW-UP TASK CREATED — call within 1 hour" },
      { time: "09:14:04", label: "AUTOMATION COMPLETE" },
    ],
  },
  {
    id: "bathroom-cost-question",
    customerName: "Unknown (Instagram DM)",
    contactInfo: "@homerenostories",
    source: "Facebook/Instagram",
    receivedAt: "Today, 8:02am",
    originalEnquiry:
      "Just wondering how much a bathroom renovation normally costs?",
    enquirySummary:
      "General pricing question with no project details, timeframe, or contact information yet — early research stage.",
    serviceRequested: "Bathroom renovation (general enquiry)",
    timeframe: "Not stated",
    urgency: "low",
    estimatedValue: "Unknown — no project scope given",
    buyingIntent: "low",
    opportunityScore: 34,
    scoreReasons: [
      "No timeframe or project scope provided",
      "Question reads as early research, not a quote request",
      "No contact details beyond a social handle",
      "Service matches Northstar's offering, so still worth nurturing",
    ],
    leadTemperature: "cold",
    missingInformation: [
      "Any timeframe for the project",
      "Size/scope of the bathroom",
      "A way to contact them beyond Instagram",
    ],
    recommendedAction:
      "Send a helpful reply with a typical price range and an invite to request a full quote — nurture, don't hard-sell yet.",
    humanReviewRequired: false,
    responseDraft:
      "Hi there! Bathroom renovations with us typically range from $15,000-$30,000 depending on size and finish level. Happy to give you a proper number if you'd like — just let us know roughly what you're picturing and we can arrange a free quote.",
    status: "Responded",
    timeline: [
      { time: "08:02:11", label: "NEW ENQUIRY RECEIVED" },
      { time: "08:02:12", label: "AI ANALYSING ENQUIRY" },
      { time: "08:02:13", label: "LEAD QUALIFIED — SCORE 34/100" },
      { time: "08:02:13", label: "RESPONSE DRAFTED" },
      { time: "08:02:14", label: "CRM RECORD CREATED" },
      { time: "08:02:14", label: "AUTOMATION COMPLETE" },
    ],
  },
  {
    id: "water-damage-urgent",
    customerName: "Marcus Whitfield",
    contactInfo: "marcus.w@example.com · 027 555 0198",
    source: "Phone (manual entry)",
    receivedAt: "Today, 7:41am",
    originalEnquiry:
      "We have water damage in our bathroom and need someone urgently. Can somebody come tomorrow?",
    enquirySummary:
      "Active water damage requiring urgent attention — a same-day/next-day service situation, not a standard renovation enquiry.",
    serviceRequested: "Emergency repair (water damage)",
    timeframe: "Tomorrow / urgent",
    urgency: "high",
    estimatedValue: "Unknown — assess on-site",
    buyingIntent: "high",
    opportunityScore: 91,
    scoreReasons: [
      "Explicit urgency — customer used the word 'urgently' and requested next-day service",
      "Active property damage increases likelihood of proceeding",
      "High buying intent — this isn't a browsing enquiry",
      "Estimated value uncertain until assessed, which is itself a reason for a human to call rather than auto-quote",
    ],
    leadTemperature: "hot",
    missingInformation: [
      "Property address",
      "Extent of the damage (is water actively leaking now?)",
      "Whether a plumber is needed immediately to stop the source",
    ],
    recommendedAction:
      "Escalate immediately — call the customer within 15 minutes. This reads as a same-day emergency, not something to leave for an automated reply alone.",
    humanReviewRequired: true,
    responseDraft:
      "Hi Marcus, thanks for letting us know — we treat water damage as urgent. Someone from our team will call you directly within the next 15 minutes to get the details and arrange a visit as soon as possible.",
    status: "Needs Review",
    timeline: [
      { time: "07:41:05", label: "NEW ENQUIRY RECEIVED" },
      { time: "07:41:06", label: "AI ANALYSING ENQUIRY" },
      { time: "07:41:07", label: "LEAD QUALIFIED — SCORE 91/100, URGENT" },
      { time: "07:41:07", label: "ESCALATED TO HUMAN REVIEW" },
      { time: "07:41:08", label: "CRM RECORD CREATED" },
      { time: "07:41:08", label: "AUTOMATION COMPLETE — awaiting staff call" },
    ],
  },
  {
    id: "commercial-fitout",
    customerName: "Unknown",
    contactInfo: "info@brightpathoffices.co.nz",
    source: "Email",
    receivedAt: "Yesterday, 4:20pm",
    originalEnquiry: "Do you guys do commercial fitouts?",
    enquirySummary:
      "Asking about a service category (commercial fitouts) outside Northstar's core residential renovation offering.",
    serviceRequested: "Commercial fitout (not a Northstar service line)",
    timeframe: "Not stated",
    urgency: "low",
    estimatedValue: "Not applicable — poor service fit",
    buyingIntent: "medium",
    opportunityScore: 21,
    scoreReasons: [
      "Requested service does not match Northstar's residential renovation focus",
      "No project details or timeframe given",
      "Even if referred elsewhere, unlikely to convert to a Northstar job",
    ],
    leadTemperature: "cold",
    missingInformation: [
      "Whether any part of the project is residential-adjacent",
      "Project location and rough scale",
    ],
    recommendedAction:
      "Reply politely that commercial fitouts aren't currently offered — no need for a call, a clear email response closes this out.",
    humanReviewRequired: false,
    responseDraft:
      "Hi there, thanks for reaching out! We currently focus on residential renovations (kitchens, bathrooms, and full home renovations) rather than commercial fitouts, so this isn't something we offer at the moment. If any part of the project is residential, happy to help with that piece.",
    status: "Responded",
    timeline: [
      { time: "16:20:33", label: "NEW ENQUIRY RECEIVED" },
      { time: "16:20:34", label: "AI ANALYSING ENQUIRY" },
      { time: "16:20:35", label: "LEAD QUALIFIED — SCORE 21/100, POOR FIT" },
      { time: "16:20:35", label: "RESPONSE DRAFTED" },
      { time: "16:20:36", label: "CRM RECORD CREATED" },
      { time: "16:20:36", label: "AUTOMATION COMPLETE" },
    ],
  },
  {
    id: "full-home-reno-planning",
    customerName: "Priya and David Sharma",
    contactInfo: "priya.sharma@example.com · 022 555 0176",
    source: "Website Form",
    receivedAt: "2 days ago",
    originalEnquiry:
      "We're planning a full renovation of our home next year and want to start talking to a few companies now. Could we set up an initial chat?",
    enquirySummary:
      "Large potential project (full home renovation) but with a long lead time — early-stage planning, not ready to commit yet.",
    serviceRequested: "Full home renovation",
    timeframe: "~12 months out",
    urgency: "low",
    estimatedValue: "$80,000–150,000",
    buyingIntent: "medium",
    opportunityScore: 62,
    scoreReasons: [
      "Very high estimated project value if it converts",
      "Explicitly requested a conversation, showing real intent",
      "Long timeframe (12 months) lowers urgency and near-term score",
      "Service matches core offering strongly",
    ],
    leadTemperature: "warm",
    missingInformation: [
      "Rough scope of the renovation (which rooms, structural changes?)",
      "Firmer timing — is next year Q1, Q3?",
    ],
    recommendedAction:
      "Schedule a low-pressure introductory call and set a follow-up reminder in ~2 months to stay top of mind for a long-lead-time project.",
    humanReviewRequired: false,
    responseDraft:
      "Hi Priya and David, that sounds like an exciting project! We'd be happy to have an initial chat now so you've got us in mind as things firm up. Would a 20-minute call sometime in the next two weeks work?",
    status: "Follow-up Scheduled",
    timeline: [
      { time: "11:02:40", label: "NEW ENQUIRY RECEIVED" },
      { time: "11:02:41", label: "AI ANALYSING ENQUIRY" },
      { time: "11:02:42", label: "LEAD QUALIFIED — SCORE 62/100" },
      { time: "11:02:42", label: "RESPONSE DRAFTED" },
      { time: "11:02:43", label: "CRM RECORD CREATED" },
      { time: "11:02:43", label: "FOLLOW-UP TASK CREATED — check in in 2 months" },
      { time: "11:02:44", label: "AUTOMATION COMPLETE" },
    ],
  },
  {
    id: "deck-quote-followup",
    customerName: "Liam Foster",
    contactInfo: "liam.foster@example.com",
    source: "Email",
    receivedAt: "3 days ago",
    originalEnquiry:
      "Following up on the deck quote you sent last month — still keen, just been busy. Can we lock in a date?",
    enquirySummary:
      "Returning customer confirming intent to proceed on a previously quoted deck project — ready to schedule.",
    serviceRequested: "Deck construction (existing quote)",
    timeframe: "Ready now",
    urgency: "medium",
    estimatedValue: "$12,000 (previously quoted)",
    buyingIntent: "high",
    opportunityScore: 79,
    scoreReasons: [
      "Existing quote already accepted in principle — this is a scheduling step, not a fresh sale",
      "Customer explicitly confirmed intent to proceed",
      "Clear, known project value from the prior quote",
    ],
    leadTemperature: "warm",
    missingInformation: ["Preferred start date range"],
    recommendedAction:
      "Reply with 2-3 available start dates to lock in the booking quickly before the customer's attention moves elsewhere again.",
    humanReviewRequired: false,
    responseDraft:
      "Hi Liam, great to hear from you! We've got availability starting the week of the 14th or the 21st — would either of those work to get your deck underway?",
    status: "Qualified",
    timeline: [
      { time: "13:55:02", label: "NEW ENQUIRY RECEIVED" },
      { time: "13:55:03", label: "AI ANALYSING ENQUIRY" },
      { time: "13:55:04", label: "LEAD QUALIFIED — SCORE 79/100" },
      { time: "13:55:04", label: "RESPONSE DRAFTED" },
      { time: "13:55:05", label: "CRM RECORD CREATED" },
      { time: "13:55:05", label: "AUTOMATION COMPLETE" },
    ],
  },
];

export function getLeadById(id: string): Lead | undefined {
  return LEADS.find((l) => l.id === id);
}

export function getDashboardStats(): DashboardStats {
  const hotLeads = LEADS.filter((l) => l.leadTemperature === "hot").length;
  const followUpsDue = LEADS.filter(
    (l) => l.status === "Follow-up Scheduled"
  ).length;
  const humanReviewsRequired = LEADS.filter(
    (l) => l.humanReviewRequired
  ).length;
  const newEnquiries = LEADS.filter(
    (l) => l.receivedAt.startsWith("Today")
  ).length;

  return {
    newEnquiries,
    hotLeads,
    followUpsDue,
    humanReviewsRequired,
    avgAiResponseTimeSeconds: 3,
    estimatedPipelineValue: "$117,000–245,000 (demo estimate, sum of ranges)",
  };
}
