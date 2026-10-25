import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fdfcf9",
          padding: "72px 80px",
          borderLeft: "16px solid #d95c2e",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d95c2e",
          }}
        >
          Investing &amp; Fund Formation
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              color: "#1e293b",
            }}
          >
            BuildX Capital
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#566376",
              maxWidth: 940,
            }}
          >
            Mobility, Energy, Trade, Manufacturing &amp; Physical Infrastructure
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#566376",
          }}
        >
          <span>Tolu Adetuyi</span>
          <span>adetuyi.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
