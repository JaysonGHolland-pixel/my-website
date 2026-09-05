import FlowGraphic from "@/components/FlowGraphic";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

const CONTACT_EMAIL = "JaysonAiHolland@gmail.com";

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
  },
  {
    number: "02",
    emoji: "🛠️",
    title: "Build the system",
    description:
      "Wire the agents, workflows, and integrations in a sandbox — nothing touches production until it's proven.",
  },
  {
    number: "03",
    emoji: "🚀",
    title: "Ship and hand off",
    description:
      "Deploy to your environment, document what was built, and hand over ownership — not a black box.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b-2 border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="flex items-center font-display text-lg font-semibold">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-punch" />
            Jayson AI Holland
          </span>
          <a
            href="#contact"
            className="pop-button rounded-full bg-ink px-5 py-2.5 font-display text-sm font-semibold text-paper shadow-[4px_4px_0_var(--color-sun)]"
          >
            Start a build 🚀
          </a>
        </div>
      </header>

      <main className="overflow-x-hidden">
        <section className="relative px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <span
            aria-hidden="true"
            className="blob absolute top-10 right-[8%] h-56 w-56 rounded-full bg-volt/20 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="blob blob-reverse blob-slow absolute top-40 left-[4%] h-64 w-64 rounded-full bg-sun/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border-2 border-ink/10 bg-white px-4 py-1.5 font-mono text-xs tracking-wide text-ink/70 uppercase">
              ✨ Jayson AI Holland — Automation Studio
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.15] font-bold sm:text-6xl">
              Automation that&rsquo;s actually{" "}
              <span className="gradient-text">fun</span> to watch run.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
              AI agents and workflows — designed, wired, and shipped by
              someone who builds them for a living. No decks, no snooze-fest
              demos. Just systems that run (and look good doing it).
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="pop-button rounded-full bg-gradient-to-r from-volt to-punch px-7 py-3.5 font-display text-sm font-semibold text-white shadow-lg"
              >
                Start a build 🚀
              </a>
              <a
                href="#services"
                className="pop-button rounded-full border-2 border-ink/15 bg-white px-7 py-3.5 font-display text-sm font-semibold"
              >
                See what we build
              </a>
            </div>
          </div>

          <div className="relative mt-16">
            <FlowGraphic />
          </div>
        </section>

        <section id="services" className="bg-ink px-6 py-24 text-paper">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="font-mono text-xs tracking-widest text-sun uppercase">
                What we build
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
                Three ways automation actually earns its keep.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {SERVICES.map((service, i) => (
                <Reveal key={service.title} delay={i * 120}>
                  <ServiceCard {...service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-center font-mono text-xs tracking-widest text-punch uppercase">
                How a build runs
              </p>
              <h2 className="mt-3 text-center font-display text-3xl font-bold sm:text-4xl">
                Three stages. Nothing skipped.
              </h2>
            </Reveal>

            <ol className="mt-14 space-y-6">
              {STEPS.map((step, i) => (
                <Reveal key={step.number} delay={i * 120}>
                  <li className="tilt-card flex items-start gap-5 rounded-3xl border-2 border-ink/10 bg-white p-6 shadow-sm">
                    <span className="wiggle-hover flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sun/30 text-2xl">
                      {step.emoji}
                    </span>
                    <div>
                      <span className="font-mono text-xs tracking-widest text-ink/40">
                        {step.number}
                      </span>
                      <h3 className="font-display text-lg font-bold">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/70">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-gradient-to-br from-volt to-punch px-6 py-24 text-white"
        >
          <span
            aria-hidden="true"
            className="blob absolute -top-10 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="blob blob-reverse absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-sun/20 blur-3xl"
          />

          <Reveal className="relative mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Start a build.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/90">
              Tell me what&rsquo;s slow, manual, or held together with
              copy-paste. I&rsquo;ll tell you straight whether automation
              actually fixes it.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="pop-button mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-display text-sm font-semibold text-volt shadow-lg"
            >
              Email {CONTACT_EMAIL}
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t-2 border-ink/10 bg-paper py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 font-mono text-xs tracking-widest text-ink/50 uppercase sm:flex-row sm:items-center">
          <span>Jayson AI Holland</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
