import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

// The card shown when the site's link is shared (WhatsApp, LinkedIn, X)
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1c1917",
          color: "#faf6ee",
        }}
      >
        <div style={{ fontSize: 28, color: "#ffb800", letterSpacing: 4, textTransform: "uppercase" }}>
          {site.role}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#e8551f" }}>
          Small, calm software for everyday life.
        </div>
        <div style={{ fontSize: 30, marginTop: 40, opacity: 0.7 }}>
          slowSKY · Sit With · Autopilot Ledger
        </div>
      </div>
    ),
    size,
  );
}
