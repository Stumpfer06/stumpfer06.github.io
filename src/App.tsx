import { useEffect, type MouseEvent } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage from './components/ProjectPage'
import { useRoute } from './hooks/useRoute'
import { brand, projects, ui } from './data/site'

const homeTitle = document.title

function App() {
  const slug = useRoute()

  useEffect(() => {
    const project = slug ? projects.find((p) => p.slug === slug) : undefined
    document.title = project ? `${project.title} | ${brand}` : homeTitle
  }, [slug])

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

  const skipToMain = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById('main')?.focus()
  }

  return (
    <>
      <a href="#main" className="skip-link" onClick={skipToMain}>
        {ui.skipToContent}
      </a>
      <Header key={slug ?? 'home'} />
      <main id="main" tabIndex={-1}>
        {slug ? (
          <ProjectPage slug={slug} />
        ) : (
          <>
            <Hero />
            <Marquee />
            <About />
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
