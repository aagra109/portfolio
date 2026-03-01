"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { experiences } from "@/content/experience";
import { Card, CardContent } from "./ui/card";

const CARD_VIEWPORT = { once: true, amount: 0.22 } as const;
const POINTS_VIEWPORT = { once: true, amount: 0.35 } as const;
const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardInitial = shouldReduceMotion
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 24, filter: "blur(4px)" };

  const pointListVariants = shouldReduceMotion
    ? {
        hidden: {},
        show: {},
      }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.075,
            delayChildren: 0.08,
          },
        },
      };

  const pointItemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: 8 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: MOTION_EASE },
        },
      };

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 pt-8 sm:px-10"
    >
      <h2 className="p-1 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
        Experience
      </h2>
      <div className="mt-4 space-y-5">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.duration}`}
            initial={cardInitial}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={CARD_VIEWPORT}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: MOTION_EASE,
                  }
            }
          >
            <Card className="group relative isolate overflow-hidden border-border/80 bg-card/95 transition-colors duration-300 hover:border-primary/45">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
              </div>
              <CardContent className="relative z-10 grid gap-6 p-6 pt-6 md:grid-cols-12 md:gap-8">
                <div className="space-y-3 md:col-span-8">
                  <p className="text-xl font-semibold text-foreground">
                    {exp.role},{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex text-base font-semibold text-primary transition-colors duration-200 hover:text-primary/80 md:text-lg"
                    >
                      <span className="relative">
                        {exp.company}
                        <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-75 bg-primary/55 transition-transform duration-200 group-hover:scale-x-100" />
                      </span>
                    </a>
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <p className="text-muted-foreground">{exp.location}</p>
                    <p className="font-medium text-primary">{exp.duration}</p>
                  </div>
                  <motion.ul
                    className="space-y-2.5"
                    variants={pointListVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={POINTS_VIEWPORT}
                  >
                    {exp.points.map((point) => (
                      <motion.li
                        key={`${exp.company}-${exp.duration}-${point}`}
                        variants={pointItemVariants}
                        className="grid grid-cols-[auto_1fr] items-start gap-3 text-sm leading-relaxed text-foreground/90 sm:text-base"
                      >
                        <span className="mt-2.5 inline-flex h-1.5 w-4 flex-none rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="md:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Tech Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={`${exp.company}-${exp.duration}-${skill}`}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:text-sm dark:border-accent-foreground/20 dark:bg-accent dark:text-accent-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
