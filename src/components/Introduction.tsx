"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  aboutParagraphs,
  heroSubtitle,
  socialLinks,
} from "@/content/introduction";
import { externalLinkProps } from "@/lib/utils";
import { socialIconMap } from "./social-icons";
import AnimatedText from "./ui/AnimatedText";

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
          <h1 className="max-w-4xl p-1 font-space-grotesk text-5xl font-extrabold leading-none tracking-tight text-foreground sm:text-6xl lg:text-8xl">
            Ansh Agrawal
          </h1>
        </motion.div>
        <AnimatedText
          text={heroSubtitle}
          className="relative max-w-3xl p-1 text-lg font-medium leading-relaxed text-foreground sm:text-xl"
        />
        <div className="relative mt-6 rounded-lg border border-foreground/15 bg-background p-6 sm:p-8">
          <h2 className="p-1 font-space-grotesk text-sm font-semibold uppercase tracking-widest text-primary sm:text-base">
            About
          </h2>
          <div className="max-w-4xl space-y-3 pt-4 text-left text-base font-medium leading-7 text-foreground sm:text-lg sm:leading-8">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pt-2">
              <div className="rounded-lg border border-foreground/15 bg-background p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="p-1 font-space-grotesk text-sm font-semibold uppercase tracking-widest text-primary sm:text-base">
                    Connect
                  </h3>
                  <p className="text-xs font-medium text-foreground/70">
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
                        {...externalLinkProps(social.href)}
                        className="group relative isolate flex items-center justify-between rounded-md border-x border-t border-b-2 border-foreground/25 bg-background px-3 py-3 transition-all duration-200 hover:border-b hover:border-primary hover:bg-foreground/[0.03] hover:shadow-[inset_0_1px_3px_rgb(0_0_0/0.08)]"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-foreground text-background transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {social.label}
                          </span>
                        </span>
                        <ArrowUpRight className="relative z-10 h-4 w-4 text-foreground/60 transition-colors group-hover:text-primary" />
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
