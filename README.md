# elijahflythe.com

Personal portfolio site for Elijah Flythe — cybersecurity engineer. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — brick red / sand theme, defined in [src/app/globals.css](src/app/globals.css)
- **react-markdown** (+ `remark-gfm`, `rehype-raw`, `rehype-highlight`) — renders write-up Markdown with syntax-highlighted code blocks and responsive images

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — routes: `/`, `/about`, `/projects`, `/writeups`, `/writeups/[slug]`
- `src/components/` — Nav, Footer, cards, badges, timeline, markdown renderer
- `src/lib/` — data: `writeups.ts`, `projects.ts`, `experience.ts`
- `src/content/writeups/*.md` — write-up body content (one Markdown file per slug, matched against `src/lib/writeups.ts`)

### Adding a new write-up

1. Add an entry to the `writeups` array in [src/lib/writeups.ts](src/lib/writeups.ts) (slug, title, platform, difficulty, tags, teaser).
2. Add `src/content/writeups/<slug>.md` with the write-up body.

The `/writeups` index and `/writeups/[slug]` route pick up new entries automatically.

## Resume

`public/resume.pdf` is currently a **placeholder file** — replace it with the real resume PDF (same filename, `public/resume.pdf`) before deploying. The site's "Resume" nav link and homepage download button both point to `/resume.pdf` and need no code changes once the real file is in place.

## Deploying

This is a zero-config Next.js project — `vercel deploy` (or connecting the repo in the Vercel dashboard) will detect and build it automatically.

The custom domain (`elijahflythe.com`) is connected via the Vercel dashboard after deploy — no code changes are required for that step, and no domain is hardcoded anywhere in the app.
