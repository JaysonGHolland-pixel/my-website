const NODES = [
  { x: 20, eyebrow: "01 TRIGGER", title: "Form submitted" },
  { x: 296, eyebrow: "02 AGENT", title: "Reads & decides" },
  { x: 572, eyebrow: "03 ACTION", title: "Updates CRM" },
];

const NODE_WIDTH = 148;
const NODE_HEIGHT = 64;
const Y = 68;
const VIEWBOX_WIDTH = 740;

export default function NodeCanvas() {
  return (
    <div>
      <div className="relative">
        <div className="overflow-x-auto border border-trace/30 bg-blueprint-deep/40 p-5 sm:p-8">
          <span className="register-mark absolute -top-1.5 -left-1.5 text-trace/50" />
          <span className="register-mark absolute -top-1.5 -right-1.5 text-trace/50" />
          <span className="register-mark absolute -bottom-1.5 -left-1.5 text-trace/50" />
          <span className="register-mark absolute -bottom-1.5 -right-1.5 text-trace/50" />

          <svg
            viewBox={`0 0 ${VIEWBOX_WIDTH} 170`}
            className="h-auto w-full min-w-[640px]"
            role="img"
            aria-label="Diagram: a form submission triggers an AI agent, which updates a CRM"
          >
            <line
              x1={NODES[0].x + NODE_WIDTH}
              y1={Y + NODE_HEIGHT / 2}
              x2={NODES[1].x}
              y2={Y + NODE_HEIGHT / 2}
              className="flow-line"
              stroke="var(--color-signal)"
              strokeWidth="1.5"
            />
            <line
              x1={NODES[1].x + NODE_WIDTH}
              y1={Y + NODE_HEIGHT / 2}
              x2={NODES[2].x}
              y2={Y + NODE_HEIGHT / 2}
              className="flow-line"
              stroke="var(--color-signal)"
              strokeWidth="1.5"
            />

            {NODES.map((node) => (
              <g key={node.title}>
                <rect
                  x={node.x}
                  y={Y}
                  width={NODE_WIDTH}
                  height={NODE_HEIGHT}
                  fill="var(--color-blueprint)"
                  stroke="var(--color-trace)"
                  strokeWidth="1"
                />
                <text
                  x={node.x + 12}
                  y={Y + 22}
                  fill="var(--color-signal)"
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  letterSpacing="0.08em"
                >
                  {node.eyebrow}
                </text>
                <text
                  x={node.x + 12}
                  y={Y + 44}
                  fill="var(--color-vellum)"
                  fontFamily="var(--font-sans)"
                  fontSize="13"
                  fontWeight="500"
                >
                  {node.title}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-blueprint-deep to-transparent sm:hidden" />
      </div>

      <p className="mt-3 font-mono text-[10px] tracking-widest text-trace/70 uppercase sm:hidden">
        Swipe to see the full flow &rarr;
      </p>
    </div>
  );
}
