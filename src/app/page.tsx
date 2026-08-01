import Link from "next/link";
import VideoPreview from "@/components/VideoPreview";
import StructuredData from "@/components/StructuredData";
import { getAllPosts, getLatestPosts } from "@/lib/writing";
import { pressEntries, speakingEntries } from "@/lib/profile-content";

const featuredVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Lagos Tech Fest 2023",
  "description": "Tolu Adetuyi speaks at Lagos Tech Fest about identity verification, regulatory compliance, and reducing fraud for African startups.",
  "thumbnailUrl": [
    "https://i.ytimg.com/vi/7JIjYZJO5jQ/maxresdefault.jpg",
    "https://i.ytimg.com/vi/7JIjYZJO5jQ/hqdefault.jpg",
  ],
  "uploadDate": "2025-05-25T14:36:57-07:00",
  "embedUrl": "https://www.youtube.com/embed/7JIjYZJO5jQ",
  "url": "https://adetuyi.com/#featured-video",
};

export default function Home() {
  return (
    <main id="main-content" className="max-w-[680px] mx-auto px-6 py-8 md:py-14">
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(featuredVideoSchema).replace(/</g, "\\u003c"),
        }}
      />
      <nav
        aria-label="Primary navigation"
        className="flex items-center justify-between gap-4 mb-14 md:mb-20 animate-fade-up"
      >
        <Link
          href="/"
          aria-label="Tolu Adetuyi, home"
          className="text-[13px] font-medium tracking-[0.12em] uppercase text-foreground"
        >
          TA<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 text-[13px] text-muted">
          <Link href="/writing" className="hover:text-foreground transition-colors">
            Writing
          </Link>
          <Link href="/thesis" className="hover:text-foreground transition-colors">
            Thesis
          </Link>
          <Link href="/work" className="hover:text-foreground transition-colors">
            Advisory
          </Link>
        </div>
      </nav>

      {/* ── Header ── */}
      <header className="mb-8 animate-fade-up delay-100">
        <div className="flex items-center gap-4 sm:gap-5 mb-5">
          {/* Avatar */}
          <div className="relative flex-shrink-0 w-[72px] h-[72px] rounded-full overflow-hidden ring-2 ring-accent/20">
            <img
              src="/tolu-new.png"
              alt="Tolu Adetuyi"
              className="w-full h-full object-cover object-top transition-all duration-700"
              style={{ filter: "grayscale(20%)" }}
            />
          </div>
          {/* Identity */}
          <div className="min-w-0">
            <div className="inline-flex flex-col items-center text-center">
              <h1 className="text-[32px] md:text-[38px] font-medium tracking-tight leading-tight mb-1 text-foreground">
                Tolu Adetuyi
              </h1>
              <p className="text-[13px] leading-relaxed text-muted">
                Innovator &amp; Venture Architect
              </p>
              <p className="flex items-center justify-center gap-2 mt-1.5 text-[11px] leading-none">
                <span aria-hidden="true" className="w-4 h-px bg-accent" />
                <span className="text-accent font-medium tracking-[0.04em]">
                  Forbes Tech Council
                </span>
                <span className="text-muted">&apos;24</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-foreground font-medium text-[16px] mt-2.5 mb-1.5">
          Co-Founder &amp; Chief Innovation Officer at{" "}
          <a
            href="https://prembly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground link-hover font-medium"
          >
            Prembly
          </a>
          <span className="text-accent text-[13px] font-medium ml-1">(YC W22)</span>
        </p>
        <p className="text-[19px] md:text-[21px] leading-[1.55] tracking-[-0.01em] text-foreground max-w-[640px] mt-4">
          I build the infrastructure that powers economic participation across
          emerging markets.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-7">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[14px] group"
          >
            Read my writing
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/thesis"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:text-accent transition-colors group"
          >
            Explore the thesis
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </header>

      {/* ── About ── */}
      <section className="mb-12 pt-8 border-t border-border/70 animate-fade-up delay-200">
        <p className="text-[15px] leading-[1.8] text-muted">
          Over the past decade, I have built at the intersection of identity,
          compliance, financial infrastructure, and capital formation across
          Africa. At{" "}
          <a href="https://prembly.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">
            Prembly
          </a>
          , I am building the trust infrastructure that enables businesses to
          verify, transact, and grow with confidence.
        </p>
        <p className="text-[15px] leading-[1.8] text-muted mt-3">
          Before Prembly, I led growth at{" "}
          <a href="https://moniepoint.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">
            Moniepoint
          </a>
          , helping build the distribution network behind billions of dollars
          in transactions across Africa. That experience shaped how I
          work today: synthesizing intelligence and relationships into products,
          ventures, deals, and institutional leverage.
        </p>
        <p className="text-[15px] leading-[1.8] text-muted mt-3">
          I hold a{" "}
          <span className="text-foreground font-medium">
            first-class degree in Computer Science
          </span>{" "}
          and an{" "}
          <span className="text-foreground font-medium">
            MBA with a concentration in Finance
          </span>{" "}
          from Morgan State University, where I graduated as a GSBM Scholar. I
          am also a lifetime member of Beta Gamma Sigma, the international
          business honor society.
        </p>
      </section>

      {/* ── Current Work ── */}
      <section className="mb-16 animate-fade-up delay-300">
        <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
          Current Work
        </h2>
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0.5">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span>
                <a
                  href="https://prembly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium link-hover"
                >
                  Prembly
                </a>
                <span className="text-accent text-[13px] font-medium ml-1">(YC W22)</span>
              </span>
              <span className="text-muted text-[13px]">
                Co-Founder & CIO
              </span>
            </div>
            <span className="text-muted text-[13px] sm:text-right italic sm:not-italic pt-0.5 sm:pt-0">Identity, Fraud Prevention & Compliance</span>
          </div>
          <div className="border-t border-accent/20" />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0.5">
            <div className="flex items-center gap-2">
              <a
                href="/thesis"
                className="text-[15px] font-medium link-hover"
              >
                Powering Nigeria Infrastructure Fund 1
              </a>
              <span className="text-[11px] uppercase tracking-widest text-accent font-medium border border-accent/25 rounded-full px-2 py-0.5">In Formation</span>
            </div>
            <span className="text-muted text-[13px] sm:text-right italic sm:not-italic pt-0.5 sm:pt-0">Energy &amp; Physical Infrastructure</span>
          </div>
          <p className="border-t border-accent/20 pt-4 text-[13px] leading-relaxed text-muted">
            Also, I curate{" "}
            <a href="https://www.chroniclesofinnovation.com" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">Chronicles of Innovation</a>
            {" "}and write{" "}
            <a href="https://zerotoact.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">ZeroToAct</a>.
          </p>
        </div>
      </section>
      {/* ── Core Areas of Focus ── */}
      <section className="mb-16 animate-fade-up delay-300">
        <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
          Core Areas of Focus
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {[
            "Trust, Financial & Cross-Border Infrastructure",
            "Distribution & Market Access",
            "Energy, Manufacturing & Productive Infrastructure",
            "Venture & Capital Formation"
          ].map((area) => (
            <span key={area} className="inline-flex items-center px-3 py-1.5 rounded bg-accent/5 border border-accent/10 text-muted text-[13px] leading-none">
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* ── Latest Writing ── */}
      <section className="mb-16 animate-fade-up delay-400">
        <div className="flex justify-between items-baseline gap-6 mb-3">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3">
            Writing
          </h2>
          <Link
            href="/writing"
            className="text-[13px] text-muted hover:text-accent transition-colors group flex items-center gap-1.5 whitespace-nowrap"
          >
            All {getAllPosts().length} essays <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <p className="text-[14px] leading-relaxed text-muted mb-4">
          Essays and frameworks on trust, capital, infrastructure, leadership,
          and how emerging markets work.
        </p>
        <div className="space-y-0">
          {getLatestPosts(3).map((post, index, arr) => (
            <div key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group block py-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[11px] uppercase tracking-widest text-accent font-medium">{post.category}</span>
                </div>
                <h3 className="text-[15px] font-medium text-foreground tracking-tight leading-snug mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted line-clamp-1">
                  {post.excerpt}
                </p>
              </Link>
              {index < arr.length - 1 && <div className="border-t border-accent/15" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Active Investment Thesis ── */}
      <section className="mb-16 animate-fade-up delay-500">
        <div className="p-8 bg-accent/5 ring-1 ring-border rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-accent mb-3">
            Active Investment Thesis
          </h2>
          <h3 className="text-[20px] md:text-[24px] font-medium text-foreground leading-snug mb-3 tracking-tight">
            Powering Nigeria Infrastructure Fund 1
          </h3>
          <p className="text-[15px] text-muted leading-relaxed mb-4">
            Powering Nigeria Infrastructure Fund 1 is being formed to finance
            distributed energy assets close to productive users who already
            bear the cost of unreliable power. The aim is straightforward.
            Help businesses operate, help workers earn, and enable more
            communities to participate in the economy.
          </p>
          <p className="text-[15px] text-muted leading-relaxed mb-6">
            The first test begins with productive electric mobility. Deployed
            assets are actively tracked for utilisation, repayments, battery
            behaviour, and maintenance. That operating data is being used to
            test whether a distributed energy station can be supported by
            demand already in motion, lower mobility costs, and widen access to
            income-generating assets.
          </p>
          <Link
            href="/thesis"
            className="inline-flex items-center gap-2 border border-accent text-accent px-5 py-2.5 rounded-full hover:bg-accent hover:text-white transition-all font-medium text-[14px] group"
          >
            Read the thesis <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* ── Featured Video ── */}
      <section id="featured-video" className="mb-16 animate-fade-up delay-400">
        <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
          Featured
        </h2>
        <div className="aspect-video w-full bg-accent/5 ring-1 ring-border overflow-hidden">
          <VideoPreview />
        </div>
        <p className="text-muted text-[13px] mt-3">
          Lagos Tech Fest 2023: Identity verification, compliance, and reducing
          fraud for African startups.
        </p>
      </section>


      {/* ── Speaking ── */}
      <section className="mb-16 animate-fade-up delay-500">
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3">
            Speaking &amp; Panels
          </h2>
          <Link href="/speaking" className="text-[13px] text-muted hover:text-accent transition-colors">
            View all →
          </Link>
        </div>
        <div>
          {speakingEntries.slice(0, 3).map((entry, index, entries) => (
            <div key={entry.href}>
              <a
                href={entry.href}
                target={entry.external ? "_blank" : undefined}
                rel={entry.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6 py-4"
              >
                <span className="text-[15px] leading-relaxed text-foreground group-hover:text-accent transition-colors">
                  {entry.title}
                </span>
                <span className="text-[13px] text-muted whitespace-nowrap">
                  {entry.meta}
                  {entry.external && <span className="ml-1">↗</span>}
                </span>
              </a>
              {index < entries.length - 1 && <div className="border-t border-accent/20" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Press & Writing ── */}
      <section className="mb-16 animate-fade-up delay-600">
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3">
            Featured Press &amp; Publications
          </h2>
          <Link href="/press" className="text-[13px] text-muted hover:text-accent transition-colors">
            View all →
          </Link>
        </div>
        <div>
          {pressEntries.slice(0, 4).map((entry, index, entries) => (
            <div key={entry.href}>
              <a
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6 py-4"
              >
                <span className="text-[15px] leading-relaxed text-foreground group-hover:text-accent transition-colors">
                  {entry.title}
                </span>
                <span className="text-[13px] text-muted whitespace-nowrap">
                  {entry.meta}
                  <span className="ml-1">↗</span>
                </span>
              </a>
              {index < entries.length - 1 && <div className="border-t border-accent/20" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <footer className="pt-10 border-t border-border animate-fade-up delay-700">
        {/* Headline */}
        <p className="text-[13px] uppercase tracking-[0.15em] text-accent font-medium mb-3">
          Selective advisory
        </p>
        <h2 className="text-[22px] font-medium text-foreground tracking-tight leading-snug mb-2">
          For a small number of founders, operators, and investors.
        </h2>
        <p className="text-[14px] text-muted mb-2">
          I advise selectively alongside my operating work, taking on only a limited number of engagements where my experience can materially improve an important decision.
        </p>
        <a href="/work" className="text-[13px] text-accent link-hover inline-block mb-7">
          View advisory and fit →
        </a>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="mailto:tolu@adetuyi.com?subject=Selective%20advisory%20enquiry"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[15px] group shadow-sm hover:shadow-md"
          >
            Send an introduction <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="https://calendly.com/toluadetuyi/one-on-one"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all font-medium text-[15px] group"
          >
            Free 15-minute call <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-5 text-[13px] border-t border-border/50 pt-6">
          <p className="text-muted max-w-[360px] leading-relaxed">
            Building interconnected systems that expand economic participation and infrastructure across emerging markets.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-muted">
            <a href="https://www.linkedin.com/in/adetuyitolu/" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://twitter.com/adetuyitolu" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-foreground transition-colors">Twitter</a>
            <a href="https://instagram.com/adetuyitolu" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-foreground transition-colors">Instagram</a>
            <a href="https://scholar.google.com/citations?hl=en&user=IjIW4v0AAAAJ" rel="me" className="sr-only">Google Scholar</a>
            <a href="https://www.wikidata.org/wiki/Q140088103" rel="me" className="sr-only">Wikidata</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
