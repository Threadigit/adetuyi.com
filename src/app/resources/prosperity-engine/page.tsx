import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Prosperity Engine",
  description:
    "A practical framework for understanding how Nigeria's economy works and evaluating the governments responsible for running it.",
  alternates: {
    canonical: "https://adetuyi.com/resources/prosperity-engine",
  },
};

export default function ProsperityEnginePage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back
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
            How Nigeria&apos;s economy really works—and how to grade any
            government responsible for running it.
          </p>
        </header>

        <div className="border-y border-border py-8 mb-10 space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>
            Economic performance is often discussed through isolated numbers:
            GDP growth, inflation, exchange rates, revenue, or debt. This
            presentation connects those indicators into one operating system.
          </p>
          <p>
            The framework follows the movement of productivity, income,
            taxation, public spending, capital, infrastructure, and household
            welfare. It provides a practical way to distinguish temporary
            activity from durable prosperity—and to evaluate policy through
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
                <span className="text-accent">—</span>
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
