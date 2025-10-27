import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AboutCursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden md:block"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.2,
      }}
    >
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-xl" />
      </div>
    </motion.div>
  );
}
