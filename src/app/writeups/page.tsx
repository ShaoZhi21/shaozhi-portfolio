import type { Metadata } from 'next'
import { Container } from '../components/ui'
import WriteupsIndex from './WriteupsIndex'
import { getAllWriteups } from '@/lib/writeups'

export const metadata: Metadata = {
  title: 'Writeups — Shao Zhi',
  description: 'Blogs on what I am learning, and honest writeups from my own interview process.',
}

export default function WriteupsPage() {
  // Strip the raw MDX body — the index only needs metadata.
  const posts = getAllWriteups().map(({ content, ...meta }) => meta)

  return (
    <Container className="py-16 sm:py-20">
      <header className="max-w-2xl">
        <span className="eyebrow">
          <span aria-hidden className="mr-2 inline-block h-px w-6 bg-accent/60 align-middle" />
          Writeups
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tightest text-ink sm:text-5xl">
          Notes &amp; interviews
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Things I&apos;m learning as I build, and honest writeups from my own interview process
          &mdash; kept mostly for my own memory, shared in case they help you too.
        </p>
      </header>

      <div className="mt-12">
        <WriteupsIndex posts={posts} />
      </div>
    </Container>
  )
}
