import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CopyButton from "@/components/CopyButton";

const title = "Press Kit, Bios and Photos";
const description =
  "Bios, titles, topics and downloadable photos of Tolu Adetuyi, Co-Founder and Chief Innovation Officer at Prembly, for event organisers and journalists.";
const canonical = "https://www.adetuyi.com/press-kit";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title: `${title} | Tolu Adetuyi`,
    description,
    url: canonical,
    type: "website",
    images: [{ url: "/press-kit/tolu-adetuyi-headshot-studio.jpg", width: 1374, height: 1145, alt: "Tolu Adetuyi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Tolu Adetuyi`,
    description,
    images: ["/press-kit/tolu-adetuyi-headshot-studio.jpg"],
  },
};

const bios = [
  {
    label: "One line",
    text: "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly, which helps businesses verify customers, prevent fraud and meet compliance rules, working across Nigeria, Kenya and the United States.",
  },
  {
    label: "Short bio",
    text: "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly (YC W22), which builds identity verification, fraud prevention and compliance infrastructure used by more than a thousand businesses. Before Prembly, Tolu helped build the product at Moniepoint and led its growth. He writes and advises on identity, fraud, distribution and capital in Africa, and invests in founders across the continent.",
  },
  {
    label: "Full bio",
    text: "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly, which helps businesses verify customers, prevent fraud and meet compliance rules. Prembly works across Nigeria, Kenya and the United States, was part of Y Combinator's Winter 2022 batch, and is relied on by more than a thousand local and global businesses.\n\nBefore Prembly, Tolu helped build the product at Moniepoint and led growth to build the distribution network that puts banking and payment terminals in the hands of merchants across Nigeria. He began as a software engineer at Edves, then joined the early team at Accounteer, first as a software engineer and later in product management.\n\nTolu holds an MBA in Finance from Morgan State University and a BSc in Computer Science from Adekunle Ajasin University. He is a Forbes Technology Council member (2024), an On Deck Founder Fellow, and a mentor in Nigeria's Student Venture Capital Grant. He writes at adetuyi.com, curates Chronicles of Innovation and ZeroToAct, and invests in and supports other founders through BuildX Capital, which is also forming an energy fund.",
  },
];

const facts = [
  { label: "Name", value: "Tolu Adetuyi" },
  { label: "Title", value: "Co-Founder and Chief Innovation Officer, Prembly" },
  { label: "Also described as", value: "Technology entrepreneur and investor" },
  { label: "Based", value: "United States, working across the United States, Nigeria and Kenya" },
  { label: "Website", value: "adetuyi.com" },
];

const topics = [
  "Trust and identity infrastructure for African markets",
  "Fraud, compliance and regulation in African fintech",
  "Distribution and market access",
  "Capital formation and energy infrastructure",
  "Building teams and leading as a founder",
  "Economic participation and nation building",
];

const photos = [
  {
    src: "/press-kit/tolu-adetuyi-headshot-suit.jpg",
    label: "Portrait, jacket",
    width: 1833,
    height: 2000,
  },
  {
    src: "/press-kit/tolu-adetuyi-headshot-casual.jpg",
    label: "Portrait, casual",
    width: 1004,
    height: 1272,
  },
  {
    src: "/press-kit/tolu-adetuyi-headshot-studio.jpg",
    label: "Portrait, studio",
    width: 1374,
    height: 1145,
  },
];

const sectionHeading =
  "text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-5";

export default function PressKitPage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Press Kit", path: "/press-kit" },
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
              Press kit
            </span>
          </div>
          <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-5 text-foreground">
            For event organisers and journalists
          </h1>
          <p className="text-[16px] leading-[1.8] text-muted">
            Bios, titles, topics and photos, ready to copy. Please credit
            Tolu Adetuyi when you use the photos. For anything not covered
            here, write to{" "}
            <a href="mailto:tolu@adetuyi.com?subject=Speaking%20or%20press%20enquiry" className="text-foreground link-hover font-medium">
              tolu@adetuyi.com
            </a>
            .
          </p>
        </header>

        <div className="space-y-14">
          <section>
            <h2 className={sectionHeading}>Name and titles</h2>
            <dl>
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6 py-3.5 ${index > 0 ? "border-t border-accent/20" : ""}`}
                >
                  <dt className="text-[13px] uppercase tracking-widest text-muted">{fact.label}</dt>
                  <dd className="text-[15px] text-foreground sm:text-right sm:max-w-[400px]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className={sectionHeading}>Bios</h2>
            <div className="space-y-8">
              {bios.map((bio) => (
                <div key={bio.label}>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-[16px] font-medium text-foreground">{bio.label}</h3>
                    <CopyButton text={bio.text} />
                  </div>
                  <div className="space-y-3 text-[15px] leading-[1.8] text-muted">
                    {bio.text.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={sectionHeading}>Topics</h2>
            <ul className="space-y-2.5 text-[15px] leading-relaxed text-muted list-disc pl-5 marker:text-accent">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] text-muted">
              Past talks are listed under{" "}
              <Link href="/speaking" className="text-foreground link-hover font-medium">
                speaking
              </Link>
              , and coverage under{" "}
              <Link href="/press" className="text-foreground link-hover font-medium">
                press
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {photos.map((photo) => (
                <figure key={photo.src}>
                  <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border bg-accent/5">
                    <Image
                      src={photo.src}
                      alt={`Tolu Adetuyi, ${photo.label.toLowerCase()}`}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 640px) 100vw, 210px"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between gap-3 text-[13px] text-muted">
                    <span>{photo.label}</span>
                    <a
                      href={photo.src}
                      download
                      className="text-accent link-hover font-medium whitespace-nowrap"
                    >
                      Download
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-2">
            Booking and press
          </p>
          <p className="text-[14px] text-muted mb-5 leading-relaxed">
            Include the event, date, audience and format, and I will reply with availability.
          </p>
          <a
            href="mailto:tolu@adetuyi.com?subject=Speaking%20or%20press%20enquiry"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent/90 transition-all font-medium text-[13px] group"
          >
            Send an enquiry <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </article>
    </main>
  );
}
