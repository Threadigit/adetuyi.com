import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, getStartHerePosts } from "@/lib/writing";
import WritingList from "./WritingList";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const canonical = "https://www.adetuyi.com/writing";
const postCount = getAllPosts().length;
const description = `Read ${postCount} essays by Tolu Adetuyi on leadership, building companies, trust, capital and economic participation in Africa.`;

export const metadata: Metadata = {
  title: "Writing",
  description,
  openGraph: {
    title: "Writing | Tolu Adetuyi",
    description,
    url: canonical,
    type: "website",
    images: [
      {
        url: "/tolu-og.jpg",
        width: 1374,
        height: 1145,
        alt: "Writing by Tolu Adetuyi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Tolu Adetuyi",
    description,
    images: ["/tolu-og.jpg"],
  },
  alternates: {
    canonical,
  },
};

export default function WritingPage() {
  const posts = getAllPosts();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Writing by Tolu Adetuyi",
    description,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${canonical}/${post.slug}`,
      })),
    },
  };

  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Writing", path: "/writing" },
        ]}
      />
      <Link
        href="/"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back
      </Link>

      <header className="mb-14 animate-fade-up delay-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-accent"></div>
          <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
            Writing
          </span>
        </div>
        <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-4 text-foreground">
          Essays &amp; Perspectives
        </h1>
        <p className="text-[15px] leading-relaxed text-muted max-w-[520px]">
          A collection of {posts.length} essays on trust infrastructure,
          leadership, venture building, distribution, capital formation, and
          the systems that power economic participation across emerging markets.
        </p>
        <a
          href="/feed.xml"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-1.5 text-[12px] font-medium uppercase tracking-widest text-accent hover:bg-accent hover:text-white transition-colors"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
            <circle cx="5" cy="19" r="2.2" />
            <path d="M3 10.5v3.2a7.3 7.3 0 0 1 7.3 7.3h3.2A10.5 10.5 0 0 0 3 10.5Z" />
            <path d="M3 3.5v3.2A14.3 14.3 0 0 1 17.3 21h3.2A17.5 17.5 0 0 0 3 3.5Z" />
          </svg>
          Follow by RSS
        </a>
      </header>

      <WritingList posts={posts} startHere={getStartHerePosts()} />
    </main>
  );
}
