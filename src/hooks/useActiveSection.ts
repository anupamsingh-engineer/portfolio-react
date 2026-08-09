import { useEffect, useRef, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')
  const ratios = useRef<Map<string, number>>(new Map())

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        // Pick the section with the largest visible overlap inside the tracking
        // band, in DOM order. If nothing is intersecting (e.g. scrolled back up
        // to the hero, or past the last section), this clears the highlight
        // instead of leaving it stuck on whatever was last true.
        let bestId = ''
        let bestRatio = 0
        for (const id of ids) {
          const ratio = ratios.current.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }
        setActive(bestId)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}
