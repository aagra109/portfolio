"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Linkedin, Mail } from "lucide-react";
import React from "react";
import {
  aboutParagraphs,
  heroSubtitle,
  socialLinks,
  type SocialLinkIcon,
} from "@/content/introduction";
import GitHubIcon from "./icons/GitHubIcon";
import AnimatedTyping from "./ui/AnimatedTyping";

type SocialIconComponent = React.ComponentType<{ className?: string }>;

const socialIconMap = {
  linkedin: Linkedin,
  github: GitHubIcon,
  email: Mail,
  resume: FileText,
} satisfies Record<SocialLinkIcon, SocialIconComponent>;

const Introduction = () => {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-5xl scroll-mt-28 px-6 pb-14 pt-24 sm:px-10 sm:pt-28"
    >
      <div className="hero-grain relative px-0 py-2 sm:py-4">
        <motion.div
          className="relative"
          initial={{ x: "-100vw", scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            duration: 0.2,
          }}
        >
          <h1 className="hero-title">Ansh Agrawal</h1>
        </motion.div>
        <AnimatedTyping text={heroSubtitle} className="hero-subtitle" />
        <div className="hero-panel">
          <h2 className="section-kicker">About</h2>
          <div className="hero-body-copy">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pt-2">
              <div className="contact-panel">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="section-kicker">Connect</h3>
                  <p className="contact-meta">
                    Open to exploring new opportunities
                  </p>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {socialLinks.map((social) => {
                    const Icon = socialIconMap[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={
                          social.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          social.href.startsWith("http")
                            ? "noreferrer noopener"
                            : undefined
                        }
                        className="social-link"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="social-link-icon">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="social-link-text">{social.label}</span>
                        </span>
                        <ArrowUpRight className="social-link-arrow" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
