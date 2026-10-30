export const brand = "Maxi Stumpfer";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const sectionTitles = {
  about: "About",
  projects: "Projects",
  contact: "Contact",
};

export const ui = {
  skipToContent: "Skip to content",
  navLabel: "Main navigation",
  avatarAltPrefix: "Portrait of",
  projectLink: "Learn more",
  backToProjects: "Back to projects",
  techHeading: "Technologies",
  linksHeading: "Links",
  galleryHeading: "Images",
  projectNotFound: "Project not found",
  projectNotFoundText: "This project doesn't exist.",
  resumeLabel: "Download résumé",
  builtWith: "Built with React + Vite",
};

export const avatarSrc: string | undefined = undefined;

export const resumeHref: string | undefined = undefined;

export const hero = {
  eyebrow: "Full-Stack Developer",
  heading: "Hi, I'm Maxi. I build full-stack web apps.",
  highlight: "full-stack",
  paragraph:
    "I build web applications end to end, with Vue and React on the front end and Java with Spring Boot on the back end. I graduated from IT-HTL Ybbs in 2025 and I'm looking for my first developer role.",
  ctas: [
    {
      href: "#projects",
      label: "View projects",
      variant: "primary" as const,
    },
    { href: "#contact", label: "Get in touch", variant: "ghost" as const },
  ],
};

export const about = {
  paragraph:
    "After school I spent a year volunteering with the ambulance service. Now I'm back to coding full-time: building interfaces in Vue and React and backends in Java and Spring Boot.",
};

export const marqueeKeywords = ["Java", "Spring Boot", "Vue", "React"];

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: { title: string; text: string }[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: "live" | "in-progress" | "done";
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
    title: "EduFace (Diploma Project)",
    description:
      "My diploma project: a device that records student attendance using face recognition or an NFC card. Built as a team of two; I owned all the web interfaces.",
    status: "done",
    body: [
      {
        heading: "What it is",
        paragraphs: [
          "In many schools the teacher checks who is present during the first lesson. That takes time, and mistakes are easy to make. So for our diploma project at HTL Ybbs, a classmate and I built EduFace. The device hangs at the entrance. Students check in and out there with their face or their student card, and the system works out absences on its own.",
          "We also entered EduFace in Jugend Innovativ, but did not qualify for the next round.",
        ],
      },
      {
        heading: "My part",
        paragraphs: [
          "My teammate built the face recognition in Python, designed and printed the housing, and set up the Raspberry Pi. I was responsible for everything you see in the browser:",
        ],
        bullets: [
          {
            title: "Design",
            text: "UI/UX analysis and a clickable prototype in Figma.",
          },
          {
            title: "Homepage",
            text: "Introduces EduFace, with a contact form.",
          },
          {
            title: "Admin interface",
            text: "Teachers see their class's absences, excuse them, create students and assign a face to each. Students see their own absences. There are three roles: admin, teacher and student.",
          },
          {
            title: "On-device web app",
            text: "The interface on the display, with \"Check in\" and \"Check out\" buttons. The TypeScript backend stores attendance in Firestore and calculates absences from it every day.",
          },
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "The camera detects a face. The Python API turns it into a vector and looks up the matching student in a Qdrant database. The result goes to the web app's backend, which saves the entry in Firestore. Frontend and backend are connected over WebSockets, so the display reacts instantly.",
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
        label: "Homepage + admin interface",
        href: "https://github.com/stumpfi06/EduFace",
      },
      {
        label: "Web app + backend",
        href: "https://github.com/stumpfi06/EduFace-Raspapp/",
      },
    ],
    images: [
      {
        src: "/projects/eduface/prototyp.jpg",
        width: 1400,
        height: 1006,
        alt: "Front view of the EduFace device prototype",
        caption:
          "The finished prototype: camera on top, display in the middle, NFC reader below.",
      },
      {
        src: "/projects/eduface/architektur.png",
        width: 1600,
        height: 818,
        alt: "Architecture diagram: camera with face recognition API, web app backend, Firestore database, admin interface and on-device web app",
        caption: "How the parts fit together.",
      },
    ],
  },
];

export const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  done: "Completed",
};

export type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

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
  "Have an open position or a question? Feel free to send me an email.";
