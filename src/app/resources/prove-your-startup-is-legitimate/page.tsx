import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const title = "What Does It Take to Prove Your Startup Is Legitimate?";
const description =
  "A founder session on the compliance, payments and investor checks every early stage company faces, and how to be ready before they ask.";
const canonical = "https://www.adetuyi.com/resources/prove-your-startup-is-legitimate";
const deckUrl =
  "https://docs.google.com/presentation/d/1CumvanjV3OsMsK3yw32IIzqz2beoIIk6/preview";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title: `${title} | Tolu Adetuyi`,
    description,
    url: canonical,
    type: "article",
    images: [
      {
        url: "/og/resources/prove-your-startup-is-legitimate",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Tolu Adetuyi`,
    description,
    images: ["/og/resources/prove-your-startup-is-legitimate"],
  },
};

export default function ProveYourStartupIsLegitimatePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: canonical,
    author: {
      "@type": "Person",
      name: "Tolu Adetuyi",
      url: "https://www.adetuyi.com",
    },
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: deckUrl,
      encodingFormat: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
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
          { name: title, path: "/resources/prove-your-startup-is-legitimate" },
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
              Compliance and payments
            </span>
            <span className="text-[13px] text-muted">Slide deck · 2026</span>
          </div>
          <h1 className="text-[34px] md:text-[44px] font-medium tracking-tight leading-[1.12] mb-5 text-foreground">
            {title}
          </h1>
          <p className="text-[19px] md:text-[21px] leading-[1.6] text-foreground">
            Before anyone pays you, funds you or partners with you, they want to
            know they can trust you. This session shows founders what that means
            in practice.
          </p>
        </header>

        <div className="border-y border-border py-8 mb-10 space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>
            Legitimacy is not a certificate. It is the evidence that lets a
            stranger deal with you without meeting you, and it is built, not
            declared.
          </p>
          <p>
            The session was given to student founders. It covers who checks a
            young company, what each of them looks for, and what to have ready
            before they ask. It stays practical, with checklists a founder can
            act on within the week.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
            Inside the deck
          </h2>
          <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
            {[
              "Who checks your company, and what convinces each of them",
              "What KYC and KYB mean for an early stage company",
              "The minimum paperwork to have ready, and why names must match everywhere",
              "Why payment providers say no, and how to get a yes",
              "Getting paid by customers abroad without losing your margin",
              "What investors look for in a first diligence call",
              "Five actions to take to move things forward",
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
