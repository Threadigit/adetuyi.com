import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adetuyi.com"),
  title: {
    default: "Tolu Adetuyi | Technology, Business & Finance",
    template: "%s | Tolu Adetuyi",
  },
  description:
    "Tolu Adetuyi is the Chief Innovation Officer at Prembly, building trust infrastructure for identity verification, fraud prevention and compliance across Africa.",
  keywords: [
    "Tolu Adetuyi",
    "Adetuyi",
    "Prembly",
    "identity verification",
    "fraud prevention",
    "compliance",
    "fintech",
    "finance",
    "payments",
    "money",
    "financial technology",
    "digital payments",
    "Africa",
    "trust infrastructure",
    "Moniepoint",
    "Chronicles of Innovation",
    "ZeroToAct",
  ],
  authors: [{ name: "Tolu Adetuyi", url: "https://adetuyi.com" }],
  creator: "Tolu Adetuyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adetuyi.com",
    siteName: "Tolu Adetuyi",
    title: "Tolu Adetuyi | Technology, Business & Finance",
    description:
      "Chief Innovation Officer at Prembly. Building trust infrastructure for identity verification, fraud prevention and compliance across Africa.",
    images: [
      {
        url: "/icon.png",
        width: 64,
        height: 64,
        alt: "Tolu Adetuyi",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tolu Adetuyi | Technology, Business & Finance",
    description:
      "CIO at Prembly. Building trust infrastructure for identity verification, fraud prevention and compliance across Africa.",
    creator: "@adetuyitolu",
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
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
