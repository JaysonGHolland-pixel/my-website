import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-ink/10 bg-paper/80 shadow-[0_1px_0_0_rgba(26,21,51,0.04)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center font-display text-lg font-semibold"
        >
          <span className="mr-2 inline-block h-3 w-3 rounded-full bg-punch" />
          Jayson AI Holland
        </Link>

        <nav className="flex items-center gap-5">
          <Link
            href="/about"
            className="hidden font-display text-sm font-semibold text-ink/70 transition-colors hover:text-ink sm:inline"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="pop-button rounded-full bg-ink px-5 py-2.5 font-display text-sm font-semibold text-paper shadow-[4px_4px_0_var(--color-sun)]"
          >
            Start a build 🚀
          </Link>
        </nav>
      </div>
    </header>
  );
}
