import Link from "next/link";

const FAQS = [
  {
    q: "How much does this cost?",
    a: "There's no fixed price list yet, and I'm not going to pretend there is one. Pricing should match what the problem is actually costing you — a business missing three $20k jobs a year needs a different conversation than one missing three $500 jobs. The discovery call figures out the real scope first; a number comes after that, not before.",
  },
  {
    q: "Is this real AI, or a chatbot with extra steps?",
    a: "Real tools, named plainly: n8n for the workflow/orchestration, Claude for the actual language understanding and reasoning. The demos on this site aren't mockups — click through them and you're seeing the actual logic run, not a recorded video. If a system I build for you can't survive someone asking \"wait, how does this actually work,\" I haven't done my job.",
  },
  {
    q: "What do you actually need from me to build this?",
    a: "A real walkthrough of what currently happens when an enquiry/task lands — step by step, tool by tool — not a spec document. Access to whatever the workflow touches (your form, inbox, CRM, spreadsheet). You review and approve what gets built before it goes live; nothing gets automated silently.",
  },
  {
    q: "How long does something like this take to build?",
    a: "Depends entirely on scope, which is exactly why it's a discovery-call question, not a website answer. A single-workflow fix (e.g. \"qualify and reply to enquiries\") is a much smaller build than a full multi-step system — the demos here show what's technically possible, not a fixed timeline for every project.",
  },
  {
    q: "What happens to the AI's replies — do they go out automatically?",
    a: "That's a decision you make, not a default. Most businesses starting out want a human to approve the first replies before anything sends automatically — the Northstar case study shows exactly this pattern (an AI-drafted reply, a human clicking Approve). Full automation is something you can graduate into once you trust it, not something forced on day one.",
  },
  {
    q: "I already have a CRM/form set up — does this replace it?",
    a: "No — it connects to what you already use rather than replacing it. The actual gap for most businesses isn't the form itself, it's everything that happens (or doesn't) between someone submitting it and a person actually looking at it.",
  },
  {
    q: "Why should I trust a newer consultant with this?",
    a: "Fair question, and I won't oversell an answer to it. What I can offer instead of a long track record: every demo on this site is something you can actually click through and test yourself, not a claim you have to take on faith — and taking on a small number of early projects right now means more direct attention than a bigger, busier shop could give the same job.",
  },
];

export default function FAQPage() {
  return (
    <main className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="pop-button glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-xs font-semibold text-starlight"
        >
          &larr; Back to home
        </Link>

        <p className="mt-10 text-center font-mono text-xs tracking-widest text-punch uppercase">
          Before you ask
        </p>
        <h1 className="display-tight mt-3 text-center font-display text-4xl leading-[1.15] font-bold sm:text-5xl">
          Straight answers, not a sales page.
        </h1>

        <div className="mt-12 space-y-6">
          {FAQS.map((item) => (
            <div key={item.q} className="glass-panel rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-starlight">
                {item.q}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/northstar"
            className="glass-panel pop-button rounded-full px-8 py-4 font-display text-sm font-semibold text-starlight"
          >
            See a full case study →
          </Link>
          <Link
            href="/contact"
            className="pop-button glow-cta rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
          >
            Start a build
          </Link>
        </div>
      </div>
    </main>
  );
}
