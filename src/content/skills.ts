export type SkillGroupIcon = "code" | "layers" | "cloud" | "database";

export type SkillGroup = {
  title: string;
  icon: SkillGroupIcon;
  skills: string[];
};

export const skillsDescription =
  "High-impact technologies I use most to build modern, production-ready applications.";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["TypeScript", "Python", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Full-Stack Web",
    icon: "layers",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Laravel"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["Azure", "Google Cloud", "GitHub Actions", "Docker", "Linux"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
];
