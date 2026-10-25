import { ContentBlock, getAllPosts } from "@/lib/writing";

export const dynamic = "force-static";

const siteUrl = "https://www.adetuyi.com";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absolutise(html: string): string {
  return html.replace(/href="\//g, `href="${siteUrl}/`);
}

function blockToHtml(block: ContentBlock): string {
  switch (block.type) {
    case "paragraph":
      return `<p>${absolutise(block.text)}</p>`;
    case "heading":
      return `<h2>${block.text}</h2>`;
    case "quote":
      return `<blockquote>${block.text.replace(/\n/g, "<br>")}</blockquote>`;
    case "callout":
      return `<p>${absolutise(block.text)}</p>`;
    case "image":
      return `<figure><img src="${siteUrl}${block.url}" alt="${escapeXml(block.alt)}" />${
        block.caption ? `<figcaption>${block.caption}</figcaption>` : ""
      }</figure>`;
    case "youtube":
      return `<p><a href="https://www.youtube.com/watch?v=${block.videoId}">${block.name}</a></p>`;
    default:
      return "";
  }
}

export function GET() {
  const posts = getAllPosts();
  const updated = new Date(posts[0].modifiedDate ?? posts[0].date).toUTCString();

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/writing/${post.slug}`;
      const html = post.content.map(blockToHtml).join("").replace(/]]>/g, "]]]]><![CDATA[>");
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.excerpt)}</description>
      <content:encoded><![CDATA[${html}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Tolu Adetuyi, Writing</title>
    <link>${siteUrl}/writing</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Essays by Tolu Adetuyi on trust infrastructure, nation building, leadership, capital formation and economic participation in Africa.</description>
    <language>en</language>
    <lastBuildDate>${updated}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
