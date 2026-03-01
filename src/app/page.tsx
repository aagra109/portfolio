import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";
import { seoConfig } from "@/lib/seo";
import React from "react";

const Page = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seoConfig.authorName,
    url: seoConfig.siteUrl,
    email: `mailto:${seoConfig.email}`,
    sameAs: [seoConfig.linkedinUrl, seoConfig.githubUrl],
    jobTitle: seoConfig.jobTitle,
    description: seoConfig.description,
    worksFor: {
      "@type": "Organization",
      name: "SoftPoint",
      url: "https://softpoint.io/",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Arizona State University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Dhirubhai Ambani Institute of Information and Communication Technology",
      },
    ],
    knowsAbout: seoConfig.knowledgeAreas,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.description,
  };

  const structuredData = JSON.stringify([personSchema, websiteSchema]).replace(
    /</g,
    "\\u003c",
  );

  return (
    <main className="relative overflow-x-clip pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <Introduction />
      <Skills />
      <Experience />
    </main>
  );
};

export default Page;
