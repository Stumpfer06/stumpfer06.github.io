import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in view (for the sticky nav's active
 * indicator) and whether the page has scrolled past a small threshold (for
 * the header's blur/shrink transition).
 */
export function useActiveSection(sectionIds: string[], scrollThreshold = 24) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > scrollThreshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollThreshold])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    // IntersectionObserver callbacks only report entries whose state changed
    // in that batch, so we track everything currently intersecting here to
    // correctly pick the topmost one when multiple sections overlap the band.
    // We only store the element (not the entry) because `boundingClientRect`
    // on an entry is a stale snapshot from whenever it last fired — we
    // re-measure live at decision time instead.
    const intersecting = new Map<string, Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.set(entry.target.id, entry.target)
          } else {
            intersecting.delete(entry.target.id)
          }
        })

        if (intersecting.size === 0) {
          setActiveId(null)
          return
        }

        const topmost = Array.from(intersecting.values()).reduce((a, b) =>
          b.getBoundingClientRect().top < a.getBoundingClientRect().top ? b : a,
        )
        setActiveId(topmost.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return { activeId, scrolled }
}
