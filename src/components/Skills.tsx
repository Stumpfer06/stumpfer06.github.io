type SkillGroup = {
  title: string
  items: string[]
}

// TODO: adjust these to match what you actually know / are learning right now
const groups: SkillGroup[] = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'C#'] },
  { title: 'Web', items: ['React', 'HTML', 'CSS', 'Vite'] },
  { title: 'Backend', items: ['Spring Boot (learning)', 'REST APIs', 'SQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {groups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
