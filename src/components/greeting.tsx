import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function Greeting({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}) {
  const controls = useAnimationControls();

  const [isPlaying, setIsPlaying] = useState(false);

  const transform = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    });
    setIsPlaying(true);
  };

  return (
    <motion.h1
      animate={controls}
      onMouseOver={() => {
        !isPlaying && transform();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className={`z-10 ${className ?? ""}`}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.h1>
  );
}
