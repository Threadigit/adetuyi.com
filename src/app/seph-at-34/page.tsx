import type { Metadata } from "next";
import Journey from "./Journey";

export const metadata: Metadata = {
  title: "Happy Birthday, Seph",
  description: "Something is waiting for you. Open it and scroll all the way down.",
  alternates: { canonical: "https://www.adetuyi.com/seph-at-34" },
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: "Happy Birthday, Seph 🌻",
    description: "Something is waiting for you. Open it and scroll all the way down.",
    url: "https://www.adetuyi.com/seph-at-34",
    images: [{ url: "/seph/og.png", width: 1200, height: 630, alt: "Happy Birthday, Seph. Something is waiting for you. Tap to open." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday, Seph 🌻",
    description: "Something is waiting for you. Open it and scroll all the way down.",
    images: ["/seph/og.png"],
  },
};

export default function Page() {
  return <Journey />;
}
