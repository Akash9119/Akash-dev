import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile-gradient.jpg";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-32 bg-[hsl(var(--section-bg-1))]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full max-w-md mx-auto group">
              {/* Animated border effect */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 gradient-primary rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"
              />
              
              {/* Image with overlay effect */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="relative w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-4 top-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-3xl font-bold text-secondary">2+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Get to know me
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Driven by Curiosity, <span className="text-gradient">Defined by Craftsmanship</span>
              </h2>
            </motion.div>
            
            <div className="space-y-6 text-muted-foreground text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="leading-relaxed"
              >
                I’m a passionate Full-Stack Developer with a strong foundation in React.js and proficiency in backend technologies such as Node.js, Express, MongoDB, and MySQL. Alongside modern JavaScript frameworks, I also specialize in Full-Stack WordPress development, including custom theme and plugin development.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="leading-relaxed"
              >
                Over the past few years, I’ve built and delivered a variety of digital solutions—from eCommerce platforms and business websites to management systems, landing pages, and blogs. My approach combines clean, maintainable code with an emphasis on scalability, performance, and seamless user experience.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="leading-relaxed"
              >
                What drives me most is the pursuit of continuous growth. I enjoy exploring new technologies, optimizing existing systems, and turning ideas into functional, user-friendly web applications. My long-term vision is to evolve into a Full-Stack Software Engineer, capable of leading end-to-end product development with innovation and technical excellence at the core.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
