import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import certificate from "@/assets/certificate.jpg";
import { Lightbox } from "@/components/Lightbox";
import { Button } from "@/components/ui/button";

const achievements = [
  { 
    title: "Certificate #1", 
    description: "Full Stack Development",
    issuer: "Tech Academy",
    date: "2024",
    details: "Comprehensive full-stack development certification covering React, Node.js, databases, and cloud deployment. This intensive program covered everything from frontend architecture to backend API design and deployment strategies."
  },
  { 
    title: "Certificate #2", 
    description: "React Advanced Patterns",
    issuer: "React Masters",
    date: "2023",
    details: "Advanced React patterns and best practices including custom hooks, context optimization, and performance tuning. Learned cutting-edge techniques for building scalable React applications."
  },
  { 
    title: "Certificate #3", 
    description: "WordPress Expert",
    issuer: "WP Institute",
    date: "2023",
    details: "Expert-level WordPress development certification covering theme development, plugin creation, and advanced customization. Mastered WordPress core, custom post types, and the block editor."
  },
  { 
    title: "Certificate #4", 
    description: "UI/UX Design Fundamentals",
    issuer: "Design School",
    date: "2022",
    details: "Comprehensive UI/UX design training focusing on user research, wireframing, prototyping, and usability testing. Learned to create user-centered designs that balance aesthetics with functionality."
  },
  { 
    title: "Certificate #5", 
    description: "Cloud Architecture",
    issuer: "Cloud Academy",
    date: "2022",
    details: "Cloud infrastructure and architecture certification covering AWS, serverless computing, and DevOps practices. Gained expertise in designing scalable, resilient cloud-based systems."
  },
];

const lightboxAnimations = [
  { initial: { scale: 0, rotate: -180 }, animate: { scale: 1, rotate: 0 } },
  { initial: { x: -1000, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  { initial: { y: -1000, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  { initial: { rotateY: 90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 } },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [animationIndex, setAnimationIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleAchievementClick = (achievement: typeof achievements[0]) => {
    setAnimationIndex(Math.floor(Math.random() * lightboxAnimations.length));
    setSelectedAchievement(achievement);
  };

  return (
    <>
      <section id="achievements" className="py-20 sm:py-32 bg-[hsl(var(--section-bg-1))]" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Recognition
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Achievements & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Continuous learning and professional development
            </p>
          </motion.div>

          <div className="relative group">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-lg"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-lg"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            <motion.div
              ref={scrollContainerRef}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[calc(25%-1.125rem)] min-w-[280px] snap-start"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Card 
                    className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
                    onClick={() => handleAchievementClick(achievement)}
                  >
                    <CardContent className="p-6">
                      <div className="relative mb-4 overflow-hidden rounded-lg group">
                        <img
                          src={certificate}
                          alt={achievement.title}
                          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Award className="h-10 w-10 text-accent" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {achievement.issuer} • {achievement.date}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Lightbox 
        isOpen={!!selectedAchievement} 
        onClose={() => setSelectedAchievement(null)}
        animation={lightboxAnimations[animationIndex]}
      >
        {selectedAchievement && (
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={certificate}
                alt={selectedAchievement.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                {selectedAchievement.date}
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{selectedAchievement.title}</h2>
                <p className="text-xl text-primary mb-1">{selectedAchievement.description}</p>
                <p className="text-muted-foreground">Issued by {selectedAchievement.issuer}</p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-3">About this certification</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {selectedAchievement.details}
              </p>
            </div>
          </div>
        )}
      </Lightbox>
    </>
  );
}
