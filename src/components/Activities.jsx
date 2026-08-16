import { BookOpen, GraduationCap, Trophy } from 'lucide-react'
import { activities } from '../data/content'
import AnimatedSection from './AnimatedSection'

const iconMap = { GraduationCap, Trophy, BookOpen }

export default function Activities() {
  return (
    <AnimatedSection id="activities" className="bg-slate-50/80 py-20 dark:bg-surface-elevated/50 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-heading text-3xl font-bold text-slate-900 dark:text-white">
          Activities &amp; Learning
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Continuous growth beyond the classroom.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const Icon = iconMap[activity.icon]
            return (
              <div
                key={activity.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-surface-card"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{activity.title}</h3>
                <ul className="mt-3 space-y-2">
                  {activity.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="text-cyan-500">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
