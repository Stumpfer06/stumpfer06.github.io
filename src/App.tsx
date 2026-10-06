import { useEffect, type MouseEvent } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage from './components/ProjectPage'
import { useRoute } from './hooks/useRoute'
import { brand, projects, ui } from './data/site'

const homeTitle = document.title

function App() {
  const slug = useRoute()

  // Page title follows the current view.
  useEffect(() => {
    const project = slug ? projects.find((p) => p.slug === slug) : undefined
    document.title = project ? `${project.title} | ${brand}` : homeTitle
  }, [slug])

  // After a view switch the browser can't scroll to the anchor (it didn't
  // exist yet), so do it here: top for project pages, the target section
  // when returning home via a plain `#id` link.
  // Focus moves to the new view's heading so screen readers announce it.
  // `behavior: 'instant'` overrides the global smooth scrolling here.
  useEffect(() => {
    if (slug) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.getElementById('project-title')?.focus({ preventScroll: true })
      return
    }
    const id = window.location.hash.slice(1)
    const target = id && !id.startsWith('/') ? document.getElementById(id) : null
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    target.scrollIntoView({ behavior: 'instant' })
    const heading = target.querySelector<HTMLElement>('h1, h2')
    if (heading) {
      heading.tabIndex = -1
      heading.focus({ preventScroll: true })
    }
  }, [slug])

  // Skip link focuses <main> directly instead of changing the hash, which
  // would otherwise leave a project page and fall back to the home view.
  const skipToMain = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById('main')?.focus()
  }

  return (
    <>
      <a href="#main" className="skip-link" onClick={skipToMain}>
        {ui.skipToContent}
      </a>
      {/* key remounts the header so its section observer re-attaches per view */}
      <Header key={slug ?? 'home'} />
      <main id="main" tabIndex={-1}>
        {slug ? (
          <ProjectPage slug={slug} />
        ) : (
          <>
            <Hero />
            <Marquee />
            <About />
            <Timeline />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
