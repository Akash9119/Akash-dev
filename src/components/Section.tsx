import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Every section opens with a shell command as its eyebrow, then the heading.
export function Section({ id, command, title, note, children }: {
  id: string;
  command: string;
  title: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-20 border-t py-14 sm:py-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-accent">$</span> <span className="text-foreground">{command}</span>
          </p>
          <h2 className="mt-1.5 text-balance text-3xl font-semibold tracking-tight sm:text-[34px]">{title}</h2>
        </div>
        {note && <span className="font-mono text-xs text-muted-foreground">{note}</span>}
      </div>
      {children}
    </motion.section>
  );
}
