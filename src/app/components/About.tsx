import Image from 'next/image'
import { MapPin, Languages, ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading, Eyebrow, Tag } from './ui'
import { Reveal } from './Reveal'
import { about, reading, travel, profile } from '@/lib/data'

export default function About() {
  return (
    <Section id="about" alt>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: the words */}
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="About" title="The short version" />
          <Reveal className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-accent" /> {profile.location} → {profile.relocating}
            </span>
            <span className="inline-flex items-center gap-2">
              <Languages size={15} className="text-accent" /> {about.languages.join(', ')}
            </span>
          </div>

          <div className="mt-6">
            <p className="eyebrow">Focus</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.focus.map((f) => (
                <Tag key={f}>{f}</Tag>
              ))}
            </div>
          </div>
        </div>

        {/* Right: currently reading — eyebrow aligns with "About" */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <Eyebrow>Currently reading</Eyebrow>
            <ul className="mt-6 border-t border-line">
              {reading.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 border-b border-line py-3.5"
                  >
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] text-faint">{r.source}</span>
                      <span className="mt-0.5 block text-sm font-medium leading-snug text-ink transition-colors group-hover:text-accent">
                        {r.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted">{r.note}</span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="mt-0.5 shrink-0 text-faint transition-colors group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Off the clock — travel strip */}
      <Reveal className="mt-12 border-t border-line pt-10">
        <p className="eyebrow mb-4">Off the clock</p>
        <div className="grid grid-cols-3 gap-4">
          {travel.map((t) => (
            <figure key={t.src} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 33vw, 22vw"
                />
              </div>
              <figcaption className="mt-2 text-center font-mono text-[10px] text-faint">
                {t.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
