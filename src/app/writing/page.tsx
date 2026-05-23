import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/writing";

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
          On trust infrastructure, leadership, venture building, distribution, capital formation, and the systems that power economic participation across emerging markets.
        </p>
      </header>

      <div className="space-y-0 animate-fade-up delay-200">
        {posts.map((post, index) => (
          <article key={post.slug}>
            <Link
              href={`/writing/${post.slug}`}
              className="group block py-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[12px] uppercase tracking-widest text-accent font-medium">
                  {post.category}
                </span>
                <span className="text-muted/40 text-[10px]">·</span>
                <time
                  dateTime={post.date}
                  className="text-[12px] uppercase tracking-widest text-muted/60"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              </div>
              <h2 className="text-[20px] md:text-[22px] font-medium text-foreground tracking-tight leading-snug mb-2.5 group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-[14px] leading-relaxed text-muted line-clamp-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-muted/60 mt-3 group-hover:text-accent transition-colors duration-300">
                {post.readingTime}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
            {index < posts.length - 1 && (
              <div className="border-t border-accent/15" />
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
