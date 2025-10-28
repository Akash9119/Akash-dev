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
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-3xl font-bold text-secondary">5+</div>
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
                Passionate About <span className="text-gradient">Creating</span>
              </h2>
            </motion.div>
            
            <div className="space-y-6 text-muted-foreground text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="leading-relaxed"
              >
                I'm a passionate full-stack developer specializing in WordPress backend,
                React, and modern web development. I thrive on solving complex problems,
                building performant applications, and continuously learning new technologies.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="leading-relaxed"
              >
                With years of hands-on experience, I've successfully delivered diverse projects
                ranging from e-commerce platforms to custom web applications. My approach combines
                technical excellence with a deep focus on user experience.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="leading-relaxed"
              >
                Beyond coding, I'm an active contributor to open source projects and enjoy
                sharing knowledge with the developer community through mentoring and technical writing.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
