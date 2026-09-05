import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <main className="relative z-10 overflow-x-hidden">
      <section className="relative px-6 pt-16 pb-20 sm:pt-20">
        <span
          aria-hidden="true"
          className="blob absolute top-10 right-[6%] h-56 w-56 rounded-full bg-mint/20 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="blob blob-reverse blob-slow absolute top-52 left-[4%] h-64 w-64 rounded-full bg-volt/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <Link
            href="/"
            className="pop-button glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-xs font-semibold text-starlight"
          >
            &larr; Back to home
          </Link>

          <Reveal delay={80}>
            <p className="mt-10 font-mono text-xs tracking-widest text-punch uppercase">
              Who&rsquo;s behind this
            </p>
            <h1 className="display-tight mt-3 font-display text-4xl leading-[1.15] font-bold sm:text-5xl">
              One builder.{" "}
              <span className="gradient-text">Real systems</span>, not
              slideware.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg text-muted">
              Jayson AI Holland is a one-person automation studio. Every
              agent, workflow, and integration gets designed, built, and
              shipped by the same person you talk to about it — no account
              manager, no outsourced dev team you never meet.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="glass-panel mt-10 rounded-3xl p-7">
              <h2 className="font-display text-xl font-bold">How I work</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>
                  <strong className="text-starlight">
                    Real tools, named directly.
                  </strong>{" "}
                  If a build uses n8n, Claude, or a specific API, that&rsquo;s
                  what gets said — not vague talk of &ldquo;AI-powered
                  solutions.&rdquo;
                </li>
                <li>
                  <strong className="text-starlight">
                    Honesty over the sale.
                  </strong>{" "}
                  If automation isn&rsquo;t the right fix for what&rsquo;s
                  slowing you down, that gets said too.
                </li>
                <li>
                  <strong className="text-starlight">
                    You own what gets built.
                  </strong>{" "}
                  Workflows live in your accounts, with documentation — not
                  locked behind me.
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={320} className="mt-10 text-center">
            <p className="text-sm text-muted">
              Currently taking on a small number of early projects.
            </p>
            <Link
              href="/contact"
              className="pop-button glow-cta mt-4 inline-block rounded-full bg-gradient-to-r from-volt to-punch px-7 py-3.5 font-display text-sm font-semibold text-white shadow-lg"
            >
              Start a build 🚀
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
