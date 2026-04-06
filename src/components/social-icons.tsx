import { FileText, Linkedin, Mail } from "lucide-react";
import React from "react";
import { type SocialLinkIcon } from "@/content/introduction";
import GitHubIcon from "./icons/GitHubIcon";

export type SocialIconComponent = React.ComponentType<{ className?: string }>;

export const socialIconMap = {
  linkedin: Linkedin,
  github: GitHubIcon,
  email: Mail,
  resume: FileText,
} satisfies Record<SocialLinkIcon, SocialIconComponent>;
