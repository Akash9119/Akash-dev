import { motion } from "framer-motion";
import { Github, Linkedin, X, Mail, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Akash9119" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/akash-vasava/" },
  { icon: X, label: "X / Twitter", href: "https://x.com/AkashjVasava" },
  { icon: Mail, label: "Email", href: "mailto:akashj.vasava@gmail.com" },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-[hsl(var(--section-bg-3))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 mb-12"
        >
          {/* Logo + tagline */}
          <div className="space-y-3">
            <div className="text-2xl font-bold text-gradient">Akash Vasava</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer building fast, scalable web solutions for businesses.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-6 border-t border-border text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Akash Vasava. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
