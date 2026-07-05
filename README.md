# shaozhi-portfolio

Personal site of **Soong Shao Zhi** — a third-year Computer Science student at NUS working on
AI agents, inference, and model performance, and incoming Applied ML Engineer at Fireworks AI.

A clean, light, content-driven portfolio with a built-in **Writeups** section (blogs + interview
notes) authored in MDX.

🔗 **Live:** [soongshaozhi.com](https://soongshaozhi.com)

---

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + `@tailwindcss/typography`
- **Content:** MDX (`next-mdx-remote`, `gray-matter`, `rehype-pretty-code` + Shiki, `remark-gfm`)
- **Motion:** Framer Motion (used sparingly)
- **Fonts:** Space Grotesk (display) · Inter (body) · JetBrains Mono (labels) via `next/font`
- **Contact form:** Nodemailer route
- **Deploy:** Vercel

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm start` (serve the build),
`npm run lint`.

## Project structure

```
content/writeups/*.mdx     ← blog & interview posts (add files here)
src/
├─ app/
│  ├─ components/           ← Nav, Hero, About, Background, Projects, Skills,
│  │                          Hackathons, WriteupsPreview, Contact, Footer + ui primitives
│  ├─ writeups/             ← /writeups index and /writeups/[slug] post pages
│  ├─ api/contact/          ← Nodemailer contact endpoint
│  ├─ layout.tsx            ← fonts, metadata, Nav + Footer
│  ├─ page.tsx              ← the home page (composes the sections)
│  └─ globals.css           ← theme base + code-block styles
└─ lib/
   ├─ data.ts               ← ALL site content (edit this)
   ├─ writeups.ts           ← reads/parses MDX posts
   └─ utils.ts              ← cn(), formatDate()
```

## Editing content

**Almost everything is in [`src/lib/data.ts`](src/lib/data.ts)** — no component code required:

- `profile` — name, headline, subhead, résumé link, and the `● Currently` status line
- `about` — bio paragraphs, focus areas, languages
- `reading` — the "Currently reading" list (`title`, `source`, `note`, `url`)
- `travel` — the "Off the clock" photos (`src`, `caption`, `alt`)
- `experience` — roles with logos (set `current` / `upcoming` for the badges)
- `education` — degree, standing, and coursework chips
- `projects` — set `featured: true` to show it on the home grid, or `caseStudy: true` to group
  it under "Case studies"; omit `image` for a placeholder tile; add `award` **or** `event` for the badge
- `highlights` — hackathons & competitions (award rows show first; the rest expand on "Show all")
- `skills`, `nav`, `socials`

## Adding a writeup (blog or interview)

Create a file in `content/writeups/` (e.g. `my-post.mdx`) with frontmatter:

```mdx
---
title: "Your title"
date: "2026-07-06"        # YYYY-MM-DD, controls ordering
category: "Blog"          # "Blog" or "Interview" — drives the /writeups filter
excerpt: "One or two sentences shown on the card."
tags: ["Tag one", "Tag two"]
published: true           # set false to hide (draft)
---

Write in Markdown/MDX. Fenced code blocks are syntax-highlighted, GFM tables work,
and reading time is calculated automatically.
```

The post appears on `/writeups` (filtered by category) and gets its own page at
`/writeups/my-post`. No code changes needed.

## Environment variables

Only the contact form needs these (create `.env.local`):

```bash
EMAIL_USER=your-gmail@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
```

Without them the form falls back to prompting visitors to email directly.

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com) — defaults work out of the box.
Add the two environment variables above in the Vercel project settings for the contact form.
