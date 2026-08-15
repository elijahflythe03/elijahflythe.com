import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/Container";
import Markdown from "@/components/Markdown";
import FadeInSection from "@/components/FadeInSection";
import { DifficultyBadge, PlatformBadge, TagBadge } from "@/components/Badge";
import { getWriteup, writeups } from "@/lib/writeups";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return writeups.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const writeup = getWriteup(slug);
  if (!writeup) return {};
  return {
    title: `${writeup.title} - Elijah Flythe`,
    description: writeup.teaser,
  };
}

function readContent(slug: string): string {
  const filePath = path.join(process.cwd(), "src", "content", "writeups", `${slug}.md`);
  return fs.readFileSync(filePath, "utf-8");
}

export default async function WriteupPage({ params }: Props) {
  const { slug } = await params;
  const writeup = getWriteup(slug);
  if (!writeup) notFound();

  const content = readContent(slug);

  return (
    <Container className="py-12 sm:py-16">
      <Link
        href="/writeups"
        className="mb-6 flex min-h-11 w-fit items-center text-sm font-semibold text-accent hover:opacity-80"
      >
        ← Back to Write-ups
      </Link>

      <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">{writeup.title}</h1>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <PlatformBadge platform={writeup.platform} />
        <DifficultyBadge difficulty={writeup.difficulty} />
        {writeup.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      <FadeInSection className="mt-10 max-w-3xl">
        <Markdown content={content} />
      </FadeInSection>
    </Container>
  );
}
