const TOOLS = [
  "n8n",
  "Claude",
  "Next.js",
  "Vercel",
  "TypeScript",
  "Tailwind",
  "GitHub",
  "Playwright",
];

export default function ToolMarquee() {
  return (
    <div
      className="marquee relative overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="marquee-track gap-12 pr-12">
        {[...TOOLS, ...TOOLS].map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="font-display text-lg font-semibold whitespace-nowrap text-muted/50"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
