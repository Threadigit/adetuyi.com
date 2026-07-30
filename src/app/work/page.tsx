import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory",
  description: "Business model clarity, fundraising narrative, and distribution strategy for founders, operators, and investors building in Africa.",
  alternates: {
    canonical: "https://adetuyi.com/work",
  },
  openGraph: {
    title: "Advisory | Tolu Adetuyi",
    description: "Business model clarity, fundraising narrative, and distribution strategy for founders, operators, and investors building in Africa.",
    url: "https://adetuyi.com/work",
    type: "website",
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
    title: "Advisory | Tolu Adetuyi",
    description: "Business model clarity, fundraising narrative, and distribution strategy for founders, operators, and investors building in Africa.",
    images: ["/tolu-new.png"],
  },
};

const audiences = [
  {
    label: "Founders",
    desc: "Pre-seed to Series A. Working thesis, not enough conviction or speed. Clarity on the model, the narrative, or the market.",
  },
  {
    label: "Operators",
    desc: "Scaling into Nigeria or African markets. Navigating the gap between what the data says and how the ground actually works.",
  },
  {
    label: "Investors",
    desc: "Allocating into Africa. Looking for a practitioner's read on a deal, a market, or a sector before committing capital.",
  },
];

const services = [
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
    desc: "I built the distribution network that now processes billions in African transactions. I work with founders and operators navigating the gap between how these markets appear in reports and how they actually work on the ground.",
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back
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
            Whether the room has a founder, an operator, or an investor, the work is the same.
            Most of the time, the problem someone brings me is not the actual problem.
            I walk in, map the gap between what they believe and what is true, and
            compress it into a clear direction.
          </p>
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

        {/* How to start */}
        <section className="pt-2">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
            How to start
          </h2>
          <p className="text-[15px] leading-[1.75] text-muted mb-8">
            Most engagements start by referral. If you have been pointed here, book directly.
            If you are reaching out cold, send a short note first. Tell me what you are
            building, the specific problem, and who you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/toluadetuyi/one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[15px] group shadow-sm hover:shadow-md"
            >
              Book a session{" "}
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
