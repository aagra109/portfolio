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
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 20, filter: "blur(3px)" };

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-6 pt-8 sm:px-10"
    >
      <h2 className="section-kicker">Skills</h2>
      <p className="section-copy">{skillsDescription}</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = skillGroupIconMap[group.icon];
          return (
            <motion.div
              key={group.title}
              className="h-full"
              initial={cardInitial}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
              <Card className="skill-card">
                <span aria-hidden="true" className="skill-card-topline" />
                <CardContent className="relative z-10 p-6 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="skill-card-icon">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="skill-card-title">{group.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="skill-item">
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
