import { sectionTitles, skillGroups } from '../data/site'

export default function Skills() {
  return (
    <section id="skills" className="band band-navy">
      <h2 className="band-title">{sectionTitles.skills}</h2>
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.title}>
          <h3 className="skill-group-name">{group.title}</h3>
          <ul className="chips">
            {group.items.map((item) => (
              <li className="chip" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
