import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adetuyi.com"),
  title: {
    default: "Tolu Adetuyi | Co-Founder, Prembly · Innovator & Venture Architect",
    template: "%s | Tolu Adetuyi",
  },
  description:
    "Tolu Adetuyi is the Co-Founder & Chief Innovation Officer at Prembly. I build interconnected systems that expand economic participation and infrastructure across emerging markets. Over the past decade, I have built at the intersection of identity, compliance, financial infrastructure, and capital formation across Africa.",
  keywords: [
    "Tolu Adetuyi",
    "Adetuyi",
    "Prembly",
    "Co-Founder Prembly",
    "Chief Innovation Officer",
    "identity verification",
    "fraud prevention",
    "compliance",
    "AML",
    "KYC",
    "trust infrastructure",
    "fintech Africa",
    "African fintech",
    "financial technology",
    "digital identity Africa",
    "Moniepoint",
    "African economic development",
    "venture architect",
    "innovator Africa",
    "emerging markets compliance",
    "Chronicles of Innovation",
    "ZeroToAct",
    "Morgan State University",
    "distribution infrastructure",
    "venture design",
    "deal structuring",
    "capital formation",
    "physical infrastructure",
    "energy deficit",
    "product",
    "product management",
    "product strategy",
    "artificial intelligence",
    "AI",
    "applied AI",
  ],
  authors: [{ name: "Tolu Adetuyi", url: "https://adetuyi.com" }],
  creator: "Tolu Adetuyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adetuyi.com",
    siteName: "Tolu Adetuyi",
    title: "Tolu Adetuyi | Co-Founder, Prembly · Innovator & Venture Architect",
    description:
      "Co-Founder & Chief Innovation Officer at Prembly. Building interconnected systems that expand economic participation and infrastructure across emerging markets.",
    images: [
      {
        url: "/tolu-new.png",
        width: 1200,
        height: 1200,
        alt: "Tolu Adetuyi, Co-Founder & CIO at Prembly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolu Adetuyi | Co-Founder, Prembly · Innovator & Venture Architect",
    description:
      "Co-Founder & CIO at Prembly. Building interconnected systems that expand economic participation and infrastructure across emerging markets.",
    creator: "@adetuyitolu",
    images: ["/tolu-new.png"],
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
      <body className={`${lora.variable} font-sans`}>{children}</body>
    </html>
  );
}
