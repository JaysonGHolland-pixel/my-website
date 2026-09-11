import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed Lead Cost Calculator — Jayson AI Holland",
  description:
    "A free, 10-second estimate of what a slow or missed enquiry reply might be costing your business — using your own numbers.",
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
