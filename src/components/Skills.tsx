"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import {
  CloudCog,
  Code2,
  Database,
  Layers3,
  type LucideIcon,
} from "lucide-react";
import {
  skillGroups,
  skillsDescription,
  type SkillGroupIcon,
} from "@/content/skills";
import { Card, CardContent } from "./ui/card";

const SKILL_CARD_VIEWPORT = { once: true, amount: 0.25 } as const;
const SKILL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const skillGroupIconMap = {
  code: Code2,
  layers: Layers3,
  cloud: CloudCog,
  database: Database,
} satisfies Record<SkillGroupIcon, LucideIcon>;

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardInitial = shouldReduceMotion
    ? { opacity: 1, scale: 1 }
    : { opacity: 0, scale: 0.98 };

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-6 pt-2 sm:px-10"
    >
      <h2 className="p-1 font-space-grotesk text-sm font-semibold uppercase tracking-widest text-primary sm:text-base">
        Skills
      </h2>
      <p className="mt-3 max-w-3xl p-1 text-base leading-relaxed text-stone-300 sm:text-lg">
        {skillsDescription}
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = skillGroupIconMap[group.icon];
          return (
            <motion.div
              key={group.title}
              className="h-full"
              initial={cardInitial}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={SKILL_CARD_VIEWPORT}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.42,
                      delay: index * 0.08,
                      ease: SKILL_EASE,
                    }
              }
            >
              <Card className="group relative isolate h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/95 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-white/70"
                />
                <CardContent className="relative z-10 p-6 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-300 text-black transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-stone-100">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="font-space-grotesk text-lg font-semibold text-white sm:text-xl">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm font-medium text-stone-100 sm:text-base"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
