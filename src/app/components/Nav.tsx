'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { nav, socials } from '@/lib/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-paper/70 backdrop-blur-md transition-colors duration-300',
        scrolled && 'border-b border-line bg-paper/85'
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tightest text-ink"
          onClick={() => setOpen(false)}
        >
          Shao Zhi<span className="text-accent">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.name}
            </Link>
          ))}
          <span className="h-4 w-px bg-line" />
          <div className="flex items-center gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-ink"
            >
              <Github size={18} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-ink"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="-mr-2 p-2 text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <nav className="mx-auto flex max-w-container flex-col px-6 py-2 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-sm text-muted transition-colors hover:text-ink"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-5 py-4">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-ink">
                <Github size={18} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-ink">
                <Linkedin size={18} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
