export type Difficulty = "Easy" | "Medium" | "Hard";

export type WriteupMeta = {
  slug: string;
  title: string;
  platform: string;
  difficulty: Difficulty;
  tags: string[];
  teaser: string;
  featured?: boolean;
};

export const writeups: WriteupMeta[] = [
  {
    slug: "k2-basecamp",
    title: "K2 Base Camp",
    platform: "TryHackMe",
    difficulty: "Hard",
    tags: ["Web", "XSS", "SQL Injection", "Session Hijacking", "Privilege Escalation"],
    teaser:
      "Chained stored XSS, admin session hijacking, and SQL injection to compromise credentials, then escalated to root via log analysis.",
    featured: true,
  },
  {
    slug: "lookback",
    title: "Lookback",
    platform: "TryHackMe",
    difficulty: "Medium",
    tags: ["Web", "Default Credentials", "Command Injection", "Metasploit", "Windows"],
    teaser:
      "Exploited default credentials and command injection to gain a foothold, then escalated using a Metasploit module for a known MS Exchange vulnerability.",
    featured: true,
  },
  {
    slug: "silver",
    title: "Silver",
    platform: "TryHackMe",
    difficulty: "Medium",
    tags: ["Web", "IDOR", "CVE-2024-36042", "Auth Bypass", "Privilege Escalation"],
    teaser:
      "Used a documented Silverpeas authentication bypass (CVE-2024-36042) and an IDOR vulnerability to move from unauthenticated access to root.",
    featured: true,
  },
  {
    slug: "thompson",
    title: "Thompson",
    platform: "TryHackMe",
    difficulty: "Medium",
    tags: ["Web", "Apache Tomcat", "Credential Leak", "WAR Upload", "Privilege Escalation"],
    teaser:
      "Leaked Tomcat Manager credentials via a stock 401 error page, deployed a malicious WAR payload for a reverse shell, then escalated to root through a world-writable script invoked by a root cron job.",
  },
  {
    slug: "billing",
    title: "Billing",
    platform: "TryHackMe",
    difficulty: "Easy",
    tags: ["Web", "CVE-2023-30258", "Unauthenticated RCE", "Metasploit", "Privilege Escalation"],
    teaser:
      "Exploited an unauthenticated RCE in MagnusBilling to land an initial shell, then escalated to root by injecting a malicious fail2ban action triggered through failed SSH attempts.",
  },
];

export function getWriteup(slug: string): WriteupMeta | undefined {
  return writeups.find((w) => w.slug === slug);
}
