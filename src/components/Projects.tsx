import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import { Lightbox } from "@/components/Lightbox";

const projects = [
  {
    title: "Project One",
    description: "A modern React app with API integrations.",
    image: project1,
    tags: ["React", "TypeScript", "API"],
    liveUrl: "#",
    codeUrl: "#",
    fullDescription: "A comprehensive React application featuring real-time API integrations, state management with Redux, and a responsive design. This project showcases modern web development practices including code splitting, lazy loading, and optimized performance.",
    features: ["Real-time data synchronization", "Advanced state management", "Responsive design", "Performance optimization"],
    duration: "3 months",
    team: "Solo project",
  },
  {
    title: "Project Two",
    description: "WordPress theme customization project.",
    image: project2,
    tags: ["WordPress", "PHP", "CSS"],
    liveUrl: "#",
    codeUrl: "#",
    fullDescription: "A custom WordPress theme built from scratch with advanced customization options. Features include a custom Gutenberg blocks, WooCommerce integration, and a fully responsive design that works seamlessly across all devices.",
    features: ["Custom Gutenberg blocks", "WooCommerce integration", "Advanced theme options", "SEO optimized"],
    duration: "2 months",
    team: "Team of 3",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!activeRect) return;
      // compute coordinates relative to the active card element
      const x = e.clientX - activeRect.left;
      const y = e.clientY - activeRect.top;
      setMousePosition({ x, y });
    };

    if (hoveredIndex !== null && activeRect) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredIndex, activeRect]);

  return (
    <>
      <section id="projects" className="py-20 sm:py-32 bg-[hsl(var(--section-bg-3))]" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Some of my recent work that I'm proud of
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={(e) => {
                  setHoveredIndex(index);
                  // store bounding rect of the hovered element so we can compute relative cursor coords
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  setActiveRect(rect);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setActiveRect(null);
                }}
              >
                <Card 
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
                  onClick={() => setSelectedProject(project)}
                >
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-10"
                      animate={{
                        background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`,
                      }}
                      transition={{ duration: 0 }}
                    />
                  )}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold px-6 py-3 rounded-full bg-primary/80 backdrop-blur-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.codeUrl}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      size="sm" 
                      className="gradient-primary text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {selectedProject.fullDescription}
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{selectedProject.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>{selectedProject.team}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button asChild className="gradient-primary text-white flex-1">
                <a href={selectedProject.liveUrl}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={selectedProject.codeUrl}>
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        )}
      </Lightbox>
    </>
  );
}
