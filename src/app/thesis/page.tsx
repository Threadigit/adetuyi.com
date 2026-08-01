import Link from "next/link";
import type { Metadata } from "next";

const title = "Infrastructure for Economic Participation";
const description =
  "Tolu Adetuyi's thesis on how trust, finance, practical knowledge, distribution, technology, manufacturing, mobility, energy, and capital expand economic participation.";
const canonical = "https://adetuyi.com/thesis";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "article",
    images: [
      {
        url: "/tolu-new.png",
        width: 1374,
        height: 1145,
        alt: "Tolu Adetuyi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/tolu-new.png"],
  },
};

const infrastructureLayers = [
  {
    title: "Trust infrastructure",
    text: "People and businesses need a dependable way to prove who they are and transact safely. Identity, verification, compliance, and fraud prevention make that possible. This is the trust infrastructure we are building at Prembly.",
  },
  {
    title: "Financial and cross-border infrastructure",
    text: "Accounts, payments, credit, settlement, and cross-border systems help people and businesses move money, receive capital, trade, and take part in opportunities beyond their immediate location.",
  },
  {
    title: "Distribution and market access",
    text: "A useful product changes little if it cannot reach the people who need it. Distribution turns technology into access and connects businesses to customers, capital, and opportunity.",
  },
  {
    title: "Technology, manufacturing, and mobility",
    text: "Technology should help people do useful work. Software, manufacturing capacity, mobility, and productive assets allow people to earn more, businesses to produce more, and local companies to take part in larger markets.",
  },
  {
    title: "Energy infrastructure",
    text: "Trust, finance, software, factories, and mobility all depend on reliable power. Better energy allows businesses to operate longer, workers to earn more, and communities to support more productive activity.",
  },
  {
    title: "Practical knowledge",
    text: "People also need useful knowledge to recognise opportunity and act on it. Practical education can shorten the distance between an idea and informed action. This is why I started ZeroToAct and Chronicles of Innovation.",
  },
  {
    title: "Capital and company building",
    text: "Good ideas need capital, sound businesses, and capable people to become useful at scale. Capital formation and founder support help turn opportunity into companies and systems that can serve many more people.",
  },
];

