import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const ENTRIES = [
  {
    tag: "Iteration 1",
    title: "Blueprint concept",
    body: "First direction: a navy engineering-schematic look — title-block hero, hairline grid, a node diagram for the hero. Restrained and technical.",
  },
  {
    tag: "Iteration 2",
    title: "Playful redesign",
    body: "Feedback: too restrained, wanted something eye-catching with real animation. Rebuilt with a violet/pink/mint palette, bouncy type, drifting gradient blobs, and scroll-triggered reveals.",
  },
  {
    tag: "Iteration 3",
    title: "Studied a real award-winner",
    body: "Found forai.design — an actual Awwwards honorable mention — and pulled real lessons from it: one dominant hero visual instead of scattered small ones, far more whitespace, a bigger type scale, and a subtle film-grain texture.",
  },
  {
    tag: "Iteration 4",
    title: "Space theme + mission timeline",
    body: "Found another real Awwwards site — a cosmic scrollytelling piece — and adapted its light-to-dark scroll journey into a full space theme: a starfield, a ringed hero planet, and a glowing energy line connecting the hero straight into the three build-stage nodes below it.",
  },
];

export default function BuildLog() {
  return (
    <main className="relative z-10 px-6 pt-16 pb-24 sm:pt-20">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="pop-button glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-xs font-semibold text-starlight"
        >
          &larr; Back to home
        </Link>

        <Reveal delay={80}>
          <p className="mt-10 font-mono text-xs tracking-widest text-mint uppercase">
            Build log
          </p>
          <h1 className="display-tight mt-3 font-display text-4xl leading-[1.15] font-bold sm:text-5xl">
            This site was built <span className="gradient-text">live</span>,
            not templated.
          </h1>
          <p className="mt-6 text-lg text-muted">
            Most agency sites show you fake case studies. We don&rsquo;t have
            real client results yet, so here&rsquo;s the honest alternative:
            proof of the actual build process, in order, as it happened.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {ENTRIES.map((entry, i) => (
            <Reveal key={entry.tag} delay={160 + i * 100}>
              <div className="glass-panel rounded-3xl p-7">
                <p className="font-mono text-xs tracking-widest text-punch uppercase">
                  {entry.tag}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold">
                  {entry.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {entry.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={560}>
          <div className="mt-14">
            <p className="font-mono text-xs tracking-widest text-sun uppercase">
              Real screenshots
            </p>
            <p className="mt-2 text-sm text-muted">
              Two working features from this build, captured mid-session —
              not mockups.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="glass-panel overflow-hidden rounded-2xl">
                <Image
                  src="/build-log/example-modal.png"
                  alt="A service card's example modal, open and showing the lead response automation steps"
                  width={1440}
                  height={900}
                  className="w-full"
                />
                <p className="p-4 font-mono text-[11px] text-muted uppercase">
                  Example modal, mid-build
                </p>
              </div>
              <div className="glass-panel overflow-hidden rounded-2xl">
                <Image
                  src="/build-log/step-modal.png"
                  alt="A mission-stage step card's demo modal, open and showing what a hand-off deliverable looks like"
                  width={1440}
                  height={900}
                  className="w-full"
                />
                <p className="p-4 font-mono text-[11px] text-muted uppercase">
                  Step demo modal, mid-build
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={640} className="mt-14 text-center">
          <Link
            href="/contact"
            className="pop-button glow-cta inline-block rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg"
          >
            Start your own build 🚀
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
