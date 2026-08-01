import type { Metadata } from "next";
import ProfileArchive from "@/components/ProfileArchive";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { pressEntries } from "@/lib/profile-content";

const title = "Press & Publications";
const description =
  "Press coverage, interviews, commentary, and research featuring Tolu Adetuyi across financial infrastructure, digital identity, compliance, and company building.";
const canonical = "https://www.adetuyi.com/press";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title: `${title} | Tolu Adetuyi`,
    description,
    url: canonical,
    type: "website",
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
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Press and Publications", path: "/press" },
        ]}
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
