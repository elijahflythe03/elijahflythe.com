export type Project = {
  title: string;
  description: [string, string];
  tech: string[];
  badge?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "ML Malicious URL Detection",
    description: [
      "Built and deployed a machine learning-powered URL threat detection system capable of classifying malicious web traffic across four threat categories: phishing, malware, defacement, and benign, achieving over 96% accuracy. The system processes raw URLs through a deep learning pipeline and serves real-time predictions via a REST API and web interface, making it a practical, production-ready cybersecurity tool.",
      "This project demonstrates end-to-end ML engineering from data preprocessing and model training to deployment, bridging the gap between offensive security knowledge and applied AI.",
    ],
    tech: ["Python", "Machine Learning", "Deep Learning", "REST API"],
  },
  {
    title: "Red Team Lab Virtualization",
    description: [
      "Designed and implemented a progressive cybersecurity training environment using Proxmox virtualization to create a controlled penetration testing lab. Built a series of five Ubuntu endpoints with escalating difficulty levels, each featuring intentionally vulnerable services to simulate real-world attack scenarios.",
      "This graduated difficulty approach provides both novice and experienced security professionals with appropriate challenges to develop their offensive security skills. The custom lab environment serves as both a personal training ground and an organizational resource for red team exercises, enabling hands-on practice with exploit development, vulnerability assessment, and penetration testing techniques in a safe, isolated environment.",
    ],
    tech: ["Proxmox", "Ubuntu / Linux", "Kali Linux", "Penetration Testing"],
  },
  {
    title: "Threat Modeling and Security Assessment of Campus Smart Farm Infrastructure",
    description: [
      "Conducted a comprehensive black-box security assessment of the university's smart farm infrastructure using advanced Open Source Intelligence (OSINT) techniques. Mapped the system's architecture and data flows by reverse-engineering publicly available information to uncover hidden interconnections between IoT devices, communication protocols, and data management systems.",
      "Leveraged the IriusRisk threat modeling platform to build a detailed model of the farm's attack surface, identifying 80 potential attack vectors and evaluating the corresponding vulnerabilities and risks. Delivered actionable insights that enhanced the farm's overall cybersecurity posture and informed future hardening strategies for cyber-physical agricultural systems.",
    ],
    tech: ["OSINT", "IriusRisk", "STRIDE", "IoT Security"],
    badge: { label: "Built during: CREO", href: "/experience#creo-anchor" },
  },
  {
    title: "Water Under Fire: Enhancing Cyber Resilience and Disaster Recovery in Water Infrastructure",
    description: [
      "Conducted a NASA-funded research initiative assessing cybersecurity resilience of critical water and wastewater infrastructure against cyber-physical attacks. Evaluated widely deployed IIoT devices and SCADA architectures to identify systemic vulnerabilities, including legacy systems with outdated security controls, default credential usage, and unpatched long-standing CVEs.",
      "Leveraged these findings to develop mitigative and preventative controls that strengthened system resilience and security hygiene.",
    ],
    tech: ["SCADA", "IIoT", "Risk Assessment", "NIST 800-53"],
    badge: { label: "Built during: NASA Critical Infrastructure Research", href: "/experience#nasa-anchor" },
  },
];
