import { ImageResponse } from "next/og";
import { business } from "@/data/business";

export const alt = `${business.fullName} — Vermont-style deli in Canton, NY`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: Swap for a real photo-based share image once photography is available.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fbf6ec",
        padding: 72,
        color: "#2a2623",
        borderBottom: "28px solid #2f5d3a",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="64" height="70" viewBox="-50 -55 100 110">
          <path
            fill="#9a4e12"
            d="M0-50 8-30 22-36 18-14 34-18 30-6 44 0 22 10 26 26 4 20 2 50-2 50-4 20-26 26-22 10-44 0-30-6-34-18-18-14-22-36-8-30Z"
          />
        </svg>
        <div style={{ fontSize: 34, color: "#9a4e12", fontWeight: 700 }}>{business.tagline}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 108, fontWeight: 800, lineHeight: 1 }}>{business.name}</div>
        <div style={{ fontSize: 44, marginTop: 20, color: "#57504a" }}>
          Real Vermont sandwiches in Canton, NY
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 30, color: "#2f5d3a", fontWeight: 700 }}>
        11 Main St, Canton · Breakfast &amp; lunch 8am–3pm · Closed Wednesdays
      </div>
    </div>,
    size,
  );
}
