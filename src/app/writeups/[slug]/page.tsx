import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { Container, Tag } from '../../components/ui'
import { CategoryBadge } from '../../components/PostCard'
import { formatDate } from '@/lib/utils'
import { getWriteupBySlug, getWriteupSlugs } from '@/lib/writeups'

export function generateStaticParams() {
  return getWriteupSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getWriteupBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Shao Zhi`,
    description: post.excerpt,
  }
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: 'github-light', keepBackground: false }]],
  },
} as Parameters<typeof compileMDX>[0]['options']

export default async function WriteupPage({ params }: { params: { slug: string } }) {
  const post = getWriteupBySlug(params.slug)
  if (!post) notFound()

  const { content } = await compileMDX({ source: post.content, options: mdxOptions })

  return (
    <Container className="py-14 sm:py-16">
      <div className="mx-auto max-w-prose">
        <Link
          href="/writeups"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={14} /> Writeups
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] text-faint">
            <CategoryBadge category={post.category} />
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl">
            {post.title}
          </h1>
          {post.excerpt && <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>}
          {post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}
        </header>

        <hr className="my-8 border-line" />

        <article className="prose prose-ink max-w-none">{content}</article>

        <footer className="mt-14 border-t border-line pt-8">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Get in touch <ArrowRight size={15} />
          </Link>
        </footer>
      </div>
    </Container>
  )
}
