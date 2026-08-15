import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import WriteupCard from "@/components/WriteupCard";
import FadeInSection from "@/components/FadeInSection";
import { writeups } from "@/lib/writeups";

export default function Home() {
  return (
    <>
      <section className="border-b border-border">
        <Container>
          <FadeInSection className="mx-auto flex max-w-2xl flex-col items-center gap-5 py-12 text-center sm:py-16">
            <Image
              src="/elijah-lilly.jpg"
              alt="Portrait of Elijah Flythe"
              width={3024}
              height={4032}
              priority
              className="h-48 w-40 rounded-2xl border border-border object-cover sm:h-56 sm:w-48"
            />
            <h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">
              Elijah Flythe
            </h1>
            <p className="max-w-xl text-base font-medium text-ink sm:text-lg">
              Cybersecurity Engineer - Threat Surface Squad, Cyber Threat Mitigations @ Eli Lilly &amp; Co.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="/resume.pdf"
                download
                className="flex min-h-11 w-full items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-bg transition-colors hover:bg-accent/85 sm:w-auto"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/elijahflythe03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 w-full items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/emflythe03/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 w-full items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
              >
                LinkedIn
              </a>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <FadeInSection className="mx-auto flex max-w-2xl flex-col items-start gap-4">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              I&apos;m Elijah Flythe, a Cybersecurity Engineer on the Threat Surface Squad within the
              Cyber Threat Mitigations organization at Eli Lilly &amp; Co., with a focus on security
              architecture and offensive security. I also founded North Carolina A&amp;T&apos;s first
              student-run cybersecurity course - now reaching 100+ students each semester.
            </p>
            <Link
              href="/about"
              className="flex min-h-11 items-center text-sm font-semibold text-accent hover:opacity-80"
            >
              Read more →
            </Link>
          </FadeInSection>
        </Container>
      </section>

      <section className="border-t border-border py-14 sm:py-20">
        <Container>
          <FadeInSection>
            <h2 className="mb-8 text-2xl font-extrabold text-heading sm:text-3xl">
              Featured Write-ups
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {writeups
                .filter((writeup) => writeup.featured)
                .map((writeup) => (
                  <WriteupCard key={writeup.slug} writeup={writeup} />
                ))}
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <FadeInSection className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
            <h2 className="text-2xl font-extrabold text-heading sm:text-3xl">
              See what else I&apos;ve built
            </h2>
            <Link
              href="/projects"
              className="flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-bg transition-colors hover:bg-accent/85"
            >
              View Projects
            </Link>
          </FadeInSection>
        </Container>
      </section>
    </>
  );
}
