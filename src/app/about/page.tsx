import Link from "next/link";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const title = "About Tolu Adetuyi";
const description =
  "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly, a trust infrastructure company working across Nigeria, Kenya and the United States. This is how he got here and what he is building.";
const canonical = "https://www.adetuyi.com/about";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical },
  openGraph: {
    title: `${title} | Tolu Adetuyi`,
    description,
    url: canonical,
    type: "profile",
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
    title: `${title} | Tolu Adetuyi`,
    description,
    images: ["/tolu-og.jpg"],
  },
};

const externalLink =
  "text-foreground link-hover font-medium";

const building = [
  {
    name: "BuildX Capital Fund 1",
    note: "Being formed to finance distributed energy assets around productive demand.",
    href: "/thesis/buildx-fund-1",
    external: false,
  },
  {
    name: "Chronicles of Innovation",
    note: "Shows how the world was built, so people can learn from the past.",
    href: "https://www.chroniclesofinnovation.com/",
    external: true,
  },
  {
    name: "ZeroToAct",
    note: "Weekly Signals on what is changing now, so people can act in the present.",
    href: "https://zerotoact.com/",
    external: true,
  },
];

const background = [
  {
    label: "MBA, Finance",
    detail: "Morgan State University. GSBM Scholar and lifetime member of Beta Gamma Sigma.",
  },
  {
    label: "BSc, Computer Science",
    detail: "Adekunle Ajasin University. First class.",
  },
  {
    label: "Y Combinator",
    detail: "Prembly, Winter 2022 batch.",
  },
  {
    label: "Forbes Technology Council",
    detail: "Official Member, 2024.",
  },
  {
    label: "On Deck Founder Fellowship",
    detail: "Fellow, in a global community of technology founders.",
  },
  {
    label: "Student Venture Capital Grant (S-VCG)",
    detail: "Mentor. Nigeria's programme that gives student founders equity-free funding to build.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <Link
        href="/"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back to homepage
      </Link>

      <article className="animate-fade-up">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
              About
            </span>
          </div>
          <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-6 text-foreground">
            Building where trust, money and markets meet
          </h1>
          <p className="text-[17px] leading-[1.8] text-muted">
            I am Nigerian, based in the United States, and I build across the
            United States, Nigeria and Kenya. I am Co-Founder and Chief
            Innovation Officer at{" "}
            <a href="https://prembly.com/" target="_blank" rel="noopener noreferrer" className={externalLink}>
              Prembly
            </a>
            , and my work sits where trust, money and markets meet.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
              Where it started
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.85] text-muted">
              <p>
                I was curious before I had a title. As a student, I kept noticing
                problems and wondering whether software could remove them. That
                led to an electronic voting platform, and to asking how school
                fee receipts could be verified properly instead of trusted on
                sight.
              </p>
              <p>
                It also led to the Career Advancement Programme, where students
                were trained in different tech skills, and to the Developers
                Festival. None of it started because I already knew how to build
                it. It started because I was willing to ask.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
              Learning the work
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.85] text-muted">
              <p>
                I joined the early team at Accounteer, building tools for small
                businesses that were still forming the habits and systems to use
                them. Understanding software was not enough. We had to
                understand the daily reality of the people we served.
              </p>
              <p>
                At{" "}
                <a href="https://moniepoint.com/" target="_blank" rel="noopener noreferrer" className={externalLink}>
                  Moniepoint
                </a>
                , I led growth and helped build the distribution network that put
                banking and payment terminals in the hands of merchants the
                formal system had ignored. That work taught me that the best
                product does not win on its own. The best distributed product
                does.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
              Prembly
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.85] text-muted">
              <p>
                Prembly began with a narrow question about enabling payments
                through biometrics and identity verification in Africa. It kept
                widening into a bigger one. How does trust actually work in
                digital markets?
              </p>
              <p>
                Today we build identity verification, fraud prevention and
                compliance infrastructure from Nigeria, Kenya and the United
                States, and more than a thousand local and global businesses use
                it against fraud. As the company grew, my job shifted from
                building the product to building the teams and systems that
                build many products. I am still learning how to do that well.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
              What I am building now
            </h2>
            <div>
              {building.map((item, index) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6 py-4"
                  >
                    <span className="text-[16px] text-foreground group-hover:text-accent transition-colors">
                      {item.name}
                      {item.external && <span className="ml-1 text-muted">↗</span>}
                    </span>
                    <span className="text-[14px] leading-relaxed text-muted sm:max-w-[360px] sm:text-right">
                      {item.note}
                    </span>
                  </a>
                  {index < building.length - 1 && <div className="border-t border-accent/20" />}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
              How I think
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.85] text-muted">
              <p>
                One conviction guides my work. Economic participation, in the
                global economy and not only the local one, expands when people
                and businesses can create exportable value, prove who they are,
                move money, reach markets, access capital and rely on
                dependable infrastructure.
                You can read it in full in{" "}
                <Link href="/thesis" className={externalLink}>
                  my thesis
                </Link>
                .
              </p>
              <p>
                I write to work ideas out in public. A good place to start is{" "}
                <Link href="/writing/sound-judgement-when-the-rules-keep-changing" className={externalLink}>
                  Making Sound Judgement When the Rules Keep Changing
                </Link>{" "}
                or{" "}
                <Link href="/writing/the-ancient-wisdom-of-joseph" className={externalLink}>
                  The Ancient Wisdom of Joseph
                </Link>
                , or the{" "}
                <Link href="/writing" className={externalLink}>
                  full list of essays
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
              Education and affiliations
            </h2>
            <div>
              {background.map((item, index) => (
                <div key={item.label}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6 py-3.5">
                    <span className="text-[16px] text-foreground">{item.label}</span>
                    <span className="text-[14px] leading-relaxed text-muted sm:max-w-[380px] sm:text-right">
                      {item.detail}
                    </span>
                  </div>
                  {index < background.length - 1 && <div className="border-t border-accent/20" />}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5">
              Outside work
            </h2>
            <p className="text-[16px] leading-[1.85] text-muted">
              I am a Christian and a father to a young daughter. Both shape how
              I think about what we are building, and who it is for.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-2">
            Get in touch
          </p>
          <p className="text-[14px] text-muted mb-5 leading-relaxed">
            For advisory, speaking or a conversation about the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[13px] group"
            >
              Advisory <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:tolu@adetuyi.com"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-2.5 rounded-full hover:border-accent hover:text-accent transition-all font-medium text-[13px] group"
            >
              Send a note <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
