export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      {/* base grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* glow blobs — toned down in light mode via --blob-opacity */}
      <div
        className="absolute left-[-10%] top-[-10%] h-[42rem] w-[42rem] animate-float rounded-full bg-violet-600/20 blur-[120px]"
        style={{ opacity: 'var(--blob-opacity)' }}
      />
      <div
        className="absolute right-[-15%] top-[15%] h-[38rem] w-[38rem] animate-float-delayed rounded-full bg-cyan-500/15 blur-[120px]"
        style={{ opacity: 'var(--blob-opacity)' }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[34rem] w-[34rem] animate-float rounded-full bg-fuchsia-600/10 blur-[130px]"
        style={{ opacity: 'var(--blob-opacity)' }}
      />

      {/* noise */}
      <div className="absolute inset-0 bg-noise" style={{ opacity: 'var(--noise-opacity)' }} />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900" />
    </div>
  )
}
