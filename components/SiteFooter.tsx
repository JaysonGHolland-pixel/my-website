export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink/10 bg-paper py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 font-mono text-xs tracking-widest text-ink/50 uppercase sm:flex-row sm:items-center">
        <span>Jayson AI Holland</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
