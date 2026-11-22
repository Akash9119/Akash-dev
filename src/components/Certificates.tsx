import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/Projects";

// Add a new certificate by appending an entry here; the grid adapts.
const certificates = [
  {
    name: "Meta Front-End Developer",
    issuer: "Meta · Coursera",
    date: "Jul – Sep 2023",
    text: "Professional Certificate covering React, JavaScript, HTML/CSS, UX/UI principles and front-end testing. Credential ID 4CMSZE4922RC.",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/4CMSZE4922RC",
  },
];

export function Certificates() {
  return (
    <Section id="certificates" command="ls ~/certificates" title="Certificates" note={`${certificates.length} verified`}>
      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((c) => (
          <ProjectCard
            key={c.name}
            name={c.name}
            tag={c.issuer}
            meta={c.date}
            text={c.text}
            links={[{ label: "verify", href: c.url }]}
            wide={certificates.length % 2 === 1 && c === certificates[certificates.length - 1]}
          />
        ))}
      </div>
    </Section>
  );
}
