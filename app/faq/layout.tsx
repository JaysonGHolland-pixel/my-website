import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Jayson AI Holland",
  description:
    "Straight answers on pricing, whether this is real AI, timelines, and what's needed from you — no sales page.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
