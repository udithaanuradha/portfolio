"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const galleryImages = caseStudy.screenshotGroups?.flatMap(({ images }) => images) ?? [];

  return (
    <article className="section-container py-24">
      <Link
        href="/#projects"
        className="mb-8 inline-block text-sm text-muted hover:text-foreground"
      >
        ← Back to projects
      </Link>

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

        {project.client && (
          <p className="basis-full text-sm text-muted">
            <span className="font-semibold text-accent">Client project</span>{" "}
            · {project.client}
          </p>
        )}

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
              <FaGithub size={16} /> {project.backendUrl ? "Frontend code" : "Code"}
            </a>
          )}
          {project.backendUrl && (
            <a
              href={project.backendUrl}
              className="flex items-center gap-1.5 text-muted hover:text-foreground"
            >
              <FaGithub size={16} /> Backend code
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
        {caseStudy.videoUrl && (
          <Section label={caseStudy.videoTitle ?? "Project demo"}>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-background">
              {caseStudy.videoUrl.includes("youtube.com") || caseStudy.videoUrl.includes("youtu.be") ? (
                <iframe
                  className="h-full w-full"
                  src={caseStudy.videoUrl}
                  title={caseStudy.videoTitle ?? "Project demo"}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  className="h-full w-full object-contain"
                  controls
                  playsInline
                  preload="none"
                  poster={caseStudy.videoPoster}
                  src={caseStudy.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </Section>
        )}
        <Section label="Problem">
          <p>{caseStudy.problem}</p>
        </Section>
        <Section label="Designed solution">
          <p>{caseStudy.solution}</p>
        </Section>
        {caseStudy.keyContributions.length > 0 && (
          <Section label="My contributions">
            <ul className="list-disc space-y-2 pl-5">
              {caseStudy.keyContributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        )}
        {galleryImages.length > 0 && (
          <Section label="Project gallery">
            <div className="grid gap-5 pt-3 md:grid-cols-2">
              {galleryImages.map(({ src, alt, caption }) => (
                <figure key={src} className="min-w-0">
                  <a href={src} aria-label={`View full-size screenshot of ${caption}`} className="group block focus-visible:outline-2 focus-visible:outline-accent">
                    <span className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-border bg-background group-hover:border-accent">
                      <Image src={src} alt={alt} fill unoptimized className="object-contain" />
                    </span>
                    <span aria-hidden="true" className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:underline">
                      Open full size <ExternalLink size={14} />
                    </span>
                  </a>
                  <figcaption className="mt-2 text-sm">{caption}</figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}
      </div>
    </article>
  );
}
