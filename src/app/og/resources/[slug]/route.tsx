import { ImageResponse } from "next/og";

const decks: Record<string, { title: string; kicker: string }> = {
  "prosperity-engine": {
    title: "The Prosperity Engine",
    kicker: "Slide deck · Economic systems",
  },
  "closing-the-compliance-gap": {
    title: "Closing the Compliance Gap for African Startups",
    kicker: "Slide deck · Trust infrastructure",
  },
  "bootstrapping-for-investors": {
    title: "Bootstrapping & Making Your Idea Attractive to Investors",
    kicker: "Slide deck · Venture building",
  },
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(decks).map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const deck = decks[slug];
  const title = deck?.title ?? "Slide deck by Tolu Adetuyi";
  const category = deck?.kicker ?? "Slide deck";
  const fontSize = title.length > 60 ? 56 : title.length > 36 ? 68 : 80;

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
          borderLeft: "16px solid #b94618",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#b94618",
          }}
        >
          {category}
        </div>
        <div
          style={{
            display: "flex",
            fontSize,
            lineHeight: 1.12,
            letterSpacing: -1.5,
            color: "#1e293b",
            maxWidth: 1000,
          }}
        >
          {title}
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
