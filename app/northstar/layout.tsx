import type { Metadata } from "next";
import NorthstarShell from "@/components/northstar/NorthstarShell";

export const metadata: Metadata = {
  title: "Northstar AI — Lead Operations (Case Study Demo)",
  description:
    "A portfolio case study: AI-assisted lead operations for a fictional home renovation business, built by Jayson AI Holland.",
};

export default function NorthstarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NorthstarShell>{children}</NorthstarShell>;
}
