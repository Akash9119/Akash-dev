import { useState } from "react";
import { Section } from "@/components/Section";
import { TerminalWindow } from "@/components/Hero";

const contacts = [
  { key: "email", label: "akashj.vasava@gmail.com", href: "mailto:akashj.vasava@gmail.com", copy: "akashj.vasava@gmail.com" },
  { key: "phone", label: "+91 95862 93916", href: "tel:+919586293916", copy: "+919586293916" },
  { key: "linkedin", label: "in/akash-vasava ↗", href: "https://www.linkedin.com/in/akash-vasava/" },
  { key: "github", label: "Akash9119 ↗", href: "https://github.com/Akash9119" },
  { key: "x", label: "@AkashjVasava ↗", href: "https://x.com/AkashjVasava" },
];

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState("copy");
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("copy"), 1500);
  };
  return (
    <button type="button" onClick={onClick} className="rounded-sm border px-2 py-0.5 font-mono text-xs text-muted-foreground hover:border-muted-foreground hover:text-foreground">
      {state}
    </button>
  );
}

export function Contact() {
  return (
    <Section id="contact" command="cat contact.txt" title="Let's talk">
      <div className="grid items-start gap-4 md:grid-cols-2">
        <TerminalWindow title="contact.txt">
          <dl className="px-[18px] py-2 text-sm">
            {contacts.map((c) => (
              <div key={c.key} className="grid grid-cols-[9ch_1fr_auto] items-center gap-3 border-b border-dashed py-3.5 last:border-b-0">
                <dt className="text-muted-foreground">{c.key}</dt>
                <dd className="min-w-0 [overflow-wrap:anywhere]">
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-primary">
                    {c.label}
                  </a>
                </dd>
                {c.copy ? <CopyButton text={c.copy} /> : <span />}
              </div>
            ))}
          </dl>
        </TerminalWindow>

        <article className="flex flex-col gap-3 rounded-lg border bg-card p-[22px]">
          <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span className="text-accent">resume</span>
            <span>PDF · 1 page</span>
          </div>
          <h3 className="text-[21px] font-semibold tracking-tight [overflow-wrap:anywhere]">Akash_Vasava_Full_Stack_Developer.pdf</h3>
          <p className="text-muted-foreground">Full details, dates and links in one page.</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="/resume.pdf" download="Akash_Vasava_Full_Stack_Developer.pdf" className="rounded border border-primary bg-primary px-[18px] py-[11px] font-mono text-sm font-semibold text-primary-foreground">
              Download resume ↓
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded border bg-card px-[18px] py-[11px] font-mono text-sm hover:border-muted-foreground">
              Open in browser ↗
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
}
