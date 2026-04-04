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
          <h1 className="max-w-4xl p-1 font-space-grotesk text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] text-[#fefce1] sm:text-6xl lg:text-[5.75rem]">
            Ansh Agrawal
          </h1>
        </motion.div>
        <AnimatedTyping
          text={heroSubtitle}
          className="relative max-w-3xl p-1 text-lg font-medium leading-relaxed text-[#dad6c8] sm:text-xl"
        />
        <div className="relative mt-4 rounded-[1.9rem] border border-white/10 bg-[#1a1a1a]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:p-8">
          <h2 className="text-[rgb(255,113,69)] text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">
            About
          </h2>
          <div className="max-w-4xl space-y-3 pt-4 text-left text-base font-medium leading-7 text-[#f7f2dd] sm:text-lg sm:leading-8">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pt-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#111111]/90 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[rgb(255,113,69)] text-xs font-semibold uppercase tracking-[0.24em]">
                    Connect
                  </h3>
                  <p className="text-xs font-medium text-[#dad6c8]">
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
                        className="group relative isolate flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#191919] px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,113,69,0.35)] hover:bg-[#171717]"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d8cfbc] text-[#141414] transition-colors duration-200 group-hover:bg-[#fefce1]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold text-[#fefce1]">
                            {social.label}
                          </span>
                        </span>
                        <ArrowUpRight className="relative z-10 h-4 w-4 text-[#dad6c8] transition-colors group-hover:text-[rgb(255,113,69)]" />
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
