import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import SiteAnalytics from "@/components/SiteAnalytics";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adetuyi.com"),
  title: {
    default: "Tolu Adetuyi | Co-Founder of Prembly and Investor in Africa",
    template: "%s | Tolu Adetuyi",
  },
  description:
    "Tolu Adetuyi is Co-Founder of Prembly, which helps businesses verify customers and prevent fraud, and an investor backing founders across Africa.",
  authors: [{ name: "Tolu Adetuyi", url: "https://www.adetuyi.com" }],
  creator: "Tolu Adetuyi",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.adetuyi.com",
    siteName: "Tolu Adetuyi",
    title: "Tolu Adetuyi | Co-Founder of Prembly and Investor in Africa",
    description:
      "Tolu Adetuyi is Co-Founder of Prembly, which helps businesses verify customers and prevent fraud, and an investor backing founders across Africa.",
    images: [
      {
        url: "/tolu-og.jpg",
        width: 1374,
        height: 1145,
        alt: "Tolu Adetuyi, Co-Founder & CIO at Prembly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolu Adetuyi | Co-Founder of Prembly and Investor in Africa",
    description:
      "Tolu Adetuyi is Co-Founder of Prembly, which helps businesses verify customers and prevent fraud, and an investor backing founders across Africa.",
    creator: "@adetuyitolu",
    images: ["/tolu-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.adetuyi.com",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Tolu Adetuyi, Writing" }],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} font-sans`} suppressHydrationWarning>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
