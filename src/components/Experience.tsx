import React from "react";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    role: "Software Engineer",
    company: "SoftPoint",
    companyUrl: "https://example.com/softpoint",
    location: "Scottsdale, Arizona",
    duration: "August 2025 - Present",
    points: [
      "Implemented an automated CI testing workflow using GitHub Actions and Pest, with a Docker-based local test environment to maintain environment parity and enforce consistent, repeatable validation on every pull request.",
      "Configured Sentry logging, custom alerts, and environment monitoring to accelerate error triage and bug resolution efficiency.",
      "Developed end-to-end Playwright tests covering key features and integrated them into deployment pipelines to automate validation of critical functionality before release.",
      "Designed a scalable multi-tenant SendGrid email infrastructure with four configurable templates to support three enterprise financial applications processing 50K+ monthly emails, eliminating per-application development effort.",
    ],
    skills: [
      "Laravel",
      "React",
      "MySQL",
      "GitHub Actions",
      "Playwright",
      "Docker",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "RoundTechSquare",
    companyUrl: "https://example.com/roundtechsquare",
    location: "San Francisco, California",
    duration: "February 2025 - May 2025",
    points: [
      "Developed reusable React components with interactive charts styled using Tailwind CSS for admin reports.",
      "Created RESTful APIs using NestJS and TypeScript to retrieve and aggregate employee report data with advanced filtering, ensuring seamless frontend integration.",
      "Improved query performance in MongoDB through indexing strategies based on query analysis, leading to more efficient data retrieval.",
    ],
    skills: ["React", "TypeScript", "NestJS", "MongoDB"],
  },
  {
    role: "Software Engineer Intern",
    company: "Celebal Technologies",
    companyUrl: "https://example.com/celebal-technologies",
    location: "Katy, Texas",
    duration: "September 2024 - January 2025",
    points: [
      "Streamlined document processing using Azure Functions and Logic Apps to extract and store data, automate notifications, and save the accounting team two hours weekly.",
      "Migrated 30+ APIs to Azure API Management with rate limiting and load balancing, improving performance and reliability.",
      "Developed an employee training application using Node.js and Express, integrating Azure AD for secure authentication and Azure Key Vault for secret management.",
    ],
    skills: [
      "JavaScript",
      "Node.js",
      "Azure Functions",
      "Azure API Management",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "SoftPoint",
    companyUrl: "https://example.com/softpoint",
    location: "Scottsdale, Arizona",
    duration: "May 2024 - August 2024",
    points: [
      "Reduced manual effort by 35% by developing a Next.js web automation tool that streamlined kiosk app deployments to an FTP server and ensured version consistency across two global teams.",
      "Resolved performance bottlenecks in the settings dashboard by implementing Laravel queue-based asynchronous processing, resulting in 30% faster API response times.",
      "Enhanced system scalability by architecting and deploying Redis-based session management for faster user authentication, reducing average login response time to under 200 milliseconds.",
      "Led frontend development for two critical web applications using React and TypeScript to deliver high-performance, user-friendly interfaces.",
    ],
    skills: ["React", "TypeScript", "Next.js", "Laravel"],
  },
  {
    role: "Business Analyst",
    company: "Searce Inc.",
    companyUrl: "https://example.com/searce",
    location: "Pune, India",
    duration: "January 2022 - July 2023",
    points: [
      "Built a client feedback analytics system with Python and BigQuery integration, enabling real-time reporting and statistical analysis that drove 25% higher client engagement.",
      "Designed a centralized license management portal using React and Redux, reducing manual operations by 40% while increasing customer satisfaction with automated provisioning and analytics dashboards.",
      "Created Google Data Studio dashboards for cross-functional analysis, enhancing reporting accuracy and security for internal and external stakeholders.",
    ],
    skills: ["Python", "BigQuery", "React", "AppScript"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 pt-8 sm:px-10"
    >
      <p className="p-1 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
        Experience
      </p>
      <div className="mt-4 space-y-5">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="group relative isolate overflow-hidden border-border/80 bg-card/95 transition-colors duration-300 hover:border-primary/45"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/10" />
            </div>
            <CardContent className="relative z-10 grid gap-6 p-6 pt-6 md:grid-cols-12 md:gap-8">
              <div className="space-y-3 md:col-span-8">
                <p className="text-xl font-semibold text-foreground">
                  {exp.role},{" "}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex text-base font-semibold text-primary transition-colors duration-200 hover:text-primary/80 md:text-lg"
                  >
                    <span className="relative">
                      {exp.company}
                      <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-75 bg-primary/55 transition-transform duration-200 group-hover:scale-x-100" />
                    </span>
                  </a>
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <p className="text-muted-foreground">{exp.location}</p>
                  <p className="font-medium text-primary">{exp.duration}</p>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-accent-foreground/20 bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
