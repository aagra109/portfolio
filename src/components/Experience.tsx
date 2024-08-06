import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

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
  {
    title:
      "Software Development Intern, Jarvis Technology & Strategy Consulting",
    location: "Mumbai, India",
    duration: "February 2019 - May 2019",
    points: [
      "Collaborated as a key member of the engineering team to design a multilingual, cross-platform workforce management system for volunteer acquisition, verification, engagement, and tracking.",
      "Crafted tools instrumental in engaging over 5 million party workers, facilitating the transmission of over 230 million messages, and achieving a Net Promoter Score (NPS) of 80.",
      "Architected and implemented the complete onboarding and verification process for volunteers leveraging Ruby on Rails and AngularJs.",
    ],
    skills: ["Angular", "Ruby on Rails"],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <p className="text-4xl font-medium text-primary p-1">Experience</p>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="text-primary p-6 m-4 w-full max-w-5xl rounded-lg bg-primary-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-1 md:col-span-8">
              <p className="text-xl font-bold">{exp.title}</p>
              <p className="text-opacity-75 text-secondary">{exp.location}</p>
              <p className="text-primary font-regular mt-2">{exp.duration}</p>
              <ul className="list-disc ml-4 mt-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:block md:col-span-4 md:order-1">
              <div className="flex flex-wrap gap-2 mt-4 font-light">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-primary-foreground px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
