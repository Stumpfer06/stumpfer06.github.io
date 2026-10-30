import { marqueeKeywords } from '../data/site'

export default function Marquee() {
  return (
    <div className="marquee">
      <ul className="marquee-list" role="list">
        {marqueeKeywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
    </div>
  )
}
