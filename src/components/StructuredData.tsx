import React from 'react';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tolu Adetuyi",
    "givenName": "Tolu",
    "familyName": "Adetuyi",
    "jobTitle": "Co-Founder & Chief Innovation Officer",
    "description": "Co-Founder & Chief Innovation Officer at Prembly, building trust infrastructure that helps businesses combat fraud and stay compliant across emerging markets. Previously led growth at Moniepoint. Active at the intersection of technology, capital, and African economic development.",
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
      "https://zerotoact.com"
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
    "knowsAbout": [
      "Digital Identity",
      "Identity Verification",
      "Fraud Prevention",
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
      "Software Engineering",
      "Business Administration",
      "Finance",
      "Fintech",
      "Financial Technology"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tolu Adetuyi",
    "url": "https://adetuyi.com",
    "description": "Personal site of Tolu Adetuyi, Co-Founder & Chief Innovation Officer at Prembly, building trust infrastructure for identity, fraud prevention and compliance across emerging markets."
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
    </>
  );
}
