import { useRef, useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Check } from 'lucide-react'
import { projects, type Project } from '../data/resume'
import { formatBold } from '../utils/formatBold'
import SectionHeading from './SectionHeading'

const accentMap = {
  violet: {
    ring: 'group-hover:border-violet-400/40',
    glow: 'from-violet-600/25',
    chip: 'text-bold-violet',
    bullet: 'bg-violet-500/15 text-violet-300 shadow-[0_0_12px_-2px_rgba(139,92,246,0.7)]',
    bold: 'font-semibold text-bold-violet',
  },
  cyan: {
    ring: 'group-hover:border-cyan-400/40',
    glow: 'from-cyan-500/25',
    chip: 'text-bold-cyan',
    bullet: 'bg-cyan-500/15 text-cyan-300 shadow-[0_0_12px_-2px_rgba(34,211,238,0.7)]',
    bold: 'font-semibold text-bold-cyan',
  },
} as const

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({})
  const accent = accentMap[project.accent]

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -6
    const rotateY = ((x - rect.width / 2) / rect.width) * 6
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
      '--x': `${x}px`,
      '--y': `${y}px`,
    } as React.CSSProperties)
  }

  function handleLeave() {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 0.3s ease-out', ...style }}
      className={`group card-surface relative overflow-hidden rounded-2xl p-7 sm:p-8 ${accent.ring}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        style={{
          background: `radial-gradient(400px circle at var(--x) var(--y), rgba(139,92,246,0.12), transparent 70%)`,
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className={`font-mono text-xs uppercase tracking-wider ${accent.chip}`}>{String(i + 1).padStart(2, '0')} / Project</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-mist-50">{project.name}</h3>
          <p className="mt-1 text-sm text-mist-400">{project.tagline}</p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} source on GitHub`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-edge/10 text-mist-400 transition-colors hover:border-edge/30 hover:text-mist-100"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-edge/10 text-mist-400 transition-colors hover:border-edge/30 hover:text-mist-100"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <ul className="relative mt-6 space-y-3.5">
        {project.description.map((d, di) => (
          <li key={di} className="flex gap-3 text-sm leading-relaxed text-mist-300">
            <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${accent.bullet}`}>
              <Check size={12} strokeWidth={3} />
            </span>
            <span>{formatBold(d, accent.bold)}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-7 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading index="03" label="Projects" title="Things I've built end-to-end" />
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
