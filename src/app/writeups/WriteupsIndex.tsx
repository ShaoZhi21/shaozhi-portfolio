'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import PostCard from '../components/PostCard'
import type { WriteupMeta } from '@/lib/writeups'

const TABS = [
  { label: 'All', value: 'All' },
  { label: 'Blogs', value: 'Blog' },
  { label: 'Interviews', value: 'Interview' },
] as const

type Tab = (typeof TABS)[number]['value']

export default function WriteupsIndex({ posts }: { posts: WriteupMeta[] }) {
  const [tab, setTab] = useState<Tab>('All')
  const shown = tab === 'All' ? posts : posts.filter((p) => p.category === tab)

  const count = (value: Tab) =>
    value === 'All' ? posts.length : posts.filter((p) => p.category === value).length

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setTab(t.value)}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs transition-colors',
              tab === t.value
                ? 'border-accent bg-accent text-white'
                : 'border-line bg-paper text-muted hover:border-ink/25 hover:text-ink'
            )}
          >
            {t.label}
            <span className={cn('tabular-nums', tab === t.value ? 'text-white/70' : 'text-faint')}>
              {count(t.value)}
            </span>
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center font-mono text-sm text-faint">
          Nothing here yet — check back soon.
        </p>
      )}
    </div>
  )
}
