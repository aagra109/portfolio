"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTyping from "./ui/AnimatedTyping";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="relative mx-auto flex w-full max-w-5xl scroll-mt-24 items-center px-6 pb-14 pt-20 sm:px-10"
    >
      <div className="relative space-y-4">
        <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
          Hey, my name is
        </p>
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
      </div>
    </section>
  );
};

export default Introduction;
