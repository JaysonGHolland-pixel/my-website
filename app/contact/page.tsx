import Link from "next/link";
import Reveal from "@/components/Reveal";
import DiscoveryForm from "@/components/DiscoveryForm";

const CONTACT_EMAIL = "JaysonAiHolland@gmail.com";

const NEXT_STEPS = [
  "Reply within a day or two — this is a one-person studio, not a queue.",
  "A short back-and-forth on what's actually slow or manual for you.",
  "A straight answer on whether automation is the right fix, before anything gets built.",
];

export default function Contact() {
  return (
    <main className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="pop-button glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-xs font-semibold text-starlight"
        >
          &larr; Back to home
        </Link>

        <Reveal delay={80} className="text-center">
          <p className="mt-10 font-mono text-xs tracking-widest text-punch uppercase">
            Start a build
          </p>
          <h1 className="display-tight mt-3 font-display text-4xl leading-[1.15] font-bold sm:text-5xl">
            Tell me what&rsquo;s <span className="gradient-text">slow</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
            A few quick questions about the process that&rsquo;s eating your
            time — I&rsquo;ll tell you straight whether automation actually
            fixes it.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <DiscoveryForm />
        </Reveal>

        <Reveal delay={260} className="mt-6 text-center">
          <p className="font-mono text-xs text-muted">
            Prefer to just email?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline decoration-white/30 hover:text-starlight"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="glass-panel mt-10 rounded-3xl p-7 text-left">
            <h2 className="font-display text-lg font-bold">
              What happens next
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-muted">
              {NEXT_STEPS.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold text-void"
                    style={{ backgroundColor: "var(--color-mint)" }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
