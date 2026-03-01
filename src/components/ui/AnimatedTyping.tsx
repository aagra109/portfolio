import { motion } from "framer-motion";
import React from "react";

type AnimatedTypingProps = {
  text: string;
  className?: string;
};

const AnimatedTyping = ({ text, className = "" }: AnimatedTypingProps) => {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i / 10,
          }}
          key={`${word}-${i}`}
        >
          {word}{" "}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimatedTyping;
