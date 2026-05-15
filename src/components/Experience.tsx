"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { experiences } from "@/content/experience";

const ROW_VIEWPORT = { once: true, amount: 0.2 } as const;
const POINTS_VIEWPORT = { once: true, amount: 0.35 } as const;
const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  const rowInitial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 18 };

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
      className="mt-14 scroll-mt-28 bg-ink-deep text-paper-copy"
    >
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <h2 className="p-1 font-space-grotesk text-sm font-semibold uppercase tracking-widest text-ink-deep-card sm:text-base">
          Experience
        </h2>

        <div className="mt-7 space-y-5">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.duration}`}
              className="rounded-2xl border border-paper-border bg-ink-deep-card p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-6"
              initial={rowInitial}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.025,
                      transition: { duration: 0.25, ease: MOTION_EASE },
                    }
              }
              viewport={ROW_VIEWPORT}
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
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-8">
                <div>
                  <h3 className="font-space-grotesk text-lg font-semibold leading-snug tracking-tight text-paper-copy sm:text-xl">
                    {exp.role},{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-terracotta underline decoration-terracotta/30 underline-offset-[5px] transition-colors duration-200 hover:text-paper-copy hover:decoration-paper-copy/40"
                    >
                      {exp.company}
                    </a>
                  </h3>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-space-grotesk text-xs font-semibold uppercase tracking-[0.14em] text-paper-muted">
                    <span>{exp.location}</span>
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-paper-copy/30"
                    />
                    <span className="tabular-nums text-paper-copy">
                      {exp.duration}
                    </span>
                  </div>

                  <motion.ul
                    className="mt-4 space-y-2.5"
                    variants={pointListVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={POINTS_VIEWPORT}
                  >
                    {exp.points.map((point) => (
                      <motion.li
                        key={`${exp.company}-${exp.duration}-${point}`}
                        variants={pointItemVariants}
                        className="grid grid-cols-[1rem_1fr] gap-2.5 text-sm font-medium leading-6 text-paper-copy"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-[3px] w-3 rounded-full bg-terracotta"
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div className="lg:border-l lg:border-paper-border lg:pl-8">
                  <h4 className="font-space-grotesk text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
                    Tech Stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={`${exp.company}-${exp.duration}-${skill}`}
                        className="rounded-full border border-paper-border bg-paper/30 px-2.5 py-1 font-space-grotesk text-xs font-semibold tracking-tight text-paper-copy"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
