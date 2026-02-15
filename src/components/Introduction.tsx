"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTyping from "./ui/AnimatedTyping";

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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            About
          </p>
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
              Outside of work, I'm usually exploring what's new in tech over a
              cup of coffee, or planning my next travel adventure.
            </p>
            <p>
              If you are here, I would love to connect, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
