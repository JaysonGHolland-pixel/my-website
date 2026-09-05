export default function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="glass-panel mt-4 rounded-2xl p-5">
      <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
        System architecture
      </p>
      <div className="mt-4 flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step}>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 font-mono text-[10px] text-starlight/80">
                {i + 1}
              </span>
              <span className="font-mono text-xs text-starlight/90">
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-3 h-4 w-px bg-white/15" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
