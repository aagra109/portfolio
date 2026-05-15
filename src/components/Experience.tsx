"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
      className="experience-surface mt-14 scroll-mt-28 text-ink-deep-card"
    >
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <h2 className="p-1 font-space-grotesk text-sm font-semibold uppercase tracking-widest text-ink-deep-card sm:text-base">
          Experience
        </h2>

        <div className="mt-7 space-y-5">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.duration}`}
              className="rounded-2xl border border-ink-deep-card/15 bg-ink-deep-card/[0.06] p-5 shadow-card backdrop-blur-xl transition-[background-color,box-shadow] duration-300 hover:bg-ink-deep-card/[0.1] hover:shadow-card-hover sm:p-6"
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
                  <h3 className="font-space-grotesk text-lg font-semibold leading-snug tracking-tight text-ink-deep-card sm:text-xl">
                    {exp.role},{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/company relative inline-flex items-center gap-1 text-terracotta transition-colors duration-200 hover:text-terracotta-bright"
                    >
                      <span className="relative">
                        {exp.company}
                        <span className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-terracotta-bright/55 transition-transform duration-200 ease-out group-hover/company:scale-x-100" />
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3 w-3 translate-y-0.5 opacity-70 transition-[opacity,transform] duration-200 ease-out group-hover/company:-translate-y-0.5 group-hover/company:translate-x-0.5 group-hover/company:opacity-100"
                      />
                    </a>
                  </h3>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-space-grotesk text-xs font-semibold uppercase tracking-[0.14em] text-ink-deep-card/70">
                    <span>{exp.location}</span>
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-ink-deep-card/45"
                    />
                    <span className="tabular-nums text-ink-deep-card">
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
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={`${exp.company}-${exp.duration}-${pointIndex}`}
                        variants={pointItemVariants}
                        className="grid grid-cols-[1rem_1fr] gap-2.5 text-sm font-medium leading-6 text-ink-deep-card/90"
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

                <div className="lg:border-l lg:border-ink-deep-card/15 lg:pl-8">
                  <h4 className="font-space-grotesk text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
                    Tech Stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={`${exp.company}-${exp.duration}-${skillIndex}`}
                        className="rounded-full border border-ink-deep-card/15 bg-ink-deep-card/[0.05] px-2.5 py-1 font-space-grotesk text-xs font-semibold tracking-tight text-ink-deep-card"
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
