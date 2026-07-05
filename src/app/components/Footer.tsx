import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { nav, socials, profile } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="font-display text-lg font-semibold tracking-tightest text-ink">
              Shao Zhi<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.role} in {profile.location}. Always up for a good problem — reach out any time.
            </p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3">
              <p className="eyebrow mb-1">Menu</p>
              {nav.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <p className="eyebrow mb-1">Elsewhere</p>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
                <Github size={15} /> GitHub
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
                <Linkedin size={15} /> LinkedIn
              </a>
              <a href={socials.email} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
                <Mail size={15} /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">© {new Date().getFullYear()} Soong Shao Zhi</p>
          <p className="font-mono">Built with Next.js &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
