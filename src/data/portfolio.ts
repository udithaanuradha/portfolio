// Central content file — edit everything about yourself here.
// Every section on the page pulls from this file, so you never have to
// touch component code just to update your info.

export const profile = {
  name: "Uditha Anuradha",
  role: "Software Developer",
  tagline: "Innovating with Code",
  location: "Colombo, Sri Lanka",
  summary:
    "Undergraduate student pursuing a BSc (Hons) in Information Technology and Management at the University of Moratuwa, with hands-on experience building full-stack web applications end to end. Skilled in React and Angular on the frontend, Node.js, Java, and Spring Boot on the backend, and both SQL and MongoDB for data storage. Comfortable owning a feature from REST API design through deployment, with strong Git-based collaborative workflow experience.",
  email: "udithaanuradha276@gmail.com",
  resumeUrl: "/resume.pdf",
  // Photo shown on the right side of the Hero section. Drop a
  // background-removed PNG at public/profile.png (a portrait/4:5 aspect
  // ratio works best) and this will pick it up automatically — no code
  // changes needed.
  photoUrl: "/profile.png",
  socials: {
    github: "https://github.com/udithaanuradha",
    linkedin: "https://www.linkedin.com/in/uditha-anuradha-a220372a3/",
  },
};

// Optional deep-dive content for a project. When present, the project card
// links to /projects/[slug] instead of just showing as a plain card.
export type CaseStudy = {
  slug: string; // used in the URL: /projects/<slug>
  status: string; // e.g. "Completed", "In progress"
  overview: string; // the fuller story — what it is, who it's for, how it was built
  keyContributions: string[]; // bulleted list of what YOU specifically did
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: CaseStudy; // omit entirely for a simple card with no deep dive
};

// TODO: every githubUrl below still has the YOUR-USERNAME placeholder —
// swap it for your real GitHub username, and add liveUrl fields for any of
// these that have a live demo.
export const projects: Project[] = [
  {
    title: "EduSync — University Project Management System",
    description:
      "A full-stack platform built for the Faculty of IT at University of Moratuwa to manage undergraduate project work end-to-end — group formation, supervisor approval, milestones, and evaluation.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Socket.IO", "Redis"],
    githubUrl: "https://github.com/YOUR-USERNAME/edusync",
    caseStudy: {
      slug: "edusync",
      status: "Completed",
      overview:
        "A full-stack web platform built for the Faculty of Information Technology, University of Moratuwa, to manage undergraduate project work across all four years of the degree program, end-to-end — group formation, supervisor assignment and approval, milestone/stage tracking, meeting scheduling, submissions, marking and evaluation — across student, supervisor, coordinator, and admin roles. Developed as a real client engagement for the faculty rather than a hypothetical brief, with requirements gathered directly from academic staff (coordinators and supervisors) and students through consultation sessions before implementation began.",
      keyContributions: [
        "Built the student-facing module: dashboard, group formation, and marks/evaluation views.",
        "Implemented a dual-supervisor approval workflow.",
        "Built Gantt/Kanban-style milestone tracking.",
        "Added real-time updates using Socket.IO and Redis.",
      ],
    },
  },
  {
    title: "Smart Medicare System",
    description:
      "A healthcare management system to digitize patient records, appointment scheduling, and prescription tracking for clinics.",
    tags: ["Spring Boot", "Java", "SQL", "REST APIs"],
    githubUrl: "https://github.com/YOUR-USERNAME/smart-medicare-system",
    caseStudy: {
      slug: "smart-medicare-system",
      status: "Completed",
      overview:
        "A healthcare management system to digitize patient records, appointment scheduling, and prescription tracking for clinics.",
      keyContributions: [
        "Developed backend services in Java and Spring Boot on a normalized SQL schema.",
        "Exposed REST endpoints for appointment booking and prescription updates.",
        "Implemented role-based access control for clinic staff.",
      ],
    },
  },
  {
    title: "EventPro — Event Management & Attendance Tracking System",
    description:
      "A full-stack platform for organizations to manage events, attendees, and live QR-code check-ins, spanning a Next.js web app and a React Native mobile app.",
    tags: ["Next.js", "React", "TypeScript", "React Native", "Expo", "PostgreSQL", "Prisma", "JWT"],
    githubUrl: "https://github.com/YOUR-USERNAME/eventpro",
    caseStudy: {
      slug: "eventpro",
      status: "Completed",
      overview:
        "A full-stack platform for organizations to manage events, attendees, and live QR-code check-ins, spanning a Next.js web app and a React Native mobile app. Built as a 3-person team, collaborating via Git feature branches and pull requests.",
      keyContributions: [
        "Built secure registration/login endpoints (Next.js API routes, Prisma, PostgreSQL) with JWT session handling, password hashing, and server-side input validation.",
        // TODO: this exact detail (atomic update preventing double-scanning) is
        // still flagged as "confirm this detail" — double-check it's precisely
        // what you built before this goes live.
        "Implemented the check-in validation endpoint with an atomic database update to prevent double-scanning the same ticket.",
      ],
    },
  },
  {
    title: "PureGuard — Jewellery Artifacts Monitoring System",
    description:
      "An IoT-powered system that monitors temperature, humidity, air quality, and dust levels in real time to protect jewellery artifacts, with an auto-updating web dashboard.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Firebase", "IoT Sensors & Actuators"],
    githubUrl: "https://github.com/YOUR-USERNAME/pureguard",
    caseStudy: {
      slug: "pureguard",
      status: "Completed (first-year hardware/IoT project)",
      overview:
        "An IoT-powered system that monitors temperature, humidity, air quality, and dust levels in real time to protect jewellery artifacts, paired with an auto-updating web dashboard.",
      keyContributions: [
        "Led the team as a first-year project.",
        "Built the web dashboard (Node.js/Express, MySQL, Firebase) with secure login and automated alerts.",
      ],
    },
  },
];

