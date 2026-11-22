import { Section } from "@/components/Section";

const stack = {
  genai: ["LangChain", "LangGraph", "MCP", "RAG", "Vector search", "Prompt engineering"],
  languages: ["Python", "JavaScript", "TypeScript", "PHP", "SQL"],
  frontend: ["React", "Next.js", "React Native", "Expo", "Vite", "Tailwind CSS"],
  backend: ["FastAPI", "Node.js", "Express", "REST", "GraphQL", "JWT", "SSO", "Laravel"],
  databases: ["MongoDB", "MySQL"],
  integrations: ["Stripe", "Razorpay", "Shopify", "Zoho", "HubSpot", "Salesforce"],
  devops: ["Git", "Docker", "CI/CD", "Render", "Cloudflare Pages", "Vercel", "Expo EAS"],
  cms: ["WordPress", "WooCommerce", "Elementor"],
};

const pad = Math.max(...Object.keys(stack).map((k) => k.length)) + 3;

export function Skills() {
  const entries = Object.entries(stack);
  return (
    <Section id="stack" command="cat stack.json" title="Stack">
      <pre className="overflow-x-auto rounded-lg border bg-card px-6 py-[22px] font-mono text-sm leading-[1.9]">
        {"{\n"}
        {entries.map(([key, items], i) => (
          <span key={key}>
            {"  "}
            <span className="text-accent">"{key}"</span>
            {":".padEnd(pad - key.length)}[
            {items.map((s, j) => (
              <span key={s}>
                <span className="text-primary">"{s}"</span>
                {j < items.length - 1 ? ", " : ""}
              </span>
            ))}
            ]{i < entries.length - 1 ? ",\n" : "\n"}
          </span>
        ))}
        {"}"}
      </pre>
    </Section>
  );
}
