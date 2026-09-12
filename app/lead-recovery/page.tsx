import Link from "next/link";
import Reveal from "@/components/Reveal";
import LeadRecoveryDemo from "@/components/LeadRecoveryDemo";

const BEFORE_AFTER = [
  {
    label: "Before",
    lines: [
      "Enquiry arrives Saturday night via the contact form.",
      "No one sees it until Monday morning.",
      "By then they've already booked someone who called back first.",
    ],
  },
  {
    label: "After",
    lines: [
      "Enquiry arrives Saturday night.",
      "It's acknowledged in under a minute, with 2-3 basic questions asked.",
      "If it looks urgent, you get a text straight away — everything else is waiting, sorted, Monday morning.",
    ],
  },
];

const AUTOMATIC_STEPS = [
  "Catches the enquiry — website form, email, or a missed call.",
  "Replies immediately so the customer knows someone's there.",
  "Asks a couple of basic questions to work out what the job actually is.",
  "Flags anything urgent straight to your phone.",
  "Logs it so it can't just get forgotten in an inbox.",
  "Follows up on its own if they go quiet.",
];

export default function LeadRecoveryPage() {
  return (
    <main className="relative z-10 overflow-x-hidden">
      <section className="relative px-6 pt-24 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="glass-panel inline-block rounded-full px-4 py-1.5 font-mono text-[11px] tracking-widest text-muted uppercase">
            Lead Recovery &middot; For plumbers, electricians &amp; trades
          </span>
          <h1 className="display-tight mt-8 font-display text-4xl leading-[1.1] font-bold sm:text-6xl">
            Stop losing jobs to whoever{" "}
            <span className="gradient-text">calls back first.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            You&rsquo;re already getting enquiries — from your site, your
            listing, word of mouth. Some of them sit unanswered after hours,
            mid-job, or over a weekend. In an emergency call-out, the person
            who replies first usually wins the job. This is a simple system
            that makes sure that&rsquo;s you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="pop-button glow-cta rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
            >
              Get a free 10-min Lead Leak Audit
            </Link>
            <a
              href="#demo"
              className="glass-panel pop-button rounded-full px-8 py-4 font-display text-sm font-semibold text-starlight"
            >
              See it run
            </a>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-center font-mono text-xs tracking-widest text-punch uppercase">
              The problem
            </p>
            <h2 className="display-tight mt-4 text-center font-display text-3xl font-bold sm:text-4xl">
              This isn&rsquo;t about &ldquo;using AI.&rdquo;
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-center text-muted">
              It&rsquo;s about enquiries you&rsquo;ve already paid to get —
              through your website, your Google listing, your reputation —
              going quiet before anyone gets back to them. Missed, answered
              too slowly, forgotten, or never followed up after the first
              message. That&rsquo;s revenue that was already yours to lose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-center font-mono text-xs tracking-widest text-mint uppercase">
              Before &amp; after
            </p>
            <h2 className="display-tight mt-4 text-center font-display text-3xl font-bold sm:text-4xl">
              Same enquiry, two outcomes.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {BEFORE_AFTER.map((col, i) => (
              <Reveal key={col.label} delay={i * 100}>
                <div className="glass-panel h-full rounded-2xl p-7">
                  <p
                    className={`font-mono text-xs tracking-widest uppercase ${
                      col.label === "Before" ? "text-punch" : "text-mint"
                    }`}
                  >
                    {col.label}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                    {col.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="relative px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-center font-mono text-xs tracking-widest text-mint uppercase">
              See it work
            </p>
            <h2 className="display-tight mt-4 text-center font-display text-3xl font-bold sm:text-4xl">
              A real enquiry, start to finish.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-center text-muted">
              This is a working prototype you can actually run — not a
              mockup. It walks through what happens automatically the moment
              an enquiry comes in.
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <LeadRecoveryDemo />
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-center font-mono text-xs tracking-widest text-punch uppercase">
              What happens automatically
            </p>
          </Reveal>
          <ol className="mt-10 space-y-4">
            {AUTOMATIC_STEPS.map((step, i) => (
              <Reveal key={step} delay={i * 60}>
                <li className="glass-panel flex items-start gap-4 rounded-xl px-5 py-4">
                  <span className="font-mono text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={AUTOMATIC_STEPS.length * 60 + 40}>
            <p className="mx-auto mt-8 max-w-lg text-center text-sm text-muted">
              What you actually receive: a heads-up when something&rsquo;s
              urgent, and a clean log of every enquiry — not a dashboard you
              have to learn to use.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="glass-panel rounded-2xl p-8 text-center">
              <p className="font-mono text-xs tracking-widest text-mint uppercase">
                Rough ROI, illustrative only
              </p>
              <p className="mt-5 text-lg leading-relaxed">
                If your average job is worth{" "}
                <span className="font-semibold">$400-$2,000</span>, recovering
                just <span className="font-semibold">one</span> enquiry a
                month that would otherwise have gone to a faster competitor
                covers this system many times over. This is illustrative
                math, not a claim about a specific result.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <h2 className="display-tight font-display text-3xl font-bold sm:text-4xl">
              Free 10-minute Lead Leak Audit
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted">
              I&rsquo;ll look at how your current enquiry path actually
              behaves — a real test enquiry, real response time, what
              happens after hours — and tell you specifically where it&rsquo;s
              leaking. No pitch required to get this.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="pop-button glow-cta inline-block rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
              >
                Book the free audit
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted">
              The demo above is a simulated prototype, not a real client
              project — built to show how the system works before you commit
              to anything.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
