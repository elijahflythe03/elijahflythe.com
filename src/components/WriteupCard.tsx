import Link from "next/link";
import type { WriteupMeta } from "@/lib/writeups";
import { DifficultyBadge, PlatformBadge } from "@/components/Badge";

export default function WriteupCard({ writeup }: { writeup: WriteupMeta }) {
  return (
    <Link
      href={`/writeups/${writeup.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
    >
      <div className="flex flex-wrap items-center gap-2">
        <PlatformBadge platform={writeup.platform} />
        <DifficultyBadge difficulty={writeup.difficulty} />
      </div>
      <h3 className="text-lg font-bold text-heading group-hover:text-accent">
        {writeup.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{writeup.teaser}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
        {writeup.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bg px-2.5 py-0.5 text-xs font-medium text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
