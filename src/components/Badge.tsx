import type { Difficulty } from "@/lib/writeups";

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "bg-accent2/15 text-accent2",
  Medium: "bg-amber/15 text-amber",
  Hard: "bg-danger/15 text-danger",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyles[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}

export function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
      {tag}
    </span>
  );
}

export function PlatformBadge({ platform }: { platform: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
      {platform}
    </span>
  );
}
