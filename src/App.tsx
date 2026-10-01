import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ui } from './data/site'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        {ui.skipToContent}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
