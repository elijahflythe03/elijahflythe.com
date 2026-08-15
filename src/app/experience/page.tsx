import type { Metadata } from "next";
import Container from "@/components/Container";
import Timeline from "@/components/Timeline";
import FadeInSection from "@/components/FadeInSection";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience - Elijah Flythe",
  description:
    "Work experience, technical skills, and education/certifications for Elijah Flythe, cybersecurity engineer.",
};

const skillGroups = [
  {
    label: "Cloud & Infrastructure",
    skills: [
      "Azure (Defender, VNets, NSGs, Key Vault, Private Endpoints)",
      "Terraform",
      "Zero-Trust Architecture",
      "Network Security Engineering",
      "Git",
      "GitHub Actions",
    ],
  },
  {
    label: "Security Tools & Methodologies",
    skills: [
      "STRIDE",
      "PASTA",
      "DREAD",
      "SIEM (Stellar Cyber)",
      "ASPM (Checkmarx One)",
      "CSPM (Wiz)",
      "Kali Linux",
      "OSINT",
      "Axonius",
      "Seemplicity",
      "Crowdstrike Falcon",
    ],
  },
  {
    label: "Compliance & Automation",
    skills: [
      "NIST 800-53/800-61r2",
      "FERPA",
      "SOC 2",
      "Python",
      "Bash",
      "Security Process Automation",
      "Power Automate",
    ],
  },
  {
    label: "Offensive Security",
    skills: [
      "Cyber Threat Intel",
      "Risk Assessment",
      "Vulnerability Assessment",
      "Attack Path Mapping",
      "Manual Penetration Testing (Web App, Network, Active Directory)",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">Experience</h1>
      <p className="mt-3 max-w-2xl text-base text-muted">
        Work history, technical skills, and education/certifications.
      </p>

      <FadeInSection className="mt-12">
        <h2 className="text-xl font-bold text-heading">Experience</h2>
        <div className="mt-6 max-w-3xl">
          <Timeline entries={experience} />
        </div>
      </FadeInSection>

      <FadeInSection className="mt-4 max-w-3xl">
        <h2 className="text-xl font-bold text-heading">Skills</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-bold text-accent">{group.label}</h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="mt-12 max-w-3xl">
        <h2 className="text-xl font-bold text-heading">Education &amp; Certifications</h2>
        <div className="mt-4 space-y-1 text-base text-muted">
          <p>
            <span className="font-semibold text-heading">
              North Carolina A&amp;T State University
            </span>{" "}
            - Bachelor of Information Technology - Dec 2025
          </p>
          <p>Stellar Cyber Certified Associate (SIEM) - May 2024</p>
          <p>Junior Penetration Tester (PT1) - August 2026</p>
        </div>
      </FadeInSection>
    </Container>
  );
}
