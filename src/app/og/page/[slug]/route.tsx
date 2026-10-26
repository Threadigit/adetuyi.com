import { ImageResponse } from "next/og";
import { getAllPosts } from "@/lib/writing";

export const dynamic = "force-static";

const cards: Record<string, { kicker: string; title: string; subtitle?: string }> = {
  thesis: {
    kicker: "Thesis",
    title: "Infrastructure for Economic Participation",
    subtitle: "Systems that help people and businesses take part in the global economy",
  },
  advisory: {
    kicker: "Advisory",
    title: "Advisory for Founders, Operators and Investors",
    subtitle: "Selective, with a focus on African markets",
  },
  speaking: {
    kicker: "Speaking",
    title: "Speaking & Panels",
    subtitle: "Talks and presentations on identity, fraud, compliance and building in Africa",
  },
  press: {
    kicker: "Press",
    title: "Press & Publications",
    subtitle: "Coverage, interviews, commentary and research",
  },
  writing: {
    kicker: "Writing",
    title: "Essays & Perspectives",
  },
  "press-kit": {
    kicker: "Press kit",
    title: "Bios, titles, topics and photos",
    subtitle: "For event organisers and journalists",
  },
};

export function generateStaticParams() {
  return Object.keys(cards).map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const card = cards[slug] ?? { kicker: "Tolu Adetuyi", title: "Tolu Adetuyi" };
  const subtitle =
    slug === "writing"
      ? `${getAllPosts().length} essays on leadership, building companies, trust and capital`
      : card.subtitle;
  const fontSize = card.title.length > 40 ? 68 : 84;

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
          {card.kicker}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#1e293b",
              maxWidth: 1000,
            }}
          >
            {card.title}
          </div>
          {subtitle && (
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 32,
                lineHeight: 1.35,
                color: "#566376",
                maxWidth: 940,
              }}
            >
              {subtitle}
            </div>
          )}
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
