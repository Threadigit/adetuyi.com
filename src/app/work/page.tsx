import Link from "next/link";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Advisory",
  description: "Selective advisory by Tolu Adetuyi for founders, operators, and investors making product, technology, distribution, fundraising, and market decisions in Africa.",
  alternates: {
    canonical: "https://www.adetuyi.com/work",
  },
  openGraph: {
    title: "Advisory | Tolu Adetuyi",
    description: "Selective advisory by Tolu Adetuyi for founders, operators, and investors making product, technology, distribution, fundraising, and market decisions in Africa.",
    url: "https://www.adetuyi.com/work",
    type: "website",
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
    title: "Advisory | Tolu Adetuyi",
    description: "Selective advisory by Tolu Adetuyi for founders, operators, and investors making product, technology, distribution, fundraising, and market decisions in Africa.",
    images: ["/tolu-og.jpg"],
  },
};

const audiences = [
  {
    label: "Founders",
    desc: "Pre-seed to Series A founders facing a consequential decision about the product, business model, market, distribution, or fundraising narrative.",
  },
  {
    label: "Operators",
    desc: "Operators entering or scaling across African markets who need to reconcile the strategy with how customers, distribution, regulation, and execution work on the ground.",
  },
  {
    label: "Investors",
    desc: "Investors seeking a practitioner's assessment of an African company, market, or sector before committing capital.",
  },
];

const services = [
  {
    label: "Technology and product strategy",
    desc: "I help teams decide what technology should enable, what should be built now, and what complexity can wait. The work connects product choices to customer behaviour, operating reality, distribution, and the economics of the business.",
  },
  {
    label: "Business model clarity",
    desc: "I catch the gaps founders cannot see from inside the business. Unit economics that hold at the aggregate and break at the segment. Revenue that looks like profit. The wrong problem being solved very well.",
  },
  {
    label: "Fundraising narrative",
    desc: "Capital moves on conviction. I help founders find the true thesis buried under the pitch they rehearsed, then rebuild the documentation around it. Not to sound good. To say something true that investors can act on.",
  },
  {
    label: "Distribution and market structure",
    desc: "I help founders and operators design routes to market around real customer behaviour, channel economics, local incentives, and the gap between how a market appears in reports and how it works on the ground.",
  },
];

const engagementShapes = [
  {
    label: "Working session",
    desc: "A focused 60-minute review of one decision, document, market question, or operating problem. You leave with the gaps, the decision, and the next actions.",
  },
  {
    label: "Advisory sprint",
    desc: "A defined engagement for a business model, fundraising narrative, distribution strategy, or investment question. Scope, outputs, timing, and fee are agreed before work begins.",
  },
  {
    label: "Ongoing counsel",
    desc: "Selective support for founders, operators, and investors who need a consistent practitioner in the room as decisions compound.",
  },
];

export default function WorkPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Advisory with Tolu Adetuyi",
    description: "Selective advisory for founders, operators, and investors making consequential product, technology, distribution, fundraising, and market decisions in Africa.",
    url: "https://www.adetuyi.com/work",
    provider: {
      "@type": "Person",
      "@id": "https://www.adetuyi.com/#person",
      name: "Tolu Adetuyi",
      url: "https://www.adetuyi.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Africa",
    },
    serviceType: services.map((service) => service.label),
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
          { name: "Advisory", path: "/work" },
        ]}
      />
      <Link
        href="/"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back to homepage
      </Link>

      <article className="animate-fade-up">
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
              Work with Tolu
            </span>
          </div>
          <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-5 text-foreground">
            Advisory
          </h1>
          <p className="text-[16px] leading-[1.75] text-muted">
            I advise selectively alongside my operating work and accept only a
            small number of engagements where I can be genuinely useful.
            Founders, operators, and investors usually come with a product,
            market, business-model, or capital decision. I identify the real
            constraint, test the assumptions, and turn the ambiguity into a
            clear course of action.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-7">
            <a
              href="https://calendly.com/toluadetuyi/one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[14px] group"
            >
              Book a free 15-minute call
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <a
              href="mailto:tolu@adetuyi.com"
              className="text-[14px] font-medium text-foreground hover:text-accent transition-colors"
            >
              Send a note →
            </a>
          </div>
        </header>

        {/* Who this is for */}
        <section className="mb-14">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
            Who this is for
          </h2>
          <div>
            {audiences.map(({ label, desc }, i) => (
              <div key={label}>
                <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <span className="text-[15px] font-medium text-foreground w-[90px] flex-shrink-0">
                    {label}
                  </span>
                  <span className="text-[14px] text-muted leading-relaxed">{desc}</span>
                </div>
                {i < audiences.length - 1 && (
                  <div className="border-t border-accent/20" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* What I do */}
        <section className="mb-14">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
            What I do
          </h2>
          <div>
            {services.map(({ label, desc }, i) => (
              <div key={label}>
                <div className="py-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-2">
                    {label}
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted">{desc}</p>
                </div>
                {i < services.length - 1 && (
                  <div className="border-t border-accent/20" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
            Ways to work together
          </h2>
          <div>
            {engagementShapes.map(({ label, desc }, i) => (
              <div key={label}>
                <div className="py-5">
                  <p className="text-[15px] font-medium text-foreground mb-2">{label}</p>
                  <p className="text-[14px] leading-[1.75] text-muted">{desc}</p>
                </div>
                {i < engagementShapes.length - 1 && <div className="border-t border-accent/20" />}
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted">
            Fees are quoted against the scope before you commit. No open-ended engagement begins without a written outcome, timeline, and price.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
            Practitioner experience
          </h2>
          <p className="text-[15px] leading-[1.75] text-muted">
            My advice comes from building, not commentary. At Prembly, I
            co-founded and continue to build trust infrastructure used by more
            than a thousand local and global businesses to verify customers,
            manage compliance, and reduce fraud, across Nigeria, Kenya, and the
            United States.
            Before Prembly, I helped build the distribution network at Moniepoint
            that moves billions of dollars in transactions and now reaches
            millions of businesses across the continent.
          </p>
          <p className="text-[15px] leading-[1.75] text-muted mt-4">
            I have also worked with founders across sectors including
            cross-border finance, mobility, and insurance, helping them sharpen
            technology and product choices, distribution, positioning, and
            capital decisions. The advisory work applies that operating range
            to a specific decision in your business or investment process.
          </p>
        </section>

        {/* How to start */}
        <section className="pt-2">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
            How to start
          </h2>
          <p className="text-[15px] leading-[1.75] text-muted mb-8">
            The introductory call is free and lasts 15 minutes. It is a short
            conversation to establish fit, not an advisory working session. If
            you are reaching out cold, send a brief note first with what you are
            building, the specific problem, and who you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/toluadetuyi/one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[15px] group shadow-sm hover:shadow-md"
            >
              Book a free 15-minute call{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
            <a
              href="mailto:tolu@adetuyi.com"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all font-medium text-[15px] group"
            >
              Send a note{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
