import Link from "next/link";
import HeroGlobe from "@/components/HeroGlobe";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import StepCard from "@/components/StepCard";
import PipelineDemo from "@/components/PipelineDemo";
import SupportAgentDemo from "@/components/SupportAgentDemo";
import LeadRecoveryDemo from "@/components/LeadRecoveryDemo";
import AutomationComparison from "@/components/AutomationComparison";

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

const BUILD_PHASES = [
  {
    number: "01",
    emoji: "🔍",
    title: "Discover",
    description:
      "Find the repetitive, slow, expensive, or error-prone process — before touching any tool.",
    demo: {
      heading: "What a discovery conversation surfaces",
      lines: [
        "New lead lands in inbox",
        "Details copied into a spreadsheet by hand",
        "Templated reply sent — ~8 min per lead",
        "CRM updated manually, often forgotten",
      ],
      note: "This is the kind of before-picture a discovery conversation produces — the automation gets built around it.",
    },
  },
  {
    number: "02",
    emoji: "🧭",
    title: "Design",
    description:
      "Map the workflow step by step and find exactly where automation creates real leverage.",
    demo: {
      heading: "What a workflow map looks like",
      lines: [
        "Trigger: form submitted",
        "Decision: urgent vs. routine",
        "Branch A: AI drafts reply + notifies sales",
        "Branch B: logged for the next business day",
      ],
      note: "Every branch and decision point gets mapped before a single line of automation is built.",
    },
  },
  {
    number: "03",
    emoji: "🛠️",
    title: "Build",
    description:
      "Connect the APIs, tools, databases, agents, and workflows the process actually needs.",
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
    number: "04",
    emoji: "🧪",
    title: "Test",
    description:
      "Run realistic scenarios and the edge cases that break naive automations.",
    demo: {
      heading: "What testing actually covers",
      lines: [
        "Empty or malformed form fields",
        "Duplicate submissions within seconds",
        "Non-English input",
        "The CRM API timing out mid-request",
      ],
      note: "If a workflow only handles the happy path, it isn't finished — this is where that gets caught.",
    },
  },
  {
    number: "05",
    emoji: "🚀",
    title: "Ship",
    description:
      "Deploy, document, monitor, and hand off — so the system outlives the build.",
    demo: {
      heading: "What you actually get",
      lines: [
        "Live workflow in your own n8n/tool account",
        "One-page README explaining what each step does",
        "Credentials stay in your accounts, not mine",
      ],
      note: "The point is you can hand this to anyone else later — nothing is locked to me.",
    },
  },
];

