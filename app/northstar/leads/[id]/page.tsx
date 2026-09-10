import { notFound } from "next/navigation";
import { LEADS, getLeadById } from "@/lib/northstar/data";
import LeadDetailClient from "./lead-detail-client";

export function generateStaticParams() {
  return LEADS.map((lead) => ({ id: lead.id }));
}

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = getLeadById(id);
  if (!lead) notFound();

  return <LeadDetailClient lead={lead} />;
}
