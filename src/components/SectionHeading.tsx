import { motion } from 'framer-motion'

type Props = {
  index: string
  title: string
  label: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ index, title, label, align = 'left' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start'}`}
    >
      <span className="section-label flex items-center gap-2">
        <span className="font-mono text-violet-500/70">{index}</span>
        <span className="h-px w-8 bg-violet-500/40" />
        {label}
      </span>
      <h2 className="font-display text-3xl font-semibold text-mist-50 sm:text-4xl">{title}</h2>
    </motion.div>
  )
}
