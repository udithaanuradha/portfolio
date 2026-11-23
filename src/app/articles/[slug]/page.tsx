import { getArticleBySlug, articles, profile } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaMedium, FaLinkedin } from "react-icons/fa";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <Link
        href="/#articles"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to writing
      </Link>

      <article>
        {article.imageUrl && (
          <div className="w-full h-[300px] md:h-[400px] mb-12 overflow-hidden rounded-2xl bg-muted/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/30 px-4 py-1.5 rounded-full">
              {article.platform === "Medium" ? (
                <FaMedium className="text-foreground" size={16} />
              ) : (
                <FaLinkedin className="text-blue-500" size={16} />
              )}
              {article.url ? "Originally published on" : "Post summary from"} {article.platform}
            </span>
            {article.date && (
              <span className="text-sm text-muted-foreground font-mono">{article.date}</span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {article.description}
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
          {/* If you wanted to support Markdown, you could use a library like react-markdown here */}
          {/* For now, we'll just render it as paragraphs if there are newlines, or a simple text block */}
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {(article.url || article.platform === "LinkedIn") && (
          <div className="mt-16 pt-8 border-t border-border">
            <a 
              href={article.url ?? profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              {article.url ? `Read original post on ${article.platform}` : "View LinkedIn profile"}
            </a>
          </div>
        )}
      </article>
    </main>
  );
}
