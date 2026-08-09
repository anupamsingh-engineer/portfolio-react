import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading index="05" label="Education" title="Academic background" />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-surface flex items-start gap-4 rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-edge/10 bg-surface/[0.03] text-violet-300">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-mist-50">{edu.school}</h3>
                <p className="mt-1 text-sm text-mist-400">{edu.degree}</p>
                <p className="mt-2 font-mono text-xs text-mist-500">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
