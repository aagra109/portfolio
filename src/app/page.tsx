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
      <div className="relative mt-8 overflow-hidden pt-10">
        <svg
          aria-hidden="true"
          viewBox="0 -10 1200 55"
          preserveAspectRatio="none"
          fill="currentColor"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 w-full text-[#141414]"
        >
          <path d="M 0 -10 L 0 0 C 10 5 20 -5 30 10 C 40 25 50 -15 60 5 C 70 25 80 0 90 15 C 100 30 110 -10 120 10 C 130 30 140 0 150 20 C 160 40 170 -10 180 5 C 190 20 200 -5 210 10 C 220 25 230 0 240 15 C 250 30 260 0 270 10 C 280 20 290 5 300 25 C 310 45 320 0 330 15 C 340 30 350 5 360 10 C 370 15 380 -5 390 5 C 400 15 410 0 420 10 C 430 20 440 0 450 15 C 460 30 470 0 480 10 C 490 20 500 5 510 15 C 520 25 530 0 540 10 C 550 20 560 5 570 15 C 580 25 590 0 600 15 C 610 30 620 0 630 10 C 640 20 650 5 660 20 C 670 35 680 0 690 15 C 700 30 710 0 720 10 C 730 20 740 0 750 15 C 760 30 770 -5 780 10 C 790 25 800 0 810 15 C 820 30 830 0 840 10 C 850 20 860 -5 870 10 C 880 25 890 0 900 10 C 910 20 920 0 930 15 C 940 30 950 -10 960 10 C 970 30 980 0 990 20 C 1000 40 1010 0 1020 15 C 1030 30 1040 0 1050 10 C 1060 20 1070 0 1080 15 C 1090 30 1100 -5 1110 10 C 1120 25 1130 0 1140 10 C 1150 20 1160 0 1170 15 C 1180 30 1190 -10 1200 0 L 1200 -10 Z" />
        </svg>
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
