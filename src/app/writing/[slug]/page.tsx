import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, type ContentBlock } from "@/lib/writing";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Tolu Adetuyi`,
      description: post.excerpt,
      url: `https://adetuyi.com/writing/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Tolu Adetuyi"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className={`text-[15px] leading-[1.85] text-muted mb-6 ${
            index === 0
              ? "first-letter:text-[48px] first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]"
              : ""
          }`}
        >
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h3
          key={index}
          className="text-[18px] font-medium text-foreground mt-10 mb-4 tracking-tight"
        >
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-8 pl-6 border-l-[3px] border-accent text-[17px] md:text-[18px] italic text-foreground/80 leading-relaxed"
        >
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <div
          key={index}
          className="my-8 p-6 bg-accent/5 ring-1 ring-border rounded-xl text-[14px] leading-relaxed text-muted"
        >
          {block.text}
        </div>
      );
    default:
      return null;
  }
}

export default async function WritingPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <Link
        href="/writing"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> All Writing
      </Link>

      <article className="animate-fade-up">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[12px] font-medium uppercase tracking-widest text-accent">
              {post.category}
            </span>
          </div>
          <h1 className="text-[32px] md:text-[40px] font-medium tracking-tight leading-tight mb-5 text-foreground">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[13px] text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-muted/30">·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="mb-16">
          {post.content.map((block, index) => renderBlock(block, index))}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <p className="text-[13px] text-muted mb-1">Written by</p>
              <Link
                href="/"
                className="text-[15px] font-medium text-foreground link-hover"
              >
                Tolu Adetuyi
              </Link>
            </div>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-accent transition-colors group"
            >
              More writing
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
