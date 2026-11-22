import { Section } from "@/components/Section";

const projects = [
  {
    name: "Seamless AMS",
    tag: "work · vardaam",
    meta: "WordPress plugin + React site",
    wide: true,
    text: "Association-management plugin that brings a Laravel SaaS into WordPress: single sign-on, 40+ REST routes, and 35+ blocks each for Elementor, Gutenberg, WPBakery and shortcodes, shipped as a React build. I also built the product's marketing site in React with Vite.",
    links: [{ label: "seamlessams.com", href: "https://seamlessams.com" }],
    stack: ["PHP", "WordPress", "React", "Vite", "Laravel", "REST", "SSO"],
  },
  {
    name: "BlogForge",
    tag: "personal",
    meta: "Aug – Nov 2026",
    text: "AI-powered CMS on two services: a Node/Express API and a Python FastAPI service running a LangChain RAG pipeline over a vector store. Draft, publish and archive workflow, JWT auth with rotating refresh tokens, role-based access and Cloudinary media.",
    links: [
      { label: "live", href: "https://blogforge.online" },
      { label: "source", href: "https://github.com/Akash9119" },
    ],
    stack: ["Python", "FastAPI", "LangChain", "RAG", "MongoDB", "Express", "React", "Node"],
  },
  {
    name: "BACS shopping app",
    tag: "client",
    meta: "Aug – Nov 2026",
    text: "React Native (Expo) shopping app built from scratch and shipped to Google Play. One FastAPI backend serves the app and the website, using Shopify's Storefront and Admin GraphQL APIs plus a custom Razorpay checkout. The Next.js site runs on Cloudflare Pages at ₹0 a month.",
    links: [{ label: "bacs.in", href: "https://bacs.in" }],
    stack: ["React Native", "Expo", "FastAPI", "Shopify", "GraphQL", "Razorpay", "Next.js"],
  },
  {
    name: "Money management system",
    tag: "client",
    meta: "Mar – Jul 2025",
    wide: true,
    text: "Production system for a finance firm to track client deposits across interest-bearing programs, with contracts signed inside the app. Sends monthly statements, enrollment confirmations and maturity alerts automatically. Runs in Docker, with CI that tests every change before it reaches production.",
    links: [],
    stack: ["TypeScript", "MongoDB", "Express", "React", "Node", "Docker", "CI/CD"],
  },
];

export function Projects() {
  return (
    <Section id="projects" command="ls ~/projects" title="Selected work" note={`${projects.length} items`}>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </Section>
  );
}

// Also used by Certificates and Contact for the same bordered card look.
export function ProjectCard({ name, tag, meta, text, links = [], stack = [], wide }: {
  name: string;
  tag: string;
  meta: string;
  text: string;
  links?: { label: string; href: string }[];
  stack?: string[];
  wide?: boolean;
}) {
  return (
    <article
      className={`flex min-w-0 flex-col gap-3 rounded-lg border bg-card p-[22px] transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary ${wide ? "md:col-span-2" : ""}`}
    >
      <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <span className="text-accent">{tag}</span>
        <span>{meta}</span>
      </div>
      <h3 className="text-[21px] font-semibold tracking-tight">{name}</h3>
      <p className="text-muted-foreground">{text}</p>
      {links.length > 0 && (
        <div className="flex flex-wrap gap-4 font-mono text-[13px]">
          {links.map((l) => (
            <a key={l.href + l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
      {stack.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
          {stack.map((s) => (
            <span key={s} className="rounded-sm border px-2 py-0.5 font-mono text-[11.5px] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
