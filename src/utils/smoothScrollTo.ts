/**
 * Manual rAF-driven smooth scroll. Native `scrollIntoView({behavior:'smooth'})`
 * gets silently cancelled mid-animation when a concurrent layout change
 * happens elsewhere on the page (e.g. the mobile nav's height-collapse
 * exit animation) — this re-asserts the scroll position every frame, so
 * it isn't affected by that.
 */
export function smoothScrollTo(targetY: number, duration = 600) {
  const startY = window.scrollY
  const diff = targetY - startY
  const startTime = performance.now()

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
    window.scrollTo(0, startY + diff * eased)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
