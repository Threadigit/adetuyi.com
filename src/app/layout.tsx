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
  metadataBase: new URL("https://adetuyi.com"),
  title: {
    default: "Tolu Adetuyi | Prembly Co-Founder & Venture Architect",
    template: "%s | Tolu Adetuyi",
  },
  description:
    "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly and an infrastructure builder widening economic participation across Africa.",
  authors: [{ name: "Tolu Adetuyi", url: "https://adetuyi.com" }],
  creator: "Tolu Adetuyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adetuyi.com",
    siteName: "Tolu Adetuyi",
    title: "Tolu Adetuyi | Prembly Co-Founder & Venture Architect",
    description:
      "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly and an infrastructure builder widening economic participation across Africa.",
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
    title: "Tolu Adetuyi | Prembly Co-Founder & Venture Architect",
    description:
      "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly and an infrastructure builder widening economic participation across Africa.",
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
    canonical: "https://adetuyi.com",
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
