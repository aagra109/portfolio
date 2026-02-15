import React from "react";
import { CloudCog, Code2, Database, Layers3 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "Python", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Full-Stack Web",
    icon: Layers3,
    skills: ["React", "Next.js", "Node.js", "Express.js", "Laravel"],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    skills: ["Azure", "Google Cloud", "GitHub Actions", "Docker", "Linux"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-4 pt-8 sm:px-10"
    >
      <h2 className="p-1 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
        Skills
      </h2>
      <p className="mt-3 max-w-3xl p-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
        High-impact technologies I use most to build modern, production-ready
        applications.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <Card
              key={group.title}
              className="group relative isolate overflow-hidden border-border/80 bg-card/95 transition-colors duration-300 hover:border-primary/45"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
              </span>
              <CardContent className="relative z-10 p-6 pt-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary dark:border-accent-foreground/20 dark:bg-accent dark:text-accent-foreground">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm font-medium text-foreground/90 sm:text-base"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
