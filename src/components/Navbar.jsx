import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, personal } from '../data/content'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-md dark:border-slate-800/60 dark:bg-surface/90'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home') }}
          className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="text-cyan-600 dark:text-cyan-400">CR</span>
          <span className="hidden sm:inline">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {personal.openToWork && (
            <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 lg:inline-flex dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to Work
            </span>
          )}
          <ThemeToggle />
          <button
            className="rounded-lg p-2 text-slate-600 md:hidden dark:text-slate-300"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-md md:hidden dark:border-slate-800 dark:bg-surface/95">
          <ul className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-slate-200 pt-3 dark:border-slate-800">
              <span className="block px-3 text-xs text-slate-500">{personal.email}</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
