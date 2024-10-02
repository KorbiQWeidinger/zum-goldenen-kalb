import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FadingElementsProps {
  elements: React.ReactNode[];
  interval?: number;
}

export default function FadingElements({
  elements,
  interval = 5000,
}: FadingElementsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, interval);

    return () => clearInterval(timer);
  }, [elements.length, interval]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {elements[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
