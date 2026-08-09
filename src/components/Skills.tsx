import { motion } from 'framer-motion'
import { Code2, LayoutTemplate, Server, Database, CreditCard, KeyRound, Cloud, Activity, Network } from 'lucide-react'
import { skills } from '../data/resume'
import SectionHeading from './SectionHeading'

// One icon per skill group, in the same order as `skills` in resume.ts.
const icons = [Code2, LayoutTemplate, Server, Database, CreditCard, KeyRound, Cloud, Activity, Network]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading index="04" label="Skills" title="Tools I reach for" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => {
            const Icon = icons[gi % icons.length]
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: gi * 0.08 }}
                className="card-surface rounded-2xl p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-edge/10 bg-surface/[0.03] text-cyan-300">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-mist-200">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-edge/[0.06] bg-surface/[0.02] px-2.5 py-1 text-xs text-mist-300 transition-colors hover:border-violet-400/30 hover:text-mist-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
