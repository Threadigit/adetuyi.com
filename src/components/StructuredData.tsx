import React from 'react';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://adetuyi.com/#person",
    "name": "Tolu Adetuyi",
    "givenName": "Tolu",
    "familyName": "Adetuyi",
    "jobTitle": "Co-Founder & Chief Innovation Officer",
    "description": "Co-Founder and Chief Innovation Officer at Prembly, a trust infrastructure company. Former growth leader at Moniepoint. Tolu builds financial, digital identity, compliance, distribution, and energy infrastructure across emerging markets.",
    "image": "https://adetuyi.com/tolu-new.png",
    "url": "https://adetuyi.com/",
    "mainEntityOfPage": {
      "@id": "https://adetuyi.com/#profile-page"
    },
    "worksFor": {
      "@type": "Organization",
      "@id": "https://prembly.com/#organization",
      "name": "Prembly",
      "url": "https://prembly.com",
      "description": "Trust infrastructure company helping businesses combat fraud and stay compliant across emerging markets."
    },
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Co-Founder and Chief Innovation Officer at Prembly",
        "description": "Builds digital identity, compliance, and fraud prevention infrastructure for businesses in emerging markets."
      },
      {
        "@type": "Occupation",
        "name": "Venture Architect",
        "description": "Builds and advises financial, distribution, and physical infrastructure ventures across emerging markets."
      }
    ],
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
        "headline": "Is Africa's Risk Premium Really a Legibility Problem?",
        "url": "https://kenyanwallstreet.com/africa-risk-premium-op-ed",
        "publisher": { "@type": "Organization", "name": "The Kenyan Wallstreet" }
      },
      {
        "@type": "Article",
        "headline": "FATF Grey List Exit, Payment Vision 2028 & Nigeria's National Payment Stack",
        "url": "https://techeconomy.ng/fatf-grey-list-exit-payment-vision-2028-iso-20022-national-payment-stack-nigeria/",
        "publisher": { "@type": "Organization", "name": "TechEconomy" }
      },
      {
        "@type": "Article",
        "headline": "CBN AML Directive Triggers Tech Reset as Banks, Fintechs Battle Data & Talent Gaps",
        "url": "https://businessday.ng/technology/article/cbn-aml-directive-triggers-tech-reset-as-banks-fintechs-battle-data-talent-gaps/",
        "publisher": { "@type": "Organization", "name": "BusinessDay" }
      },
      {
        "@type": "Article",
        "headline": "Leadership, Innovation, and Industry Impact: The Work of Tolu Adetuyi at Prembly",
        "url": "https://guardian.ng/news/leadership-innovation-and-industry-impact-the-work-of-tolu-adetuyi-at-prembly/",
        "publisher": { "@type": "Organization", "name": "The Guardian Nigeria" }
      },
      {
        "@type": "Article",
        "headline": "Nigeria's Prembly Launches Shared Open-Source Database",
        "url": "https://techcabal.com/2026/03/10/nigerias-prembly-launches-shared-open-source-database/",
        "publisher": { "@type": "Organization", "name": "TechCabal" }
      },
      {
        "@type": "Article",
        "headline": "On the Road to User-Centricity: Digital Identity in the Electronic Wallet Era",
        "url": "https://secureidentityalliance.org/reports/on-the-road-to-user-centricity-digital-identity-in-the-electronic-wallet-era/",
        "publisher": { "@type": "Organization", "name": "Secure Identity Alliance" }
      },
      {
        "@type": "Article",
        "headline": "AI Is Strongest Ally in War Against Financial Fraud — Tolu Adetuyi",
        "url": "https://vanguardngr.com/ai-is-strongest-ally-in-war-against-financial-fraud-tolu-adetuyi/",
        "publisher": { "@type": "Organization", "name": "Vanguard" }
      },
      {
        "@type": "Article",
        "headline": "Zero to Scale: Tolu Adetuyi, Head of Growth at Moniepoint",
        "url": "https://thecondia.com/zero-to-scale-tolu-adetuyi-head-of-growth-at-moniepoint/",
        "publisher": { "@type": "Organization", "name": "The Condia" }
      },
      {
        "@type": "CreativeWork",
        "name": "The US Economy Dominating the World Through Service",
        "description": "A ZeroToAct video by Tolu Adetuyi on how systemic utility, financial infrastructure, and global service sustain American economic influence.",
        "url": "https://youtu.be/N4GSZjIPma4",
        "author": {
          "@id": "https://adetuyi.com/#person"
        }
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
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Master of Business Administration, concentration in Finance",
        "recognizedBy": {
          "@type": "CollegeOrUniversity",
          "name": "Morgan State University",
          "url": "https://www.morgan.edu"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Bachelor of Science in Computer Science",
        "recognizedBy": {
          "@type": "CollegeOrUniversity",
          "name": "Adekunle Ajasin University"
        }
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
    "@id": "https://adetuyi.com/#website",
    "name": "Tolu Adetuyi",
    "url": "https://adetuyi.com/",
    "description": "The official website of Tolu Adetuyi, Co-Founder and Chief Innovation Officer at Prembly, former growth leader at Moniepoint, and venture architect building infrastructure across emerging markets.",
    "publisher": {
      "@id": "https://adetuyi.com/#person"
    }
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://adetuyi.com/#profile-page",
    "url": "https://adetuyi.com/",
    "name": "Tolu Adetuyi | Co-Founder of Prembly and Venture Architect",
    "description": "The official profile of Tolu Adetuyi, documenting his work at Prembly and Moniepoint, infrastructure ventures, writing, speaking, education, and professional recognition.",
    "dateModified": "2026-07-31",
    "isPartOf": {
      "@id": "https://adetuyi.com/#website"
    },
    "mainEntity": {
      "@id": "https://adetuyi.com/#person"
    }
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Writing & Essays",
        "description": "Essays on execution, trust infrastructure, venture building, and emerging markets.",
        "url": "https://adetuyi.com/writing"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "The $39 Dispute I Almost Didn't File",
        "description": "On overthinking, inertia, and the cost of waiting for perfect conditions before you act.",
        "url": "https://adetuyi.com/writing/the-39-dispute"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "The Architecture of Leverage",
        "description": "How serious builders redesign how they work — from direct effort to systems that compound.",
        "url": "https://adetuyi.com/writing/the-architecture-of-leverage"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Play the Level You're On",
        "description": "Why the gap between where you are and where you want to be is the actual work.",
        "url": "https://adetuyi.com/writing/play-the-level-youre-on"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "The 5 Mindsets of Real Progress",
        "description": "Moving from intellectual cynicism to raw execution.",
        "url": "https://adetuyi.com/writing/the-spectrum-of-agency"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "The Framework of Agency",
        "description": "Tactical frameworks to bridge the gap between optimism and operations.",
        "url": "https://adetuyi.com/writing/the-framework-of-agency"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": "Infrastructure for Economic Participation",
        "description": "Tolu Adetuyi's thesis on the trust, financial, distribution, productive, and energy infrastructure that expands economic participation.",
        "url": "https://adetuyi.com/thesis"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 8,
        "name": "Work with Tolu",
        "description": "Business model clarity, fundraising narrative, and distribution strategy for founders, operators, and investors in Africa.",
        "url": "https://adetuyi.com/work"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(navigationSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
