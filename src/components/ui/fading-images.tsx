import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FadingImagesProps {
  images: string[];
  duration?: number;
  className?: string;
}

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function FadingImages({
  images,
  duration = 1,
  className,
}: FadingImagesProps) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % images.length;
        setLoaded(false);
        return next;
      });
    }, duration * 1000); // Convert duration to milliseconds

    return () => clearInterval(timer);
  }, [images.length, duration]);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          initial="hidden"
          animate={current === index && loaded ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
          onLoad={handleImageLoad}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      ))}
    </div>
  );
}
