import type { Metadata } from "next";
import Link from "next/link";

const title = "Closing the Compliance Gap for African Startups";
const description =
  "A practical guide to continuous identity verification, fraud prevention, and scalable KYC for African startups.";
const canonical = "https://adetuyi.com/resources/closing-the-compliance-gap";
const deckUrl =
  "https://docs.google.com/presentation/d/e/2PACX-1vRYTONvzPUFRxh2qtI0i9Kyp7jSzxSmRgW-fU0ABvt73cXZn5nNtv36UGavwScf6YqarMn0I4KgprJz/pub?start=true&loop=true&delayms=3000";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "KYC for African startups",
    "identity verification Africa",
    "fintech compliance",
    "fraud prevention",
    "continuous KYC",
    "Tolu Adetuyi",
  ],
  alternates: { canonical },
  openGraph: {
    title: `${title} | Tolu Adetuyi`,
    description,
    url: canonical,
    type: "article",
    images: [
      {
        url: "/tolu-new.png",
        width: 1200,
        height: 1200,
        alt: "Tolu Adetuyi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Tolu Adetuyi`,
    description,
    images: ["/tolu-new.png"],
  },
};

export default function ClosingTheComplianceGapPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: canonical,
    author: {
      "@type": "Person",
      name: "Tolu Adetuyi",
      url: "https://adetuyi.com",
    },
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: deckUrl,
      encodingFormat: "text/html",
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
      <Link
        href="/speaking"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back
      </Link>

      <article className="animate-fade-up">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest text-accent font-medium">
              Trust infrastructure
            </span>
            <span className="text-[13px] text-muted">Slide deck</span>
          </div>
          <h1 className="text-[34px] md:text-[44px] font-medium tracking-tight leading-[1.12] mb-5 text-foreground">
            {title}
          </h1>
          <p className="text-[19px] md:text-[21px] leading-[1.6] text-foreground">
            How continuous identity verification helps African startups reduce
            fraud and meet compliance demands.
          </p>
        </header>

        <div className="border-y border-border py-8 mb-10 space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>
            Digital businesses grow through trust. As more customers and
            transactions move online, startups must protect both sides of every
            interaction while keeping legitimate users moving.
          </p>
          <p>
            This presentation treats KYC as an ongoing system across people,
            processes, and technology. It maps verification beyond onboarding
            into account upgrades, limit increases, password resets, advanced
            services, and suspicious activity reviews.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
            Inside the deck
          </h2>
          <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
            {[
              "The fraud and compliance risks facing digital businesses",
              "Where manual KYC systems create cost, errors, and delays",
              "A continuous verification workflow across the customer lifecycle",
              "How automation can improve approval rates and customer experience",
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
          href={deckUrl}
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
