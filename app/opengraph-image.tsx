import { ImageResponse } from "next/og";

/**
 * WhatsApp/social preview card. Latin text only, on purpose: `ImageResponse`
 * (Satori) has no bundled Devanagari glyphs, and shipping a font file just
 * for this card isn't worth it — a missing-glyph render is worse than an
 * English-only one. The site itself stays Hindi-first; this is the one
 * surface where that yields.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", // claim-lint-ok: CSS layout sizing, not a claim
          height: "100%", // claim-lint-ok: CSS layout sizing, not a claim
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08301f",
          padding: "76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#ffffff",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                margin: "auto",
                borderRadius: 999,
                border: "7px solid #0e4d3a",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#ffffff", letterSpacing: 1 }}>
              AGASTA HOMEO
            </div>
            <div style={{ fontSize: 20, color: "#c6ded2" }}>A unit of Kangson Wellness Pvt Ltd</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", width: 84, height: 6, background: "#a8322a", borderRadius: 999 }} />
          <div style={{ fontSize: 46, fontWeight: 600, color: "#ffffff", lineHeight: 1.28, maxWidth: 980 }}>
            Homoeopathic hospitals for Bihar — and the doctors who will run them.
          </div>
          <div style={{ fontSize: 24, color: "#c6ded2", maxWidth: 900 }}>
            OPD and inpatient care. Registered doctors on payroll. Published fees.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
