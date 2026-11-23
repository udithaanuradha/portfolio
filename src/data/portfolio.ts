// Central content file — edit everything about yourself here.
// Every section on the page pulls from this file, so you never have to
// touch component code just to update your info.

export const profile = {
  name: "Uditha Anuradha",
  role: "IT Undergraduate",
  internshipStartDate: "2027-01-26",
  location: "Colombo, Sri Lanka",
  summary:
    "I’m pursuing a BSc (Hons) in Information Technology and Management at the University of Moratuwa. My project experience includes designing REST APIs and databases, building user interfaces, and collaborating with teammates through Git.",
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
  focus: "Software Engineering",
};

// Optional deep-dive content for a project. When present, the project card
// links to /projects/[slug] instead of just showing as a plain card.
export type CaseStudy = {
  slug: string; // used in the URL: /projects/<slug>
  status: string; // e.g. "Completed", "In progress"
  problem: string;
  solution: string;
  keyContributions: string[]; // bulleted list of what YOU specifically did
  videoUrl?: string; // URL for an embedded introduction video (e.g., YouTube embed URL or direct .mp4)
  videoPoster?: string;
  videoTitle?: string;
  screenshotGroups?: { title: string; images: { src: string; caption: string; alt: string }[] }[];
};

export type Project = {
  title: string;
  client?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  backendUrl?: string;
  liveUrl?: string;
  caseStudy?: CaseStudy; // omit entirely for a simple card with no deep dive
};

