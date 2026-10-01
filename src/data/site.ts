// Single source of truth for the site's content (German).
// Edit copy, links, skills, projects, and timeline entries here — components
// pull everything from this file rather than hardcoding copy themselves.
//
// Technology/product names (TypeScript, React, Spring Boot, Git, …), the
// school name (IT-HTL Ybbs) and personal data (name, email, GitHub) are
// proper nouns and stay untranslated.

export const brand = 'Maxi Stumpfer'

export const navLinks = [
  { href: '#about', label: 'Über mich' },
  { href: '#timeline', label: 'Werdegang' },
  { href: '#skills', label: 'Fähigkeiten' },
  { href: '#projects', label: 'Projekte' },
  { href: '#contact', label: 'Kontakt' },
]

// Section headings, kept next to the nav labels so both stay in sync.
export const sectionTitles = {
  about: 'Über mich',
  timeline: 'Werdegang',
  skills: 'Fähigkeiten',
  projects: 'Projekte',
  contact: 'Kontakt',
}

// UI chrome strings (buttons, labels, assistive text) that aren't section copy.
export const ui = {
  skipToContent: 'Zum Inhalt springen',
  navLabel: 'Hauptnavigation',
  avatarAltPrefix: 'Porträt von',
  projectLink: 'Auf GitHub ansehen',
  resumeLabel: 'Lebenslauf herunterladen',
  builtWith: 'Gebaut mit React + Vite',
}

// Set this once a real headshot file exists (e.g. '/headshot.jpg' dropped
// into `public/`). Until then, Hero falls back to a CSS-only initials avatar.
export const avatarSrc: string | undefined = undefined

// Set this once a real résumé PDF exists (e.g. '/resume.pdf' dropped into
// `public/`). Until then, Contact hides the download button.
export const resumeHref: string | undefined = undefined

export const hero = {
  eyebrow: 'Softwareentwickler',
  // `highlight` must be a substring of `heading`: Hero splits the heading on it
  // to render the yellow marker treatment on that word.
  heading: 'Hi, ich bin Maxi — Softwareentwickler am Anfang meiner Karriere.',
  highlight: 'Softwareentwickler',
  paragraph:
    'Absolvent der IT-HTL Ybbs mit Fokus auf Web-/Full-Stack- und Backend-Entwicklung. Derzeit baue ich eigene Projekte und suche meine erste Stelle als Softwareentwickler.',
  ctas: [
    { href: '#projects', label: 'Projekte ansehen', variant: 'primary' as const },
    { href: '#contact', label: 'Kontakt aufnehmen', variant: 'ghost' as const },
  ],
}

export const about = {
  paragraph:
    'Ich habe die IT-HTL Ybbs im Juni 2025 abgeschlossen und danach ein freiwilliges soziales Jahr absolviert. Jetzt suche ich eine Stelle in der Softwareentwicklung und baue nebenbei Übungsprojekte, um meine Web-/Full-Stack- und Backend-Kenntnisse zu vertiefen — unter anderem lerne ich Java und Spring Boot im Detail.',
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Sprachen', items: ['TypeScript', 'JavaScript', 'Java', 'C#'] },
  { title: 'Web', items: ['React', 'HTML', 'CSS', 'Vite'] },
  { title: 'Backend', items: ['Spring Boot (lerne ich)', 'REST-APIs', 'SQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

// Short keyword list for the marquee ticker between hero and about — a subset
// of the skills above, kept separate so the ticker stays punchy (no
// parentheses/qualifiers) at display size.
export const marqueeKeywords = [
  'TypeScript',
  'JavaScript',
  'Java',
  'C#',
  'React',
  'Spring Boot',
  'SQL',
  'Git',
]

export type Project = {
  title: string
  description: string
  href?: string
  status: 'live' | 'in-progress' | 'planned'
}

export const projects: Project[] = [
  {
    title: 'Dieses Portfolio',
    description: 'Mit React, TypeScript und Vite gebaut und über GitHub Actions deployed.',
    href: 'https://github.com/stumpfer06/stumpfer06.github.io',
    status: 'live',
  },
  {
    title: 'Job Application Tracker API',
    description:
      'Eine Spring-Boot-REST-API, mit der ich meine eigene Jobsuche verwalte — Firmen, Status, Fristen.',
    status: 'planned',
  },
]

export const statusLabel: Record<Project['status'], string> = {
  live: 'Live',
  'in-progress': 'In Arbeit',
  planned: 'Geplant',
}

export type TimelineEntry = {
  title: string
  detail: string
}

export const timeline: TimelineEntry[] = [
  { title: 'IT-HTL Ybbs', detail: 'IT-Ausbildung an der HTL Ybbs.' },
  { title: 'Abschluss', detail: 'Abschluss im Juni 2025.' },
  { title: 'Freiwilliges soziales Jahr', detail: 'Freiwilliges soziales Jahr absolviert.' },
  { title: 'Jobsuche', detail: 'Aktuell auf der Suche nach einer Stelle in der Softwareentwicklung.' },
]

export type ContactLink = {
  label: string
  href: string
  external?: boolean
}

// LinkedIn can be added here later as another entry — Contact renders whatever
// is in this list, so no component change is needed.
export const contactLinks: ContactLink[] = [
  { label: 'maximilian.stumpfer@protonmail.com', href: 'mailto:maximilian.stumpfer@protonmail.com' },
  { label: 'github.com/stumpfer06', href: 'https://github.com/stumpfer06', external: true },
]

export const contactIntro =
  'Offen für Stellen in der Softwareentwicklung — ich freue mich über jede Nachricht.'
