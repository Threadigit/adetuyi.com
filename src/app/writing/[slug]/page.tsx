import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, type ContentBlock } from "@/lib/writing";
import { absoluteUrl, siteUrl, toIsoDateTime, toSeoDescription } from "@/lib/seo";

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

  const title = post.seoTitle ?? post.title;
  const description = toSeoDescription(post.excerpt);
  const image = absoluteUrl(post.ogImage ?? "/tolu-og.jpg");
  const canonical = `${siteUrl}/writing/${post.slug}`;
  const publishedTime = toIsoDateTime(post.date);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | Tolu Adetuyi`,
      description,
      url: canonical,
      type: "article",
      publishedTime,
      authors: ["Tolu Adetuyi"],
      images: [
        {
          url: image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className={`text-[15px] leading-[1.85] text-muted ${
            index === 0
              ? "first-letter:text-[48px] first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] after:content-[''] after:block after:clear-both"
              : ""
          }`}
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "heading":
      return (
        <h3
          key={index}
          className="text-[18px] font-medium text-foreground mt-8 mb-3 tracking-tight"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-6 pl-6 border-l-[3px] border-accent text-[15px] md:text-[16px] italic text-foreground/80 leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "callout":
      return (
        <div
          key={index}
          className="my-6 p-6 bg-accent/5 ring-1 ring-border rounded-xl text-[14px] leading-relaxed text-muted"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "image":
      return (
        <figure key={index} className="my-8">
          <img
            src={block.url}
            alt={block.alt}
            loading="lazy"
            decoding="async"
            className="w-full rounded-xl border border-border"
          />
          {block.caption && (
            <figcaption className="text-center text-[13px] text-muted mt-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "youtube":
      return (
        <div key={index} className="my-8 aspect-video rounded-xl overflow-hidden border border-border">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${block.videoId}`}
            title={block.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

  const baseUrl = siteUrl;
  const image = absoluteUrl(post.ogImage ?? "/tolu-og.jpg");
  const publishedTime = toIsoDateTime(post.date);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${baseUrl}/writing/${post.slug}`,
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": "Tolu Adetuyi",
      "url": baseUrl,
    },
    "publisher": {
      "@type": "Person",
      "name": "Tolu Adetuyi",
      "url": baseUrl,
    },
    "datePublished": publishedTime,
    "dateModified": publishedTime,
    "url": `${baseUrl}/writing/${post.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/writing/${post.slug}`,
    },
    "image": image,
    "keywords": post.category,
    "articleSection": post.category,
    "inLanguage": "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Writing",
        "item": `${baseUrl}/writing`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${baseUrl}/writing/${post.slug}`,
      },
    ],
  };

  const videoSchemas = post.content
    .filter((block): block is Extract<ContentBlock, { type: "youtube" }> => block.type === "youtube")
    .map((video) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.name,
      "description": video.description,
      "thumbnailUrl": [
        `https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`,
        `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
      ],
      "uploadDate": video.uploadDate,
      "embedUrl": `https://www.youtube.com/embed/${video.videoId}`,
      "url": `${baseUrl}/writing/${post.slug}`,
      "isPartOf": {
        "@type": "BlogPosting",
        "@id": `${baseUrl}/writing/${post.slug}`,
      },
    }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      {videoSchemas.map((videoSchema) => (
        <script
          key={videoSchema.embedUrl}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoSchema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
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
                timeZone: "UTC",
              })}
            </time>
            <span className="text-muted/30">·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="mb-16 space-y-4">
          {post.content.map((block, index) => renderBlock(block, index))}
        </div>

        {/* Work with me */}
        <div className="pt-8 pb-8 border-t border-border">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-2">
            Work with me
          </p>
          <p className="text-[14px] text-muted mb-5 leading-relaxed">
            If something in this piece resonated, that is usually where the conversation starts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/toluadetuyi/one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[13px] group"
            >
              Book a session <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <a
              href="mailto:tolu@adetuyi.com"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-2.5 rounded-full hover:border-accent hover:text-accent transition-all font-medium text-[13px] group"
            >
              Send a note <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
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
    </>
  );
}