export default function EconomicParticipationThesisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: canonical,
    author: {
      "@type": "Person",
      "@id": "https://adetuyi.com/#person",
      name: "Tolu Adetuyi",
      url: "https://adetuyi.com",
    },
    mainEntityOfPage: canonical,
    about: [
      "Economic participation",
      "Trust infrastructure",
      "Financial infrastructure",
      "Cross-border financial systems",
      "Distribution infrastructure",
      "Manufacturing",
      "Mobility",
      "Energy infrastructure",
      "Practical education",
      "Capital formation",
      "Founder support",
      "Emerging markets",
    ],
  };

  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
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
            <div className="h-px w-8 bg-accent" />
            <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
              My enduring thesis
            </span>
          </div>
          <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-6 text-foreground">
            Infrastructure for
            <span className="block">economic participation</span>
          </h1>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-muted">
            People participate more fully in an economy when they can prove who
            they are, move money, learn what works, reach markets, build useful
            companies, access productive assets, and rely on the systems beneath
            their work.
          </p>
        </header>

        <div className="thesis-body max-w-none">
          <p className="first-letter:text-[48px] first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
            Everything I am building is connected by one vision. I want more
            people and businesses to have a fair chance to take part in the
            economy, create value, earn, own, and grow. Trust infrastructure,
            financial systems, cross-border transactions, distribution,
            technology, practical education, capital formation, manufacturing,
            mobility, and energy are different ways of moving that vision
            forward.
          </p>
          <p>
            Access on its own is not enough. A bank account is limited if money
            cannot move easily. A verified business still needs customers. A
            capable founder still needs practical knowledge and capital. A
            factory still needs dependable power. Participation grows when
            these pieces work together.
          </p>
          <p>
            This is the single idea behind my work at Prembly, my experience in
            financial infrastructure and distribution, the founders I support,
            the knowledge platforms I have created, and the capital I want to
            bring together.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Participation depends on connected systems
          </h2>
          <p>
            Economic participation is not one product or programme. It grows
            when several practical systems work together. Each one solves a
            different part of the same problem.
          </p>

          <div className="my-9 border-y border-border">
            {infrastructureLayers.map((layer, index) => (
              <div
                key={layer.title}
                className={`py-6 ${index > 0 ? "border-t border-border" : ""}`}
              >
                <h3 className="m-0 text-[16px] font-medium text-foreground">
                  {layer.title}
                </h3>
                <p className="m-0 mt-2 text-[14px] leading-[1.75] text-muted">
                  {layer.text}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            One vision expressed through different work
          </h2>
          <p>
            At{" "}
            <a
              href="https://prembly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              Prembly
            </a>
            , I co-founded and continue to build the trust infrastructure that
            helps businesses verify customers, meet compliance requirements,
            prevent fraud, and transact with confidence. Prembly is not separate
            from this thesis. It is one of its clearest expressions because
            people and businesses cannot participate fully when systems cannot
            trust them.
          </p>
          <p>
            At{" "}
            <a
              href="https://moniepoint.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              Moniepoint
            </a>
            , I helped build the distribution network behind billions of
            dollars in transactions across Africa. That experience showed me
            that financial technology becomes useful when it reaches real
            people, reflects how they work, and gives them a practical way to
            take part in the formal economy.
          </p>
          <p>
            Through{" "}
            <a
              href="https://zerotoact.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              ZeroToAct
            </a>
            {" "}and{" "}
            <a
              href="https://www.chroniclesofinnovation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              Chronicles of Innovation
            </a>
            , I make practical knowledge easier to find and use. I started them
            because opportunity is also shaped by what people know, what they
            can learn from others, and whether useful ideas are explained in a
            way that leads to action.
          </p>
          <p>
            I have also worked with founders across cross-border finance,
            mobility, insurance, and other sectors. Supporting founders and
            helping capital reach sound opportunities are also part of this
            vision. Strong companies can remove barriers at scale and give more
            people access to useful products, work, and ownership.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            From digital systems to physical infrastructure
          </h2>
          <p>
            Digital systems can make markets easier to use and connect. They
            cannot manufacture a product, move a physical asset, or produce
            electricity by themselves. That is why my work also extends into
            the physical systems that people and businesses need to be
            productive.
          </p>
          <p>
            I am interested in infrastructure whose usefulness is visible in
            what people and businesses can do after it exists. Can a rider own
            a productive asset and retain more income? Can a manufacturer add a
            shift? Can a small business serve more customers? Can a founder get
            the knowledge and capital needed to build something useful? These
            are not separate ambitions. They are different signs that more
            people can participate.
          </p>

          <div className="my-12 p-8 bg-accent/5 ring-1 ring-border rounded-xl">
            <p className="m-0 text-[12px] font-medium uppercase tracking-widest text-accent">
              An active expression
            </p>
            <h2 className="text-[20px] md:text-[24px] font-medium text-foreground tracking-tight mt-3 mb-4">
              Powering Nigeria Infrastructure Fund 1
            </h2>
            <p className="m-0 text-[14px] leading-[1.8] text-muted">
              The fund is one expression of this wider thesis. It is being
              formed to finance distributed energy assets close to productive
              users who already bear the cost of unreliable power. The work
              begins with proven demand and asks whether better infrastructure
              can lower operating costs, strengthen earnings, and widen
              economic participation while producing disciplined returns.
            </p>
            <Link
              href="/thesis/powering-nigeria-infrastructure-fund-1"
              className="inline-flex items-center gap-2 mt-6 border border-accent text-accent px-5 py-2.5 rounded-full hover:bg-accent hover:text-white transition-all font-medium text-[14px] group"
            >
              Read the fund thesis
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Who I want to build with
          </h2>
          <p>
            I want to work with founders, operators, investors, institutions,
            and high-net-worth individuals who want to widen economic
            participation in practical ways. That may mean creating a company,
            financing infrastructure, opening a distribution channel,
            strengthening a technology platform, teaching what works, or
            bringing useful experience into a difficult market.
          </p>
          <p>
            It can also mean supporting another founder whose work advances the
            same vision. I do not need to build every vehicle myself. The test
            is whether the work solves a real problem, can sustain itself, and
            leaves more people or businesses able to participate productively.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href="mailto:tolu@adetuyi.com?subject=Economic%20participation%20and%20infrastructure"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors font-medium text-[14px]"
            >
              Discuss an opportunity <span>→</span>
            </a>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors font-medium text-[14px]"
            >
              Explore selective advisory <span>→</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
