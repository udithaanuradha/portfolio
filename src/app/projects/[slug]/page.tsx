import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/portfolio";
import CaseStudyContent from "@/components/CaseStudyContent";
import Footer from "@/components/Footer";

// Pre-render a page for every project that has a case study, so these pages
// are static (fast) instead of built on every request.
export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.caseStudy!.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // No project matches this slug (bad link, removed case study, etc.) — 404.
  if (!project || !project.caseStudy) {
    notFound();
  }

  return (
    <>
      <CaseStudyContent project={project} />
      <Footer />
    </>
  );
}
