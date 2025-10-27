import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SkillsCursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY, id: Date.now() };
      setMousePosition(newPos);
      setTrail((prev) => [...prev, newPos].slice(-5));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((pos, index) => (
        <motion.div
          key={pos.id}
          className="pointer-events-none fixed z-50 hidden md:block"
          initial={{ x: pos.x - 10, y: pos.y - 10, opacity: 0.8, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0.5,
          }}
          transition={{ duration: 0.6 }}
          style={{
            width: 20 - index * 2,
            height: 20 - index * 2,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary blur-sm" />
        </motion.div>
      ))}
      <motion.div
        className="pointer-events-none fixed z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 250,
        }}
      >
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 rounded-full bg-accent/40 blur-md" />
          <div className="absolute inset-2 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </>
  );
}
