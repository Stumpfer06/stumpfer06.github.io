import { contactIntro, contactLinks, resumeHref, sectionTitles, ui } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="band band-yellow contact">
      <h2>{sectionTitles.contact}</h2>
      <ul className="contact-links">
        {contactLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="contact-intro">{contactIntro}</p>
      {resumeHref && (
        <div className="contact-actions">
          <a className="button button-ink" href={resumeHref}>
            {ui.resumeLabel}
          </a>
        </div>
      )}
    </section>
  )
}
