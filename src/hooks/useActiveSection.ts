import { useEffect, useState } from 'react'

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
