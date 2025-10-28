import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-[hsl(var(--section-bg-3))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gradient mb-2"
          >
            Portfolio.
          </motion.div>
          <p className="text-muted-foreground">
            Building digital experiences with passion and precision
          </p>
          <div className="pt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Akash Vasava. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
