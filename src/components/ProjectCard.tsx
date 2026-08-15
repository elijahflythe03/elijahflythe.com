import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6">
      <h3 className="text-lg font-bold text-heading">{project.title}</h3>

      {project.description.map((paragraph) => (
        <p key={paragraph} className="text-sm leading-relaxed text-muted">
          {paragraph}
        </p>
      ))}

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-bg px-2.5 py-0.5 text-xs font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.badge && (
        <Link
          href={project.badge.href}
          className="mt-auto flex min-h-11 w-fit items-center rounded-full bg-accent/15 px-3 text-xs font-semibold text-accent hover:bg-accent hover:text-bg"
        >
          {project.badge.label}
        </Link>
      )}
    </div>
  );
}
