import type { Metadata } from "next";
import Journey from "./Journey";

export const metadata: Metadata = {
  title: "Seph at 34",
  description: "A little something for Seph.",
  alternates: { canonical: "https://www.adetuyi.com/seph-at-34" },
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: "Seph at 34",
    description: "A little something for Seph. Open it.",
    url: "https://www.adetuyi.com/seph-at-34",
    images: [{ url: "/seph/card.png", width: 1080, height: 1350, alt: "A birthday card for Seph" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seph at 34",
    description: "A little something for Seph. Open it.",
    images: ["/seph/card.png"],
  },
};

export default function Page() {
  return <Journey />;
}
