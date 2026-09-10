"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Page = {
  tag: string;
  title: string;
  copy: string;
  img: string;
};

const PAGES: Page[] = [
  {
    tag: "Hospitality",
    title: "Same five questions, every single day.",
    copy: "Hours, bookings, dietary options, parking — the Support Agent demo further down handles the repeat questions so staff handle the room.",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80",
  },
  {
    tag: "Trades & Renovation",
    title: "A quote request at 9pm doesn't wait for business hours.",
    copy: "The Lead Recovery demo further down is built around exactly this — an inbound enquiry gets a real, useful reply before the lead goes cold.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
  },
  {
    tag: "Electrician",
    title: "A callout at 11pm looks urgent. So does the one from an hour ago.",
    copy: "The same Lead Recovery demo scores and replies the moment a request lands, so the real emergency doesn't sit behind three routine ones.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80",
  },
  {
    tag: "Plumbing",
    title: "The same leak call, the same questions, every time.",
    copy: "The Pipeline demo further down is built for exactly this — a repetitive intake process handled the same careful way, every single time.",
    img: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=1600&q=80",
  },
  {
    tag: "Real Estate & Landscaping",
    title: "Every enquiry looks urgent until you triage it.",
    copy: "Scoring and routing an enquiry the moment it lands means the right one gets a call back first, not whoever emailed last.",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80",
  },
  {
    tag: "Health & Wellness",
    title: "Admin time is time not spent with a client.",
    copy: "The Pipeline demo further down runs on this same idea — a repetitive process handed to something that doesn't get tired of it.",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80",
  },
];

const FLIP_MS = 650;

function Leaf({ page }: { page: Page }) {
  return (
    <>
      <Image
        src={page.img}
        alt={page.tag}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--void) 10%, transparent) 0%, color-mix(in srgb, var(--void) 45%, transparent) 55%, color-mix(in srgb, var(--void) 90%, transparent) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14">
        <span className="glass-panel inline-block rounded-full px-3 py-1 font-mono text-[11px] tracking-widest text-sun uppercase">
          {page.tag}
        </span>
        <h3 className="display-tight mt-4 max-w-lg font-display text-2xl font-bold text-starlight sm:text-4xl">
          {page.title}
        </h3>
        <p className="mt-3 max-w-md text-sm text-starlight/75 sm:text-base">
          {page.copy}
        </p>
      </div>
    </>
  );
}

export default function IndustryFlipBook() {
  const [index, setIndex] = useState(0);
  const [outgoing, setOutgoing] = useState<{ page: Page; dir: 1 | -1 } | null>(
    null
  );
  const [flipped, setFlipped] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const busy = useRef(false);

  const go = (dir: 1 | -1) => {
    if (busy.current) return;
    busy.current = true;
    const from = PAGES[index];
    const to = (index + dir + PAGES.length) % PAGES.length;

    setOutgoing({ page: from, dir });
    setFlipped(false);
    setIndex(to);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setFlipped(true));
    });

    window.setTimeout(() => {
      setOutgoing(null);
      setFlipped(false);
      busy.current = false;
    }, FLIP_MS + 30);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    go(dx < 0 ? 1 : -1);
  };

  return (
    <div>
      <div
        className="relative h-[70vh] w-full cursor-pointer overflow-hidden rounded-3xl sm:h-[80vh]"
        style={{ perspective: "2000px" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={() => go(1)}
        role="button"
        aria-label="Flip to next page"
      >
        {/* revealed page underneath — always the current index, static */}
        <div className="absolute inset-0">
          <Leaf page={PAGES[index]} />
        </div>

        {/* flipping leaf on top, only present during a transition */}
        {outgoing && (
          <div
            className="absolute inset-0 [backface-visibility:hidden]"
            style={{
              transformOrigin: outgoing.dir === 1 ? "0% 50%" : "100% 50%",
              transform: `rotateY(${
                flipped ? (outgoing.dir === 1 ? -170 : 170) : 0
              }deg)`,
              transition: `transform ${FLIP_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`,
              boxShadow: flipped ? "none" : "0 0 60px rgba(0,0,0,0.5)",
            }}
          >
            <Leaf page={outgoing.page} />
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous page"
          className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-starlight/80 transition hover:text-sun"
        >
          ‹
        </button>
        <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
          Page {index + 1} / {PAGES.length} — click or swipe to flip
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next page"
          className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-starlight/80 transition hover:text-sun"
        >
          ›
        </button>
      </div>
    </div>
  );
}
