"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NORTHSTAR_DEMO_MODE } from "@/lib/northstar/n8n-adapter";

const NAV = [
  { href: "/northstar", label: "Dashboard" },
  { href: "/northstar/leads", label: "Leads" },
  { href: "/northstar/activity", label: "Automation Activity" },
  { href: "/northstar/follow-ups", label: "Follow-ups" },
  { href: "/northstar/settings", label: "Settings" },
];

export default function NorthstarShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-void text-starlight lg:flex-row">
      <aside className="glass-panel flex shrink-0 flex-col border-b border-white/10 px-5 py-5 lg:w-60 lg:border-r lg:border-b-0 lg:py-6">
        <div className="flex items-center justify-between lg:block">
          <div>
            <p className="font-display text-lg font-bold text-starlight">
              Northstar AI
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-widest text-muted uppercase">
              Lead Operations
            </p>
          </div>
          <span className="glass-panel rounded-full px-3 py-1 font-mono text-[10px] text-sun lg:hidden">
            {NORTHSTAR_DEMO_MODE ? "DEMO MODE" : "LIVE"}
          </span>
        </div>

        <nav className="mt-4 -mx-5 flex gap-1 overflow-x-auto px-5 pb-1 lg:mx-0 lg:mt-10 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
          {NAV.map((item) => {
            const active =
              item.href === "/northstar"
                ? pathname === "/northstar"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-lg px-3 py-2 text-sm whitespace-nowrap transition ${
                  active
                    ? "bg-white/10 font-semibold text-starlight"
                    : "text-muted hover:bg-white/5 hover:text-starlight"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto hidden space-y-3 lg:block">
          <div className="glass-panel rounded-lg px-3 py-2">
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
              Mode
            </p>
            <p className="mt-1 text-xs font-semibold text-sun">
              {NORTHSTAR_DEMO_MODE ? "DEMO MODE" : "LIVE INTEGRATION"}
            </p>
          </div>
          <Link
            href="/"
            className="block text-center text-xs text-muted underline decoration-white/20 hover:text-starlight"
          >
            ← Back to jayson-ai-holland.com
          </Link>
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8">
        {children}
        <Link
          href="/"
          className="mt-10 block text-center text-xs text-muted underline decoration-white/20 hover:text-starlight lg:hidden"
        >
          ← Back to jayson-ai-holland.com
        </Link>
      </main>
    </div>
  );
}
