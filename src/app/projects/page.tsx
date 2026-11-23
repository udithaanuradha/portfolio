import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectGrid } from "@/components/Projects";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "All Projects",
  description: "Explore the full portfolio of projects and case studies.",
};

export default function AllProjectsPage() {
  return (
    <main className="section-container min-h-screen py-16 sm:py-24">
      <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground">
        <ArrowLeft size={16} aria-hidden="true" /> Back to homepage
      </Link>
      <h1 className="mb-10 font-heading text-4xl font-semibold sm:text-5xl">All Projects</h1>
      <ProjectGrid items={projects} heading="h2" />
    </main>
  );
}
