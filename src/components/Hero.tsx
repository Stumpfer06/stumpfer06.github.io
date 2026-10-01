import { avatarSrc, brand, hero, ui } from '../data/site'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/**
 * Splits the heading around `hero.highlight` so that word can get the yellow
 * marker treatment. Falls back to the plain heading if the highlight isn't
 * found, so editing the copy can never break the render.
 */
function splitHeading(heading: string, highlight: string) {
  const index = heading.indexOf(highlight)
  if (!highlight || index === -1) return null
  return {
    before: heading.slice(0, index),
    match: highlight,
    after: heading.slice(index + highlight.length),
  }
}

export default function Hero() {
  const parts = splitHeading(hero.heading, hero.highlight)

  return (
    <section id="top" className="band band-navy hero">
      <div className="hero-content">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1>
          {parts ? (
            <>
              {parts.before}
              <span className="highlight">{parts.match}</span>
              {parts.after}
            </>
          ) : (
            hero.heading
          )}
        </h1>
        <p>{hero.paragraph}</p>
        <div className="hero-actions">
          {hero.ctas.map((cta) => (
            <a
              key={cta.href}
              className={cta.variant === 'primary' ? 'button' : 'button button-ghost'}
              href={cta.href}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero-aside">
        {avatarSrc ? (
          <img
            className="hero-portrait"
            src={avatarSrc}
            alt={`${ui.avatarAltPrefix} ${brand}`}
          />
        ) : (
          <span className="hero-mark" aria-hidden="true">
            {initials(brand)}
          </span>
        )}
      </div>
    </section>
  )
}
