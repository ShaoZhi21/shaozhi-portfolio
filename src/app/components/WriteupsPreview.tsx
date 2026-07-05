import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from './ui'
import { Reveal } from './Reveal'
import PostCard from './PostCard'
import { getAllWriteups } from '@/lib/writeups'

export default function WriteupsPreview() {
  const posts = getAllWriteups().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <Section id="writeups" alt>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Writeups"
          title="Notes & interviews"
          description="Blogs on what I'm learning, and honest writeups from my own interview process."
        />
        <Link
          href="/writeups"
          className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          All writeups
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06} className="h-full">
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
