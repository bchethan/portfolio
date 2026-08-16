import { GraduationCap, MapPin } from 'lucide-react'
import { about } from '../data/content'
import AnimatedSection from './AnimatedSection'

export default function About() {
  const { education, narrative } = about

  return (
    <AnimatedSection id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-heading text-3xl font-bold text-slate-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Background, education, and what drives my work in data.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {narrative}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              B.Tech CSE (AI &amp; ML) graduate from Bharat Institute of Engineering and Technology,
              Hyderabad (2022–2026). I bring both analytical rigor and a practical mindset to every
              dataset I work with. Whether it&apos;s writing complex SQL queries or designing Power BI
              dashboards, I focus on clarity — making sure the numbers lead to decisions, not confusion.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-surface-card">
              <div className="mb-4 flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <GraduationCap size={20} />
                <span className="text-sm font-semibold uppercase tracking-wider">Education</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {education.institution}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={14} />
                  {education.location}
                </span>
                <span>{education.period}</span>
              </div>
              <span className="mt-4 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                {education.status} · {education.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
