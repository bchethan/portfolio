import { Heart } from 'lucide-react'
import { personal } from '../data/content'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-surface-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-slate-900 dark:text-white">{personal.shortName}</p>
          <p className="mt-1 text-sm text-slate-500">
            Data Analyst · {personal.openToWork ? 'Open to Work' : 'Portfolio'}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            <LinkedInIcon size={20} />
          </a>
        </div>

        <p className="flex items-center gap-1 text-sm text-slate-500">
          © {year} · Built with <Heart size={14} className="text-red-400" /> React &amp; Tailwind
        </p>
      </div>
    </footer>
  )
}
