import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download, Github, Linkedin, MapPin } from "lucide-react";
import profileImage from "@/assets/profile-gradient.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full gradient-primary blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 mb-6 border border-green-500/20 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Open to Work · Remote & On-site
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="block text-foreground/60 text-2xl sm:text-3xl font-normal mb-2 tracking-normal">
                Hi, I'm
              </span>
              <span className="block text-gradient">Akash Vasava</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6"
            >
              Full Stack & Gen AI Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Building scalable web applications and AI-powered solutions with React, Node.js, and modern LLM integrations. Turning complex ideas into fast, production-ready products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <Button asChild size="lg" className="gradient-primary text-white group">
                <a href="/resume.pdf" download className="flex items-center">
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <a href="#projects" className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <a href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-start gap-6 justify-center lg:justify-start text-sm pt-6 border-t border-border mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-muted-foreground text-xs">Years Exp.</div>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block self-center" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-muted-foreground text-xs">Projects Built</div>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block self-center" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-muted-foreground text-xs">Happy Clients</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Akash9119"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-vasava/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:akashj.vasava@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 gradient-primary rounded-full blur-3xl opacity-15"
              />

              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Akash Vasava"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap shadow-lg flex items-center gap-2 z-10"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Vadodara, Gujarat
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="hidden xl:flex absolute -right-16 top-1/4 bg-card border border-border rounded-xl px-3 py-2 text-xs font-bold shadow-lg items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                React
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="hidden xl:flex absolute -left-16 top-1/2 bg-card border border-border rounded-xl px-3 py-2 text-xs font-bold shadow-lg items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                Node.js
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="hidden xl:flex absolute -right-14 bottom-1/4 bg-card border border-border rounded-xl px-3 py-2 text-xs font-bold shadow-lg items-center gap-1.5 text-primary"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Gen AI ✦
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
