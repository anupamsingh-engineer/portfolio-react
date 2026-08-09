import { motion } from 'framer-motion'
import { MapPin, TrendingUp, ExternalLink } from 'lucide-react'
import { experience } from '../data/resume'
import { formatBold } from '../utils/formatBold'
import SectionHeading from './SectionHeading'

const boldClass = 'font-semibold text-bold-cyan'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading index="02" label="Experience" title="Where I've shipped" />

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-edge/10 to-transparent sm:left-[19px]" />

          <div className="space-y-16">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-10 sm:pl-14"
              >
                <span className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/40 bg-ink-900 sm:h-10 sm:w-10">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-glow" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-mist-50 sm:text-2xl">{job.role}</h3>
                  <span className="font-mono text-xs text-accent">{job.period}</span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-mist-400">
                  <span className="font-medium text-mist-200">{job.company}</span>
                  <span className="flex items-center gap-1 text-mist-500">
                    <MapPin size={13} /> {job.location}
                  </span>
                </div>

                {job.subtitle && <p className="mt-2 text-sm italic text-mist-500">{job.subtitle}</p>}

  {job.links && job.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-edge/10 bg-surface/[0.03] px-3 py-1.5 text-xs font-medium text-mist-300 transition-colors hover:border-violet-400/40 hover:text-mist-100"
                      >
                        <ExternalLink size={12} className="text-accent" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
                {job.scale && (
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-3 py-1.5 font-mono text-xs text-accent">
                    <TrendingUp size={12} />
                    {job.scale}
                  </span>
                )}

                {job.groups ? (
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {job.groups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-mist-500">{group.title}</p>
                        <ul className="space-y-3">
                          {group.bullets.map((h, hi) => (
                            <li key={hi} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/70" />
                              <span>{formatBold(h, boldClass)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-5 space-y-3">
                    {job.highlights?.map((h, hi) => (
                      <li key={hi} className="flex gap-3 text-sm leading-relaxed text-mist-300 sm:text-[15px]">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/70" />
                        <span>{formatBold(h, boldClass)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>

              
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
