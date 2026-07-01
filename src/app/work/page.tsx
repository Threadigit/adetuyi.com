import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory | Tolu Adetuyi",
  description: "Founder and operator advisory from Tolu Adetuyi. Business model clarity, fundraising narrative, and distribution strategy for early-stage founders building in Africa.",
  alternates: {
    canonical: "https://adetuyi.com/work",
  },
};

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
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
              Work
            </span>
          </div>
          <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-6 text-foreground">
            Advisory
          </h1>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-muted italic">
            For founders who need to see their business clearly and move faster because of it.
          </p>
        </header>

        <div className="text-[15px] leading-[1.8] text-muted">

          <div className="space-y-4 mb-12">
            <p>
              Most of the time, the problem a founder brings me is not the actual problem. The model has a gap they cannot see from the inside. The narrative is accurate but untranslatable to the people whose capital it needs to move. The market is real but the entry is wrong.
            </p>
            <p>
              I walk into those situations and compress the fog. Fast, with enough conviction that the person on the other side feels the direction before they have fully reasoned through it. That is the work.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-8">
              What I help with
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-[16px] font-medium text-foreground mb-2">Business model clarity</h3>
                <p>
                  I have sat with founders who were building revenue they genuinely believed was profit. I have caught broken unit economics that looked healthy at the aggregate and came apart at the segment. The analysis is sometimes technical. The real work is always reorientation — helping someone see what was already in front of them, from a different angle. Sometimes that takes an afternoon. Sometimes it changes the trajectory of the business.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-foreground mb-2">Fundraising narrative</h3>
                <p>
                  Capital moves on conviction, not data. Investors are not buying the deck. They are buying a version of the future they can believe in. I help founders find the true thesis buried under the pitch they rehearsed, then rebuild the documentation around it. The goal is material the founder deeply believes — not because I wrote it well, but because it accurately names what they are actually building.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-foreground mb-2">Distribution and market structure</h3>
                <p>
                  I spent years building the distribution network that now processes billions in transactions across Africa. That experience gave me a precise map of how these markets actually work on the ground in Nigeria — not how they appear in research reports. I work with founders navigating that gap, and with operators expanding into territory they do not yet fully understand.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
              Who I work with
            </h2>
            <div className="space-y-4">
              <p>
                Founders at the early stages who have a working thesis but are not moving with enough conviction or speed. Operators expanding into unfamiliar markets. Occasionally, capital allocators who want a practitioner&apos;s read on a deal or a sector.
              </p>
              <p>
                Most of the high-signal conversations I have had started with someone saying: you need to talk to Tolu. The referral filter matters. Founders who arrive through the Ventures Platform network or through the writing tend to already know what kind of work they need. Those reaching out cold should send a short note first.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
              How to reach me
            </h2>
            <p className="mb-8">
              If you have been referred, book a session directly. If you are reaching out cold, send a note with what you are building, what the specific problem is, and who you are. I respond to founders I can actually help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/toluadetuyi/one-on-one"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[15px] group shadow-sm hover:shadow-md"
              >
                Book a session <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
              <a
                href="mailto:tolu@adetuyi.com"
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all font-medium text-[15px] group"
              >
                Send a note <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
