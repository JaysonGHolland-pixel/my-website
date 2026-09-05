import NodeCanvas from "@/components/NodeCanvas";

const CONTACT_EMAIL = "jaysongholland@hotmail.com";

const SERVICES = [
  {
    branch: "BRANCH A",
    title: "AI Agents",
    description:
      "Conversational and task agents wired to your actual tools — not a chatbot that stops at answering questions.",
  },
  {
    branch: "BRANCH B",
    title: "Workflow Automation",
    description:
      "n8n pipelines that move data and trigger actions across the tools you already run, with errors that surface instead of failing silently.",
  },
  {
    branch: "BRANCH C",
    title: "Systems Integration",
    description:
      "APIs, webhooks, and data plumbing connected so your existing software actually talks to each other.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Map the process",
    description:
      "Walk through what the workflow actually does today, tool by tool, before touching any automation.",
  },
  {
    number: "02",
    title: "Build the system",
    description:
      "Wire the agents, workflows, and integrations in a sandbox — nothing touches production until it's proven.",
  },
  {
    number: "03",
    title: "Ship and hand off",
    description:
      "Deploy to your environment, document what was built, and hand over ownership — not a black box.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-trace/30 bg-vellum/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="flex items-center font-mono text-sm tracking-widest uppercase">
            <span className="mr-2 inline-block h-2 w-2 bg-redline" />
            Jayson AI Holland
          </span>
          <a
            href="#contact"
            className="border border-ink px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors hover:bg-ink hover:text-vellum"
          >
            Start a build
          </a>
        </div>
      </header>

      <main>
        <section className="blueprint-grid relative overflow-hidden bg-blueprint text-vellum">
          <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs tracking-widest text-trace uppercase">
              <span>Jayson AI Holland</span>
              <span aria-hidden="true">·</span>
              <span>Rev 2026.09</span>
              <span aria-hidden="true">·</span>
              <span className="text-signal">Status: Live</span>
            </div>

            <h1 className="max-w-3xl font-display text-4xl leading-[1.1] font-bold sm:text-6xl">
              Automation you can point to.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-trace">
              AI agents and workflows — designed, wired, and shipped by
              someone who builds them for a living. No decks. No hype. Just
              systems that run.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-redline px-6 py-3 font-mono text-xs tracking-widest text-vellum uppercase transition-opacity hover:opacity-90"
              >
                Start a build
              </a>
              <a
                href="#services"
                className="border border-trace/60 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors hover:border-vellum"
              >
                See what we build
              </a>
            </div>

            <div className="mt-16">
              <NodeCanvas />
            </div>
          </div>
        </section>

        <section id="services" className="bg-vellum py-24 text-ink">
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-mono text-xs tracking-widest text-redline uppercase">
              What we build
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Three ways automation actually earns its keep.
            </h2>

            <div className="mt-16 border-t border-trace">
              <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
                {SERVICES.map((service) => (
                  <div key={service.title} className="relative pt-8">
                    <span className="absolute top-0 left-0 h-8 w-px bg-trace" />
                    <p className="font-mono text-[11px] tracking-widest text-trace uppercase">
                      {service.branch}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/80">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="bg-blueprint-deep py-24 text-vellum">
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-mono text-xs tracking-widest text-signal uppercase">
              How a build runs
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Three stages. Nothing skipped.
            </h2>

            <ol className="mt-16 max-w-2xl border-l border-trace/40">
              {STEPS.map((step) => (
                <li key={step.number} className="relative pb-12 pl-10 last:pb-0">
                  <span className="absolute top-0 -left-[9px] h-4 w-4 border border-trace bg-blueprint-deep" />
                  <span className="font-mono text-xs tracking-widest text-trace">
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-trace">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="bg-redline py-20 text-vellum">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Start a build.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-vellum/90">
              Tell me what&rsquo;s slow, manual, or held together with copy-paste.
              I&rsquo;ll tell you straight whether automation actually fixes it.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-block bg-vellum px-6 py-3 font-mono text-xs tracking-widest text-redline uppercase transition-opacity hover:opacity-90"
            >
              Email {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-trace/30 bg-blueprint py-10 text-trace">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 font-mono text-xs tracking-widest uppercase sm:flex-row sm:items-center">
          <span>Jayson AI Holland</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
