import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

// Next.js finds this file by convention and automatically serves it as the
// Open Graph (and Twitter card) image for the whole site — no static image
// file to remember to update. Regenerates on build from whatever is in
// src/data/portfolio.ts.

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colors copied from globals.css — this renderer (Satori) can't read CSS
// variables, so the hex values are duplicated here on purpose.
const colors = {
  background: "#0a0e14",
  foreground: "#edf0f4",
  accent: "#7ea6d8",
  muted: "#99a3b3",
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 20,
          padding: 100,
          background: colors.background,
          color: colors.foreground,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: colors.accent }}>
          {profile.role}
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: colors.muted, maxWidth: 900 }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
