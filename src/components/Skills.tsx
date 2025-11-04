import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Mastery",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Styled Components", "Performance Opt.", "Web Accessibility (A11y)"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Input Validation", "React Query (Data Fetching)", "Microservices"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git & GitHub", "Testing (Jest/Cypress)", "CI/CD (GitHub Actions)", "Docker", "Vercel/Netlify (Deployment)", "API Security (JWT)"],
  },
  {
    title: "Foundational & Design",
    skills: ["HTML/CSS", "Figma", "UI/UX Principles", "Responsive Design", "Prototyping", "WordPress", "PHP"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-32 bg-[hsl(var(--section-bg-2))]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A refined and focused set of modern tools to build robust, scalable, and secure full-stack applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              {/* Category Title with Gradient Separator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <h3 className="text-xl font-bold text-primary text-center whitespace-nowrap">{category.title}</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary to-transparent" />
              </div>
              
              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

