"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTyping from "./ui/AnimatedTyping";

const Introduction = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="m-20">
        <p className="text-xl font-light text-primary p-1">Hey, My name is</p>
        <motion.div
          initial={{ x: "-100vw", scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            duration: 0.2,
          }}
        >
          <p className="text-6xl text-secondary font-extrabold p-1">
            Ansh Agrawal
          </p>
        </motion.div>
        <AnimatedTyping
          text="I am a software engineer crafting web experiences with code and
          creativity."
          className="text-xl font-light text-primary p-1"
        />
      </div>
    </div>
  );
};

export default Introduction;