const TECH_GROUPS = [
  { label: "AI & Agents", items: ["Claude"] },
  { label: "Automation", items: ["n8n"] },
  { label: "Product", items: ["Next.js", "TypeScript", "Tailwind"] },
  { label: "Infrastructure", items: ["Vercel", "GitHub"] },
  { label: "Testing", items: ["Playwright"] },
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
            AI systems that actually{" "}
            <span className="gradient-text">run</span> the work.
          </h1>

          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted">
            I design and build the agents, workflows, and connected systems
            that turn repetitive business processes into automation that
            actually ships.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="pop-button glow-cta rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
            >
              Start a build
            </Link>
            <a
              href="#demos"
              className="glass-panel pop-button rounded-full px-8 py-4 font-display text-sm font-semibold text-starlight"
            >
              Watch a system run
            </a>
          </div>
        </div>

        <HeroGlobe />
      </section>

      <section id="approach" className="relative px-6 pt-0 pb-28 sm:pb-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-center font-mono text-xs tracking-widest text-punch uppercase">
              How I approach this
            </p>
            <h2 className="display-tight mt-4 text-center font-display text-4xl font-bold sm:text-5xl">
              I don&rsquo;t start with &ldquo;what AI tool should we
              use.&rdquo;
            </h2>
            <p className="mx-auto mt-5 max-w-md text-center text-muted">
              I start with: what happens when this breaks, slows down, or
              gets missed?
            </p>
          </Reveal>

          <div className="relative mt-16">
            <div
              className="energy-line absolute top-7 bottom-7 left-[52px] w-[3px] rounded-full"
              aria-hidden="true"
            />
            <ol className="space-y-6">
              {BUILD_PHASES.map((phase, i) => (
                <Reveal key={phase.number} delay={i * 100}>
                  <li>
                    <StepCard {...phase} />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="demos" className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-center font-mono text-xs tracking-widest text-mint uppercase">
              Built systems
            </p>
            <h2 className="display-tight mt-4 text-center font-display text-4xl font-bold sm:text-6xl">
              Proof, not a pitch.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center text-muted">
              Three demo builds you can actually run. Each one is a
              prototype built to show how the underlying system works — not
              a claim about a real client project.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-14">
            <LeadRecoveryDemo />
          </Reveal>

          <Reveal delay={140} className="mt-8">
            <AutomationComparison />
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <p className="text-center font-mono text-xs tracking-widest text-muted uppercase">
                Also built
              </p>
            </Reveal>
          </div>

          <div className="mt-8 space-y-8">
            <Reveal>
              <SupportAgentDemo />
            </Reveal>

            <Reveal delay={100}>
              <PipelineDemo
                tag="Demo Build 03"
                title="AI business admin automation"
                problem="Every incoming email that needs sorting, logging, and a reply eats time that should go to actual work — not retyping the same three responses."
                accent="var(--color-mint)"
                steps={[
                  { label: "Incoming email received", log: "New message pulled from the inbox.", phase: "input" },
                  { label: "AI reads email", log: "Parsing sender, subject, and body.", phase: "logic" },
                  { label: "Extracts key information", log: "Pulled: request type, deadline, reference number.", phase: "logic" },
                  { label: "Categorizes request", log: "Classified as: invoice query.", phase: "logic" },
                  { label: "Updates spreadsheet/database", log: "Row added to the tracking sheet.", phase: "automation" },
                  { label: "Creates task", log: "Task assigned: follow up by Friday.", phase: "automation" },
                  { label: "Sends response", log: "Acknowledgement reply sent.", phase: "output" },
                ]}
                architecture={[
                  "Inbox (Gmail/Outlook API)",
                  "Trigger on new email",
                  "AI Agent (extraction + classification)",
                  "Spreadsheet/database write",
                  "Task creation (project tool)",
                  "Auto-reply",
                  "Logging",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-sun uppercase">
              What I build
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

      <section className="relative px-6 pb-28 sm:pb-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-muted uppercase">
              Stack
            </p>
            <h2 className="display-tight mt-3 font-display text-2xl font-bold">
              Real tools, not buzzwords.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-5">
              {TECH_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-[10px] tracking-widest text-muted/60 uppercase">
                    {group.label}
                  </p>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="glass-panel rounded-full px-3 py-1 font-mono text-xs text-starlight/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 pb-28 sm:pb-36">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-center font-mono text-xs tracking-widest text-punch uppercase">
              Build proof
            </p>
            <h2 className="display-tight mt-4 text-center font-display text-3xl font-bold sm:text-4xl">
              This website is proof #1.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold">
                Jayson AI Holland — this website
              </h3>
              <p className="mt-2 text-sm text-muted">
                Built with Claude Code, in the open — the Build Log documents
                every real iteration.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs">
                <a
                  href="https://github.com/JaysonGHolland-pixel/my-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/30 hover:text-starlight"
                >
                  Repository ↗
                </a>
                <Link
                  href="/build-log"
                  className="underline decoration-white/30 hover:text-starlight"
                >
                  Architecture &amp; process ↗
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-white/15 p-6">
              <h3 className="font-display text-lg font-bold text-muted">
                More builds, coming
              </h3>
              <p className="mt-2 text-sm text-muted">
                Additional repositories, live demos, and architecture
                writeups get linked here as each one ships — nothing
                invented ahead of time.
              </p>
            </div>
          </Reveal>
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
            Have a process worth automating?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted">
            Tell me what&rsquo;s happening today — I&rsquo;ll tell you
            straight whether automation actually helps.
          </p>
          <Link
            href="/contact"
            className="pop-button glow-cta mt-9 inline-block rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
          >
            Start a build
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
