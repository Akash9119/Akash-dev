import { Section } from "@/components/Section";

const jobs = [
  {
    tag: "HEAD",
    when: "Feb 2024 – now",
    title: "Junior Developer",
    org: "Vardaam Web Solutions",
    points: [
      <>Delivered <b>60+ client projects (30+ live)</b> across React, WordPress and Laravel/Filament, for clients including MAFP, PLRB and SFAA.</>,
      <>Built the <b>Seamless AMS</b> WordPress plugin from scratch: <b>40+ REST routes</b> for SSO, auth, data retrieval and template validation, and <b>35+ components</b> in each of Elementor, Gutenberg and WPBakery, plus shortcodes.</>,
      <>Built the Seamless AMS marketing site in React + Vite for a platform covering events, donations, memberships and courses.</>,
      <>Integrated <b>Stripe in 15+ projects</b> and fixed production issues like webhook failures and API connection errors. MAFP reported <b>20% sales growth</b> after the new payment flow went live.</>,
      <>Connected client websites to Zoho, HubSpot and Salesforce CRMs with WordPress plugins and custom PHP.</>,
    ],
  },
  {
    tag: "freelance",
    when: "2025 – 2026",
    title: "Freelance developer",
    org: "part-time",
    points: [
      <>Shipped a <b>MERN + TypeScript</b> money-management system for a finance firm, with Docker and a CI/CD flow that runs tests before every production merge.</>,
      <>Built the <b>BACS</b> React Native (Expo) shopping app with a Python FastAPI backend, live on Google Play.</>,
    ],
  },
  {
    tag: "init",
    when: "Oct 2023 – Jan 2024",
    title: "Jr. Full Stack Java Developer Trainee",
    org: "Tata STRIVE",
    points: [<>Built a full-stack learning and quiz platform with a team during the 4-month programme, working in Agile/Scrum sprints.</>],
  },
];

export function Experience() {
  return (
    <Section id="experience" command={'git log --author="akash"'} title="Experience">
      <div>
        {jobs.map((job) => (
          <article key={job.title} className="grid gap-2 border-b border-dashed py-[26px] last:border-b-0 sm:grid-cols-[150px_1fr] sm:gap-7">
            <p className="font-mono text-[13px] tabular-nums text-muted-foreground">
              <span className="block text-primary">{job.tag}</span>
              {job.when}
            </p>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight">
                {job.title} <small className="text-[15px] font-normal text-muted-foreground">· {job.org}</small>
              </h3>
              <ul className="mt-3 grid max-w-[68ch] gap-2 text-muted-foreground [&_b]:font-medium [&_b]:text-foreground">
                {job.points.map((p, i) => (
                  <li key={i} className="relative pl-[22px] before:absolute before:left-0 before:font-mono before:text-ok before:content-['+']">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
