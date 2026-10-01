import { marqueeKeywords } from '../data/site'

/**
 * Full-bleed scrolling keyword ticker between the hero and about bands.
 * Two identical copies of the keyword run make the CSS-only -50% loop
 * seamless. Purely decorative (the same skills are listed as real text in
 * the skills band), so it's hidden from assistive tech — and the animation
 * stops entirely under `prefers-reduced-motion` (see components.css).
 */
export default function Marquee() {
  const copy = (
    <span className="marquee-copy">
      {marqueeKeywords.map((keyword) => (
        <span key={keyword}>{keyword} —</span>
      ))}
    </span>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {copy}
        {copy}
      </div>
    </div>
  )
}
