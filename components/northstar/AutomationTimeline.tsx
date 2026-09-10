import type { TimelineEvent } from "@/lib/northstar/types";

export default function AutomationTimeline({
  events,
}: {
  events: TimelineEvent[];
}) {
  return (
    <ol className="space-y-3">
      {events.map((event, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
          <div>
            <span className="font-mono text-xs text-muted">{event.time}</span>
            <span className="ml-3 font-mono text-xs tracking-wide text-starlight/90">
              {event.label}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
