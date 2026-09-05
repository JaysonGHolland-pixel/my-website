import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Space_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AmbientDust from "@/components/AmbientDust";
import MusicToggle from "@/components/MusicToggle";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jayson AI Holland — AI Automation Built to Run Your Business",
  description:
    "AI agents, n8n workflows, and systems integration — designed and shipped by a practitioner, not sold as a deck.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-void text-starlight">
        <AmbientDust />
        <div className="grain-overlay" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MusicToggle />
      </body>
    </html>
  );
}