// Look up a project by its case-study slug. Used by the /projects/[slug]
// dynamic route to find which project a URL refers to.
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.caseStudy?.slug === slug);
}

// Timeline entries for the Experience & Education section, in the order
// you want them displayed (usually most recent first).
export type TimelineItem = {
  type: "work" | "education"; // controls which icon is shown
  title: string; // job title or degree name
  organization: string; // company or school name
  period: string; // e.g. "Jun 2025 — Aug 2025"
  location?: string;
  description?: string;
};

export const experience: TimelineItem[] = [
  {
    // TODO: add relevant coursework or a focus area here once you want to
    // highlight one.
    type: "education",
    title: "BSc (Hons) in Information Technology and Management",
    organization: "University of Moratuwa",
    period: "2023 — Present",
    description: "Cumulative GPA: 3.49",
  },
  {
    type: "education",
    title: "Diploma in English",
    organization: "Sabaragamuwa University of Sri Lanka",
    period: "2023",
  },
  {
    // TODO: fill in the actual start/end years.
    type: "education",
    title: "G.C.E. Advanced Level, Mathematics Stream",
    organization: "Bandarawela Central College",
    period: "[Start Year] — [End Year]",
  },
];

export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "C",
  "C++",
  "SQL",
  "Git & GitHub",
];

export type Award = {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  // Optional path to a certificate image, e.g. "/certificates/diploma.jpg".
  // Drop the file in public/certificates/ and set this — same pattern as
  // profile.photoUrl. Omit it entirely if there's no certificate to show.
  certificateUrl?: string;
};

export const awards: Award[] = [
  {
    title: "Diploma in English",
    issuer: "Sabaragamuwa University of Sri Lanka",
    year: "2023",
    description: "Completed the one-year diploma program.",
    // TODO: once you upload the certificate photo, drop it at e.g.
    // public/certificates/diploma-in-english.jpg and set:
    // certificateUrl: "/certificates/diploma-in-english.jpg",
  },
];
