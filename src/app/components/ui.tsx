import { cn } from '@/lib/utils'

/* ---------- Layout ---------- */

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn('mx-auto w-full max-w-container px-6 sm:px-8', className)}>{children}</div>
}

export function Section({
  id,
  alt,
  className,
  children,
}: {
  id?: string
  alt?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-20 py-14 sm:py-20', alt && 'bg-mist', className)}
    >
      <Container>{children}</Container>
    </section>
  )
}

/* ---------- Metadata / structure ---------- */

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 eyebrow', className)}>
      <span aria-hidden className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  )
}

/* ---------- Bits ---------- */

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-paper px-2 py-1 font-mono text-[11px] leading-none text-muted">
      {children}
    </span>
  )
}

export function StatusDot({ className }: { className?: string }) {
  return (
    <span className={cn('relative inline-flex h-2 w-2', className)} aria-hidden>
      <span className="absolute inline-flex h-full w-full rounded-full bg-accent/40 motion-safe:animate-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  )
}
