import Link from "next/link";
import Reveal from "@/components/Reveal";

const CONTACT_EMAIL = "JaysonAiHolland@gmail.com";

const NEXT_STEPS = [
  "Reply within a day or two — this is a one-person studio, not a queue.",
  "A short back-and-forth on what's actually slow or manual for you.",
  "A straight answer on whether automation is the right fix, before anything gets built.",
];

export default function Contact() {
  return (
    <main className="relative z-10 flex min-h-[80vh] items-center px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <Link
          href="/"
          className="pop-button glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-xs font-semibold text-starlight"
        >
          &larr; Back to home
        </Link>

        <Reveal delay={80}>
          <p className="mt-10 font-mono text-xs tracking-widest text-punch uppercase">
            Start a build
          </p>
          <h1 className="display-tight mt-3 font-display text-4xl leading-[1.15] font-bold sm:text-5xl">
            Tell me what&rsquo;s <span className="gradient-text">slow</span>.
          </h1>
          <p className="mt-6 text-lg text-muted">
            Email directly — no form, no gatekeeping. Say what&rsquo;s manual,
            repetitive, or held together with copy-paste, and I&rsquo;ll tell
            you straight whether automation actually fixes it.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="pop-button glow-cta mt-10 inline-block rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
          >
            Email {CONTACT_EMAIL}
          </a>
        </Reveal>

        <Reveal delay={320}>
          <div className="glass-panel mt-14 rounded-3xl p-7 text-left">
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
