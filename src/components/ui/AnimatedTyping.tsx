"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type AnimatedTypingProps = {
  text: string;
  className?: string;
};

const AnimatedTyping = ({ text, className = "" }: AnimatedTypingProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [canAnimate, setCanAnimate] = React.useState(false);
  const words = text.trim().split(/\s+/).filter(Boolean);
  const shouldAnimate = canAnimate && prefersReducedMotion === false;

  React.useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setCanAnimate(true);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <p className={className}>
      {words.map((word, i) => (
        <motion.span
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={shouldAnimate ? { opacity: 1 } : undefined}
          transition={{
            duration: shouldAnimate ? 0.5 : 0,
            delay: shouldAnimate ? i / 10 : 0,
          }}
          key={`${word}-${i}-${shouldAnimate ? "animated" : "static"}`}
        >
          {word}
          {i < words.length - 1 ? " " : null}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimatedTyping;
