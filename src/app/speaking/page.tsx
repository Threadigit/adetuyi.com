import type { Metadata } from "next";
import ProfileArchive from "@/components/ProfileArchive";
import { speakingEntries } from "@/lib/profile-content";

const title = "Speaking & Panels";
const description =
  "Talks, panels, and presentations by Tolu Adetuyi on financial infrastructure, digital identity, compliance, venture building, and African markets.";
const canonical = "https://adetuyi.com/speaking";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Tolu Adetuyi speaker",
    "African fintech speaker",
    "financial infrastructure",
    "digital identity",
    "venture building Africa",
    "compliance speaker",
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

export default function SpeakingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${title} | Tolu Adetuyi`,
    description,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: speakingEntries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.title,
        url: entry.href.startsWith("/")
          ? `https://adetuyi.com${entry.href}`
          : entry.href,
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
        eyebrow="Speaking"
        title={title}
        description="Selected talks and presentations on trust infrastructure, financial systems, venture building, compliance, and the forces shaping African markets."
        entries={speakingEntries}
      />
    </>
  );
}
