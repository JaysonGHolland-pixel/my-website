"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.15;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const startOnFirstInteraction = () => {
      if (!userPaused.current) audio.play().catch(() => {});
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
    };

    // Most browsers block audio with sound until the visitor has interacted
    // with the page at least once — try immediately, and if that's blocked,
    // start on the visitor's first click/tap/keypress anywhere on the site.
    audio.play().catch(() => {
      window.addEventListener("pointerdown", startOnFirstInteraction, {
        once: true,
      });
      window.addEventListener("keydown", startOnFirstInteraction, {
        once: true,
      });
    });

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      userPaused.current = true;
      audio.pause();
    } else {
      userPaused.current = false;
      audio.play().catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/piano-moment.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="glass-panel pop-button fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 17V5.5L20 3v11.5"
            stroke={playing ? "var(--color-volt)" : "var(--color-muted)"}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="6"
            cy="17"
            r="3"
            stroke={playing ? "var(--color-volt)" : "var(--color-muted)"}
            strokeWidth="1.6"
          />
          <circle
            cx="17"
            cy="14.5"
            r="3"
            stroke={playing ? "var(--color-volt)" : "var(--color-muted)"}
            strokeWidth="1.6"
          />
        </svg>
      </button>
    </>
  );
}
