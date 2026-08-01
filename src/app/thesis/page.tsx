import Link from "next/link";
import type { Metadata } from "next";

const title = "Powering Nigeria Infrastructure Fund 1";
const description =
  "Tolu Adetuyi's thesis for financing distributed energy assets around commercial, industrial, and productive mobility demand in Nigeria.";
const canonical = "https://adetuyi.com/thesis";
const lastUpdated = "2026-07-31";

const sources = [
  {
    label: "NERC Operational Performance Factsheets",
    detail: "Installed capacity, available capacity, and average grid output",
    href: "https://nerc.gov.ng/resource-category/operational-performance-factsheet/",
  },
  {
    label: "NERC Annual Report 2024",
    detail: "Generation licensing and embedded power frameworks",
    href: "https://nerc.gov.ng/wp-content/uploads/2025/07/2024-Annual-Report.pdf",
  },
  {
    label: "NERC Mini-Grid Regulations 2026",
    detail: "Current capacity thresholds and investment protections",
    href: "https://nerc.gov.ng/need-help/services/apply-for-mini-grid-permit-2/",
  },
  {
    label: "World Bank Nigeria data",
    detail: "National electricity access rate",
    href: "https://data.worldbank.org/country/nigeria?locations=NG&subcat=161",
  },
  {
    label: "World Bank mini-grid market review",
    detail: "Electricity access gap and private mini-grid deployment",
    href: "https://www.worldbank.org/en/news/feature/2025/03/07/expanding-nigeria-s-mini-grid-market",
  },
  {
    label: "Nigeria DARES programme",
    detail: "Public support for private distributed renewable energy",
    href: "https://www.dares.rea.gov.ng/dares.html",
  },
  {
    label: "IEA financing electricity access in Africa",
    detail: "Anchor loads, productive users, and private capital",
    href: "https://www.iea.org/reports/financing-electricity-access-in-africa/executive-summary",
  },
];

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
        url: "/power-grid.png",
        width: 1024,
        height: 1536,
        alt: "Electricity transmission infrastructure in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/power-grid.png"],
  },
};

