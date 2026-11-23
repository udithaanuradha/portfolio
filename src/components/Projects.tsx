import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, type Project } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-container scroll-mt-20 py-24">
      <SectionHeading title="Projects" />

      <ProjectGrid items={projects.slice(0, 4)} />

      <div className="mt-8 flex justify-center">
        <Link href="/projects" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold transition-colors hover:border-accent hover:text-accent">
          View all projects <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function ProjectGrid({ items, heading: Heading = "h3" }: { items: Project[]; heading?: "h2" | "h3" }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((project) => {
        const preview = project.caseStudy?.screenshotGroups?.[0]?.images[0];

        return (
          <article key={project.title} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50">
            {preview && (
              <div className="relative aspect-video max-h-72 border-b border-border bg-background">
                <Image src={preview.src} alt={preview.alt} fill sizes="(min-width: 1024px) 46vw, 94vw" className="object-contain" />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              {project.client && (
                <p className="mb-2 text-sm font-medium text-accent">{project.client}</p>
              )}
              <Heading className="mb-3 text-pretty font-heading text-2xl font-semibold sm:text-3xl">{project.title}</Heading>
              <p className="mb-5 max-w-prose leading-relaxed text-muted">{project.description}</p>

              <ul aria-label="Technologies" className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5 text-sm">
                {project.caseStudy && (
                  <Link
                    href={`/projects/${project.caseStudy.slug}`}
                    aria-label={`View case study: ${project.title}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 font-semibold text-foreground transition-colors hover:bg-primary/20"
                  >
                    View case study <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="inline-flex items-center gap-2 text-muted hover:text-foreground">
                    <FaGithub size={16} aria-hidden="true" /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="inline-flex items-center gap-2 text-muted hover:text-foreground">
                    <ExternalLink size={16} aria-hidden="true" /> Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
