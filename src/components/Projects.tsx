import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project-2.png";
import { Lightbox } from "@/components/Lightbox";

const projects = [
  {
    title: "Film-Nestle",
    description:
      "A modern movie and series explorer with IMDb ratings, cast info, trailers, and optimized UI/UX.",
    image: project1,
    tags: ["React", "API Integration", "Pagination", "UI/UX"],
    liveUrl: "https://film-nestle.vercel.app/",
    codeUrl: "https://github.com/Akash9119/FilmNestle",
    fullDescription:
      "Film-Nestle is a sleek and responsive web application that allows users to explore movies and TV series with detailed IMDb ratings, cast information, trailers, and related content. The project focuses on improved data fetching, pagination, skeleton loading, and modern UI practices for a smooth browsing experience.",
    features: [
      "IMDb ratings and detailed metadata",
      "Cast and actor information",
      "Featured trailers and related videos",
      "Pagination for large content lists",
      "Skeleton loading structure",
      "Optimized data fetching",
      "Modern responsive UI",
    ],
    problem:
      "Finding movies across fragmented platforms is tedious — no unified place to search ratings, cast info, and trailers.",
    solution:
      "Built a React SPA that pulls from a movie API, delivering IMDb ratings, cast info, trailers, and paginated search in a clean, fast UI.",
    result:
      "Sub-second search results with skeleton loading, cutting perceived wait time significantly.",
    duration: "2 months",
    team: "Solo project",
    role: "Solo Developer",
  },
  {
    title: "Text Transformer",
    description:
      "A powerful text utility app — case conversions, encoding/decoding, formatting, and 30+ developer-friendly transformations.",
    image: project2,
    tags: ["React", "JavaScript", "Text Tools", "Utility"],
    liveUrl: "https://text-changer-blue.vercel.app/",
    codeUrl: "https://github.com/Akash9119/Text_Changer",
    fullDescription:
      "Text Transformer is a responsive single-page application built with React that provides a comprehensive set of text manipulation tools — from simple case conversions and extra-space removal to encoding/decoding and developer-friendly formatting (slugify, camelCase, JSON pretty-print). It focuses on fast client-side transformations, an organized tabbed UI for tool categories, real-time stats (words, characters, read time), and utility actions like copy and download.",
    features: [
      "Convert to UPPERCASE, lowercase, Title Case, and Sentence Case",
      "Copy to clipboard and download text as .txt",
      "Remove extra spaces, trim lines, and remove blank lines",
      "Reverse text, reverse words, and reverse lines",
      "Sort lines and words alphabetically",
      "Base64, URL, and HTML encode/decode",
      "Slugify, camelCase, snake_case, kebab-case conversions",
      "JSON pretty-print and minify with error handling",
      "Live preview with real-time stats (words, chars, reading time)",
      "Tabbed UI grouping operations into Case, Arrange, Format, Encode, Code, and Style",
    ],
    problem:
      "Developers and content writers repeatedly switch between multiple browser tabs for basic text operations, breaking their flow.",
    solution:
      "Consolidated 30+ text manipulation utilities into a single tabbed React app with live preview and real-time stats.",
    result:
      "Replaces 5+ separate tools in one fast, client-side solution — all transformations complete in under 50ms.",
    duration: "3 weeks",
    team: "Solo project",
    role: "Solo Developer",
  },
  {
    title: "BizLaunch — Business Landing Page",
    description:
      "A high-converting landing page built for a local service business, focused on mobile-first design, fast load time, and clear call-to-action.",
    image: project1,
    tags: ["React", "Tailwind CSS", "Framer Motion", "SEO"],
    liveUrl: "#",
    codeUrl: "https://github.com/Akash9119",
    fullDescription:
      "BizLaunch is a conversion-optimized landing page template built for local service businesses — ideal for consultants, agencies, and freelancers. It features a mobile-first layout, above-the-fold CTA, service highlights, process timeline, and an integrated contact form.",
    features: [
      "Above-the-fold hero with a clear CTA",
      "Service showcase cards with icons",
      "Mobile-first responsive design",
      "Fast load time under 1.5s on mobile",
      "SEO-ready meta tags and Open Graph",
      "Animated sections with Framer Motion",
      "Integrated contact form with success state",
    ],
    problem:
      "Local businesses lose customers to competitors online because their websites are slow, hard to navigate on mobile, or lack a clear call-to-action.",
    solution:
      "Built a focused single-page site prioritizing above-the-fold visibility, fast Tailwind CSS styling, and a frictionless contact-to-inquiry flow.",
    result:
      "Achieves a 95+ Lighthouse Performance score and loads under 1.5s on mobile — well above the industry average.",
    duration: "1 week",
    team: "Solo project",
    role: "Solo Developer",
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
      setMousePosition({ x: e.clientX - activeRect.left, y: e.clientY - activeRect.top });
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
              Real problems solved with clean, performant code
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={(e) => {
                  setHoveredIndex(index);
                  setActiveRect((e.currentTarget as HTMLElement).getBoundingClientRect());
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setActiveRect(null);
                }}
              >
                <Card
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer relative h-full flex flex-col"
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
                      className="w-full h-52 object-cover"
                      animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold px-6 py-3 rounded-full bg-primary/80 backdrop-blur-sm">
                        View Case Study
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
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
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
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
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
                className="w-full h-72 object-cover"
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

            {/* Case study cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 space-y-2">
                <div className="flex items-center gap-2 text-destructive font-semibold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Challenge
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  Solution
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 space-y-2">
                <div className="flex items-center gap-2 text-green-500 font-semibold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  Result
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{selectedProject.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span>{selectedProject.role}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button asChild className="gradient-primary text-white flex-1">
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={selectedProject.codeUrl} target="_blank" rel="noopener noreferrer">
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
