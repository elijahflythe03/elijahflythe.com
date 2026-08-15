"use client";

import { useMemo, useState } from "react";
import WriteupCard from "@/components/WriteupCard";
import type { Difficulty, WriteupMeta } from "@/lib/writeups";

const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

export default function WriteupList({ writeups }: { writeups: WriteupMeta[] }) {
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [tag, setTag] = useState<string>("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    writeups.forEach((w) => w.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [writeups]);

  const filtered = writeups.filter((w) => {
    const matchesDifficulty = difficulty === "All" || w.difficulty === difficulty;
    const matchesTag = tag === "All" || w.tags.includes(tag);
    return matchesDifficulty && matchesTag;
  });

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Difficulty
          </span>
          <div className="flex flex-wrap gap-1.5">
            {(["All", ...difficulties] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDifficulty(d)}
                className={`flex min-h-11 items-center rounded-full px-3 text-xs font-semibold transition-colors ${
                  difficulty === d
                    ? "bg-accent text-bg"
                    : "bg-surface text-muted border border-border hover:border-accent"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">Tag</span>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="min-h-11 rounded-full border border-border bg-surface px-3 text-xs font-semibold text-muted"
          >
            <option value="All">All</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted">No write-ups match those filters.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((writeup) => (
            <WriteupCard key={writeup.slug} writeup={writeup} />
          ))}
        </div>
      )}
    </div>
  );
}
