// Single source of truth for the site's content (German).
// Edit copy, links, skills, projects, and timeline entries here — components
// pull everything from this file rather than hardcoding copy themselves.
//
// Technology/product names (TypeScript, React, Spring Boot, Git, …), the
// school name (IT-HTL Ybbs) and personal data (name, email, GitHub) are
// proper nouns and stay untranslated.

export const brand = "Maxi Stumpfer";

export const navLinks = [
  { href: "#about", label: "Über mich" },
  { href: "#timeline", label: "Werdegang" },
  { href: "#skills", label: "Fähigkeiten" },
  { href: "#projects", label: "Projekte" },
  { href: "#contact", label: "Kontakt" },
];

// Section headings, kept next to the nav labels so both stay in sync.
export const sectionTitles = {
  about: "Über mich",
  timeline: "Werdegang",
  skills: "Fähigkeiten",
  projects: "Projekte",
  contact: "Kontakt",
};

// UI chrome strings (buttons, labels, assistive text) that aren't section copy.
export const ui = {
  skipToContent: "Zum Inhalt springen",
  navLabel: "Hauptnavigation",
  avatarAltPrefix: "Porträt von",
  projectLink: "Mehr erfahren",
  backToProjects: "Zurück zu den Projekten",
  techHeading: "Technologien",
  linksHeading: "Links",
  galleryHeading: "Bilder",
  projectNotFound: "Projekt nicht gefunden",
  projectNotFoundText: "Dieses Projekt gibt es leider nicht.",
  resumeLabel: "Lebenslauf herunterladen",
  builtWith: "Gebaut mit React + Vite",
};

// Set this once a real headshot file exists (e.g. '/headshot.jpg' dropped
// into `public/`). Until then, Hero falls back to a CSS-only initials avatar.
export const avatarSrc: string | undefined = undefined;

// Set this once a real résumé PDF exists (e.g. '/resume.pdf' dropped into
// `public/`). Until then, Contact hides the download button.
export const resumeHref: string | undefined = undefined;

export const hero = {
  eyebrow: "Softwareentwickler",
  // `highlight` must be a substring of `heading`: Hero splits the heading on it
  // to render the yellow marker treatment on that word.
  heading: "Hi, ich bin Maxi und ich entwickle Software.",
  highlight: "Software",
  paragraph:
    "Ich habe 2025 die IT-HTL in Ybbs abgeschlossen. Am liebsten arbeite ich an Webanwendungen und am Backend. Gerade suche ich meinen ersten Job als Entwickler.",
  ctas: [
    {
      href: "#projects",
      label: "Projekte ansehen",
      variant: "primary" as const,
    },
    { href: "#contact", label: "Kontakt aufnehmen", variant: "ghost" as const },
  ],
};

