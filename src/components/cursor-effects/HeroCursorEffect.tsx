import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function HeroCursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedPosition(mousePosition);
    }, 100);

    return () => clearTimeout(timer);
  }, [mousePosition]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden md:block"
      animate={{
        x: delayedPosition.x - 100,
        y: delayedPosition.y - 100,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    >
      <div className="relative w-[200px] h-[200px]">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-4 rounded-full bg-secondary/30 blur-2xl" />
      </div>
    </motion.div>
  );
}
