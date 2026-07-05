import Image from 'next/image'
import { Github, ArrowUpRight, Award } from 'lucide-react'
import { Section, SectionHeading } from './ui'
import { Reveal } from './Reveal'
import { projects, socials, type Project } from '@/lib/data'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const caseStudies = projects.filter((p) => p.caseStudy)

  return (
    <Section id="work" alt>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          description="A few I'm proud of — funded startups, hackathon wins, and things that shipped. The rest live on GitHub."
        />
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          <Github size={16} />
          More on GitHub
        </a>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.06} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {caseStudies.length > 0 && (
        <div className="mt-14 border-t border-line pt-10">
          <p className="eyebrow">Case studies &amp; product work</p>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Shorter hackathon pitches and product / strategy explorations — the thinking, not the build.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-paper p-4">
                <span className="eyebrow">{p.group}</span>
                <h4 className="mt-2 text-sm font-semibold text-ink">{p.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-3">{p.description}</p>
                <p className="mt-2 font-mono text-[10px] text-faint">{p.event}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-mist">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-mist to-accent-soft">
            <span className="px-6 text-center font-display text-2xl font-semibold tracking-tight text-ink/20">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="eyebrow">{project.group}</span>
        <h3 className="mt-2.5 font-display text-lg font-semibold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md bg-mist px-2 py-0.5 font-mono text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between gap-3 pt-5">
          <div className="min-w-0">
            {project.award ? (
              <span className="inline-flex items-start gap-1.5 font-mono text-[11px] leading-snug text-accent">
                <Award size={13} className="mt-px shrink-0" />
                {project.award}
              </span>
            ) : project.event ? (
              <span className="font-mono text-[11px] text-faint">Built at {project.event}</span>
            ) : null}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-faint transition-colors hover:text-ink"
              >
                <Github size={17} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} demo`}
                className="text-faint transition-colors hover:text-accent"
              >
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
