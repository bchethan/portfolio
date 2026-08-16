import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { personal } from '../data/content'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <AnimatedSection id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-heading text-3xl font-bold text-slate-900 dark:text-white">
          Contact
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Let&apos;s connect — I&apos;m actively looking for Data Analyst opportunities.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-cyan-500 dark:border-slate-800 dark:bg-surface-card dark:hover:border-cyan-500"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="font-medium text-slate-900 dark:text-white">{personal.email}</div>
                </div>
              </a>

              {personal.phone && (
                <button
                  onClick={() => setShowPhone((s) => !s)}
                  className="flex w-full items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-cyan-500 dark:border-slate-800 dark:bg-surface-card dark:hover:border-cyan-500"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Phone {showPhone ? '' : '(click to reveal)'}</div>
                    <div className="font-medium text-slate-900 dark:text-white">
                      {showPhone ? personal.phone : '••• ••• •••••'}
                    </div>
                  </div>
                </button>
              )}

              <div className="flex gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800 dark:bg-surface-card dark:text-slate-300 dark:hover:border-cyan-500"
                >
                  <LinkedInIcon size={18} />
                  LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800 dark:bg-surface-card dark:text-slate-300 dark:hover:border-cyan-500"
                >
                  <GitHubIcon size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-surface-card sm:p-8"
          >
            <h3 className="mb-5 font-semibold text-slate-900 dark:text-white">Send a message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-slate-600 dark:text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-surface-elevated dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-slate-600 dark:text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-surface-elevated dark:text-white"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-slate-600 dark:text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-surface-elevated dark:text-white"
                  placeholder="How can I help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send size={16} />
                {submitted ? 'Opening email client…' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  )
}
