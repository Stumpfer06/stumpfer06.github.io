import { useEffect, useState } from 'react'

const projectHash = /^#\/(?:projects|projekte)\/([\w-]+)$/

function readSlug() {
  const match = projectHash.exec(window.location.hash)
  return match ? match[1] : null
}

export function useRoute() {
  const [slug, setSlug] = useState<string | null>(readSlug)

  useEffect(() => {
    const onHashChange = () => setSlug(readSlug())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return slug
}
