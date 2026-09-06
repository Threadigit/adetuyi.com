import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const title = "Infrastructure for Economic Participation";
const description =
  "Tolu Adetuyi's thesis on building and supporting the systems that help more people and businesses participate productively in the economy.";
const canonical = "https://www.adetuyi.com/thesis";

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
        url: "/tolu-og.jpg",
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
    images: ["/tolu-og.jpg"],
  },
};

const infrastructureLayers = [
  {
    title: "Be recognised and trusted",
    text: "A person or business has to be able to prove who they are, check who they are dealing with, and transact without exposure to fraud. Trust is what opens the door to customers, credit, and commerce.",
  },
  {
    title: "Understand opportunity and decide well",
    text: "Knowing that an opportunity exists is not the same as knowing what to do about it. People need practical knowledge, working examples, and a clear read on what is changing, so they can act while it still matters.",
  },
  {
    title: "Produce, earn, and grow",
    text: "Earning depends on useful technology, capable founders, productive assets, reliable energy, and sound capital. Together, these help people earn more and companies build at a meaningful scale.",
  },
  {
    title: "Transact and reach markets",
    text: "Value that cannot reach a buyer is not yet value. People and businesses have to move money, receive capital, trade across borders, reach customers, and take part in opportunities beyond their immediate location.",
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
      "@id": "https://www.adetuyi.com/#person",
      name: "Tolu Adetuyi",
      url: "https://www.adetuyi.com",
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
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Thesis", path: "/thesis" },
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
            <div className="h-px w-8 bg-accent" />
            <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
              My enduring thesis
            </span>
          </div>
          <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-6 text-foreground">
            Infrastructure for{" "}
            <span className="block">economic participation</span>
          </h1>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-muted">
            My work is focused on widening economic participation by building
            and supporting the systems that help more people and businesses
            create value, earn, own, grow, and participate productively in the
            global economy.
          </p>
        </header>

        <div className="thesis-body max-w-none">
          <p className="first-letter:text-[48px] first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
            Across my work, I keep returning to one question. What must exist
            for more people and businesses to contribute meaningfully to the
            economy and benefit from its growth? The answer is not simply
            access to one product. It is a dependable path from identity and
            trust to knowledge, money, capital, production, markets, and the
            global economy.
          </p>
          <p>
            Opportunity becomes real only when that path works. A bank account
            matters when there is something to put in it and money can move.
            Trust matters when it opens the door to customers and commerce.
            Knowledge matters when a founder can turn it into a sound company.
            Capital matters when a business has the power, tools, and market to
            put it to productive use.
          </p>
          <p>
            The account is where the measurement usually goes wrong. Inclusion
            is counted in accounts opened, but an account is only a container.
            Open one for somebody with no way to earn and the statistics improve
            while the person does not. They are recorded as included and remain
            unable to make the account work for them. That is how access can
            rise for years while livelihoods stay where they were.
          </p>
          <p>
            The same error repeats at every layer. Identities verified. Loans
            disbursed. Terminals deployed. Each one gets counted because each
            one is easy to count, and none of them says whether a person ended
            up better able to earn. Institutions report what they did. Whether
            it changed anybody&apos;s position is harder to see, so it is
            watched less, and the two can drift apart for years before anyone
            says so.
          </p>
          <p>
            My role is deliberate. I build where my operating experience is
            strongest, support a small number of founders advancing the same
            vision, and help capital reach opportunities that can expand
            economic participation at meaningful scale.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Participation depends on connected systems
          </h2>
          <p>
            Economic participation is not one product or programme. It grows
            when several practical systems work together. They are not a
            sequence to be completed in order. At any moment one of them is
            what binds, and effort spent on the others changes little until
            that one moves.
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
            How this focus appears in my work
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
            prevent fraud, and transact with confidence. We work across
            emerging markets, with presence in Nigeria, Kenya, and the United
            States, and more than a thousand local and global businesses use it
            against fraud, across millions of verifications. That count is an
            input, not a result. What it buys is a business able to deal with a
            customer it could not otherwise trust. Prembly is my primary
            operating work and the clearest case of this thesis in practice.
            People and businesses cannot participate fully when systems cannot
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
            , I helped build the distribution network that moves billions of
            dollars in transactions and now reaches millions of businesses
            across the continent. That work showed me where participation
            actually begins. Financial technology only becomes
            useful when someone takes it the last mile, into the markets and
            neighbourhoods where people already earn and trade, in a form that
            fits how they work. The product did not widen access on its own.
            The network did.
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
              href="https://www.chroniclesofinnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              Chronicles of Innovation
            </a>
            , I make practical knowledge easier to find and use. They are not
            separate operating ambitions. They are ways to share useful ideas,
            lessons, and examples with people who are building and making
            consequential decisions.
          </p>
          <p>
            I also support a small number of founders whose companies can
            remove real barriers to taking part. The industry may
            differ, but the reason for engaging does not. The company must solve
            a real problem and give more people or businesses a practical way
            to move forward.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Where this goes next
          </h2>
          <p>
            My experience began with digital and financial systems, but the
            same conviction leads naturally to physical infrastructure. A
            trusted business that can move money still cannot produce without
            reliable power, productive assets, and the ability to reach its
            market.
          </p>
          <p>
            I am interested in work whose value can be seen in what changes for
            the user. A rider retains more income. A manufacturer adds a shift.
            A small business serves more customers. A capable founder gets the
            support and capital needed to build something useful. These are
            different outcomes of the same focus.
          </p>

          <div className="my-12 p-8 bg-accent/5 ring-1 ring-border rounded-xl">
            <p className="m-0 text-[12px] font-medium uppercase tracking-widest text-accent">
              In formation
            </p>
            <h2 className="text-[20px] md:text-[24px] font-medium text-foreground tracking-tight mt-3 mb-4">
              BuildX Capital Fund 1
            </h2>
            <p className="m-0 text-[14px] leading-[1.8] text-muted">
              The fund is this thesis applied to physical infrastructure. For
              years I have backed this deficit as an angel investor, one company
              at a time. Angel cheques can prove a model. They cannot finance
              the assets themselves. BuildX Capital Fund 1 carries that learning, and
              the operating experience behind the distribution and trust
              infrastructure work, into a structured vehicle. Energy is Fund
              1&apos;s mandate, in Nigeria&apos;s distributed commercial and
              industrial market, because power is the constraint sitting under
              the rest.
            </p>
            <p className="m-0 mt-4 text-[14px] leading-[1.8] text-muted">
              It is being formed to finance distributed energy assets close to
              productive users who already bear the cost of unreliable power.
              The work begins with proven demand and asks whether better
              infrastructure can lower operating costs, strengthen earnings, and
              widen economic participation while producing disciplined returns.
            </p>
            <p className="m-0 mt-4 text-[14px] leading-[1.8] text-muted">
              The first test begins with productive electric mobility. Deployed
              assets are being tracked for utilisation, repayments, battery
              behaviour, and maintenance as we test whether mobility can provide
              the starting demand for distributed energy stations and widen
              access to income-generating assets.
            </p>
            <Link
              href="/thesis/buildx-fund-1"
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
            I want to work with founders, operators, investors, and
            institutions who want to widen who gets to take part, in practical
            ways. That may mean creating a company,
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
