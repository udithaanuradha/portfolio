"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/portfolio";

// One labeled block, e.g. "Overview" / "Key contributions" — kept as a small
// helper so each section stays short and consistent.
function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm"
    >
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {label}
      </h2>
      <div className="text-muted">{children}</div>
    </motion.div>
  );
}

export default function CaseStudyContent({ project }: { project: Project }) {
  // This component only renders when caseStudy is present (guarded by the
  // page itself), but TypeScript still sees it as optional — assert it here.
  const caseStudy = project.caseStudy!;

  return (
    <article className="section-container py-24">
      <motion.a
        href="/#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 inline-block text-sm text-muted hover:text-foreground"
      >
        ← Back to projects
      </motion.a>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-heading text-3xl font-semibold sm:text-5xl"
      >
        {project.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 mt-4 flex flex-wrap items-center gap-4"
      >
        <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
          {caseStudy.status}
        </span>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="flex items-center gap-1.5 text-muted hover:text-foreground"
            >
              <FaGithub size={16} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex items-center gap-1.5 text-muted hover:text-foreground"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </motion.div>

      <div className="space-y-6">
        <Section label="Overview">
          <p>{caseStudy.overview}</p>
        </Section>
        {caseStudy.keyContributions.length > 0 && (
          <Section label="Key contributions">
            <ul className="list-disc space-y-2 pl-5">
              {caseStudy.keyContributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </article>
  );
}
