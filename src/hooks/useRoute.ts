import { useEffect, useState } from 'react'

const projectHash = /^#\/projekte\/([\w-]+)$/

function readSlug() {
  const match = projectHash.exec(window.location.hash)
  return match ? match[1] : null
}

/**
 * Hash-based routing without a router dependency. Returns the project slug
 * when the URL is `#/projekte/<slug>`, otherwise null (home view, where
 * plain anchors like `#projects` keep working as in-page links).
 */
export function useRoute() {
  const [slug, setSlug] = useState<string | null>(readSlug)

  useEffect(() => {
    const onHashChange = () => setSlug(readSlug())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return slug
}
