import Link from "next/link";
import type { Metadata } from "next";

const title = "Infrastructure for Economic Participation";
const description =
  "Tolu Adetuyi's thesis on how trust, financial, cross-border, distribution, technology, manufacturing, mobility, and energy infrastructure expand economic participation.";
const canonical = "https://adetuyi.com/thesis";
const lastUpdated = "2026-07-31";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "article",
    modifiedTime: `${lastUpdated}T00:00:00-04:00`,
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
    text: "Identity, verification, compliance, and fraud prevention make people and businesses legible enough to transact safely. Without trust, access remains fragile and legitimate activity carries unnecessary friction.",
  },
  {
    title: "Financial and cross-border infrastructure",
    text: "Accounts, payments, settlement, credit, and the systems that move value across borders determine whether people can participate beyond the limits of cash, geography, and institutional familiarity.",
  },
  {
    title: "Distribution and market access",
    text: "A useful product changes little if it cannot reach the people who need it. Distribution turns technology into access and connects businesses to customers, capital, and opportunity.",
  },
  {
    title: "Technology and productive infrastructure",
    text: "Software, manufacturing capacity, mobility, and the physical systems behind them help people produce more, own income-generating assets, and participate in larger value chains.",
  },
  {
    title: "Energy infrastructure",
    text: "Trust, finance, software, and factories all depend on reliable power. Energy is the foundation beneath productive activity and one of the clearest constraints on economic participation in Nigeria.",
  },
];

export default function EconomicParticipationThesisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: canonical,
    dateModified: lastUpdated,
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
            People participate more fully in an economy when they can be
            trusted, move money, reach markets, access productive assets, and
            rely on the physical systems beneath their work.
          </p>
          <p className="mt-5 text-[12px] uppercase tracking-widest text-muted">
            Last updated <time dateTime={lastUpdated}>July 31, 2026</time>
          </p>
        </header>

        <div className="thesis-body max-w-none">
          <p className="first-letter:text-[48px] first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
            My work has moved through identity, compliance, financial systems,
            cross-border transactions, distribution, technology, mobility,
            manufacturing, and energy. These may look like different sectors.
            I see them as parts of the same problem. Too many capable people and
            viable businesses remain excluded from economic opportunity because
            the systems required to participate are missing, unreliable, or
            unable to recognise them properly.
          </p>
          <p>
            My thesis is that economic participation is not created by access
            alone. It is created when access is supported by infrastructure
            that allows people to transact, produce, earn, own, and grow with
            confidence. A bank account without usable payment rails is limited.
            A verified business without distribution cannot reach its market. A
            factory without dependable power cannot fulfil its potential.
          </p>
          <p>
            This is the conviction that connects what I have built, the
            founders I work with, the systems I study, and the capital I want to
            organise.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Participation rests on a connected stack
          </h2>
          <p>
            Economic participation is often discussed as a programme or a
            social outcome. I understand it as an infrastructure outcome. Each
            layer makes the next one more useful, and weakness in one layer can
            limit everything built above it.
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
            How the conviction was formed
          </h2>
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
            dollars in transactions across Africa. The lesson was not only
            about payments. Technology creates meaningful access when it is
            connected to distribution, local incentives, and the operating
            realities of the people it is meant to serve.
          </p>
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
            , I co-founded and continue to build trust infrastructure that
            helps businesses verify customers, manage compliance, prevent
            fraud, and transact with greater confidence. That work showed me
            how much economic activity depends on whether a system can
            distinguish legitimate participation from risk.
          </p>
          <p>
            I have also worked with founders across cross-border finance,
            mobility, insurance, and other sectors. The recurring pattern is
            clear. A venture becomes more valuable when it does more than sell
            a product. It should reduce a structural constraint and leave more
            people or businesses able to participate productively.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            From digital rails to physical systems
          </h2>
          <p>
            Digital infrastructure can make markets more legible, connected,
            and efficient. It cannot manufacture electricity, move a physical
            asset, or add production capacity by itself. That is why my work is
            extending into the physical systems that productive economies
            require.
          </p>
          <p>
            I am interested in infrastructure whose usefulness is visible in
            what people and businesses can do after it exists. Can a rider own
            a productive asset and retain more income? Can a manufacturer add a
            shift? Can a small business serve more customers? Can capital reach
            a legitimate enterprise at a fairer price? These are not separate
            ambitions. They are different measures of participation.
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
              begins with visible demand and asks whether better infrastructure
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
            and high-net-worth individuals who understand that durable economic
            outcomes are built through systems. That may mean creating a new
            venture, financing an infrastructure asset, opening a distribution
            channel, strengthening a technology platform, or bringing operating
            capability to a difficult market.
          </p>
          <p>
            The sector matters, but the test is consistent. The work should
            remove a real constraint, support viable economics, and leave more
            people or businesses able to participate productively.
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
