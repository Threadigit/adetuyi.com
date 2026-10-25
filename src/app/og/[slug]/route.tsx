import { ImageResponse } from "next/og";
import { getAllSlugs, getPostBySlug } from "@/lib/writing";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Writing by Tolu Adetuyi";
  const category = post?.category ?? "Writing";
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
