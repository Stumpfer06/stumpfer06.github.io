import { sectionTitles, timeline } from '../data/site'

export default function Timeline() {
  return (
    <section id="timeline" className="band band-navy-2">
      <h2 className="band-title">{sectionTitles.timeline}</h2>
      <ol className="timeline-steps">
        {timeline.map((entry, index) => (
          <li className="timeline-step" key={entry.title}>
            <span className="timeline-num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{entry.title}</h3>
            <p>{entry.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
