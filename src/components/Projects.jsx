import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { projects } from '../data/content'
import AnimatedSection from './AnimatedSection'

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      layout
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-surface-card"
    >
      <div
        className="h-2"
        style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}88)` }}
      />

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Project {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-surface-elevated dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:text-cyan-400"
          >
            <GitHubIcon size={16} />
            Repo
          </a>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Dashboard preview */}
        {project.dashboardImage ? (
          <div className="relative mt-5 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-700 dark:bg-surface-elevated">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-2 text-xs text-slate-500">Power BI Dashboard</span>
            </div>
            <img
              src={project.dashboardImage}
              alt={project.dashboardAlt || `${project.title} dashboard preview`}
              className="w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative mt-5 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 dark:border-slate-700 dark:from-surface-elevated dark:to-surface">
            <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-2 dark:border-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-2 text-xs text-slate-500">Power BI Dashboard Preview</span>
            </div>
            <div className="grid grid-cols-4 gap-2 p-4">
              {['Impressions', 'CTR', 'Spend', 'ROI'].map((metric, i) => (
                <div
                  key={metric}
                  className="rounded-lg bg-white/80 p-2 text-center dark:bg-surface-card/80"
                >
                  <div
                    className="mx-auto mb-1 h-8 w-full rounded"
                    style={{
                      background: `linear-gradient(180deg, ${project.accent}${['40', '30', '50', '35'][i]}, transparent)`,
                    }}
                  />
                  <span className="text-[10px] text-slate-500">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-5 flex w-full items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:bg-surface-elevated dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Key Insights
          <ChevronDown
            size={18}
            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-2 pt-4">
                {project.insights.map((insight, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                    {insight}
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
        >
          View on GitHub <ExternalLink size={14} />
        </a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-heading text-3xl font-bold text-slate-900 dark:text-white">
          Projects
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Real-world analytics work with SQL and Power BI.
        </p>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
