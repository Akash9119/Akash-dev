import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Layers, Server, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Website",
    points: [
      "Custom theme development",
      "WooCommerce & plugin integration",
      "Speed & SEO optimized",
      "Mobile-responsive design",
    ],
  },
  {
    icon: Layers,
    title: "React / Next.js App",
    points: [
      "SPA or SSR architecture",
      "REST & GraphQL API integration",
      "Performance-first implementation",
      "TypeScript & component library",
    ],
  },
  {
    icon: Server,
    title: "Full-Stack Web App",
    points: [
      "React frontend + Node.js backend",
      "MongoDB / MySQL database",
      "JWT authentication & REST API",
      "Cloud deployment (VPS / Vercel)",
    ],
  },
  {
    icon: Zap,
    title: "Landing Page",
    points: [
      "Conversion-focused layout",
      "Sub-2s load time",
      "Mobile-first design",
      "Contact form & analytics ready",
    ],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 bg-[hsl(var(--section-bg-1))]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            What I Offer
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end web development tailored to your business goals
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 space-y-5">
                    <div className="p-4 rounded-2xl gradient-primary w-fit">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm">
                      <a href="#contact">Get a Quote</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
