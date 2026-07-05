'use client'

import { useState } from 'react'
import { Award, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { highlights } from '@/lib/data'

export default function Hackathons() {
  const [showAll, setShowAll] = useState(false)
  const featured = highlights.filter((h) => h.award)
  const shown = showAll ? highlights : featured
  const hidden = highlights.length - featured.length

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="eyebrow">Hackathons &amp; competitions</p>
        <span className="font-mono text-xs text-faint">{highlights.length} total</span>
      </div>

      <ul className="mt-4 border-t border-line">
        {shown.map((h) => (
          <li key={h.name} className="flex items-baseline gap-4 border-b border-line py-3">
            <span className="w-16 shrink-0 font-mono text-xs text-faint">{h.date}</span>
            <span className="flex-1 text-sm text-ink">{h.name}</span>
            {h.award && (
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-[11px] text-accent">
                <Award size={12} />
                {h.award}
              </span>
            )}
          </li>
        ))}
      </ul>

      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          {showAll ? 'Show less' : `Show all ${highlights.length}`}
          <ChevronDown size={14} className={cn('transition-transform', showAll && 'rotate-180')} />
        </button>
      )}
    </div>
  )
}
