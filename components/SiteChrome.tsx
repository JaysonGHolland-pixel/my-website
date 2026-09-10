"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import OfficeBackdrop from "@/components/OfficeBackdrop";
import AmbientDust from "@/components/AmbientDust";
import MusicToggle from "@/components/MusicToggle";

// The Northstar case-study demo is a self-contained "SaaS product" mockup
// with its own dashboard chrome (sidebar, mode badge) — it should not carry
// the marketing site's header, footer, background photo, or ambient music.
export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isNorthstar = pathname?.startsWith("/northstar");

  if (isNorthstar) {
    return <>{children}</>;
  }

  return (
    <>
      <OfficeBackdrop />
      <AmbientDust />
      <div className="grain-overlay" aria-hidden="true" />
      <SiteHeader />
      {children}
      <SiteFooter />
      <MusicToggle />
    </>
  );
}
