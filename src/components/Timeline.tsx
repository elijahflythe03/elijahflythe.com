import type { ExperienceEntry } from "@/lib/experience";

export default function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol>
      {entries.map((entry, i) => (
        <li key={`${entry.org}-${entry.period}`} id={entry.id} className="flex gap-4 scroll-mt-24">
          <div className="flex w-4 flex-col items-center">
            <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-bg bg-accent" />
            {i < entries.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
          </div>

          <div className={`min-w-0 flex-1 ${i < entries.length - 1 ? "pb-10" : ""}`}>
            <h3 className="text-base font-bold text-heading sm:text-lg">{entry.title}</h3>
            <p className="text-sm font-medium text-accent">{entry.org}</p>
            <p className="mt-0.5 text-xs text-muted sm:text-sm">
              {entry.period}
              {entry.location ? ` · ${entry.location}` : ""}
            </p>
            {entry.description && (
              <p className="mt-2 text-sm leading-relaxed text-muted">{entry.description}</p>
            )}

            {entry.subEntries && (
              <ol className="mt-4">
                {entry.subEntries.map((sub, j) => (
                  <li key={sub.title} id={sub.id} className="flex gap-3 scroll-mt-24">
                    <div className="flex w-3 flex-col items-center">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-bg bg-accent/50" />
                      {j < entry.subEntries!.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div className={`min-w-0 flex-1 ${j < entry.subEntries!.length - 1 ? "pb-4" : ""}`}>
                      <h4 className="text-sm font-bold text-heading">{sub.title}</h4>
                      <p className="mt-0.5 text-xs text-muted">{sub.period}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{sub.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
