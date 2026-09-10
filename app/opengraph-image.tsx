import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jayson AI Holland — AI Automation Built to Run Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1c1712",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#8c3b2e",
            }}
          />
          <div style={{ fontSize: 28, color: "#a8977a", letterSpacing: 2 }}>
            JAYSON AI HOLLAND · AUTOMATION STUDIO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#ede3cc",
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          AI systems that actually run the work.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 30,
            color: "#a8977a",
            maxWidth: 900,
          }}
        >
          Real demos, real tools — n8n and Claude, not a deck.
        </div>
      </div>
    ),
    { ...size }
  );
}
