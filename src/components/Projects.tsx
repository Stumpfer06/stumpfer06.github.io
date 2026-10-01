import { projects, sectionTitles, statusLabel, ui } from '../data/site'

export default function Projects() {
  return (
    <section id="projects" className="band-flush band-navy">
      <div className="projects-head">
        <h2 className="band-title">{sectionTitles.projects}</h2>
      </div>
      {projects.map((project, index) => (
        <article
          className={`project-row${index % 2 === 1 ? ' is-flipped' : ''}`}
          key={project.title}
        >
          <div className="project-panel" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="project-info">
            <p className={`project-status is-${project.status}`}>
              {statusLabel[project.status]}
            </p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.href && (
              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {ui.projectLink} →
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}
