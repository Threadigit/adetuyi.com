import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const title = "The Prosperity Engine";
const description =
  "A practical framework for understanding Nigeria's economy and evaluating government through productivity, infrastructure, capital, and household welfare.";
const canonical = "https://www.adetuyi.com/resources/prosperity-engine";

export const metadata: Metadata = {
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
    images: [
      {
        url: "/tolu-og.jpg",
        width: 1374,
        height: 1145,
        alt: "Tolu Adetuyi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Tolu Adetuyi`,
    description,
    images: ["/tolu-og.jpg"],
  },
};

export default function ProsperityEnginePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: canonical,
    datePublished: "2026",
    author: {
      "@type": "Person",
      name: "Tolu Adetuyi",
      url: "https://www.adetuyi.com",
    },
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: "https://www.adetuyi.com/the-prosperity-engine-deck.pdf",
      encodingFormat: "application/pdf",
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
          { name: "Speaking", path: "/speaking" },
          { name: title, path: "/resources/prosperity-engine" },
        ]}
      />
      <Link
        href="/speaking"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back to speaking
      </Link>

      <article className="animate-fade-up">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest text-accent font-medium">
              Economic systems
            </span>
            <span className="text-[13px] text-muted">Slide deck · 2026</span>
          </div>
          <h1 className="text-[34px] md:text-[44px] font-medium tracking-tight leading-[1.12] mb-5 text-foreground">
            The Prosperity Engine
          </h1>
          <p className="text-[19px] md:text-[21px] leading-[1.6] text-foreground">
            How Nigeria&apos;s economy really works and how to grade any
            government responsible for running it.
          </p>
        </header>

        <div className="border-y border-border py-8 mb-10 space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>
            Economic performance is often discussed through isolated measures
            such as GDP growth, inflation, exchange rates, revenue, and debt.
            This presentation connects those indicators into one operating
            system.
          </p>
          <p>
            The framework follows the movement of productivity, income,
            taxation, public spending, capital, infrastructure, and household
            welfare. It provides a practical way to distinguish temporary
            activity from durable prosperity while evaluating policy through
            outcomes rather than announcements.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
            Inside the deck
          </h2>
          <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
            {[
              "A systems view of how value moves through Nigeria's economy",
              "The relationship between productivity, capital, infrastructure, and welfare",
              "A practical scorecard for assessing government performance",
              "The difference between economic activity and broad-based prosperity",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <a
          href="/the-prosperity-engine-deck.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-all font-medium text-[14px] group"
        >
          Open the slide deck
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </article>
    </main>
  );
}
