"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-container py-24">
      <SectionHeading eyebrow="Projects" title="Things I've built" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -2 }}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/60 hover:shadow-md"
          >
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                {/* If a case study exists, the title itself links to it */}
                {project.caseStudy ? (
                  <Link
                    href={`/projects/${project.caseStudy.slug}`}
                    className="hover:text-accent"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mb-4 text-sm text-muted">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              {project.caseStudy && (
                <Link
                  href={`/projects/${project.caseStudy.slug}`}
                  className="flex items-center gap-1.5 font-medium text-accent hover:opacity-80"
                >
                  Case study <ArrowRight size={16} />
                </Link>
              )}
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
        ))}
      </div>
    </section>
  );
}
