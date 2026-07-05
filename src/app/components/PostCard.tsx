import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn, formatDate } from '@/lib/utils'
import type { WriteupMeta } from '@/lib/writeups'

export function CategoryBadge({ category }: { category: WriteupMeta['category'] }) {
  return (
    <span
      className={cn(
        'rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider',
        category === 'Blog'
          ? 'border-accent/30 bg-accent-soft text-accent'
          : 'border-line bg-mist text-muted'
      )}
    >
      {category}
    </span>
  )
}

export default function PostCard({ post }: { post: WriteupMeta }) {
  return (
    <Link
      href={`/writeups/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] text-faint">
        <CategoryBadge category={post.category} />
        <span>{formatDate(post.date)}</span>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
