import { getLatestPosts } from "@/lib/writing";

export default function Home() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      {/* ── Header ── */}
      <header className="mb-6 animate-fade-up delay-100">
        <div className="flex items-center gap-5 mb-5">
          {/* Avatar */}
          <div className="relative flex-shrink-0 w-[72px] h-[72px] rounded-full overflow-hidden ring-2 ring-accent/20">
            <img
              src="/tolu-new.png"
              alt="Tolu Adetuyi"
              className="w-full h-full object-cover object-top transition-all duration-700"
              style={{filter: "grayscale(20%)"}}
            />
          </div>
          {/* Name + label */}
          <div>
            <h1 className="text-[32px] md:text-[38px] font-medium tracking-tight leading-tight mb-1 text-foreground">
              Tolu Adetuyi
            </h1>
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-medium flex flex-wrap items-center mt-1 gap-x-3 gap-y-1.5">
              <span className="whitespace-nowrap flex items-center gap-3">Innovator <span className="opacity-60 text-[15px] leading-none">·</span></span>
              <span className="whitespace-nowrap flex items-center gap-3">Venture Architect <span className="opacity-60 text-[15px] leading-none">·</span></span>
              <span className="whitespace-nowrap">Forbes Tech Council &apos;24</span>
            </p>
          </div>
        </div>
        <p className="text-muted text-[15px] leading-relaxed max-w-[520px]">
          Co-Founder &amp; Chief Innovation Officer at{" "}
          <a
            href="https://prembly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground link-hover font-medium"
          >
            Prembly
          </a>
          <span className="text-[#f26522] text-[13px] font-medium ml-1">(YC W22)</span>
          . <span className="text-accent font-medium relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-accent">Building trust infrastructure</span> that helps businesses combat fraud and stay compliant across emerging markets.
        </p>
      </header>

      {/* ── About ── */}
      <section className="mb-10 animate-fade-up delay-200">
        <p className="text-[15px] leading-[1.8] text-muted">
          I&apos;ve spent the better part of a decade building the identity, compliance, and financial
          infrastructure layers that power economic participation across Africa. Before Prembly, I led
          growth at{" "}
          <a href="https://moniepoint.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">Moniepoint</a>,
          where I helped build the distribution network that now powers billions of dollars in transactions
          across Africa. Through that experience, I witnessed firsthand that the greatest barrier to scale was not technology itself, but the absence of trusted infrastructure and effective distribution.</p>
        <p className="text-[15px] leading-[1.8] text-muted mt-4">
          I hold a first-class degree in Computer Science and an MBA with a concentration in Finance
          from Morgan State University. My work sits at the intersection of technology,
          capital, and African economic development.
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
                <span className="text-[#f26522] text-[13px] font-medium ml-1">(YC W22)</span>
              </span>
              <span className="text-muted text-[13px]">
                Co-Founder & CIO
              </span>
            </div>
            <span className="text-muted/80 text-[13px] sm:text-right italic sm:not-italic pt-0.5 sm:pt-0">Identity, Fraud Prevention & Compliance</span>
          </div>
          <div className="border-t border-accent/20" />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0.5">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <a
                href="https://www.chroniclesofinnovation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium link-hover"
              >
                Chronicles of Innovation
              </a>
              <span className="text-muted text-[13px]">
                Executive Curator
              </span>
            </div>
            <span className="text-muted/80 text-[13px] sm:text-right italic sm:not-italic pt-0.5 sm:pt-0">Innovation Documentary Series</span>
          </div>
          <div className="border-t border-accent/20" />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0.5">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <a
                href="https://zerotoact.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium link-hover"
              >
                ZeroToAct
              </a>
              <span className="text-muted text-[13px]">Author</span>
            </div>
            <span className="text-muted/80 text-[13px] sm:text-right italic sm:not-italic pt-0.5 sm:pt-0">Actionable Global Intelligence Brief</span>
          </div>
        </div>
      </section>
      {/* ── Core Areas of Focus ── */}
      <section className="mb-16 animate-fade-up delay-300">
        <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
          Core Areas of Focus
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {[
            "Trust Infrastructure",
            "Applied AI",
            "Digital Identity & Compliance",
            "Cross-Border Financial Systems",
            "Capital Formation",
            "Distribution Infrastructure",
            "African Industrial & Energy Infrastructure",
            "E-Mobility & Energy Transition",
            "Human Capital Development",
            "Emerging Market Economic Systems"
          ].map((area) => (
            <span key={area} className="inline-flex items-center px-3 py-1.5 rounded bg-accent/5 border border-accent/10 text-muted text-[13px] leading-none">
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured Video ── */}
      <section className="mb-16 animate-fade-up delay-400">
        <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
          Featured
        </h2>
        <div className="aspect-video w-full bg-accent/5 ring-1 ring-border overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/7JIjYZJO5jQ"
            title="Lagos Tech Fest 2023"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-muted text-[13px] mt-3">
          Lagos Tech Fest 2023: Identity verification, compliance, and reducing
          fraud for African startups.
        </p>
      </section>


      {/* ── Speaking ── */}
      <section className="mb-16 animate-fade-up delay-500">
        <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
          Speaking & Panels
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <a
              href="https://www.youtube.com/watch?v=7JIjYZJO5jQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] link-hover font-medium"
            >
              Lagos Tech Fest 2023
            </a>
            <span className="text-muted text-[13px]">Panel</span>
          </div>
          <div className="border-t border-accent/20" />
          <a
            href="https://docs.google.com/presentation/d/e/2PACX-1vRYTONvzPUFRxh2qtI0i9Kyp7jSzxSmRgW-fU0ABvt73cXZn5nNtv36UGavwScf6YqarMn0I4KgprJz/pub?start=true&loop=true&delayms=3000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Closing the Compliance Gap for African Startups
            </span>
            <span className="text-muted text-[13px]">
              Slide deck <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">↗</span>
            </span>
          </a>
          <div className="border-t border-accent/20" />
          <a
            href="https://docs.google.com/presentation/d/e/2PACX-1vRfUMs41WRijX2FtvJ59M-q-NumD5Y2oJlvGrrw_or0rqU9QAGtK6WbvvZjLKhPeBlDBaq17ZHYV5zO/pub?start=true&loop=true&delayms=3000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Bootstrapping & Making Your Idea Attractive to Investors
            </span>
            <span className="text-muted text-[13px]">
              Slide deck <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">↗</span>
            </span>
          </a>
          <div className="border-t border-accent/20" />
          <a
            href="https://programmes.podbean.com/e/tts-creating-a-positive-work-security-culture/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Creating a Positive Work Security Culture
            </span>
            <span className="text-muted text-[13px]">ATR Panel · 2023</span>
          </a>
        </div>
      </section>

      {/* ── Latest Writing ── */}
      <section className="mb-16 animate-fade-up delay-600">
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3">
            Latest Writing
          </h2>
          <a
            href="/writing"
            className="text-[13px] text-muted hover:text-accent transition-colors group flex items-center gap-1.5"
          >
            View all <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="space-y-0">
          {getLatestPosts(3).map((post, index, arr) => (
            <div key={post.slug}>
              <a
                href={`/writing/${post.slug}`}
                className="group block py-4"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[11px] uppercase tracking-widest text-accent font-medium">{post.category}</span>
                </div>
                <h3 className="text-[15px] font-medium text-foreground tracking-tight leading-snug mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted line-clamp-1">
                  {post.excerpt}
                </p>
              </a>
              {index < arr.length - 1 && (
                <div className="border-t border-accent/15" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Press & Writing ── */}
      <section className="mb-16 animate-fade-up delay-600">
        <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-6">
          Featured Press & Publications
        </h2>
        <div className="space-y-4">
          <a
            href="https://businessday.ng/technology/article/cbn-aml-directive-triggers-tech-reset-as-banks-fintechs-battle-data-talent-gaps/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              CBN AML Directive Triggers Tech Reset as Banks, Fintechs Battle Data &amp; Talent Gaps
            </span>
            <span className="text-muted text-[13px]">BusinessDay</span>
          </a>
          <div className="border-t border-accent/20" />
          <a
            href="https://guardian.ng/news/leadership-innovation-and-industry-impact-the-work-of-tolu-adetuyi-at-prembly/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline gap-4 group"
          >
            <span className="text-[15px] link-hover">
              Leadership, Innovation, and Industry Impact: The Work of Tolu Adetuyi at Prembly
            </span>
            <span className="text-muted text-[13px] whitespace-nowrap flex-shrink-0">The Guardian</span>
          </a>
          <div className="border-t border-accent/20" />
          <a
            href="https://techcabal.com/2026/03/10/nigerias-prembly-launches-shared-open-source-database/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Prembly Launches FraudLens
            </span>
            <span className="text-muted text-[13px]">TechCabal</span>
          </a>
          <div className="border-t border-accent/20" />
          <a
            href="https://secureidentityalliance.org/reports/on-the-road-to-user-centricity-digital-identity-in-the-electronic-wallet-era/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Digital Identity in the Electronic Wallet Era
            </span>
            <span className="text-muted text-[13px]">Secure Identity Alliance</span>
          </a>
          <div className="border-t border-accent/20" />
          <a
            href="https://vanguardngr.com/ai-is-strongest-ally-in-war-against-financial-fraud-tolu-adetuyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              AI Is Strongest Ally in War Against Financial Fraud
            </span>
            <span className="text-muted text-[13px]">Vanguard</span>
          </a>
          <div className="border-t border-accent/20" />
          <a
            href="https://thecondia.com/zero-to-scale-tolu-adetuyi-head-of-growth-at-moniepoint/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Zero to Scale Interview
            </span>
            <span className="text-muted text-[13px]">The Condia</span>
          </a>
          <div className="border-t border-accent/20" />
          <a
            href="https://www.researchgate.net/profile/Tolu-Adetuyi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Academic Research Publications
            </span>
            <span className="text-muted text-[13px]">ResearchGate</span>
          </a>
        </div>
      </section>

      {/* ── Bridge ── */}
      <p className="text-[15px] leading-[1.8] text-muted mb-10">
        Beyond my work at Prembly, I am quietly building a capital formation vehicle for founders
        and allocators who understand that Africa&apos;s digital economy cannot outrun its physical
        infrastructure deficit.
      </p>

      {/* ── Active Investment Thesis ── */}

      <section className="mb-16 animate-fade-up delay-700">
        <div className="p-8 bg-accent/5 ring-1 ring-border rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-accent mb-3">
            Active Investment Thesis
          </h2>
          <h3 className="text-[20px] md:text-[24px] font-medium text-foreground leading-snug mb-3 tracking-tight">
            Powering Nigeria: Infrastructure Fund 1
          </h3>
          <p className="text-[15px] text-muted leading-relaxed mb-4">
            Over the past decade, I built and scaled Africa's digital trust infrastructure. Now, I am targeting the physical foundation. The Nigerian energy deficit is not a technical problem; it is a 100 billion dollar capital allocation opportunity.
          </p>
          <p className="text-[15px] text-muted leading-relaxed mb-6">
            Infrastructure Fund 1 is structured to completely bypass the legacy grid. By deploying private capital into highly efficient commercial power assets with proven demand, we generate resilient, asset backed yield while solving a generational bottleneck. Our initial focus is embedded commercial and industrial energy infrastructure with predictable demand, strong cash flow characteristics, and clear expansion pathways across underserved economic clusters. For fellow founders and capital allocators ready to build, I invite you to review the core thesis.
          </p>
          <a
            href="/thesis"
            className="inline-flex items-center gap-2 border border-accent text-accent px-5 py-2.5 rounded-full hover:bg-accent hover:text-white transition-all font-medium text-[14px] group"
          >
            Read the Manifesto <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* ── Contact ── */}
      <footer className="pt-10 border-t border-border animate-fade-up delay-700">
        {/* Headline */}
        <p className="text-[13px] uppercase tracking-[0.15em] text-accent font-medium mb-3">
          Work with me
        </p>
        <h2 className="text-[22px] font-medium text-foreground tracking-tight leading-snug mb-2">
          If you are building in Africa or allocating into it, let&apos;s talk.
        </h2>
        <p className="text-[14px] text-muted mb-7">
          Founders, investors, and operators, book a direct session or find me on the links below.
        </p>

        {/* Primary CTA */}
        <a
          href="https://calendly.com/toluadetuyi/one-on-one"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[15px] group shadow-sm hover:shadow-md mb-10"
        >
          Book a session <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </a>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-5 text-[13px] border-t border-border/50 pt-6">
          <p className="text-muted max-w-[300px] leading-relaxed">
            Building infrastructure for economic participation across emerging markets.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-muted">
            <a href="https://www.linkedin.com/in/adetuyitolu/" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://twitter.com/adetuyitolu" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-foreground transition-colors">Twitter</a>
            <a href="https://instagram.com/adetuyitolu" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
