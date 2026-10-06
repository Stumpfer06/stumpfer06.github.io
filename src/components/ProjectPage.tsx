import { projects, statusLabel, ui } from '../data/site'

export default function ProjectPage({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="band band-navy project-page">
        <a className="project-back" href="#projects">
          ← {ui.backToProjects}
        </a>
        <h1 className="project-page-title" id="project-title" tabIndex={-1}>{ui.projectNotFound}</h1>
        <p className="project-page-text">{ui.projectNotFoundText}</p>
      </section>
    )
  }

  return (
    <article className="band band-navy project-page">
      <a className="project-back" href="#projects">
        ← {ui.backToProjects}
      </a>
      <p className={`project-status is-${project.status}`}>{statusLabel[project.status]}</p>
      <h1 className="project-page-title" id="project-title" tabIndex={-1}>{project.title}</h1>

      {project.body.map((section) => (
        <div className="project-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((text) => (
            <p className="project-page-text" key={text}>
              {text}
            </p>
          ))}
          {section.bullets && (
            <ul className="project-bullets">
              {section.bullets.map((bullet) => (
                <li key={bullet.title}>
                  <strong>{bullet.title}:</strong> {bullet.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {project.tech && (
        <div className="project-section">
          <h2>{ui.techHeading}</h2>
          <ul className="chips">
            {project.tech.map((item) => (
              <li className="chip" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.links && (
        <div className="project-section">
          <h2>{ui.linksHeading}</h2>
          <ul className="project-links">
            {project.links.map((link) => (
              <li key={link.href}>
                <a className="project-link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.images && (
        <div className="project-section">
          <h2>{ui.galleryHeading}</h2>
          <div className="project-gallery">
            {project.images.map((image) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
