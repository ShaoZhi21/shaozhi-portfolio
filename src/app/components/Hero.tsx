import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from './Button'
import { StatusDot } from './ui'
import { profile } from '@/lib/data'

// Staggered fade-up on load, CSS-only (no client JS), reduced-motion safe.
function delay(ms: number) {
  return { animationDelay: `${ms}ms` } as const
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-container px-6 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left: text */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            {/* identity line */}
            <div className="flex items-center gap-3 motion-safe:animate-fade-up" style={delay(0)}>
              <Image
                src="/images/profilephoto.jpeg"
                alt={profile.fullName}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full border border-line object-cover"
                priority
              />
              <p className="font-mono text-xs text-muted">
                {profile.fullName}
                <span className="mx-2 text-line">/</span>
                {profile.role}
              </p>
            </div>

            {/* thesis */}
            <h1
              className="mt-7 font-display text-5xl font-semibold leading-[1.03] tracking-tightest text-ink motion-safe:animate-fade-up sm:text-6xl"
              style={delay(80)}
            >
              {profile.headline.replace(/\.$/, '')}
              <span className="text-accent">.</span>
            </h1>

            <p
              className="mt-5 max-w-md text-lg leading-relaxed text-muted motion-safe:animate-fade-up"
              style={delay(160)}
            >
              {profile.subhead}
            </p>

            {/* currently status */}
            <div
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-3.5 py-2 motion-safe:animate-fade-up"
              style={delay(240)}
            >
              <StatusDot />
              <span className="font-mono text-xs text-muted">
                <span className="text-faint">Currently</span> — {profile.now}
              </span>
            </div>

            {/* actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3 motion-safe:animate-fade-up" style={delay(320)}>
              <Button asChild>
                <a href="#work">
                  See my work
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Résumé
                  <ArrowUpRight size={16} />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/writeups">Writeups</Link>
              </Button>
            </div>
          </div>

          {/* Right: huge circular portrait */}
          <div
            className="order-1 flex justify-center motion-safe:animate-fade-up lg:order-2 lg:col-span-5"
            style={delay(160)}
          >
            <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-full border border-line shadow-card sm:max-w-[360px] lg:max-w-[400px]">
              <Image
                src="/images/profilephoto.jpeg"
                alt={profile.fullName}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 400px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
