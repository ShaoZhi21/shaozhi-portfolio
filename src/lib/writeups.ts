import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type WriteupCategory = 'Blog' | 'Interview'

export interface WriteupMeta {
  slug: string
  title: string
  date: string // YYYY-MM-DD
  category: WriteupCategory
  excerpt: string
  tags: string[]
  published: boolean
  readingTime: string
}

export interface Writeup extends WriteupMeta {
  content: string // raw MDX body
}

const WRITEUPS_DIR = path.join(process.cwd(), 'content', 'writeups')

function readDir(): string[] {
  if (!fs.existsSync(WRITEUPS_DIR)) return []
  return fs.readdirSync(WRITEUPS_DIR).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
}

function parseFile(fileName: string): Writeup {
  const slug = fileName.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(WRITEUPS_DIR, fileName), 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    category: (data.category as WriteupCategory) ?? 'Blog',
    excerpt: String(data.excerpt ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    published: data.published !== false,
    readingTime: readingTime(content).text,
    content,
  }
}

/** All published writeups, newest first. */
export function getAllWriteups(): Writeup[] {
  return readDir()
    .map(parseFile)
    .filter((w) => w.published && w.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getWriteupSlugs(): string[] {
  return getAllWriteups().map((w) => w.slug)
}

export function getWriteupBySlug(slug: string): Writeup | null {
  const match = readDir().find((f) => f.replace(/\.mdx?$/, '') === slug)
  if (!match) return null
  const writeup = parseFile(match)
  return writeup.published ? writeup : null
}

export const writeupCategories: WriteupCategory[] = ['Blog', 'Interview']
