import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Loader2, ArrowUpRight } from 'lucide-react'
import { drivePreview } from '../utils/driveEmbed'

export type ActiveVideo = { label: string; url: string } | null

export default function VideoModal({ video, onClose }: { video: ActiveVideo; onClose: () => void }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [video])

  useEffect(() => {
    if (!video) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [video, onClose])

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-mono text-xs uppercase tracking-wider text-mist-400">{video.label}</p>
              <div className="flex items-center gap-2">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-edge/10 bg-surface/[0.05] px-3 py-1.5 text-xs font-medium text-mist-300 transition-colors hover:border-edge/30 hover:text-mist-100"
                >
                  Open in Drive <ArrowUpRight size={12} />
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close video"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-edge/10 bg-surface/[0.05] text-mist-300 transition-colors hover:border-edge/30 hover:text-mist-100"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-edge/10 bg-ink-950 shadow-2xl shadow-black/60">
              {!loaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-ink-950 px-6 text-center">
                  <Loader2 size={26} className="animate-spin text-mist-500" />
                  <div>
                    <p className="text-sm text-mist-400">Loading preview from Google Drive…</p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                    >
                      Taking a while? Open in Google Drive instead <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              )}
              <iframe
                key={video.url}
                src={drivePreview(video.url)}
                onLoad={() => setLoaded(true)}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={video.label}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
