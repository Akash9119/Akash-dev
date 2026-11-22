import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "stack", href: "#stack" },
  { label: "certificates", href: "#certificates" },
  { label: "contact", href: "#contact" },
];

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1040px] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="font-mono text-[15px] font-semibold">
          ~/akash<span className="text-primary">_</span>
        </a>

        <div className="hidden gap-5 font-mono text-[13px] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="group text-muted-foreground hover:text-foreground">
              <span className="text-border group-hover:text-primary">./</span>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded border border-primary px-3 py-1.5 font-mono text-xs text-primary hover:bg-primary hover:text-primary-foreground"
          >
            hire me
          </a>
        </div>
      </div>
    </nav>
  );
}
