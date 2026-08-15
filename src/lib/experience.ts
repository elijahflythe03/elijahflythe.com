export type SubEntry = {
  id?: string;
  title: string;
  period: string;
  description: string;
};

export type ExperienceEntry = {
  id?: string;
  title: string;
  org: string;
  period: string;
  location?: string;
  description?: string;
  subEntries?: SubEntry[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Cyber Security Engineer",
    org: "Eli Lilly and Company",
    period: "Feb 2026 – Present",
    location: "Indianapolis, IN",
  },
  {
    title: "Cloud Security Engineer",
    org: "CampusCore",
    period: "Aug 2024 – Feb 2026",
    location: "Remote",
    description:
      "Azure Network Security Architect & Engineer for an EdTech SaaS platform",
  },
  {
    title: "Center of Excellence in Cybersecurity Research, Education and Outreach (CREO)",
    org: "North Carolina A&T State University",
    period: "Jan 2025 – Dec 2025",
    location: "Greensboro, NC",
    subEntries: [
      {
        title: "Undergraduate Cybersecurity Research Lead",
        period: "Jan – May 2025",
        description:
          "Teaching assistant for the web app ethical hacking course; performed a black-box security assessment of IIoT infrastructure and built a STRIDE-based threat model",
      },
      {
        id: "creo-anchor",
        title: "Founder & Lead Instructor",
        period: "Sep – Dec 2025",
        description:
          "Founded NCAT's first student-led cybersecurity course, providing research, project, scholarship, and internship opportunities to students",
      },
    ],
  },
  {
    title: "Security Architecture & Engineering (Internship)",
    org: "Eli Lilly and Company",
    period: "May 2025 – Aug 2025",
    location: "Indianapolis, IN",
    description:
      "Security review process optimization, integrating cloud & application security services into SDLC from design to prod",
  },
  {
    id: "nasa-anchor",
    title: "Critical Infrastructure Cybersecurity Researcher",
    org: "NASA – National Aeronautics and Space Administration",
    period: "May 2024 – Aug 2024",
  },
  {
    title: "Information Technology System Support Technician",
    org: "North Carolina A&T State University",
    period: "Jan 2023 – May 2024",
    location: "Greensboro, NC",
  },
  {
    title: "IT ERP Systems Administrator (Internship)",
    org: "W. L. Gore & Associates",
    period: "May 2023 – Jul 2023",
    location: "Elkton, MD",
    description:
      "Large scale SAP system batch job migration, automating batch jobs with Redwood RunMyJobs",
  },
];
