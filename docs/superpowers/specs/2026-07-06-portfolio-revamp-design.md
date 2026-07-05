# shaozhi-portfolio — Redesign & Restructure Spec

**Date:** 2026-07-06
**Repo:** https://github.com/ShaoZhi21/shaozhi-portfolio

## Goal

Replace the current dark, effect-heavy, multi-accent "AI-slop" portfolio with a clean, light,
**crisp-modern** site. Simplify the content (less self-promotion), remove the ShaoAI chatbot, and
add an MDX-based **Writeups** section (Blogs + Interviews) for long-form posts and personal
interview-process notes.

## Decisions (from brainstorming)

- **Visual direction:** crisp modern, light. No dark theme, no gimmick animations.
- **Remove ShaoAI** chat entirely (component, API route, responses data, dependency, all references).
- **Simplify / de-brag:** drop vanity stat counters and fake "fun stats"; understated About with a
  "Now" block.
- **Content system:** MDX files on the filesystem — `gray-matter` (frontmatter) +
  `next-mdx-remote/rsc` (render) + `rehype-pretty-code` (code blocks) + `@tailwindcss/typography` (prose).
  Chosen over Contentlayer (poorly maintained) and a CMS (overkill).
- **Writeups hub:** `/writeups` with two categories — **Blogs** and **Interviews** — via a filter
  toggle. Posts differ only by frontmatter `category`.
- **Scaffold now, fill later:** migrate existing real content; ship 2 example posts (1 blog, 1
  interview) + clearly-marked placeholders so new posts are just new `.mdx` files.
- **README:** hybrid — short personal intro + dev setup/structure/how-to-add-a-post.

## Visual system

| Token | Value | Use |
| --- | --- | --- |
| Background | `#FFFFFF`, alt sections `#FAFAF9` | calm, airy |
| Ink | `#18181B` primary, `#52525B` muted | text |
| Accent | Indigo `#4F46E5` (single, swappable) | links, buttons, highlights |
| Border | `#ECECEC` hairline | card edges, dividers |
| Cards | white · `rounded-2xl` · hairline border · soft shadow | projects, posts |
| Display font | Space Grotesk (`next/font`) | headings |
| Body font | Inter (`next/font`) | body |

**Motion:** gentle fade / slide-up on scroll, small hover lift only. Remove spinning ring, glow
pulse, ping dots, shimmer badges, typewriter role-cycler.

**Foundation cleanup:** collapse the two contradicting theme systems (globals.css vs
tailwind.config) and the duplicate `.glass-card` / `.gradient-text` definitions into one clean
Tailwind theme + minimal globals. Remove unused keyframes.

## Architecture / routes

```
/                    Home (single scroll, restructured & simplified)
/writeups            Writeups index — card grid + Blogs/Interviews toggle
/writeups/[slug]     A post (MDX, @tailwindcss/typography prose)
```

- `content/writeups/*.mdx` — post source files.
- `src/lib/writeups.ts` — read/parse posts (list, by-slug, sorted, filter by category).

## Home sections (simplified)

1. **Hero** — name, one-line what-I-do, links to Work + Writeups, socials. Understated, no gimmicks.
2. **About + Now** — short, human intro; a "Now / currently" block (placeholder for user's 2025–26
   updates); location, languages, genuine interests (salvaged from orphaned FunFacts). No vanity stats.
3. **Skills** — same real data, compact calm grid, monochrome icons tinting on hover.
4. **Projects** — real data kept; filterable by category (Mobile / Web / AI / Product / Data);
   clean cards, tasteful hover.
5. **Background** — compact: NUS education + a tidy list of notable hackathon/award highlights
   (replaces the finicky auto-scrolling timeline).
6. **Writeups preview** — latest 2–3 posts as cards → link to `/writeups`.
7. **Contact / footer** — simplified mailto form + socials (keep existing Nodemailer `/api/contact`).

## Shared UI primitives

`Container`, `Section`, `Button`, `Card`, `Badge`, `Nav`, `Footer`, `ProjectCard`, `PostCard`,
`Prose` wrapper. All in the new light system.

## MDX frontmatter

```yaml
title: string
date: YYYY-MM-DD
category: "Blog" | "Interview"
excerpt: string
tags: string[]
published: boolean
```

Reading time derived at parse time.

## Removals

- Delete: `src/app/components/Chat.tsx`, `src/app/api/chat/route.ts`, `src/utils/chatResponses.ts`,
  `src/app/components/FunFacts.tsx` (orphaned).
- Remove `@google/generative-ai` from dependencies; remove all ShaoAI nav/CTA references.
- Keep `src/app/api/contact/route.ts` (Nodemailer) — restyle the contact UI only, no logic change.

## Build sequence

1. Foundation: clean Tailwind theme + fonts + globals; kill dead CSS/animations; delete ShaoAI +
   FunFacts; update `package.json` name → `shaozhi-portfolio`.
2. Shared UI primitives + Nav + Footer in the new system.
3. Rebuild home sections top-to-bottom.
4. MDX pipeline + `/writeups` + `/writeups/[slug]` + 2 example posts.
5. README rewrite + polish + run in browser to verify.

## Out of scope

- Backend/API rewrites (contact route logic unchanged).
- Analytics, i18n, auth.
- Real personal content — user fills in life updates and interview stories later via `.mdx` files
  and the "Now" placeholder.
