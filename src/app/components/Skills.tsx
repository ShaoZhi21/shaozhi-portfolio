import {
  siGo,
  siPython,
  siTypescript,
  siJavascript,
  siOpenjdk,
  siPytorch,
  siHuggingface,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siExpress,
  siGit,
  siSupabase,
  siPostman,
  siFigma,
} from 'simple-icons'
import { Section, SectionHeading } from './ui'
import { Reveal } from './Reveal'
import { skills } from '@/lib/data'

type Icon = { path: string }

// Hertz & Kitex have no simple-icons entry — they render as text (graceful fallback).
const ICONS: Record<string, Icon> = {
  Go: siGo,
  Python: siPython,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Java: siOpenjdk,
  PyTorch: siPytorch,
  'Hugging Face': siHuggingface,
  React: siReact,
  'React Native': siReact,
  'Next.js': siNextdotjs,
  'Node.js': siNodedotjs,
  Express: siExpress,
  Git: siGit,
  Supabase: siSupabase,
  Postman: siPostman,
  Figma: siFigma,
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Toolkit" title="What I build with" />

      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-3">
        {skills.map((category, ci) => (
          <Reveal key={category.title} delay={ci * 0.06}>
            <p className="eyebrow">{category.title}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((name) => {
                const icon = ICONS[name]
                return (
                  <span
                    key={name}
                    className="group inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/40 hover:bg-accent-soft"
                  >
                    {icon && (
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="h-3.5 w-3.5 fill-faint transition-colors group-hover:fill-accent"
                      >
                        <path d={icon.path} />
                      </svg>
                    )}
                    {name}
                  </span>
                )
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