export const projects: Project[] = [
  {
    title: "EduSync — University Project Management System",
    client: "Faculty of Information Technology, University of Moratuwa",
    description:
      "A full-stack platform built for the Faculty of IT at University of Moratuwa to manage undergraduate project work end-to-end — group formation, supervisor approval, milestones, and evaluation.",
    tags: ["React", "TypeScript", "Vite", "Node.js", "Express", "TiDB / MySQL", "Cloudinary"],
    githubUrl: "https://github.com/udithaanuradha/Edusync",
    backendUrl: "https://github.com/udithaanuradha/Edusync-Backend",
    caseStudy: {
      slug: "edusync",
      status: "Completed",
      videoUrl: "/projects/edusync/student-demo.mp4",
      videoTitle: "Student role demo",
      problem:
        "At the University of Moratuwa, project tracking across four academic levels relied on email, manual records, and separate tools. That made it difficult to see project progress and coordinate panel evaluations.",
      solution:
        "EduSync gives students, supervisors, coordinators, industry mentors, and administrators a shared platform with role-based permissions. Teams can form groups, submit reports through Cloudinary, and track tasks and milestones. Faculty can schedule evaluation panels, assess projects against rubrics, and aggregate grades.",
      keyContributions: [
        "Led Team Cygen and developed the student module, including the dashboard for project progress and tasks.",
        "Built the group formation workflow so students could find and invite peers at their academic level, search for supervisors, and submit requests.",
        "Implemented the drag-and-drop Kanban board and the milestone timeline so students could track task status and progress.",
      ],
      screenshotGroups: [
        {
          title: "EduSync screens",
          images: [
            {
              src: "/projects/edusync/mentor-dashboard.jpg",
              caption: "Mentor dashboard",
              alt: "Mentor dashboard showing an assigned group, task progress, milestones, and student contributions",
            },
            {
              src: "/projects/edusync/mentor-tasks.jpg",
              caption: "Mentor view of member tasks",
              alt: "Project tasks grouped by team member and completion status",
            },
            {
              src: "/projects/edusync/landing-page.jpg",
              caption: "EduSync landing page",
              alt: "EduSync homepage introducing group formation, meeting scheduling, and project tracking",
            },
            {
              src: "/projects/edusync/sign-in.jpg",
              caption: "Sign-in",
              alt: "EduSync sign-in screen with email and password fields",
            },
            {
              src: "/projects/edusync/registration.jpg",
              caption: "Role-based registration",
              alt: "EduSync account registration form with the lecturer role selected",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Smart Medicare System — Zenith Medical",
    description:
      "A doctor appointment platform where patients can find doctors and manage bookings, with separate views for doctors and clinic staff.",
    tags: ["Angular", "TypeScript", "Spring Boot", "Java", "MongoDB Atlas"],
    caseStudy: {
      slug: "smart-medicare-system",
      status: "Completed",
      problem:
        "Patients need a way to find doctors and book appointments. Clinic staff need access to schedules and patient information according to their roles.",
      solution:
        "The Angular frontend provides patient registration, doctor search, and appointment views. Doctors have separate views for schedules, patient lists, and medical records. A Java and Spring Boot API handles authentication and application data, with MongoDB Atlas as the database.",
      keyContributions: [],
      screenshotGroups: [
        {
          title: "Patient dashboard and appointments",
          images: [
            {
              src: "/projects/smart-medicare-system/patient-dashboard.webp",
              caption: "Patient dashboard",
              alt: "Patient dashboard with sections for vitals, upcoming appointments, and medical history",
            },
            {
              src: "/projects/smart-medicare-system/my-appointments.webp",
              caption: "My Appointments",
              alt: "Appointment management page with tabs for upcoming, past, and cancelled visits",
            },
            {
              src: "/projects/smart-medicare-system/medical-records.webp",
              caption: "Medical Records",
              alt: "Consultation history screen with sections for medicines and doctor notes",
            },
            {
              src: "/projects/smart-medicare-system/sms-notifications.webp",
              caption: "SMS appointment notifications",
              alt: "Demo text messages for appointment updates and account setup",
            },
          ],
        },
        {
          title: "Sign-in and registration",
          images: [
            {
              src: "/projects/smart-medicare-system/sign-in.webp",
              caption: "Zenith Medical sign-in",
              alt: "Zenith Medical sign-in screen with name or email and password fields",
            },
            {
              src: "/projects/smart-medicare-system/registration.webp",
              caption: "Patient and doctor registration",
              alt: "Zenith Medical registration screen with patient and doctor account options",
            },
          ],
        },
      ],
    },
  },
  {
    title: "EventPro — Event Management & Attendance Tracking System",
    description:
      "An event management platform with a Next.js organizer dashboard and an Expo mobile app for staff to scan QR invitations and record attendance.",
    tags: ["Next.js", "React", "TypeScript", "React Native", "Expo", "PostgreSQL", "Prisma", "JWT"],
    githubUrl: "https://github.com/udithaanuradha/eventpro",
    caseStudy: {
      slug: "eventpro",
      status: "Completed",
      problem:
        "Event organizers need a way to manage attendee lists and verify tickets at the entrance while keeping attendance records up to date.",
      solution:
        "Organizers use the web app to create events, manage participants, and email QR invitations. Check-in staff use the Expo app to select their assigned event, scan invitations, and record attendance through the web app’s API. The web app manages participant and attendance records in PostgreSQL through Prisma.",
      keyContributions: [
        "Built secure registration/login endpoints (Next.js API routes, Prisma, PostgreSQL) with JWT session handling, password hashing, and server-side input validation.",
        "Implemented QR check-in validation to verify tickets and record attendance.",
      ],
      screenshotGroups: [
        {
          title: "EventPro overview and workflows",
          images: [
            {
              src: "/projects/eventpro/overview.jpg",
              caption: "EventPro overview",
              alt: "EventPro overview showing the organizer dashboard and mobile QR ticket scanner",
            },
            {
              src: "/projects/eventpro/organizer-dashboard.jpg",
              caption: "Organizer dashboard",
              alt: "Organizer dashboard with assigned events, check-in totals, and attendance rates",
            },
            {
              src: "/projects/eventpro/attendance-dashboard.jpg",
              caption: "Attendance analytics",
              alt: "Admin dashboard with check-in activity and a breakdown by ticket category",
            },
            {
              src: "/projects/eventpro/event-reports.jpg",
              caption: "Event reports",
              alt: "Event list with attendance totals and an option to download an event report",
            },
          ],
        },
        {
          title: "Sign-in and registration",
          images: [
            {
              src: "/projects/eventpro/sign-in.webp",
              caption: "Staff sign-in",
              alt: "EventPro sign-in screen with work email and password fields",
            },
            {
              src: "/projects/eventpro/sign-up.webp",
              caption: "Organization registration",
              alt: "EventPro registration form with organization name and account details",
            },
          ],
        },
      ],
    },
  },
  {
    title: "PureGuard — Jewellery Artifacts Monitoring System",
    description:
      "An IoT-powered system that monitors temperature, humidity, air quality, and dust levels in real time to protect jewellery artifacts, with an auto-updating web dashboard.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Firebase", "IoT Sensors & Actuators"],
    githubUrl: "https://github.com/udithaanuradha/pureguard",
    caseStudy: {
      slug: "pureguard",
      status: "Completed (first-year hardware/IoT project)",
      problem:
        "Changes in temperature, humidity, air quality, and dust can affect jewellery artifacts. People responsible for the artifacts need to see changing conditions without checking each sensor individually.",
      solution:
        "IoT sensors track storage conditions in real time. Authorized users can follow readings through a web dashboard, while automated alerts and actuators help maintain stable conditions.",
      keyContributions: [
        "Led the first-year hardware project at the University of Moratuwa from planning through implementation.",
        "Built the web dashboard (Node.js/Express, MySQL, Firebase) with secure login and automated alerts.",
      ],
      screenshotGroups: [
        {
          title: "Prototype and project presentation",
          images: [
            {
              src: "/projects/pureguard/prototype.jpg",
              caption: "PureGuard hardware prototype",
              alt: "Wooden jewellery display enclosure with a screen and temperature, humidity, dust, and air-quality indicators",
            },
            {
              src: "/projects/pureguard/project-presentation.jpg",
              caption: "Project presentation",
              alt: "PureGuard team presenting the powered-on prototype alongside its web dashboard",
            },
            {
              src: "/projects/pureguard/team-prototype.jpg",
              caption: "Team with the prototype",
              alt: "Five team members gathered around the PureGuard enclosure",
            },
            {
              src: "/projects/pureguard/team-seated.jpg",
              caption: "PureGuard team",
              alt: "PureGuard team seated outside with the finished enclosure",
            },
            {
              src: "/projects/pureguard/prototype-portrait.jpg",
              caption: "PureGuard prototype and project lead",
              alt: "Project lead seated beside the finished PureGuard enclosure",
            },
          ],
        },
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
    description: "Expected graduation: 2028\nCumulative GPA: 3.45",
  },
  {
    type: "education",
    title: "Diploma in English",
    organization: "Sabaragamuwa University of Sri Lanka",
    period: "2023",
  },
  {
    type: "education",
    title: "G.C.E. Advanced Level, Mathematics Stream",
    organization: "Bandarawela Central College",
    period: "2019 — 2021",
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
  "Python",
  "SQL",
  "Git & GitHub",
];

export const categorizedSkills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "C", "Python", "Java"]
  },
  {
    category: "Web and Mobile",
    items: ["React", "Angular", "Next.js", "Tailwind CSS", "HTML/CSS"]
  },
  {
    category: "Back-End and APIs",
    items: ["Node.js", "Express.js", "Spring Boot"]
  },
  {
    category: "Databases and ORMs",
    items: ["MySQL", "MongoDB", "SQL", "Prisma"]
  },
  {
    category: "DevOps and Cloud",
    items: ["Git", "GitHub", "Docker", "Vercel"]
  },
  {
    category: "Tools",
    items: ["Postman", "Figma", "Canva"]
  }
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

export type LinkedInArticle = {
  title: string;
  description: string;
  url: string;
};

// Add one entry per published article. Use the direct LinkedIn article or post URL.
export const linkedInArticles: LinkedInArticle[] = [];

export type Article = {
  title: string;
  slug: string;
  description: string;
  content: string; // The full article content, can be HTML or plain text
  url?: string;
  platform: "Medium" | "LinkedIn";
  date?: string;
  imageUrl?: string; // Optional thumbnail image
};

export const articles: Article[] = [
  {
    title: "Why Frontend Development Feels Like a Different World Now?",
    slug: "why-frontend-development-feels-like-a-different-world-now",
    description: "How reusable components and tools like Vite changed the way developers build and maintain frontend applications.",
    content: [
      "The article traces the shift from HTML, CSS, and jQuery to reusable components in React, Vue, and Svelte. Self-contained components make interfaces easier to update and extend.",
      "It also explains how Vite serves modules on demand and updates changed modules in the browser, shortening the feedback loop as developers work.",
    ].join("\n"),
    url: "https://medium.com/@udithaanuradha276/why-frontend-development-feels-like-a-different-world-now-ff8f7112f377",
    platform: "Medium",
    date: "June 2026",
    imageUrl: "/articles/frontend-development.jpeg",
  },
  {
    title: "Where Data Belongs in a React and Node.js App",
    slug: "react-ui-state-and-server-data",
    description: "A decision guide for keeping interface state in React and managing persistent application data through an API.",
    content: [
      "This LinkedIn post explains how to decide where data should live. Keep draft form inputs, menus, and wizard steps close to the interface. React state can handle those updates immediately, and browser storage can remember preferences such as the selected theme.",
      "Use the backend for shared records, permission checks, and updates that need to persist. Fetch or Axios can make requests, TanStack Query can help manage server data on the client, and WebSockets can deliver updates when multiple clients need to stay in sync.",
    ].join("\n"),
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7510398173559971840/",
    platform: "LinkedIn",
    imageUrl: "/articles/react-ui-state-and-server-data.jpeg",
  },
  {
    title: "Axios vs. TanStack Query: What’s the Difference?",
    slug: "axios-and-tanstack-query",
    description: "How Axios and TanStack Query work together to fetch, cache, and refresh server data in React.",
    content: [
      "Axios sends HTTP requests to the backend. TanStack Query uses the result to manage cached data, loading and error states, and background refetching.",
      "For example, use Axios to fetch a list of projects and TanStack Query to cache it. After adding a project, invalidate the list query so it can refetch and display the new project.",
    ].join("\n"),
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7527418048752955392/",
    platform: "LinkedIn",
    imageUrl: "/articles/axios-and-tanstack-query.jpeg",
  },
  {
    title: "Debugging Stale React State in EduSync",
    slug: "debugging-stale-react-state-in-edusync",
    description: "A look at how direct state mutation and deeply nested API responses affected EduSync’s role-based interface.",
    content: [
      "This LinkedIn post describes a problem that surfaced as EduSync grew to support five roles. Updates to nested data sometimes left a view showing old information or caused parent components to render more work than expected.",
      "The post identifies two causes. Mutating nested React state in place could leave the references that components relied on unchanged. At the same time, API responses returned large trees of related records, making the data the UI had to manage more complex.",
      "The team switched to immutable state updates, reduced the size of API responses, and standardized field names across the MySQL schema, API responses, and React props.",
    ].join("\n"),
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7508620885151387648/",
    platform: "LinkedIn",
    imageUrl: "/articles/edusync-react-state.jpeg",
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
