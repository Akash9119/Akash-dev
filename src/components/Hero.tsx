import { motion } from "framer-motion";
import { experienceLabel } from "@/lib/experience";

const profile = [
  { key: "experience", value: <><em className="not-italic text-primary">{experienceLabel()}</em> full-time</> },
  { key: "projects", value: <><em className="not-italic text-primary">60+</em> shipped · 30+ live</> },
  { key: "stripe", value: <><em className="not-italic text-primary">15+</em> integrations</> },
  { key: "focus", value: "GenAI · RAG · agents" },
  { key: "location", value: "Vadodara, India" },
  { key: "status", value: <span className="inline-flex items-center gap-2 text-ok"><span className="h-1.5 w-1.5 rounded-full bg-ok ring-[3px] ring-ok/25" />open to full-stack roles</span> },
];

export function TerminalWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border bg-card font-mono text-[13.5px]">
      <div className="flex items-center gap-[7px] border-b px-3.5 py-2.5 text-xs text-muted-foreground">
        <i className="h-2.5 w-2.5 rounded-full bg-border" />
        <i className="h-2.5 w-2.5 rounded-full bg-border" />
        <i className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2">{title}</span>
      </div>
      {children}
    </div>
  );
}

const btn = "rounded border px-[18px] py-[11px] font-mono text-sm transition-colors";

export function Hero() {
  return (
    <header id="home" className="grid items-start gap-12 py-12 md:grid-cols-[1.35fr_1fr] md:py-[72px]">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-accent">akash@vadodara</span>:~$ <span className="text-foreground">whoami</span>
        </p>
        <h1 className="mb-3.5 mt-[18px] text-balance text-[clamp(40px,7vw,76px)] font-bold leading-none tracking-[-0.035em]">
          Akash Vasava<span className="caret" aria-hidden="true" />
        </h1>
        <p className="mb-5 font-mono text-[15px] text-primary">Full-stack developer · Python · FastAPI · GenAI · MERN</p>
        <p className="mb-7 max-w-[56ch] text-pretty text-lg text-muted-foreground">
          I build and ship web products for US clients at Vardaam Web Solutions, and AI features with LangChain,
          LangGraph and MCP. <strong className="font-medium text-foreground">60+ client projects</strong>, Stripe
          payments, CRM integrations, and a WordPress plugin built from scratch.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className={`${btn} border-primary bg-primary font-semibold text-primary-foreground`}>
            Get in touch
          </a>
          <a href="/resume.pdf" download="Akash_Vasava_Full_Stack_Developer.pdf" className={`${btn} bg-card hover:border-muted-foreground`}>
            Download resume ↓
          </a>
          <a href="https://github.com/Akash9119" target="_blank" rel="noopener noreferrer" className={`${btn} bg-card hover:border-muted-foreground`}>
            GitHub ↗
          </a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <TerminalWindow title="profile.json">
          <dl className="grid grid-cols-[11ch_1fr] gap-x-3 gap-y-1 px-[18px] py-4 tabular-nums">
            {profile.map((row) => (
              <div key={row.key} className="contents">
                <dt className="text-muted-foreground">{row.key}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </TerminalWindow>
      </motion.div>
    </header>
  );
}
