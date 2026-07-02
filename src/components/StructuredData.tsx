import React from 'react';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tolu Adetuyi",
    "givenName": "Tolu",
    "familyName": "Adetuyi",
    "jobTitle": "Co-Founder & Chief Innovation Officer",
    "description": "Co-Founder & Chief Innovation Officer at Prembly. Building interconnected systems that expand economic participation and infrastructure across emerging markets. Active at the intersection of technology, capital, and emerging market development.",
    "image": "https://adetuyi.com/tolu-new.png",
    "url": "https://adetuyi.com",
    "worksFor": {
      "@type": "Organization",
      "name": "Prembly",
      "url": "https://prembly.com",
      "description": "Trust infrastructure company helping businesses combat fraud and stay compliant across emerging markets."
    },
    "sameAs": [
      "https://www.linkedin.com/in/adetuyitolu/",
      "https://twitter.com/adetuyitolu",
      "https://instagram.com/adetuyitolu",
      "https://www.researchgate.net/profile/Tolu-Adetuyi",
      "https://zerotoact.com",
      "https://www.crunchbase.com/person/tolulope-adetuyi",
      "https://officehours.com/tolu-adetuyi",
      "https://www.chroniclesofinnovation.com/",
      "https://scholar.google.com/citations?hl=en&user=IjIW4v0AAAAJ",
      "https://www.wikidata.org/wiki/Q140088103"
    ],
    "subjectOf": [
      {
        "@type": "Article",
        "headline": "FATF Grey List Exit, Payment Vision 2028 & Nigeria's National Payment Stack",
        "url": "https://techeconomy.ng/fatf-grey-list-exit-payment-vision-2028-iso-20022-national-payment-stack-nigeria/",
        "author": { "@type": "Organization", "name": "TechEconomy" }
      },
      {
        "@type": "Article",
        "headline": "CBN AML Directive Triggers Tech Reset as Banks, Fintechs Battle Data & Talent Gaps",
        "url": "https://businessday.ng/technology/article/cbn-aml-directive-triggers-tech-reset-as-banks-fintechs-battle-data-talent-gaps/",
        "author": { "@type": "Organization", "name": "BusinessDay" }
      },
      {
        "@type": "Article",
        "headline": "Leadership, Innovation, and Industry Impact: The Work of Tolu Adetuyi at Prembly",
        "url": "https://guardian.ng/news/leadership-innovation-and-industry-impact-the-work-of-tolu-adetuyi-at-prembly/",
        "author": { "@type": "Organization", "name": "The Guardian Nigeria" }
      },
      {
        "@type": "Article",
        "headline": "Nigeria's Prembly Launches Shared Open-Source Database",
        "url": "https://techcabal.com/2026/03/10/nigerias-prembly-launches-shared-open-source-database/",
        "author": { "@type": "Organization", "name": "TechCabal" }
      },
      {
        "@type": "Article",
        "headline": "On the Road to User-Centricity: Digital Identity in the Electronic Wallet Era",
        "url": "https://secureidentityalliance.org/reports/on-the-road-to-user-centricity-digital-identity-in-the-electronic-wallet-era/",
        "author": { "@type": "Organization", "name": "Secure Identity Alliance" }
      },
      {
        "@type": "Article",
        "headline": "AI Is Strongest Ally in War Against Financial Fraud — Tolu Adetuyi",
        "url": "https://vanguardngr.com/ai-is-strongest-ally-in-war-against-financial-fraud-tolu-adetuyi/",
        "author": { "@type": "Organization", "name": "Vanguard" }
      },
      {
        "@type": "Article",
        "headline": "Zero to Scale: Tolu Adetuyi, Head of Growth at Moniepoint",
        "url": "https://thecondia.com/zero-to-scale-tolu-adetuyi-head-of-growth-at-moniepoint/",
        "author": { "@type": "Organization", "name": "The Condia" }
      },
      {
        "@type": "VideoObject",
        "name": "Welcome to ZeroToAct",
        "description": "Introduction to ZeroToAct — actionable global intelligence by Tolu Adetuyi.",
        "url": "https://youtube.com/shorts/Z1PppJZj8JQ?si=57vjYNt4v5Zs7Nzf",
        "embedUrl": "https://www.youtube.com/embed/Z1PppJZj8JQ",
        "thumbnailUrl": [
          "https://img.youtube.com/vi/Z1PppJZj8JQ/maxresdefault.jpg",
          "https://img.youtube.com/vi/Z1PppJZj8JQ/hqdefault.jpg"
        ],
        "uploadDate": "2026-06-01T08:00:00+01:00"
      }
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Morgan State University",
        "url": "https://www.morgan.edu",
        "location": "United States"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Adekunle Ajasin University",
        "location": "Nigeria"
      }
    ],
    "award": [
      "Forbes Technology Council Member, 2024",
      "Beta Gamma Sigma International Business Honor Society, Lifetime Member",
      "GSBM Scholar, Morgan State University"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Forbes Technology Council",
        "url": "https://councils.forbes.com/forbestechcouncil",
        "description": "Invitation-only community for senior-level technology executives. Member since 2024."
      },
      {
        "@type": "Organization",
        "name": "Beta Gamma Sigma",
        "url": "https://www.betagammasigma.org",
        "description": "International business honor society recognising academic excellence in AACSB-accredited schools. Lifetime member."
      }
    ],
    "knowsAbout": [
      "Digital Identity",
      "Identity Verification",
      "Fraud Prevention",
      "Artificial Intelligence",
      "Applied AI",
      "Anti-Money Laundering (AML)",
      "Know Your Customer (KYC)",
      "Compliance Infrastructure",
      "Trust Infrastructure",
      "African Financial Systems",
      "Emerging Markets",
      "Distribution Infrastructure",
      "Venture Building",
      "African Economic Development",
      "Product Strategy",
      "Product Management",
      "Product Design",
      "Software Engineering",
      "Business Administration",
      "Finance",
      "Fintech",
      "Financial Technology",
      "Venture Design",
      "Deal Structuring",
      "Capital Formation",
      "Physical Infrastructure",
      "Energy Infrastructure"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tolu Adetuyi",
    "url": "https://adetuyi.com",
    "description": "Personal site of Tolu Adetuyi, Co-Founder & Chief Innovation Officer at Prembly. Building interconnected systems that expand economic participation and infrastructure across emerging markets."
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Writing & Essays",
        "description": "Essays on trust infrastructure, venture building, and emerging markets.",
        "url": "https://adetuyi.com/writing"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "The 5 Mindsets of Real Progress",
        "description": "Moving from intellectual cynicism to raw execution.",
        "url": "https://adetuyi.com/writing/the-spectrum-of-agency"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "The Framework of Agency",
        "description": "Tactical frameworks to bridge the gap between optimism and operations.",
        "url": "https://adetuyi.com/writing/the-framework-of-agency"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "When a Payment Becomes Evidence",
        "description": "How the National Payment Stack changes fraud and compliance.",
        "url": "https://adetuyi.com/writing/when-a-payment-becomes-evidence"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Every System Fails the Same Way",
        "description": "Balancing actuators and mitigators to build resilient systems.",
        "url": "https://adetuyi.com/writing/actuators-and-mitigators"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "The Infrastructure Thesis",
        "description": "My core thesis on infrastructure and the future of African economic development.",
        "url": "https://adetuyi.com/thesis"
      }
    ]
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Lagos Tech Fest 2023: Closing the Compliance Gap for African Startups",
    "description": "Tolu Adetuyi speaking at Lagos Tech Fest 2023 on identity verification, compliance, and reducing fraud for African startups.",
    "thumbnailUrl": [
      "https://img.youtube.com/vi/7JIjYZJO5jQ/maxresdefault.jpg",
      "https://img.youtube.com/vi/7JIjYZJO5jQ/hqdefault.jpg"
    ],
    "uploadDate": "2023-02-15T08:00:00+08:00",
    "embedUrl": "https://www.youtube.com/embed/7JIjYZJO5jQ"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
    </>
  );
}
