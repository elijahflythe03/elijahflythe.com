import type { Metadata } from "next";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import FadeInSection from "@/components/FadeInSection";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects - Elijah Flythe",
  description: "Security engineering and research case studies by Elijah Flythe.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-2xl text-base text-muted">
        Case studies spanning applied ML, offensive security lab infrastructure, and research
        conducted at NC A&amp;T and NASA.
      </p>

      <FadeInSection className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </FadeInSection>
    </Container>
  );
}
