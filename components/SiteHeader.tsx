import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="glass-panel sticky top-0 z-10 border-x-0 border-t-0">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center font-display text-lg font-semibold text-starlight"
        >
          <span className="mr-2 inline-block h-3 w-3 rounded-full bg-punch" />
          Jayson AI Holland
        </Link>

        <nav className="flex items-center gap-5">
          <Link
            href="/#demos"
            className="hidden font-display text-sm font-semibold text-muted transition-colors hover:text-starlight sm:inline"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="hidden font-display text-sm font-semibold text-muted transition-colors hover:text-starlight sm:inline"
          >
            About
          </Link>
          <Link
            href="/build-log"
            className="hidden font-display text-sm font-semibold text-muted transition-colors hover:text-starlight sm:inline"
          >
            Build Log
          </Link>
          <Link
            href="/contact"
            className="hidden font-display text-sm font-semibold text-muted transition-colors hover:text-starlight sm:inline"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="pop-button rounded-full bg-starlight px-5 py-2.5 font-display text-sm font-semibold text-void shadow-[4px_4px_0_var(--color-sun)]"
          >
            Start a build 🚀
          </Link>
        </nav>
      </div>
    </header>
  );
}
