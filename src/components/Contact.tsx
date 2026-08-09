import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/resume'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-edge/[0.08] bg-surface/[0.02] px-6 py-16 text-center sm:px-16 sm:py-24"
        >
          <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-56 w-56 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/20 blur-[100px]" />

          <span className="section-label relative">06 — Contact</span>
          <h2 className="relative mt-4 font-display text-3xl font-semibold text-mist-50 sm:text-5xl">
            Let's build something
            <br /> <span className="gradient-text">worth shipping.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-mist-400">
            Open to Senior Full-Stack / Backend-heavy roles and interesting freelance builds. Usually reply within a day.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="btn-ghost">
              <Phone size={16} />
              {profile.phone}
            </a>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-edge/10 px-4 py-2 text-sm text-mist-400 transition-colors hover:border-edge/30 hover:text-mist-100"
            >
              <Github size={15} /> {profile.githubHandle}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-edge/10 px-4 py-2 text-sm text-mist-400 transition-colors hover:border-edge/30 hover:text-mist-100"
            >
              <Linkedin size={15} /> {profile.linkedinHandle}
            </a>
            <span className="flex items-center gap-2 rounded-full border border-edge/10 px-4 py-2 text-sm text-mist-400">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>
        </motion.div>

        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-edge/[0.06] pt-8 text-xs text-mist-500 sm:flex-row">
          <p>© {year} Anupam Singh. All rights reserved.</p>
          <a
            href="#top"
            className="flex items-center gap-1 text-mist-400 transition-colors hover:text-mist-100"
          >
            Back to top <ArrowUpRight size={12} className="-rotate-45" />
          </a>
        </footer>
      </div>
    </section>
  )
}
