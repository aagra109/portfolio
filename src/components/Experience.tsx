import React from "react";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    title: "Software Developer Intern, Softpoint",
    location: "Scottsdale, Arizona",
    duration: "May 2024 - August 2024",
    points: [
      "Developed a media caching solution for kiosk idle screens, reducing load times by 70% and improving user experience during idle states.",
      "Engineered a web automation tool using Next.js to streamline KioskPoint app deployments, reducing manual processing time and ensuring version consistency across global teams.",
      "Optimized user authentication by integrating Redis based session management in Next.js, improving performance and scalability.",
      "Implemented a robust, asynchronous job using Laravel’s queue system, significantly improving security and user experience by reducing API response times by 50%.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "PHP",
      "Laravel",
      "Android",
      "Java",
      "Redis",
      "MySQL",
    ],
  },
  {
    title: "Business Analyst, Searce Inc.",
    location: "Pune, India",
    duration: "January 2022 - July 2023",
    points: [
      "Engineered a web-based feedback platform, automated via Python and smtplib, and integrated with BigQuery for enhanced statistical analysis, achieving 50% faster processing and 25% uplift in client engagement.",
      "Revamped Searce’s license management with a React.js and Redux-based customer portal, automating processes and cutting administrative tasks by 40%, boosting client satisfaction.",
      "Designed and implemented an automation framework using Selenium with Java, strategizing tests for 5+ user stories in Searce’s customer portal.",
    ],
    skills: [
      "Python",
      "SQL",
      "BigQuery",
      "React",
      "AppScript",
      "Looker Studio",
      "Excel",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 pt-8 sm:px-10"
    >
      <p className="p-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
        Experience
      </p>
      <div className="mt-4 space-y-5">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="overflow-hidden border-border/80 bg-card/95 transition-colors duration-300 hover:border-primary/45"
          >
            <CardContent className="grid gap-6 p-6 pt-6 md:grid-cols-12 md:gap-8">
              <div className="space-y-3 md:col-span-8">
                <p className="text-xl font-semibold text-foreground">
                  {exp.title}
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
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Stack
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
