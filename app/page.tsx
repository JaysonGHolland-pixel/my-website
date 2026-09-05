import Link from "next/link";
import HeroGlobe from "@/components/HeroGlobe";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import StepCard from "@/components/StepCard";

const SERVICES = [
  {
    emoji: "🤖",
    color: "var(--color-volt)",
    title: "AI Agents",
    description:
      "Conversational and task agents wired to your actual tools — not a chatbot that stops at answering questions.",
    example: {
      heading: "Support inquiry agent",
      steps: [
        "Customer emails asking about an order.",
        "Agent looks up the real order status and drafts a reply.",
        "Anything it's unsure about gets flagged for a human to check before it sends.",
      ],
      note: "Illustrative example of how this kind of agent is structured — not a specific client result.",
    },
  },
  {
    emoji: "⚙️",
    color: "var(--color-punch)",
    title: "Workflow Automation",
    description:
      "n8n pipelines that move data and trigger actions across the tools you already run, with errors that surface instead of failing silently.",
    example: {
      heading: "Lead response automation",
      steps: [
        "Webhook receives a new form submission.",
        "Edit Fields node formats a personalized reply.",
        "Respond to Webhook sends it back — confirmed working end-to-end.",
      ],
      note: "A simplified version of a real pipeline built and tested in this studio.",
    },
  },
  {
    emoji: "🔌",
    color: "var(--color-mint)",
    title: "Systems Integration",
    description:
      "APIs, webhooks, and data plumbing connected so your existing software actually talks to each other.",
    example: {
      heading: "CRM + Slack sync",
      steps: [
        "New form submission creates a CRM contact.",
        "A summary posts to the sales Slack channel.",
        "If either call fails, a fallback email goes out instead of failing silently.",
      ],
      note: "Illustrative example of how this kind of integration is structured — not a specific client result.",
    },
  },
];

const STEPS = [
  {
    number: "01",
    emoji: "🔍",
    title: "Map the process",
    description:
      "Walk through what the workflow actually does today, tool by tool, before touching any automation.",
    demo: {
      heading: "What discovery notes look like",
      lines: [
        "1. New lead lands in inbox",
        "2. Copy details into spreadsheet by hand",
        "3. Send templated reply — takes ~8 min per lead",
        "4. Update CRM manually, often forgotten",
      ],
      note: "This is the kind of before-picture a mapping session produces — the automation gets built around it.",
    },
  },
  {
    number: "02",
    emoji: "🛠️",
    title: "Build the system",
    description:
      "Wire the agents, workflows, and integrations in a sandbox — nothing touches production until it's proven.",
    demo: {
      heading: "What the build stage looks like",
      lines: [
        "Webhook Trigger → receives the lead",
        "Function node → parses & validates payload",
        "Condition → urgent? routes to AI Agent : direct reply",
        "Tested against 12 sample payloads before going live",
      ],
      note: "Simplified from a real build sequence — the actual sandbox has more error handling than this.",
    },
  },
  {
    number: "03",
    emoji: "🚀",
    title: "Ship and hand off",
    description:
      "Deploy to your environment, document what was built, and hand over ownership — not a black box.",
    demo: {
      heading: "What you actually get",
      lines: [
        "✓ Live workflow in your own n8n/tool account",
        "✓ One-page README explaining what each step does",
        "✓ Credentials stay in your accounts, not mine",
      ],
      note: "The point is you can hand this to anyone else later — nothing is locked to me.",
    },
  },
];

export default function Home() {
  return (
    <main className="relative z-10 overflow-x-hidden">
      <section className="relative px-6 pt-24 pb-0">
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="glass-panel inline-block rounded-full px-4 py-1.5 font-mono text-[11px] tracking-widest text-muted uppercase">
            <span className="spark">✨</span> Jayson AI Holland — Automation
            Studio
          </span>

          <h1 className="display-tight mt-8 font-display text-5xl leading-[1.05] font-bold sm:text-7xl lg:text-[5.5rem]">
            Automation that&rsquo;s actually{" "}
            <span className="gradient-text">fun</span> to watch run.
          </h1>

          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted">
            AI agents and workflows — designed, wired, and shipped by someone
            who builds them for a living. No decks, no snooze-fest demos.
            Just systems that run.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="pop-button glow-cta rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
            >
              Start a build 🚀
            </Link>
            <a
              href="#mission"
              className="glass-panel pop-button rounded-full px-8 py-4 font-display text-sm font-semibold text-starlight"
            >
              See how a build runs
            </a>
          </div>
        </div>

        <HeroGlobe />
      </section>

      <section id="mission" className="relative px-6 pt-0 pb-28 sm:pb-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-center font-mono text-xs tracking-widest text-punch uppercase">
              Mission timeline
            </p>
            <h2 className="display-tight mt-4 text-center font-display text-4xl font-bold sm:text-5xl">
              Three stages. Nothing skipped.
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div
              className="energy-line absolute top-7 bottom-7 left-[52px] w-[3px] rounded-full"
              aria-hidden="true"
            />
            <ol className="space-y-6">
              {STEPS.map((step, i) => (
                <Reveal key={step.number} delay={i * 120}>
                  <li>
                    <StepCard {...step} />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="services" className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-sun uppercase">
              What we build
            </p>
            <h2 className="display-tight mt-4 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
              Three ways automation actually earns its keep.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 120}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-28 sm:py-36">
        <span
          aria-hidden="true"
          className="blob absolute -top-10 -left-10 h-56 w-56 rounded-full bg-volt/25 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="blob blob-reverse absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-punch/25 blur-3xl"
        />

        <Reveal className="relative mx-auto max-w-xl text-center">
          <h2 className="display-tight font-display text-4xl font-bold sm:text-5xl">
            Ready for lift-off?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted">
            Tell me what&rsquo;s slow, manual, or held together with
            copy-paste. I&rsquo;ll tell you straight whether automation
            actually fixes it.
          </p>
          <Link
            href="/contact"
            className="pop-button glow-cta mt-9 inline-block rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
          >
            Start a build 🚀
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
