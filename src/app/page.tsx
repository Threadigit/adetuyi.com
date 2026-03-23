export default function Home() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      {/* ── Header ── */}
      <header className="mb-6">
        <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight leading-snug mb-4">
          Tolu Adetuyi
        </h1>
        <p className="text-muted text-[15px] leading-relaxed max-w-[520px]">
          Chief Innovation Officer at{" "}
          <a
            href="https://prembly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground link-hover font-medium"
          >
            Prembly
          </a>
          . Building trust infrastructure for identity verification, fraud
          prevention and compliance across Africa.
        </p>
      </header>

      {/* ── About ── */}
      <section className="mb-14">
        <p className="text-[15px] leading-[1.8] text-muted">
          I build technology products and businesses. My background spans software engineering, business building, and
          finance, and I&apos;ve spent the last decade turning that into
          companies and systems that work. Previously, I served as Head of Business Growth
          at{" "}
          <a href="https://moniepoint.com/" target="_blank" rel="noopener noreferrer" className="text-foreground link-hover font-medium">Moniepoint</a>, where I helped scale the agent network to serve
          millions of Nigerians. I hold a{" "}
          <span className="text-foreground font-medium">First Class degree in Computer Science</span> from
          Adekunle Ajasin University and an{" "}
          <span className="text-foreground font-medium">MBA with a Finance concentration</span> from
          Morgan State University.
        </p>
      </section>

      {/* ── Current Work ── */}
      <section className="mb-16">
        <h2 className="text-[13px] font-medium uppercase tracking-[0.1em] text-muted mb-6">
          Current Work
        </h2>
        <div className="space-y-5">
          <div className="flex justify-between items-baseline">
            <div>
              <a
                href="https://prembly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium link-hover"
              >
                Prembly
              </a>
              <span className="text-muted text-[13px] ml-3">
                Co-Founder & CIO
              </span>
            </div>
            <span className="text-muted text-[13px]">Identity & Compliance</span>
          </div>
          <div className="border-t border-border" />

          <div className="flex justify-between items-baseline">
            <div>
              <a
                href="https://www.chroniclesofinnovation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium link-hover"
              >
                Chronicles of Innovation
              </a>
              <span className="text-muted text-[13px] ml-3">
                Executive Curator
              </span>
            </div>
            <span className="text-muted text-[13px]">Documentary Series</span>
          </div>
          <div className="border-t border-border" />

          <div className="flex justify-between items-baseline">
            <div>
              <a
                href="https://zerotoact.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium link-hover"
              >
                ZeroToAct
              </a>
              <span className="text-muted text-[13px] ml-3">Author</span>
            </div>
            <span className="text-muted text-[13px]">Newsletter</span>
          </div>
        </div>
      </section>

      {/* ── Featured Video ── */}
      <section className="mb-16">
        <h2 className="text-[13px] font-medium uppercase tracking-[0.1em] text-muted mb-6">
          Featured
        </h2>
        <div className="aspect-video w-full bg-foreground/5 overflow-hidden">
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
          Lagos Tech Fest 2023 — Identity verification, compliance, and reducing
          fraud for African startups.
        </p>
      </section>


      {/* ── Speaking ── */}
      <section className="mb-16">
        <h2 className="text-[13px] font-medium uppercase tracking-[0.1em] text-muted mb-6">
          Speaking & Panels
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <span className="text-[15px]">Lagos Tech Fest 2023</span>
            <span className="text-muted text-[13px]">Panel</span>
          </div>
          <div className="border-t border-border" />
          <a
            href="https://docs.google.com/presentation/d/e/2PACX-1vRYTONvzPUFRxh2qtI0i9Kyp7jSzxSmRgW-fU0ABvt73cXZn5nNtv36UGavwScf6YqarMn0I4KgprJz/pub?start=true&loop=true&delayms=3000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Closing the Compliance Gap for African Startups
            </span>
            <span className="text-muted text-[13px]">Slide deck ↗</span>
          </a>
          <div className="border-t border-border" />
          <a
            href="https://docs.google.com/presentation/d/e/2PACX-1vRfUMs41WRijX2FtvJ59M-q-NumD5Y2oJlvGrrw_or0rqU9QAGtK6WbvvZjLKhPeBlDBaq17ZHYV5zO/pub?start=true&loop=true&delayms=3000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Bootstrapping & Making Your Idea Attractive to Investors
            </span>
            <span className="text-muted text-[13px]">Slide deck ↗</span>
          </a>
          <div className="border-t border-border" />
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

      {/* ── Press & Writing ── */}
      <section className="mb-16">
        <h2 className="text-[13px] font-medium uppercase tracking-[0.1em] text-muted mb-6">
          Featured Press & Publications
        </h2>
        <div className="space-y-4">
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
          <div className="border-t border-border" />
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
          <div className="border-t border-border" />
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
          <div className="border-t border-border" />
          <a
            href="https://secureidentityalliance.org/utilities/news-en/on-the-road-to-user-centricity-digital-identity-in-the-electronic-wallet-era-1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline group"
          >
            <span className="text-[15px] link-hover">
              Digital Identity in the Electronic Wallet Era
            </span>
            <span className="text-muted text-[13px]">
              Secure Identity Alliance
            </span>
          </a>
          <div className="border-t border-border" />
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

      {/* ── Contact ── */}
      <footer className="pt-8 border-t border-border">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
          <a
            href="https://calendly.com/toluadetuyi/one-on-one"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-hover"
          >
            Book a session ↗
          </a>
          <a
            href="https://www.linkedin.com/in/adetuyitolu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted link-hover"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/adetuyitolu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted link-hover"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/adetuyitolu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted link-hover"
          >
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
