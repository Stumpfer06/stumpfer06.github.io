import { about, sectionTitles } from '../data/site'

export default function About() {
  return (
    <section id="about" className="band band-coral about">
      <div>
        <h2 className="band-label">{sectionTitles.about}</h2>
        <p>{about.paragraph}</p>
      </div>
      <span className="about-quote" aria-hidden="true">
        „
      </span>
    </section>
  )
}
