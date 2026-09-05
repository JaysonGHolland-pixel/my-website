function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const MOTE_COUNT = 46;
const random = mulberry32(2026);

const MOTES = Array.from({ length: MOTE_COUNT }, () => ({
  x: random() * 100,
  y: random() * 100,
  size: random() * 2.2 + 0.8,
  driftX: (random() - 0.5) * 40,
  driftY: -40 - random() * 60,
  maxOpacity: 0.15 + random() * 0.35,
  duration: 9 + random() * 10,
  delay: random() * 8,
}));

export default function AmbientDust() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {MOTES.map((mote, i) => (
        <span
          key={i}
          className="dust-mote absolute rounded-full bg-sun"
          style={
            {
              left: `${mote.x}%`,
              top: `${mote.y}%`,
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              animationDuration: `${mote.duration}s`,
              animationDelay: `${mote.delay}s`,
              "--dust-x": `${mote.driftX}px`,
              "--dust-y": `${mote.driftY}px`,
              "--dust-max": mote.maxOpacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
