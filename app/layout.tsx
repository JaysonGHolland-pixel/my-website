import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Starfield from "@/components/Starfield";
import MusicToggle from "@/components/MusicToggle";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jayson AI Holland — Automation that's actually fun to run",
  description:
    "AI agents, n8n workflows, and systems integration — built and shipped by a practitioner, not sold as a deck.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${jakarta.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-void text-starlight">
        <Starfield />
        <div className="grain-overlay" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MusicToggle />
      </body>
    </html>
  );
}
