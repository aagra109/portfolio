"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import React from "react";
import GitHubIcon from "./icons/GitHubIcon";
import AnimatedTyping from "./ui/AnimatedTyping";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anshagrawal6/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/aagra109",
    icon: GitHubIcon,
  },
  {
    label: "Email",
    href: "mailto:ansh-agrawal@outlook.com",
    icon: Mail,
  },
];

const Introduction = () => {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-5xl scroll-mt-24 px-6 pb-14 pt-20 sm:px-10"
    >
      <div className="relative space-y-4">
        <motion.div
          initial={{ x: "-100vw", scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            duration: 0.2,
          }}
        >
          <h1 className="p-1 font-space-grotesk font-extrabold text-4xl text-foreground sm:text-6xl">
            Ansh Agrawal
          </h1>
        </motion.div>
        <AnimatedTyping
          text="I am a software engineer crafting web experiences with code and
          creativity."
          className="max-w-2xl p-1 text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl"
        />
        <div className="mt-4 rounded-2xl border border-border/80 bg-card/95 p-6 shadow-sm shadow-primary/10 sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
            About
          </h2>
          <div className="max-w-4xl space-y-3 pt-4 text-left text-base font-medium leading-7 text-foreground/90 sm:text-lg sm:leading-8">
            <p>
              Hey, I am a full-stack developer who enjoys building thoughtful
              web applications and making systems work smoothly at scale.
            </p>
            <p>
              Lately, I have been exploring system architecture and AI agents to
              accelerate development workflows and ship better products faster.
            </p>
            <p>
              Outside of work, I am usually exploring what is new in tech over a
              cup of coffee, or planning my next travel adventure.
            </p>
            <p>
              If you are here, I would love to connect, feel free to reach out!
            </p>
            <div className="pt-2">
              <div className="rounded-xl border border-border/70 bg-background/80 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Connect
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground">
                    Open to exploring new opportunities
                  </p>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
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
                        className="group relative isolate flex items-center justify-between overflow-hidden rounded-lg border border-border bg-card px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          <span className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                        </span>
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary dark:border-accent-foreground/20 dark:bg-accent dark:text-accent-foreground">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {social.label}
                          </span>
                        </span>
                        <ArrowUpRight className="relative z-10 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
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
