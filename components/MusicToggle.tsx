"use client";

import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/ambient-lofi.mp3" loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="glass-panel pop-button fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-lg"
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}
