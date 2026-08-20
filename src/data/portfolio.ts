// Central content file — edit everything about yourself here.
// Every section on the page pulls from this file, so you never have to
// touch component code just to update your info.

export const profile = {
  name: "Your Name",
  role: "Software Developer",
  tagline: "Innovating with Code",
  location: "Colombo, Sri Lanka",
  summary:
    "Computer Science student who loves building clean, fast, and useful software. I enjoy turning ideas into working products and learning new tools along the way.",
  email: "you@example.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short, punchy description of what this project does and the problem it solves. Mention the impact or outcome if you can.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.example.com",
  },
  {
    title: "Project Two",
    description:
      "Another project summary. Focus on what YOU built and decided, not just the tech list — that's what recruiters actually read.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A class project, hackathon build, or personal experiment. Even small projects are worth showing if they demonstrate real skills.",
    tags: ["Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/yourusername/project-three",
    liveUrl: "https://project-three.example.com",
  },
];

export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Python",
  "SQL",
  "Git & GitHub",
];

export type Award = {
  title: string;
  issuer: string;
  year: string;
  description?: string;
};

export const awards: Award[] = [
  {
    title: "Dean's List",
    issuer: "Your University",
    year: "2025",
    description: "Awarded for academic excellence.",
  },
  {
    title: "1st Place — University Hackathon",
    issuer: "Your University",
    year: "2025",
    description: "Built a winning project in 24 hours with a team of four.",
  },
];
