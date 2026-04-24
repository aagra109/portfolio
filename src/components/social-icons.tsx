import { FileText, Mail } from "lucide-react";
import React from "react";
import { type SocialLinkIcon } from "@/content/introduction";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export type SocialIconComponent = React.ComponentType<{ className?: string }>;

export const socialIconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  email: Mail,
  resume: FileText,
} satisfies Record<SocialLinkIcon, SocialIconComponent>;
