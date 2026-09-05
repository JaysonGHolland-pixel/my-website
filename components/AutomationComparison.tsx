const WITHOUT = [
  "New enquiry",
  "Sits in inbox",
  "Someone notices it",
  "Someone qualifies it",
  "Someone enters it in the CRM",
  "Someone responds",
  "Someone remembers to follow up",
];

const WITH = [
  "New enquiry",
  "AI qualification",
  "CRM updated",
  "Personalized response",
  "Sales alert",
  "Follow-up scheduled",
];

export default function AutomationComparison() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="glass-panel rounded-2xl p-6">
        <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
          Without automation
        </p>
        <ol className="mt-4 space-y-2">
          {WITHOUT.map((step, i) => (
            <li key={step} className="flex items-center gap-2 text-sm text-muted">
              {step}
              {i < WITHOUT.length - 1 && (
                <span aria-hidden="true" className="ml-auto text-muted/50">
                  &darr;
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="glass-panel rounded-2xl border border-mint/20 p-6">
        <p className="font-mono text-[10px] tracking-widest text-mint uppercase">
          With automation
        </p>
        <ol className="mt-4 space-y-2">
          {WITH.map((step, i) => (
            <li key={step} className="flex items-center gap-2 text-sm text-starlight">
              {step}
              {i < WITH.length - 1 && (
                <span aria-hidden="true" className="ml-auto text-mint/50">
                  &darr;
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
