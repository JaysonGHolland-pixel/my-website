import ToolMarquee from "@/components/ToolMarquee";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-void-deep/60 py-10">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-center font-mono text-[11px] tracking-widest text-muted/60 uppercase">
          Built with
        </p>
        <div className="mt-4">
          <ToolMarquee />
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-5xl flex-col items-start justify-between gap-4 border-t border-white/5 px-6 pt-8 font-mono text-xs tracking-widest text-muted/60 uppercase sm:flex-row sm:items-center">
        <span>Jayson AI Holland</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
      <p className="mx-auto mt-4 max-w-5xl px-6 font-mono text-[10px] tracking-widest text-muted/40 normal-case">
        Music: &ldquo;Prism&rdquo; by Theatre Of Delays, courtesy of{" "}
        <a
          href="https://www.bensound.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-muted"
        >
          Bensound.com
        </a>
      </p>
    </footer>
  );
}
