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
      className="relative mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-20 pt-8 text-[hsl(var(--paper-foreground))] sm:px-10"
    >
      <h2 className="font-space-grotesk p-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#141414] sm:text-sm">
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
            <Card className="ticket-card group relative isolate overflow-hidden rounded-[1.5rem] border-[hsl(var(--paper-border))] bg-[hsl(var(--paper-card))] transition-transform duration-300 hover:-translate-y-1">
              <CardContent className="relative z-10 grid gap-6 p-6 pt-6 md:grid-cols-12 md:gap-8">
                <div className="space-y-3 md:col-span-8">
                  <p className="text-xl font-semibold text-[#141414]">
                    {exp.role},{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex text-[rgb(255,113,69)] text-base font-semibold transition-colors duration-200 hover:text-[#141414] md:text-lg"
                    >
                      <span className="relative">
                        {exp.company}
                        <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-75 bg-[rgba(255,113,69,0.5)] transition-transform duration-200 group-hover:scale-x-100" />
                      </span>
                    </a>
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <p className="text-[#5f5b52]">{exp.location}</p>
                    <p className="font-medium text-[#141414]">{exp.duration}</p>
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
                        className="grid grid-cols-[auto_1fr] items-start gap-3 text-sm leading-relaxed text-[#2f2c27] sm:text-base"
                      >
                        <span className="mt-2.5 inline-flex h-1.5 w-4 flex-none rounded-full bg-[rgb(255,113,69)]" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="md:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f5b52]">
                    Tech Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={`${exp.company}-${exp.duration}-${skill}`}
                        className="rounded-full border border-[hsl(var(--paper-border))] bg-[#fffbea] px-3 py-1 text-xs font-semibold text-[#141414] sm:text-sm"
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
