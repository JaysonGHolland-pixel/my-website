import Image from "next/image";

export default function OfficeBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1704655294986-fe0e8fb1c572?w=1600&q=70"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ filter: "blur(6px) saturate(0.85)", transform: "scale(1.06)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--color-void) 78%, transparent) 0%, color-mix(in srgb, var(--color-void) 88%, transparent) 40%, var(--color-void) 100%)",
        }}
      />
    </div>
  );
}
