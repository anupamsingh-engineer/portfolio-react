import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { profile, stats } from '../data/resume'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center pt-28 pb-16 sm:pt-32">
      <div className="container-px mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {profile.availableForWork && (
            <motion.div variants={item} className="mb-7 inline-flex items-center gap-2 rounded-full border border-edge/10 bg-surface/[0.03] px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-mist-300">Open to Senior / Full-Stack roles</span>
            </motion.div>
          )}

          <motion.p variants={item} className="section-label mb-4">
            Hi, I'm Anupam Singh
          </motion.p>

          <motion.h1 variants={item} className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-mist-50 sm:text-6xl">
            Building{' '}
            <span className="gradient-text bg-[length:200%_auto] animate-gradient-x">production-grade</span>
            <br className="hidden sm:block" /> systems that scale
            <span className="relative mx-2 inline-block whitespace-nowrap">
              under pressure
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M1 7 Q 50 1 100 6 T 199 5" stroke="url(#underline)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
            {profile.tagline} Full-Stack Developer specializing in{' '}
            <span className="text-mist-200">Node.js, NestJS, React &amp; AWS</span> — from architecture to production.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary group">
              View my work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost group">
              Resume
              <FileDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-edge/10 bg-surface/[0.02] text-mist-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:text-violet-300 hover:shadow-glow"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* right panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20 blur-2xl" />
            <div className="card-surface overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
              <div className="flex items-center gap-1.5 border-b border-edge/[0.06] bg-surface/[0.02] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-[11px] text-mist-500">engineer.profile.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-mist-300">
<code>{`const engineer = {
  name: "Anupam Singh",
  role: "Senior Software Engineer",
  experience: "4+ years",
  stack: [`}<span className="text-cyan-300">"NestJS"</span>{`, `}<span className="text-cyan-300">"React"</span>{`,
    `}<span className="text-cyan-300">"MongoDB"</span>{`, `}<span className="text-cyan-300">"AWS"</span>{`],
  scale: `}<span className="text-amber-400">"production-grade"</span>{`,
  status: `}<span className="text-violet-300">"shipping"</span>{`,
}`}</code>
              </pre>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="card-surface absolute -right-8 -top-6 rounded-xl px-4 py-3 shadow-xl shadow-black/40"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-mist-500">Endpoints shipped</p>
              <p className="font-display text-xl font-semibold text-mist-50">70+</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="card-surface absolute -bottom-7 -left-8 rounded-xl px-4 py-3 shadow-xl shadow-black/40"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-mist-500">LLM providers integrated</p>
              <p className="font-display text-xl font-semibold text-mist-50">8+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="container-px mx-auto mt-20 hidden w-full max-w-6xl sm:block"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-edge/[0.06] bg-surface/[0.06] sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900/80 px-6 py-5 backdrop-blur-sm">
              <p className="font-display text-2xl font-semibold text-mist-50 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-mist-500">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
