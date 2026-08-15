import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "About - Elijah Flythe",
  description:
    "Cybersecurity engineer focused on security architecture and offensive security, and founder of NC A&T's first student-led cybersecurity course.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">About</h1>

      <FadeInSection className="mt-8 max-w-3xl">
        <h2 className="text-xl font-bold text-heading">About Me</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          I&apos;m Elijah Flythe, a recent graduate and Cybersecurity Engineer on the Threat
          Surface Squad within the Cyber Threat Mitigations organization at Eli Lilly &amp; Co. -
          the world&apos;s leading medicine company. I&apos;m an avid learner, deeply passionate
          about both security architecture and offensive security, and I like living at the
          intersection of the two: understanding how systems are built securely, and how they
          break.
        </p>
        <Link
          href="/experience"
          className="mt-4 flex min-h-11 w-fit items-center text-sm font-semibold text-accent hover:opacity-80"
        >
          See my experience & skills →
        </Link>
      </FadeInSection>

      <FadeInSection className="mt-10 max-w-3xl">
        <h2 className="text-xl font-bold text-heading">Community Impact</h2>
        <div className="mt-3 space-y-4 text-base leading-relaxed text-muted">
          <p>
            Beyond the technical work, I care about giving back - through knowledge and through
            opportunity. In my last semester at North Carolina A&amp;T, I founded our school&apos;s
            first student-run cybersecurity course, backed and funded by the Center of Excellence
            for Cybersecurity research, education, and outreach.
          </p>
          <p>
            The idea came from a gap I saw at NCAT: an abundance of students eager to learn and
            grow in cyber, but a real lack of accessible material and opportunity to do it.
            Alongside a few friends who brought above-average knowledge and experience in the
            field, I built a course designed to be for students, by students - passing along what
            we&apos;d learned and opening doors to research, internships, and scholarships
            sponsored by the research center we worked at.
          </p>
          <p>
            Today, that course has created teaching and TA positions, brought new visibility to
            NCAT&apos;s cybersecurity representation, and draws over 100 students each semester
            across majors like CS, IT, and EE. We&apos;ve built collaborations with ACM and Aggies
            in Technology to host CTFs and cybersecurity awareness events on campus. It&apos;s
            marked a real shift in NCAT&apos;s cybersecurity culture - a self-sustaining,
            student-driven learning environment that outlasted my time there.
          </p>
        </div>

        <figure className="mt-6">
          <Image
            src="/cyberops-founders.jpg"
            alt="Cyber Operations NC A&T founders: Marquise Simpson, Aiden Harris, Elijah Flythe, and Amauri Goines"
            width={1170}
            height={1276}
            className="w-full rounded-xl border border-border"
          />
          <figcaption className="mt-2 text-sm text-muted">
            The founding team behind Cyber Operations at NC A&amp;T, the student-led course I started.
          </figcaption>
        </figure>
      </FadeInSection>
    </Container>
  );
}
