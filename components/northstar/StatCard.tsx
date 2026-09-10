export default function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
        {label}
      </p>
      <p className="display-tight mt-2 font-display text-3xl font-bold text-starlight">
        {value}
      </p>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}
