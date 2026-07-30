import type { Metadata } from "next";
import ProfileArchive from "@/components/ProfileArchive";
import { pressEntries } from "@/lib/profile-content";

const title = "Press & Publications";
const description =
  "Press coverage, interviews, commentary, and research featuring Tolu Adetuyi across financial infrastructure, digital identity, compliance, and company building.";
const canonical = "https://adetuyi.com/press";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Tolu Adetuyi press",
    "Tolu Adetuyi interviews",
    "Prembly",
    "financial infrastructure Africa",
    "digital identity",
    "financial crime",
  ],
  alternates: { canonical },
  openGraph: {
    title: `${title} | Tolu Adetuyi`,
    description,
    url: canonical,
    type: "website",
    images: [
      {
        url: "/tolu-new.png",
        width: 1200,
        height: 1200,
        alt: "Tolu Adetuyi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Tolu Adetuyi`,
    description,
    images: ["/tolu-new.png"],
  },
};

export default function PressPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${title} | Tolu Adetuyi`,
    description,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pressEntries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.title,
        url: entry.href,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ProfileArchive
        eyebrow="Press"
        title={title}
        description="Selected reporting, interviews, commentary, and research spanning trust infrastructure, financial crime, digital identity, and company building."
        entries={pressEntries}
      />
    </>
  );
}
