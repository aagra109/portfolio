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
          <p className="pt-5 text-left text-base font-medium leading-8 text-foreground/90 sm:text-lg">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient
            quisque diam lobortis eget ad dui inceptos feugiat. Orci mauris
            dapibus mauris interdum maximus fusce sed maximus. Dui fringilla
            aliquet turpis nibh mus ad. Torquent porta accumsan eleifend
            fermentum mollis vel ante. In enim rutrum luctus ultrices lacinia,
            amet fringilla. Vulputate enim tortor primis purus et finibus
            ultricies. Viverra iaculis dolor nunc; eros facilisi habitasse
            fusce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
