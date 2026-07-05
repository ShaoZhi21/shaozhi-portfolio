'use client'

import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, ArrowRight, Check } from 'lucide-react'
import { Section, SectionHeading } from './ui'
import { Button } from './Button'
import { profile, socials } from '@/lib/data'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const canSubmit = form.name.trim() && form.email.trim() && form.message.trim() && status !== 'sending'

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15'

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: invitation + direct links */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Let's grab a coffee"
            description="Moving to the Bay Area soon and keen to meet founders and people building cool things. Talks, networking, or just a chat — my inbox is open."
          />
          <div className="mt-8 space-y-3">
            <a
              href={socials.email}
              className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-ink"
            >
              <Mail size={16} className="text-accent" />
              {profile.email}
            </a>
            <p className="flex items-center gap-3 text-sm text-muted">
              <MapPin size={16} className="text-accent" />
              {profile.location} → {profile.relocating}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-ink">
                <Github size={18} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-ink">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`mt-2 ${inputClass}`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`mt-2 ${inputClass}`}
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="eyebrow">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`mt-2 resize-none ${inputClass}`}
                placeholder="What's on your mind?"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={!canSubmit}>
                {status === 'sending' ? 'Sending…' : status === 'success' ? (<><Check size={16} /> Sent</>) : (<>Send message <ArrowRight size={16} /></>)}
              </Button>
              {status === 'success' && (
                <p className="text-sm text-muted">Thanks — I&apos;ll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-muted">
                  Couldn&apos;t send just now — email me directly at{' '}
                  <a href={socials.email} className="text-accent underline underline-offset-2">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}