export const about = {
  paragraph:
    "Nach der HTL habe ich ein freiwilliges soziales Jahr gemacht. Jetzt will ich wieder programmieren, und zwar beruflich. Bis es so weit ist, arbeite ich an eigenen Projekten. Im Moment beschäftige ich mich vor allem mit Java und Spring Boot.",
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Sprachen", items: ["TypeScript", "JavaScript", "Java", "C#"] },
  { title: "Web", items: ["React", "HTML", "CSS", "Vite"] },
  { title: "Backend", items: ["Spring Boot (lerne ich)", "REST-APIs", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

// Short keyword list for the marquee ticker between hero and about — a subset
// of the skills above, kept separate so the ticker stays punchy (no
// parentheses/qualifiers) at display size.
export const marqueeKeywords = [
  "TypeScript",
  "JavaScript",
  "Java",
  "C#",
  "React",
  "Spring Boot",
  "SQL",
  "Git",
];

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: { title: string; text: string }[];
};

export type Project = {
  slug: string;
  title: string;
  // Short text shown on the card in the projects list.
  description: string;
  status: "live" | "in-progress" | "done";
  // Detail page content, rendered by ProjectPage at `#/projekte/<slug>`.
  body: ProjectSection[];
  tech?: string[];
  links?: { label: string; href: string }[];
  images?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
};

export const projects: Project[] = [
  {
    slug: "eduface",
    title: "EduFace (Diplomarbeit)",
    description:
      "Meine Diplomarbeit: ein Gerät, das die Anwesenheit von Schülern per Gesichtserkennung oder NFC-Karte erfasst. Zu zweit gebaut, ich war für die Weboberflächen zuständig.",
    status: "done",
    body: [
      {
        heading: "Worum es geht",
        paragraphs: [
          "In vielen Schulen prüft die Lehrkraft in der ersten Stunde, wer da ist. Das kostet Zeit, und Fehler passieren leicht. Für unsere Diplomarbeit an der HTL Ybbs haben ein Mitschüler und ich deshalb EduFace gebaut. Das Gerät hängt am Eingang. Schüler melden sich dort mit ihrem Gesicht oder ihrer Schülerkarte an und ab, und das System berechnet die Abwesenheiten selbst.",
          "Mit EduFace haben wir auch bei Jugend Innovativ teilgenommen, uns dort aber nicht für die nächste Runde qualifiziert.",
        ],
      },
      {
        heading: "Mein Teil",
        paragraphs: [
          "Mein Teamkollege hat die Gesichtserkennung in Python entwickelt, das Gehäuse entworfen und gedruckt und den Raspberry Pi eingerichtet. Ich war für alles zuständig, was man im Browser sieht:",
        ],
        bullets: [
          {
            title: "Design",
            text: "UI/UX-Analyse und ein klickbarer Prototyp in Figma.",
          },
          {
            title: "Homepage",
            text: "Stellt EduFace vor, mit Kontaktformular.",
          },
          {
            title: "Admin-Interface",
            text: "Lehrkräfte sehen die Abwesenheiten ihrer Klasse, entschuldigen sie, legen Schüler an und weisen ihnen ein Gesicht zu. Schüler sehen ihre eigenen Fehlzeiten. Es gibt die Rollen Admin, Lehrer und Schüler.",
          },
          {
            title: "Webapp am Gerät",
            text: "Die Oberfläche auf dem Display mit „Kommen“ und „Gehen“. Das Backend in TypeScript speichert die Anwesenheiten in Firestore und berechnet daraus jeden Tag die Abwesenheiten.",
          },
        ],
      },
      {
        heading: "Wie es funktioniert",
        paragraphs: [
          "Die Kamera erkennt ein Gesicht. Die Python-API macht daraus einen Vektor und sucht in einer Qdrant-Datenbank den passenden Schüler. Das Ergebnis geht an das Backend der Webapp, das den Eintrag in Firestore speichert. Frontend und Backend sind über WebSockets verbunden, deshalb reagiert das Display sofort.",
        ],
      },
    ],
    tech: [
      "Vue.js",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "WebSockets",
      "Figma",
      "Python",
      "OpenCV",
      "MediaPipe",
      "Qdrant",
      "Raspberry Pi",
    ],
    links: [
      {
        label: "Homepage + Admin-Interface",
        href: "https://github.com/stumpfi06/EduFace",
      },
      {
        label: "Webapp + Backend",
        href: "https://github.com/stumpfi06/EduFace-Raspapp/",
      },
    ],
    images: [
      {
        src: "/projects/eduface/prototyp.jpg",
        width: 1400,
        height: 1006,
        alt: "Prototyp des EduFace-Geräts von vorne",
        caption:
          "Der fertige Prototyp: Kamera oben, Display in der Mitte, NFC-Leser darunter.",
      },
      {
        src: "/projects/eduface/architektur.png",
        width: 1600,
        height: 818,
        alt: "Architekturdiagramm: Kamera mit Gesichtserkennungs-API, Backend der Webapp, Firestore-Datenbank, Admin-Interface und Webapp am Display",
        caption: "So hängen die Teile zusammen.",
      },
    ],
  },
  {
    slug: "portfolio",
    title: "Dieses Portfolio",
    description:
      "Die Seite, die Sie gerade ansehen. Gebaut mit React, TypeScript und Vite. GitHub Actions stellt sie automatisch online.",
    status: "live",
    body: [
      {
        heading: "Worum es geht",
        paragraphs: [
          "Ich wollte einen Ort, an dem ich zeige, woran ich arbeite. Die Seite ist mit React, TypeScript und Vite gebaut. Bei jedem Push auf GitHub baut GitHub Actions die Seite neu und stellt sie online.",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Vite", "CSS", "GitHub Actions"],
    links: [
      {
        label: "Code auf GitHub",
        href: "https://github.com/stumpfer06/stumpfer06.github.io",
      },
    ],
  },
  {
    slug: "job-tracker",
    title: "Job Application Tracker API",
    description:
      "Eine REST-API mit Spring Boot, mit der ich meine Bewerbungen verwalte: welche Firma und welcher Stand.",
    status: "in-progress",
    body: [
      {
        heading: "Worum es geht",
        paragraphs: [
          "Während ich Bewerbungen schreibe, behalte ich mit meinem eigenen Tool den Überblick. Es ist eine REST-API mit Java 21 und Spring Boot. Bewerbungen lassen sich anlegen, abrufen, ändern und löschen, jeweils mit Status wie „beworben“, „Gespräch“ oder „Absage“. Eingaben werden geprüft, und Fehler kommen in einem einheitlichen Format zurück. Die Daten liegen im Moment in einer H2-Datenbank im Arbeitsspeicher. Ein Frontend dafür ist in Arbeit.",
        ],
      },
    ],
    tech: ["Java 21", "Spring Boot", "Spring Data JPA", "H2", "JUnit"],
  },
];

export const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In Arbeit",
  done: "Abgeschlossen",
};

export type TimelineEntry = {
  title: string;
  detail: string;
};

export const timeline: TimelineEntry[] = [
  { title: "IT-HTL Ybbs", detail: "Schule mit Schwerpunkt Medientechnik." },
  { title: "Abschluss", detail: "Reife- und Diplomprüfung im Juni 2025." },
  {
    title: "Freiwilliges soziales Jahr",
    detail: "Ein Jahr im Rettungsdienst als Ersatz für den Zivildienst.",
  },
  {
    title: "Jobsuche",
    detail: "Ich suche einen Einstieg als Softwareentwickler.",
  },
];

export type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

// LinkedIn can be added here later as another entry — Contact renders whatever
// is in this list, so no component change is needed.
export const contactLinks: ContactLink[] = [
  {
    label: "maximilian.stumpfer@protonmail.com",
    href: "mailto:maximilian.stumpfer@protonmail.com",
  },
  {
    label: "github.com/stumpfer06",
    href: "https://github.com/stumpfer06",
    external: true,
  },
];

export const contactIntro =
  "Sie haben eine offene Stelle oder eine Frage? Schreiben Sie mir gerne eine Mail.";
