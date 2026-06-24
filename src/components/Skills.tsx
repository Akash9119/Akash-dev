import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Performance Opt.", "Web Accessibility"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "JWT Authentication", "React Query", "Microservices"],
  },
  {
    title: "AI & Gen AI",
    skills: ["OpenAI API", "Claude API", "LangChain", "Prompt Engineering", "RAG", "AI Chatbots", "LLM Integration", "Vector Databases"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git & GitHub", "Docker", "CI/CD (GitHub Actions)", "Vercel / Netlify", "Testing (Jest/Cypress)", "API Security (JWT)"],
  },
  {
    title: "CMS & Design",
    skills: ["WordPress", "WooCommerce", "PHP", "Figma", "UI/UX Principles", "Responsive Design"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 bg-[hsl(var(--section-bg-2))]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A modern, full-stack toolkit covering web development, AI integration, and deployment — built for end-to-end product delivery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <h3 className="text-lg font-bold text-primary text-center whitespace-nowrap">{category.title}</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1.5 text-sm hover:scale-105 transition-transform cursor-default"
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
