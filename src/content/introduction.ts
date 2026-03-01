export type SocialLinkIcon = "linkedin" | "github" | "email" | "resume";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialLinkIcon;
};

export const heroSubtitle =
  "I am a software engineer crafting web experiences with code and creativity.";

export const aboutParagraphs: string[] = [
  "Hey, I am a full-stack developer who enjoys building thoughtful web applications and making systems work smoothly at scale.",
  "Lately, I have been exploring system architecture and AI agents to accelerate development workflows and ship better products faster.",
  "Outside of work, I am usually exploring what is new in tech over a cup of coffee, or planning my next travel adventure.",
  "If you are here, I would love to connect, feel free to reach out!",
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anshagrawal6/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/aagra109",
    icon: "github",
  },
  {
    label: "Email",
    href: "mailto:ansh-agrawal@outlook.com",
    icon: "email",
  },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1B4O0gG-3JJFWH1Um90DGE6mSuLpYLjocYXUGDyNhSw0",
    icon: "resume",
  },
];
