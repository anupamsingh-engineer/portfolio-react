import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '../data/resume'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400" style={{ scaleX: progress }} />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink-900/70 backdrop-blur-xl border-b border-edge/[0.06]' : 'bg-transparent'
        }`}
      >
        <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between sm:h-20">
          <a href="#top" className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-mist-50">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-edge/10 bg-surface/[0.03] font-mono text-sm text-violet-300 transition-colors group-hover:border-violet-400/50">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">Anupam<span className="text-violet-400">.</span></span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-mist-50' : 'text-mist-400 hover:text-mist-100'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-surface/[0.06] border border-edge/10"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a href={`mailto:${profile.email}`} className="btn-ghost hidden !px-5 !py-2.5 text-xs md:flex">
              Let's talk
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge/10 text-mist-100 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-16 z-40 overflow-hidden border-b border-edge/[0.06] bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-mist-200 hover:bg-surface/[0.05]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-mist-50 px-3 py-3 text-base font-semibold text-ink-950"
                >
                  Let's talk <ArrowUpRight size={16} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
