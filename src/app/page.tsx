import Image from "next/image";
import Link from "next/link";
import VideoPreview from "@/components/VideoPreview";
import StructuredData from "@/components/StructuredData";
import { getAllPosts, getLatestPosts, getStartHerePosts } from "@/lib/writing";
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
  "url": "https://www.adetuyi.com/#featured-video",
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
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
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
            <Image
              src="/tolu-avatar.jpg"
              alt="Tolu Adetuyi"
              width={72}
              height={72}
              preload
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
                Founder &amp; Investor
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
          I build the infrastructure that lets people and businesses create
          value, earn, and take part in the global economy.
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
            Explore my thesis
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </header>

      {/* ── About ── */}
      <section className="mb-12 pt-8 border-t border-border/70 animate-fade-up delay-200">
        <p className="text-[15px] leading-[1.8] text-muted">
          Over the past decade, I have built across identity, compliance,
          financial infrastructure, and capital formation in Africa. At{" "}
          <a href="https://prembly.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">
            Prembly
          </a>
          , I am building the technology that lets businesses confirm who they are dealing with, prevent fraud, and meet compliance rules. We work from Nigeria, Kenya, and the United States, and more than a thousand local and global businesses rely on it.
        </p>
        <p className="text-[15px] leading-[1.8] text-muted mt-3">
          Before Prembly, I helped build the product at{" "}
          <a href="https://moniepoint.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">
            Moniepoint
          </a>
          {" "}and led growth to build the distribution network that moves
          billions of dollars in transactions and now serves millions of
          businesses across the continent. I hold a first-class degree in Computer Science and an
          MBA in Finance from Morgan State University, and I am a fellow of{" "}
          <a href="https://joinodf.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">
            On Deck
          </a>
          .
        </p>
      </section>

      {/* ── Current Work and In View ── */}
      <section className="mb-16 animate-fade-up delay-300" aria-label="Current work and ventures">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col rounded-xl border border-accent/30 bg-accent/5 p-5">
            <div className="flex items-center justify-between gap-3 mb-3 min-h-[22px]">
              <p className="text-[11px] font-medium uppercase tracking-widest text-accent">
                Current Work
              </p>
            </div>
            <h2 className="text-[18px] font-medium text-foreground leading-snug">
              <a
                href="https://prembly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover"
              >
                Prembly
              </a>
              <span className="text-accent text-[13px] font-medium ml-1.5">(YC W22)</span>
            </h2>
            <p className="mt-1 text-[13px] text-muted">Co-Founder &amp; CIO</p>
            <p className="mt-4 pt-4 border-t border-accent/15 text-[13px] leading-relaxed text-muted">
              Identity, Fraud Prevention &amp; Compliance
            </p>
          </div>

          <div className="flex flex-col rounded-xl border border-border bg-surface/60 p-5">
            <div className="flex items-center justify-between gap-3 mb-3 min-h-[22px]">
              <p className="text-[11px] font-medium uppercase tracking-widest text-muted">
                In View
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-muted whitespace-nowrap">
                In progress
              </span>
            </div>
            <h2 className="text-[18px] font-medium text-foreground leading-snug">
              <Link href="/thesis/buildx-capital" className="link-hover">
                BuildX Capital
              </Link>
            </h2>
            <p className="mt-1 text-[13px] text-muted">Investing &amp; Fund Formation</p>
            <p className="mt-4 pt-4 border-t border-border text-[13px] leading-relaxed text-muted">
              Mobility, Energy, Trade, Manufacturing &amp; Physical Infrastructure
            </p>
          </div>
        </div>

        <p className="mt-5 text-[13px] leading-relaxed text-muted">
          I also curate{" "}
          <a href="https://www.chroniclesofinnovation.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">Chronicles of Innovation</a>
          {" "}to show how the world was built, and{" "}
          <a href="https://zerotoact.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">ZeroToAct</a>
          &apos;s weekly Signals to show what is changing now, so people can
          learn from the past and act in the present.
        </p>
      </section>

      {/* ── Enduring Thesis ── */}
      <section className="mb-16 animate-fade-up delay-500">
        <div className="p-8 bg-accent/5 ring-1 ring-border rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-accent mb-3">
            My Thesis
          </h2>
          <h3 className="text-[20px] md:text-[24px] font-medium text-foreground leading-snug mb-3 tracking-tight">
            Infrastructure for economic participation
          </h3>
          <p className="text-[15px] text-muted leading-relaxed mb-4">
            My work is guided by a simple conviction. Economic participation,
            in the global economy and not only the local one, expands when
            people and businesses can create exportable value, prove who they
            are, move money, reach markets, learn what works, and access
            capital and productive assets, all resting on the dependable
            infrastructure that makes it work.
          </p>
          <p className="text-[15px] text-muted leading-relaxed mb-6">
            Most of my work has been an expression of that thesis, from trust
            infrastructure to distribution to capital. The newest is BuildX
            Capital, where I invest in and support founders building across
            mobility, energy, trade, manufacturing, and physical
            infrastructure. I am also forming an energy fund to finance
            distributed assets around productive demand and test how reliable
            power can strengthen earnings, operating capacity, and economic
            inclusion.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Trust, Financial & Cross-Border Infrastructure",
              "Distribution & Market Access",
              "Energy, Manufacturing & Productive Infrastructure",
              "Research, Knowledge & Media",
              "Venture & Capital Formation",
            ].map((area) => (
              <span key={area} className="inline-flex items-center px-2.5 py-1.5 rounded bg-background/70 border border-accent/15 text-muted text-[12px] leading-none">
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/thesis"
            className="inline-flex items-center gap-2 border border-accent text-accent px-5 py-2.5 rounded-full hover:bg-accent hover:text-white transition-all font-medium text-[14px] group"
          >
            Read my thesis <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
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
        <p className="text-[12px] uppercase tracking-widest text-muted mb-1">Start here</p>
        <div className="space-y-0 mb-6">
          {getStartHerePosts().filter((post) => post.slug !== getLatestPosts(1)[0]?.slug).slice(0, 4).map((post, index, arr) => (
            <div key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-6 py-3">
                <span className="text-[15px] text-foreground group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-accent font-medium whitespace-nowrap">{post.category}</span>
              </Link>
              {index < arr.length - 1 && <div className="border-t border-accent/15" />}
            </div>
          ))}
        </div>
        <p className="text-[12px] uppercase tracking-widest text-muted mb-3">Latest</p>
        {getLatestPosts(1).map((post) => (
          <Link key={post.slug} href={`/writing/${post.slug}`} className="group block rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent/40">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[11px] uppercase tracking-widest text-accent font-medium">{post.category}</span>
              <span className="text-muted/40 text-[10px]">·</span>
              <time dateTime={post.date} className="text-[12px] text-muted">
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}
              </time>
            </div>
            <h3 className="text-[18px] font-medium text-foreground tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors duration-300">
              {post.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-muted line-clamp-2">
              {post.excerpt}
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-muted group-hover:text-accent transition-colors duration-300">
              {post.readingTime}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
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
          Speaking at Lagos Tech Fest 2023 on identity verification, compliance, and reducing fraud for African startups.
        </p>
      </section>


      {/* ── Talks & Press ── */}
      <section className="mb-16 animate-fade-up delay-500">
        <div className="flex justify-between items-baseline gap-6 mb-6">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3">
            Talks &amp; Press
          </h2>
          <Link href="/press-kit" className="text-[13px] text-muted hover:text-accent transition-colors whitespace-nowrap">
            Press kit →
          </Link>
        </div>
        <div className="flex justify-between items-baseline mb-1">
          <p className="text-[12px] uppercase tracking-widest text-muted">Speaking &amp; panels</p>
          <Link href="/speaking" className="text-[13px] text-muted hover:text-accent transition-colors">
            View all →
          </Link>
        </div>
        <div>
          {speakingEntries
            .filter((entry) => entry.href && entry.href !== "https://www.youtube.com/watch?v=7JIjYZJO5jQ")
            .slice(0, 3)
            .map((entry, index, entries) => (
            <div key={entry.title}>
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
        <div className="flex justify-between items-baseline mt-8 mb-1">
          <p className="text-[12px] uppercase tracking-widest text-muted">Press &amp; publications</p>
          <Link href="/press" className="text-[13px] text-muted hover:text-accent transition-colors">
            View all →
          </Link>
        </div>
        <div>
          {pressEntries.slice(0, 3).map((entry, index, entries) => (
            <div key={entry.title}>
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
          Advisory
        </p>
        <h2 className="text-[22px] font-medium text-foreground tracking-tight leading-snug mb-2">
          For founders, operators, and investors.
        </h2>
        <p className="text-[14px] text-muted mb-2">
          I advise a small number of founders, operators, and investors on
          consequential decisions. The usual start is a 60-minute working
          session on one decision, document, or market question.
        </p>
        <a href="/work" className="text-[13px] text-accent link-hover inline-block mb-7">
          View advisory and fit →
        </a>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="mailto:tolu@adetuyi.com?subject=Advisory%20enquiry"
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
            Book a 15-minute call <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-y-4 text-[13px] border-t border-border/50 pt-6">
          <p className="text-muted leading-relaxed">
            Building the infrastructure that widens economic participation across Africa.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-muted">
            <Link href="/about" className="link-hover hover:text-foreground transition-colors">About</Link>
            <Link href="/press-kit" className="link-hover hover:text-foreground transition-colors">Press kit</Link>
            <a href="https://www.linkedin.com/in/adetuyitolu/" target="_blank" rel="me noopener noreferrer" className="link-hover hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://twitter.com/adetuyitolu" target="_blank" rel="me noopener noreferrer" className="link-hover hover:text-foreground transition-colors">X</a>
            <a href="https://instagram.com/adetuyitolu" target="_blank" rel="me noopener noreferrer" className="link-hover hover:text-foreground transition-colors">Instagram</a>
            <a href="https://www.youtube.com/channel/UClEyfBprR1O1VANeLf6SnyA" target="_blank" rel="me noopener noreferrer" className="link-hover hover:text-foreground transition-colors">YouTube</a>
            <a href="/feed.xml" className="link-hover hover:text-foreground transition-colors">RSS</a>
            <a href="https://scholar.google.com/citations?hl=en&user=IjIW4v0AAAAJ" rel="me" className="sr-only">Google Scholar</a>
            <a href="https://www.wikidata.org/wiki/Q140088103" rel="me" className="sr-only">Wikidata</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
