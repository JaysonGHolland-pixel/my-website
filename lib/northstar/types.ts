export type LeadTemperature = "hot" | "warm" | "cold";
export type UrgencyLevel = "high" | "medium" | "low";
export type IntentLevel = "high" | "medium" | "low";
export type LeadSource =
  | "Website Form"
  | "Email"
  | "Facebook/Instagram"
  | "Phone (manual entry)";
export type LeadStatus =
  | "New"
  | "Qualified"
  | "Follow-up Scheduled"
  | "Needs Review"
  | "Responded";

export interface TimelineEvent {
  time: string; // "14:32:01"
  label: string;
}

export interface Lead {
  id: string;
  customerName: string;
  contactInfo: string;
  source: LeadSource;
  receivedAt: string; // human-readable, e.g. "Today, 9:14am"
  originalEnquiry: string;

  // AI analysis (structured output)
  enquirySummary: string;
  serviceRequested: string;
  timeframe: string;
  urgency: UrgencyLevel;
  estimatedValue: string;
  buyingIntent: IntentLevel;
  opportunityScore: number; // 0-100, "AI Opportunity Score"
  scoreReasons: string[];
  leadTemperature: LeadTemperature;
  missingInformation: string[];
  recommendedAction: string;
  humanReviewRequired: boolean;
  responseDraft: string;

  status: LeadStatus;
  timeline: TimelineEvent[];
}

export interface DashboardStats {
  newEnquiries: number;
  hotLeads: number;
  followUpsDue: number;
  humanReviewsRequired: number;
  avgAiResponseTimeSeconds: number;
  estimatedPipelineValue: string;
}
