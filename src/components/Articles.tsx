import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { articles, linkedInArticles } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Articles() {
  return (
    <section id="articles" className="section-container scroll-mt-20 pb-24">
      <div className="border-t border-border pt-12">
        <SectionHeading title="Writing" />
        <ArticleGrid limit={4} />

        <div className="mt-8 flex justify-center">
          <Link href="/articles" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold transition-colors hover:border-accent hover:text-accent">
            View all writing <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ArticleGrid({ limit, heading: Heading = "h3" }: { limit?: number; heading?: "h2" | "h3" }) {
  const entries = [
    ...articles.map((article) => ({
      ...article,
      href: `/articles/${article.slug}`,
      external: false,
    })),
    ...linkedInArticles.map((article) => ({
      ...article,
      href: article.url,
      platform: "LinkedIn",
      date: undefined,
      imageUrl: undefined,
      external: true,
    })),
  ].slice(0, limit);

  if (entries.length === 0) {
    return <p className="text-muted">New writing will appear here.</p>;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {entries.map(({ title, description, href, date, platform, imageUrl, external }) => (
        <article key={href} className="relative flex min-w-0 items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/50 sm:gap-5 sm:p-5">
          {imageUrl && (
            <div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg bg-background sm:w-24">
              <Image src={imageUrl} alt="" fill sizes="(min-width: 640px) 96px, 64px" className="object-contain" />
            </div>
          )}
          <div className="min-w-0">
            <p className="mb-1 text-xs font-medium text-muted">{date ? `${platform} · ${date}` : platform}</p>
            <Heading className="text-pretty font-heading text-lg font-semibold leading-snug sm:text-xl">
              <Link href={href} className="after:absolute after:inset-0 after:rounded-2xl hover:text-accent focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-accent">
                {title}
                {external
                  ? <ExternalLink className="ml-2 inline text-accent" size={15} aria-hidden="true" />
                  : <ArrowRight className="ml-2 inline text-accent" size={15} aria-hidden="true" />}
              </Link>
            </Heading>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
