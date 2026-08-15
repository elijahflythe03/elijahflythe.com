import type { Metadata } from "next";
import Container from "@/components/Container";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "Resume - Elijah Flythe",
  description: "Resume of Elijah Flythe, cybersecurity engineer.",
};

export default function ResumePage() {
  return (
    <Container className="py-12 sm:py-16">
      <FadeInSection className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">Resume</h1>
          <p className="mt-3 max-w-xl text-base text-muted">
            View my resume below, or download a copy for your records.
          </p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="flex min-h-11 w-full items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-bg transition-colors hover:bg-accent/85 sm:w-auto sm:shrink-0"
        >
          Download PDF
        </a>
      </FadeInSection>

      <FadeInSection className="mt-8 h-[70vh] w-full overflow-hidden rounded-xl border border-border bg-surface sm:h-[80vh]">
        <iframe src="/resume.pdf" title="Elijah Flythe's resume" className="h-full w-full" />
      </FadeInSection>
    </Container>
  );
}
