const PHASES = [
  {
    letter: "D",
    title: "Discover",
    description: "Find the repetitive, slow, expensive, or error-prone process — before touching any tool.",
  },
  {
    letter: "D",
    title: "Design",
    description: "Map the workflow step by step and find exactly where automation or AI creates real leverage.",
  },
  {
    letter: "B",
    title: "Build",
    description: "Connect the APIs, tools, databases, agents, and workflows the process actually needs.",
  },
  {
    letter: "T",
    title: "Test",
    description: "Run realistic scenarios and the edge cases that break naive automations.",
  },
  {
    letter: "S",
    title: "Ship",
    description: "Deploy, document, monitor, and hand off — so the system outlives the build.",
  },
];

export default function ThinkingFramework() {
  return (
    <div className="grid gap-4 sm:grid-cols-5">
      {PHASES.map((phase) => (
        <div
          key={phase.title}
          className="glass-panel rounded-2xl p-5 text-center sm:text-left"
        >
          <span className="font-mono text-2xl font-bold text-muted/40">
            {phase.letter}
          </span>
          <h3 className="mt-2 font-display text-lg font-bold">
            {phase.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {phase.description}
          </p>
        </div>
      ))}
    </div>
  );
}
