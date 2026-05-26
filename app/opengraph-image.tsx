import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Find A Broker — Compare FCA-Regulated Trading Brokers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "#2563eb",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 18 18" fill="none">
              <path d="M2 14L6 8L10 11L16 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4H16V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ color: "#94a3b8", fontSize: "22px", fontWeight: 600 }}>
            findabroker.xyz
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          Compare FCA-Regulated
          <br />
          <span style={{ color: "#38bdf8" }}>Trading Brokers</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            fontWeight: 400,
            lineHeight: 1.4,
            marginBottom: "56px",
          }}
        >
          Independent reviews · Honest comparisons · No pay-to-rank
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: "24px" }}>
          {["10 Brokers Reviewed", "FCA-Regulated Focus", "Free Fee Calculator"].map((badge) => (
            <div
              key={badge}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "8px",
                padding: "10px 20px",
                color: "#cbd5e1",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
