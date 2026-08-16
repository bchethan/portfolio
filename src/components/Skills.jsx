import { useEffect, useRef, useState } from 'react'
import { BarChart3, Lightbulb, Wrench } from 'lucide-react'
import { skillGroups } from '../data/content'
import AnimatedSection from './AnimatedSection'

const iconMap = { BarChart3, Wrench, Lightbulb }

function SkillBar({ name, level, animate }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-slate-700 dark:text-slate-300">{name}</span>
        <span className="font-medium text-slate-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/80">
        <div
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true)
      },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatedSection id="skills" className="bg-slate-50/80 py-20 dark:bg-surface-elevated/50 sm:py-28">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-heading text-3xl font-bold text-slate-900 dark:text-white">
          Skills
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Technical toolkit and analytical foundations.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon]
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-surface-card"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      animate={animate}
                      style={{ transitionDelay: `${gi * 0.1 + si * 0.05}s` }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
