const NODES = [
  { x: 20, y: 40, emoji: "📋", label: "Form submitted", fill: "var(--color-volt)" },
  { x: 260, y: 0, emoji: "🤖", label: "Agent decides", fill: "var(--color-punch)" },
  { x: 500, y: 50, emoji: "✅", label: "CRM updated", fill: "var(--color-mint)" },
];

const NODE_WIDTH = 172;
const NODE_HEIGHT = 68;

export default function FlowGraphic() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <span
        aria-hidden="true"
        className="blob blob-slow absolute -top-16 -left-10 h-40 w-40 rounded-full bg-sun/40 blur-2xl"
      />
      <span
        aria-hidden="true"
        className="blob blob-reverse absolute -right-6 -bottom-10 h-48 w-48 rounded-full bg-punch/30 blur-2xl"
      />

      <svg
        viewBox="0 0 700 150"
        className="relative h-auto w-full"
        role="img"
        aria-label="Diagram: a form submission triggers an AI agent, which updates a CRM"
      >
        <path
          d={`M ${NODES[0].x + NODE_WIDTH} ${NODES[0].y + NODE_HEIGHT / 2} Q ${NODES[0].x + NODE_WIDTH + 60} ${NODES[1].y + NODE_HEIGHT / 2 - 30}, ${NODES[1].x} ${NODES[1].y + NODE_HEIGHT / 2}`}
          fill="none"
          className="flow-line"
          stroke="var(--color-volt)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d={`M ${NODES[1].x + NODE_WIDTH} ${NODES[1].y + NODE_HEIGHT / 2} Q ${NODES[1].x + NODE_WIDTH + 60} ${NODES[2].y + NODE_HEIGHT / 2 + 30}, ${NODES[2].x} ${NODES[2].y + NODE_HEIGHT / 2}`}
          fill="none"
          className="flow-line"
          stroke="var(--color-punch)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {NODES.map((node, i) => (
          <g
            key={node.label}
            className="float"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <rect
              x={node.x}
              y={node.y}
              width={NODE_WIDTH}
              height={NODE_HEIGHT}
              rx="22"
              fill="var(--color-paper)"
              stroke={node.fill}
              strokeWidth="3"
            />
            <circle
              cx={node.x + 34}
              cy={node.y + NODE_HEIGHT / 2}
              r="16"
              fill={node.fill}
              opacity="0.15"
            />
            <text
              x={node.x + 34}
              y={node.y + NODE_HEIGHT / 2 + 8}
              textAnchor="middle"
              fontSize="18"
            >
              {node.emoji}
            </text>
            <text
              x={node.x + 60}
              y={node.y + NODE_HEIGHT / 2 + 5}
              fill="var(--color-ink)"
              fontFamily="var(--font-sans)"
              fontSize="14"
              fontWeight="600"
            >
              {node.label}
            </text>
            <circle
              className="pulse-dot"
              cx={node.x + NODE_WIDTH - 14}
              cy={node.y + 14}
              r="5"
              fill={node.fill}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
