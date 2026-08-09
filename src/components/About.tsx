import { motion } from 'framer-motion'
import { Server, Layers, ShieldCheck, Gauge } from 'lucide-react'
import { profile } from '../data/resume'
import SectionHeading from './SectionHeading'

const pillars = [
  {
    icon: Server,
    title: 'Backend architecture',
    desc: 'NestJS & Fastify services, multi-provider integrations, and billing systems designed to survive production traffic.',
  },
  {
    icon: Layers,
    title: 'Full-stack delivery',
    desc: 'From database schema to React UI — I own features end-to-end, not just the ticket in front of me.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-minded',
    desc: 'RBAC, JWT rotation, encrypted secrets, and XSS remediation baked into everyday engineering decisions.',
  },
  {
    icon: Gauge,
    title: 'Observability by default',
    desc: 'OpenTelemetry, Prometheus, and Grafana wired in from day one — so issues surface before users feel them.',
  },
]

const coreStack = ['Node.js', 'NestJS', 'React', 'AWS', 'MongoDB', 'PostgreSQL']

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading index="01" label="About" title="Engineering that holds up in production" />

        <div className="grid gap-10 border-b border-edge/[0.06] pb-14 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-mist-300"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-4 lg:border-l lg:border-edge/[0.06] lg:pl-10"
          >
            <p className="section-label !text-mist-500">Core stack</p>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-surface group rounded-2xl p-6 transition-colors duration-300 hover:border-violet-400/30"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-edge/10 bg-surface/[0.03] text-violet-300 transition-colors group-hover:border-violet-400/40 group-hover:text-violet-200">
                <p.icon size={18} />
              </div>
              <h3 className="font-display text-base font-semibold text-mist-50">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
