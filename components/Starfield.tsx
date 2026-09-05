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

const STAR_COUNT = 140;
const random = mulberry32(1337);

const STARS = Array.from({ length: STAR_COUNT }, () => ({
  x: random() * 100,
  y: random() * 100,
  size: random() * 2 + 0.6,
  minOpacity: random() * 0.3,
  maxOpacity: 0.6 + random() * 0.4,
  duration: 3 + random() * 5,
  delay: random() * 5,
}));

export default function Starfield() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {STARS.map((star, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full bg-starlight"
          style={
            {
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              "--star-min": star.minOpacity,
              "--star-max": star.maxOpacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
