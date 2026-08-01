import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/writing";
import WritingList from "./WritingList";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and perspectives on trust infrastructure, leadership, venture building, distribution, capital formation, and building across emerging markets. By Tolu Adetuyi.",
  openGraph: {
    title: "Writing | Tolu Adetuyi",
    description:
      "Essays on trust infrastructure, leadership, venture building, distribution, capital formation, and building across emerging markets.",
    url: "https://adetuyi.com/writing",
  },
  alternates: {
    canonical: "https://adetuyi.com/writing",
  },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
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
      </header>

      <WritingList posts={posts} />
    </main>
  );
}
