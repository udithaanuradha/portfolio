import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleGrid } from "@/components/Articles";

export const metadata: Metadata = {
  title: "All Writing",
  description: "Explore the full collection of articles and posts.",
};

export default function AllWritingPage() {
  return (
    <main className="section-container min-h-screen py-16 sm:py-24">
      <Link href="/#articles" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground">
        <ArrowLeft size={16} aria-hidden="true" /> Back to homepage
      </Link>
      <h1 className="mb-10 font-heading text-4xl font-semibold sm:text-5xl">All Writing</h1>
      <ArticleGrid heading="h2" />
    </main>
  );
}
