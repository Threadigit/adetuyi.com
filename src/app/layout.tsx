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
    default: "Tolu Adetuyi | Co-Founder, Prembly · Innovator & Venture Architect",
    template: "%s | Tolu Adetuyi",
  },
  description:
    "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly, a trust infrastructure company. He previously led growth at Moniepoint and builds financial, identity, compliance, distribution, and energy infrastructure across emerging markets.",
  authors: [{ name: "Tolu Adetuyi", url: "https://adetuyi.com" }],
  creator: "Tolu Adetuyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adetuyi.com",
    siteName: "Tolu Adetuyi",
    title: "Tolu Adetuyi | Co-Founder, Prembly · Innovator & Venture Architect",
    description:
      "Tolu Adetuyi is Co-Founder and Chief Innovation Officer at Prembly. He previously led growth at Moniepoint and builds infrastructure across emerging markets.",
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
      "Co-Founder and Chief Innovation Officer at Prembly. Former growth leader at Moniepoint, building infrastructure across emerging markets.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} font-sans`} suppressHydrationWarning>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
