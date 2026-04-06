import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import SectionDivider from "@/components/SectionDivider";
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
    <main className="relative overflow-x-clip pb-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <Introduction />
      <Skills />
      <div className="relative mt-8 overflow-hidden pt-6">
        <SectionDivider className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6 w-full" />
        <div
          aria-hidden="true"
          className="paper-grain pointer-events-none absolute inset-x-0 top-0 bottom-0"
        />
        <Experience />
      </div>
    </main>
  );
};

export default Page;
