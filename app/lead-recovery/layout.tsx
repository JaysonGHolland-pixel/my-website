import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Recovery for Trades — Jayson AI Holland",
  description:
    "A simple system that catches missed enquiries — form, email, or missed call — replies immediately, and follows up so plumbers, electricians and trades businesses stop losing jobs to slow response times.",
};

export default function LeadRecoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
