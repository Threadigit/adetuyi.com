import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const title = "About the Co-Founder of Prembly";
const description =
  "Tolu Adetuyi is a Nigerian engineer turned technology entrepreneur and investor. Co-Founder of Prembly, he now also backs founders across Africa.";
const canonical = "https://www.adetuyi.com/about";

export const metadata: Metadata = {
  title,
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

const inlineLink = "text-foreground link-hover font-medium";

const sectionHeading =
  "text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5";

const bodyText = "space-y-4 text-[16px] leading-[1.85] text-muted";

const exploring = [
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
  {
    name: "BuildX Capital",
    note: "Invests in and supports early stage founders across mobility, energy, trade, manufacturing and infrastructure, and is forming an energy mandate.",
    href: "/thesis/buildx-capital",
    external: false,
  },
];

const education = [
  {
    label: "MBA, Finance",
    detail: "Morgan State University. GSBM Scholar and lifetime member of Beta Gamma Sigma.",
  },
  {
    label: "BSc, Computer Science",
    detail: "Adekunle Ajasin University. First class.",
  },
];

const affiliations = [
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
  {
    label: "Fintech Takes",
    detail: "Member of the network in the United States.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${canonical}#about-page`,
  url: canonical,
  name: title,
  description,
  mainEntity: { "@id": "https://www.adetuyi.com/#person" },
  isPartOf: { "@id": "https://www.adetuyi.com/#website" },
};

function FactList({ items }: { items: { label: string; detail: string }[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.label}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6 py-3.5">
            <span className="text-[16px] text-foreground">{item.label}</span>
            <span className="text-[14px] leading-relaxed text-muted sm:max-w-[380px] sm:text-right">
              {item.detail}
            </span>
          </div>
          {index < items.length - 1 && <div className="border-t border-accent/20" />}
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c"),
        }}
      />
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
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
              About
            </span>
          </div>
          <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="sm:max-w-[420px]">
              <h1 className="text-[34px] md:text-[42px] font-medium tracking-tight leading-[1.15] mb-6 text-foreground">
                Engineer, entrepreneur and investor
              </h1>
              <p className="text-[17px] leading-[1.8] text-muted">
                I am a Nigerian engineer turned technology entrepreneur and
                investor. I live in the United States and work across the United States, Nigeria and Kenya. I am Co-Founder and Chief Innovation Officer at{" "}
                <a href="https://prembly.com/" target="_blank" rel="noopener noreferrer" className={inlineLink}>
                  Prembly
                </a>
                , which helps businesses verify customers, prevent fraud and meet compliance rules. I also invest in and support founders building the financial and physical systems that let people and businesses take part in the global economy.
              </p>
            </div>
            <div className="w-[150px] sm:w-[170px] shrink-0 overflow-hidden rounded-xl border border-border">
              <Image
                src="/press-kit/tolu-adetuyi-headshot-suit.jpg"
                alt="Tolu Adetuyi"
                width={1833}
                height={2000}
                sizes="170px"
                preload
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </header>

        <div className="space-y-14">
          <section>
            <h2 className={sectionHeading}>Where it started</h2>
            <div className={bodyText}>
              <p>
                Leadership began early. As a student at Adekunle Ajasin
                University, I led on campus and built software that my school
                put into live use.
              </p>
              <p>
                I was president of the Computer Science Students&apos; Association
                and an active member of Enactus. I created the Career
                Advancement Programme, which trained students in technology
                skills, and the Developers Festival, where people pitched their
                ideas to industry leaders.
              </p>
              <p>
                An electronic voting platform I built conducted the students&apos;
                union government election for a student body of more than
                20,000, with the endorsement of the school management. A
                detector I built for forged school fee receipts caught
                fraudulent payments and saved the administration money. It was
                my first work in fraud detection.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionHeading}>Learning how markets work</h2>
            <div className={bodyText}>
              <p>
                I began my career as a software engineer, and that training
                still shapes how I think about systems. I worked as an engineer
                at Edves, then joined the early team at Accounteer as a software
                engineer and later moved into product management. We built
                tools for small businesses that were still forming the habits
                and systems to use them. The lesson was that
                understanding software is not enough. You have to understand the
                daily reality of the people you serve.
              </p>
              <p>
                Not every venture worked. At Hojah, a food delivery app that
                launched in Nigeria before the market was ready, I was a
                founding engineer with equity. It was one of several ventures
                that did not succeed, and it taught me to treat timing as part
                of the product.
              </p>
              <p>
                At{" "}
                <a href="https://moniepoint.com/" target="_blank" rel="noopener noreferrer" className={inlineLink}>
                  Moniepoint
                </a>
                , I helped build the product and led growth to build the
                distribution network that put banking and payment terminals in
                the hands of merchants the formal system had ignored. That work
                showed me that distribution decides outcomes as much as the
                product does.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionHeading}>Prembly</h2>
            <div className={bodyText}>
              <p>
                Prembly began with a narrow question about enabling payments
                through biometrics and identity verification in Africa. It
                widened into a larger question about how trust works in digital
                markets. Today we build identity verification, fraud prevention
                and compliance infrastructure from Nigeria, Kenya and the United
                States, and more than a thousand local and global businesses rely on it. We were part of Y Combinator&apos;s Winter 2022
                batch.
              </p>
              <p>
                As the company grew, my work shifted from building the product
                to building the teams and systems that build many products.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionHeading}>Also exploring</h2>
            <p className="text-[16px] leading-[1.85] text-muted mb-3">
              Three efforts that carry the same thesis into knowledge, media and
              capital.
            </p>
            <div>
              {exploring.map((item, index) => (
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
                  {index < exploring.length - 1 && <div className="border-t border-accent/20" />}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={sectionHeading}>How I think</h2>
            <div className={bodyText}>
              <p>One conviction guides my work.</p>
              <blockquote className="my-2 border-l-[3px] border-accent pl-6 text-[17px] leading-[1.75] italic text-foreground/80">
                Economic participation in the global economy expands when people and businesses can create
                exportable value, prove who they are, move money, reach markets,
                and access capital, all resting on the dependable infrastructure
                that makes it work.
              </blockquote>
              <p>
                The aim is not a quarrel over the past. It is for Africa to
                become productively valuable to the world, and to move from
                dependence to genuine collaboration. You can read the full
                argument in{" "}
                <Link href="/thesis" className={inlineLink}>
                  my thesis
                </Link>
                . I write to work ideas out in public, and a good place to start
                is{" "}
                <Link href="/writing/sound-judgement-when-the-rules-keep-changing" className={inlineLink}>
                  Making Sound Judgement When the Rules Keep Changing
                </Link>{" "}
                or{" "}
                <Link href="/writing/the-ancient-wisdom-of-joseph" className={inlineLink}>
                  The Ancient Wisdom of Joseph
                </Link>
                , or the{" "}
                <Link href="/writing" className={inlineLink}>
                  full list of essays
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionHeading}>Education</h2>
            <FactList items={education} />
          </section>

          <section>
            <h2 className={sectionHeading}>Affiliations</h2>
            <FactList items={affiliations} />
          </section>

          <section>
            <h2 className={sectionHeading}>Beyond work</h2>
            <p className="text-[16px] leading-[1.85] text-muted">
              I am a Christian, a husband to a loving wife and a father to a
              young daughter. All three shape how I think about what we are
              building, and who it is for.
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
            <Link
              href="/press-kit"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-2.5 rounded-full hover:border-accent hover:text-accent transition-all font-medium text-[13px] group"
            >
              Press kit <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
