import Image from 'next/image'
import { Section, SectionHeading, Tag } from './ui'
import { Reveal } from './Reveal'
import Hackathons from './Hackathons'
import { education, experience } from '@/lib/data'

export default function Background() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Background" title="School & work" />

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Education */}
        <Reveal>
          <p className="eyebrow mb-4">Education</p>
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-white p-2">
                <Image src={education.logo} alt="NUS" width={44} height={44} className="object-contain" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                  {education.school}
                </h3>
                <p className="text-sm text-muted">{education.degree}</p>
              </div>
            </div>

            <dl className="mt-6 space-y-2.5 text-sm">
              <Row label="Standing" value={education.year} />
              <Row label="Honours" value={education.honours} />
              <Row label="Dates" value={education.period} />
            </dl>

            <div className="mt-6">
              <p className="eyebrow">Core coursework</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.courses.map((c) => (
                  <Tag key={c}>{c.split(' ')[0]}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Experience */}
        <Reveal delay={0.1}>
          <p className="eyebrow mb-4">Experience</p>
          <ul className="divide-y divide-line">
            {experience.map((job) => (
              <li key={job.company} className="flex gap-3.5 py-4 first:pt-0">
                {job.logo && (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-display text-base font-semibold tracking-tight text-ink">
                      {job.company}
                    </h4>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                        Current
                      </span>
                    )}
                    {job.upcoming && (
                      <span className="rounded-full border border-line bg-mist px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                        Incoming
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-ink/70">{job.role}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-faint">
                    {job.period} · {job.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{job.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Hackathons — collapsible */}
      <Reveal className="mt-12">
        <Hackathons />
      </Reveal>
    </Section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <dt className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-faint">{label}</dt>
      <dd className="text-ink/80">{value}</dd>
    </div>
  )
}
