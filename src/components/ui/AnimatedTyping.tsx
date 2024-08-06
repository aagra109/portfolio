import { motion } from "framer-motion";
import React from "react";

const AnimatedTyping = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <p className={className}>
      {text.split(" ").map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimatedTyping;
