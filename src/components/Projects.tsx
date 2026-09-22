type Project = {
  title: string
  description: string
  href?: string
  status: 'live' | 'in-progress' | 'planned'
}

// TODO: add real entries here as projects go live — this is deliberately
// just a placeholder for now so the section isn't empty
const projects: Project[] = [
  {
    title: 'This portfolio',
    description: 'Built with React, TypeScript and Vite, deployed with GitHub Actions.',
    href: 'https://github.com/stumpfer06/stumpfer06.github.io',
    status: 'live',
  },
  {
    title: 'Job Application Tracker API',
    description: 'A Spring Boot REST API for tracking my own job search — companies, statuses, deadlines.',
    status: 'planned',
  },
]

const statusLabel: Record<Project['status'], string> = {
  live: 'Live',
  'in-progress': 'In progress',
  planned: 'Planned',
}

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <span className={`status status-${project.status}`}>
                {statusLabel[project.status]}
              </span>
            </div>
            <p>{project.description}</p>
            {project.href && (
              <a href={project.href} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