export default function ThesisPage() {
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
      "Distributed energy infrastructure",
      "Commercial and industrial power",
      "Productive mobility charging infrastructure",
      "Nigeria",
      "Infrastructure investment",
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
              Active investment thesis
            </span>
          </div>
          <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-6 text-foreground">
            Powering Nigeria
            <span className="block">Infrastructure Fund 1</span>
          </h1>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-muted">
            A case for private capital in Nigeria&apos;s distributed commercial
            and industrial energy infrastructure.
          </p>
          <p className="mt-5 text-[12px] uppercase tracking-widest text-muted">
            Last updated{" "}
            <time dateTime={lastUpdated}>July 31, 2026</time>
          </p>
        </header>

        <div className="thesis-body max-w-none">
          <p className="first-letter:text-[48px] first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
            Over the past decade, I have built systems that help African
            businesses move money, verify identity, prevent fraud, and reach
            customers at scale. At{" "}
            <a
              href="https://moniepoint.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              Moniepoint
            </a>
            , I helped build a distribution network that carried financial
            services into communities the traditional system did not serve
            well. At{" "}
            <a
              href="https://prembly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              Prembly
            </a>
            , I have worked on the trust layer that allows businesses to know
            who they are dealing with and transact with greater confidence.
          </p>
          <p>
            Those experiences shaped a conviction. Digital infrastructure can
            remove enormous friction, but it cannot manufacture electricity.
            A payment rail, identity platform, factory, cold room, hospital, or
            data centre is only as reliable as the power beneath it. Nigeria has
            built remarkable businesses on top of an energy system that still
            asks each enterprise to become its own utility.
          </p>
          <p>
            I do not see that only as a development problem. I see recurring,
            financeable demand for infrastructure that lowers operating costs,
            strengthens earnings, and expands what businesses and workers can
            produce.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            The system is constrained, not the demand
          </h2>
          <p>
            Nigeria&apos;s grid has substantial nameplate capacity, but too
            little of it becomes dependable power for the customer. NERC&apos;s{" "}
            <a
              href="https://nerc.gov.ng/resource-category/operational-performance-factsheet/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              April 2026 operational factsheet
            </a>{" "}
            reported 13,625 MW of installed grid-connected capacity. Only 4,286
            MW was available for dispatch, and average output was approximately
            4,048 MW. The issue is not simply how many generating plants exist.
            Fuel availability, plant condition, transmission limits,
            distribution losses, liquidity, and commercial discipline all
            determine what finally reaches a meter.
          </p>
          <p>
            Access is also incomplete. The World Bank&apos;s{" "}
            <a
              href="https://data.worldbank.org/country/nigeria?locations=NG&subcat=161"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              latest published indicator
            </a>{" "}
            places electricity access at 62.5 percent of the population in
            2024. Its{" "}
            <a
              href="https://www.worldbank.org/en/news/feature/2025/03/07/expanding-nigeria-s-mini-grid-market"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              review of Nigeria&apos;s mini-grid market
            </a>{" "}
            estimates that more than 80 million people still lack access.
            Businesses that are connected often face a different problem. Their
            connection does not guarantee the quality or duration of supply
            required to operate.
          </p>
          <p>
            The practical result is a parallel energy economy. Companies buy
            generators, fuel, maintenance, inverters, batteries, and
            replacement equipment. They absorb downtime and voltage damage.
            These costs are dispersed across operating budgets, which can make
            them look temporary. In reality, they are a recurring payment for
            unreliable infrastructure.
          </p>

          <div className="my-10 grid sm:grid-cols-3 border-y border-border">
            {[
              ["13,625 MW", "Installed grid capacity in April 2026"],
              ["4,048 MW", "Average grid output in April 2026"],
              ["80M+", "People estimated to remain without access"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={`py-6 ${
                  index > 0
                    ? "sm:border-l sm:border-border sm:pl-5"
                    : "sm:pr-5"
                }`}
              >
                <p className="m-0 text-[24px] font-medium tracking-tight text-foreground">
                  {value}
                </p>
                <p className="m-0 mt-2 text-[12px] leading-relaxed text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            The investable wedge
          </h2>
          <p>
            Powering Nigeria Infrastructure Fund 1 is being formed around distributed power for
            commercial and industrial users. The initial focus is not utility
            scale generation built on speculative demand. It is energy
            infrastructure located close to businesses that already consume
            power, already pay for alternatives, and can demonstrate the
            operating need to sign a credible long-term contract.
          </p>
          <p>
            The systems may combine solar generation, storage, efficient
            thermal backup, and energy management technology. The final design
            should follow the customer&apos;s load profile, operating hours,
            service requirement, site conditions, and fuel economics. I am not
            attached to a technology slogan. I am attached to dependable
            electrons, disciplined underwriting, and assets that solve a
            measured problem.
          </p>
          <p>
            Commercial and industrial demand is an underwriting discipline,
            not simply a description of buildings. An anchor load may come from
            a factory, cold room, clinic, logistics facility, or a fleet of
            productive electric assets. In each case, demand must be recurring,
            measurable, and concentrated enough to support the infrastructure.
            It must also be visible before capital is deployed.
          </p>
          <p>
            The commercial model is straightforward. A project company finances
            and operates the asset. The customer buys power or pays for
            availability under a contracted arrangement. The investment case
            comes from the spread between the customer&apos;s all-in cost of
            unreliable energy and the cost of delivering a more efficient
            service. That spread must be demonstrated at each site. It should
            never be assumed from a national average.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Productive mobility can become an anchor load
          </h2>
          <p>
            Across African cities, mobility is both an essential service and a
            source of income. Riders and small fleet operators already pay for
            fuel, maintenance, downtime, and vehicle access. Electrification
            can improve those economics, but the vehicle alone is not the
            infrastructure thesis. The investable system sits behind it. That
            system includes batteries, solar-enabled charging or swapping
            stations, controls, metering, maintenance, and software that makes
            energy use and payment performance visible.
          </p>
          <p>
            An active fleet can provide the initial demand needed to support a
            charging station. The same site may later serve nearby businesses
            or communities where the economics and regulation allow it. That
            expansion should follow measured demand. Future community use
            should not be required to make the first installation viable.
          </p>
          <p>
            The current operating test is deliberately small. Deployed electric
            bikes are actively tracked for utilisation, structured repayments,
            battery behaviour, and maintenance. There have been no payment
            defaults to date, although this is far too early to infer
            portfolio-level performance. The distributed station is the next
            underwriting question, not a proven result. The test is intended to
            establish its likely anchor load, collection behaviour, battery
            replacement needs, and the revenue supported by each unit of
            infrastructure capital before any claim of scale is made.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Why the timing has improved
          </h2>
          <p>
            Three conditions are converging. First, the cost and performance of
            distributed solar, storage, controls, and metering have improved.
            Second, customers understand the cost of unreliable power because
            they already carry it every month. Third, regulation is creating
            clearer routes for private generation.
          </p>
          <p>
            Nigeria&apos;s{" "}
            <a
              href="https://nerc.gov.ng/need-help/services/apply-for-mini-grid-permit-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              2026 mini-grid rules
            </a>{" "}
            allow isolated projects up to 5 MW and interconnected projects up
            to 10 MW per site. The framework adds clearer site protection,
            grid-arrival provisions, portfolio applications, cost-reflective
            tariff methods, and defined approval timelines. Embedded generation
            remains another route for projects that supply through distribution
            infrastructure.
          </p>
          <p>
            Public programmes are also validating the market rather than
            replacing it. The{" "}
            <a
              href="https://www.dares.rea.gov.ng/dares.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              $750 million DARES programme
            </a>{" "}
            targets electricity access for 17.5 million Nigerians through
            private sector-led distributed renewable energy. That is useful
            evidence of policy direction and market infrastructure. It is not a
            substitute for project-level commercial judgment.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            How projects will be underwritten
          </h2>
          <p>
            The quality of the customer matters as much as the quality of the
            equipment. A technically sound asset can still be a poor investment
            if the buyer cannot pay, the contract is weak, the site lacks
            permits, or imported equipment creates an unmanaged currency
            mismatch.
          </p>
          <p>
            The strategy begins with assets where demand is visible before
            capital is deployed. Priority users include operating businesses
            and economic clusters with steady loads, material power expenditure,
            and clear consequences when supply fails. Cold-chain facilities,
            light manufacturing, logistics, healthcare, hospitality, commercial
            property, digital infrastructure, and productive mobility fleets
            can fit this profile. Sector labels alone do not qualify a project.
          </p>

          <div className="my-10 p-7 md:p-8 bg-accent/5 ring-1 ring-border rounded-xl">
            <h3 className="text-[15px] font-semibold text-foreground mt-0 mb-5">
              The underwriting questions
            </h3>
            <ul className="m-0 space-y-3 pl-0 list-none text-[14px] text-muted">
              {[
                "Is the load measured, recurring, and large enough to support the asset?",
                "What does the customer pay today across grid supply, fuel, maintenance, and downtime?",
                "Can the customer honour a long-term contract through a full business cycle?",
                "Are tariff adjustment, inflation, and currency risks allocated clearly?",
                "Does the site have defensible rights, permits, interconnection terms, and insurance?",
                "Can equipment be maintained locally and replaced without extended downtime?",
                "Can the anchor load support the asset without relying on future demand?",
                "For battery-based systems, do utilisation, useful life, replacement reserves, and maintenance support the return?",
                "Is there a credible path to refinance, sell, or hold the asset for contracted cash yield?",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent" aria-hidden="true">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Where the return should come from
          </h2>
          <p>
            The return should come from contracted cash flow and operational
            improvement, not from hoping that scarce infrastructure becomes
            fashionable. A well-structured asset can reduce a customer&apos;s
            energy cost, improve uptime, and make expenditure more predictable.
            The project captures part of that value through a power purchase,
            energy service, lease, or availability agreement.
          </p>
          <p>
            When demand comes from a mobility or operating platform, the energy
            assets must remain identifiable and governed by a clear commercial
            agreement. The use or availability of those assets should repay the
            infrastructure capital. The investment should not depend on the
            operating company achieving a higher future valuation. This
            separation allows new categories of productive demand to qualify
            without weakening the fund&apos;s discipline.
          </p>
          <p>
            Portfolio value can also be created after installation. Better
            procurement, remote monitoring, preventive maintenance, load
            optimisation, common spare parts, insurance, and disciplined
            collections can improve performance across several sites. Once a
            portfolio has operating history and contracted revenue, it may also
            become suitable for lower-cost refinancing.
          </p>
          <p>
            This is why the strategy begins with commercial and industrial
            anchor loads. The{" "}
            <a
              href="https://www.iea.org/reports/financing-electricity-access-in-africa/executive-summary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-hover font-medium"
            >
              IEA notes
            </a>{" "}
            that businesses consume nearly three times more energy per
            mini-grid connection than households. Productive users provide the
            demand density that makes distributed systems more financeable while
            supporting wider economic activity.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            The risks are real
          </h2>
          <p>
            Nigeria&apos;s need for power does not make every power project
            investable. Currency depreciation can raise equipment and debt
            costs. Customers can weaken. Regulation can move across federal and
            state jurisdictions. Tariff assumptions can fail. Equipment can
            underperform. Gas or diesel supply can be interrupted. Community,
            land, security, and interconnection issues can delay an otherwise
            sound project.
          </p>
          <p>
            The response is not optimism. It is structure. Match currency where
            possible. Use conservative generation and collection assumptions.
            Require appropriate customer security. Stage capital against
            milestones. Diversify by customer and location. Insure what can be
            insured. Monitor every asset. Preserve step-in rights. Build
            contracts that explain what happens when the world does not follow
            the base case.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            What this fund is not
          </h2>
          <p>
            It is not a bet that one technology will solve Nigeria&apos;s power
            sector. It is not a collection of speculative sites waiting for
            customers. It is not dependent on a single subsidy programme. It is
            not an attempt to rebuild the national grid privately.
          </p>
          <p>
            It is a focused effort to finance useful assets close to proven
            demand, one bankable project at a time, and to compound the
            operating knowledge required to build a durable portfolio.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Why I am building it
          </h2>
          <p>
            My career has moved from code to products, from products to
            distribution, and from distribution to infrastructure. The pattern
            is consistent. The most valuable systems are the ones other people
            can build on.
          </p>
          <p>
            At Moniepoint, distribution turned software into financial access.
            At Prembly, trust infrastructure allows digital businesses to
            transact safely. Power is more fundamental. When electricity is
            reliable, a factory can add a shift, a clinic can protect its cold
            chain, a logistics operator can plan, and a technology company can
            keep its systems online. An asset can earn a return when the
            customer becomes more productive.
          </p>
          <p>
            That alignment is the conviction behind Powering Nigeria Infrastructure Fund 1. I
            want to build infrastructure whose economic usefulness is visible
            in the cash flow of the businesses it powers.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-medium text-foreground tracking-tight mt-14 mb-5">
            Formation and execution
          </h2>
          <p>
            The fund is currently sponsor-led by me. I bring a decade of work
            across software, financial-services distribution, identity,
            compliance, and company building in African markets. That operating
            background shapes how I assess demand, distribution, customer
            quality, and whether infrastructure creates measurable economic
            value.
          </p>
          <p>
            Formation includes assembling the investment and operating
            capability required for the mandate. No project should advance
            without accountable expertise across development, engineering,
            contracts, regulation, construction, asset management, and finance.
            The named team and governance structure will be published as those
            roles are formalised.
          </p>

          <div className="my-12 p-8 bg-foreground text-background rounded-xl">
            <h2 className="text-[19px] font-medium text-background mt-0 mb-4">
              For investors, founders, operators, and project partners
            </h2>
            <p className="text-[14px] leading-relaxed text-background/75 mb-4">
              Powering Nigeria Infrastructure Fund 1 is in formation. You do
              not need to run an energy company to participate. I want to hear
              from you if you are one of the following.
            </p>
            <ul className="m-0 mb-5 space-y-3 pl-0 list-none text-[14px] leading-relaxed text-background/75">
              <li className="flex gap-3">
                <span className="text-accent" aria-hidden="true">•</span>
                <span><strong className="text-background font-medium">An investor or high-net-worth individual</strong> seeking disciplined exposure to distributed energy and productive infrastructure.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent" aria-hidden="true">•</span>
                <span><strong className="text-background font-medium">A founder or operator</strong> with a viable site, productive fleet, anchor load, or technology platform with measurable energy demand.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent" aria-hidden="true">•</span>
                <span><strong className="text-background font-medium">A project or delivery partner</strong> who can contribute distribution, technology, equipment, financing, development, or execution.</span>
              </li>
            </ul>
            <p className="text-[14px] leading-relaxed text-background/75 mb-6">
              If one of these describes you, let us discuss where you fit in the
              first portfolio.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="mailto:tolu@adetuyi.com?subject=Powering%20Nigeria%20IF1%20project%20or%20investment"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors font-medium text-[14px]"
              >
                Discuss a project or investment <span>↗</span>
              </a>
              <a
                href="https://calendly.com/toluadetuyi/one-on-one"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-background/25 text-background px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors font-medium text-[14px]"
              >
                Book a free 15-minute call <span>↗</span>
              </a>
            </div>
          </div>

          <section className="mt-14 pt-8 border-t border-border">
            <h2 className="text-[17px] font-medium text-foreground mt-0 mb-3">
              Sources and scope
            </h2>
            <p className="text-[13px] leading-relaxed text-muted">
              Figures are drawn from the latest primary or institutional
              sources available on the update date. Project economics vary by
              customer, location, technology, financing, and contract.
            </p>
            <ol className="mt-6 space-y-4 pl-0 list-none">
              {sources.map((source, index) => (
                <li key={source.href} className="text-[13px] leading-relaxed">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground"
                  >
                    {index + 1}. {source.label}
                  </a>
                  <span className="block text-muted">{source.detail}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[12px] leading-relaxed text-muted">
              This thesis is provided for discussion and information. It is not
              an offer to sell or a solicitation to purchase any security.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
