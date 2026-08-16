import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import { personal } from '../data/content'
import ChartMotif from './ChartMotif'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute -right-20 top-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to Work · Data Analyst roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            {personal.name.split(' ').map((word, i) => (
              <span key={i}>
                {i === personal.name.split(' ').length - 1 ? (
                  <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  `${word} `
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg font-medium text-cyan-700 dark:text-cyan-400"
          >
            {personal.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
            </button>
            <a
              href={personal.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-surface-elevated dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-400"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <GitHubIcon size={22} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <LinkedInIcon size={22} />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Resume <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-xl backdrop-blur-sm dark:border-slate-700/60 dark:bg-surface-card/80">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Analytics Snapshot
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Live
              </span>
            </div>
            <ChartMotif className="h-32 w-full" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Projects', value: '2+' },
                { label: 'Tools', value: '8+' },
                { label: 'Datasets', value: '100K+' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-slate-50 p-3 text-center dark:bg-surface-elevated"
                >
                  <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {[
                { label: 'SQL Proficiency', pct: 90 },
                { label: 'Power BI', pct: 88 },
                { label: 'Python / Pandas', pct: 85 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">{row.label}</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{row.pct}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${row.pct}%` }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-cyan-500"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
