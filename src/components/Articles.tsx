"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { FaMedium, FaLinkedin } from "react-icons/fa";
import { articles } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Carousel from "./Carousel";
import Link from "next/link";

export default function Articles() {
  // Hide section completely if there are no articles
  if (!articles || articles.length === 0) return null;

  return (
    <section id="articles" className="section-container py-24">
      <SectionHeading eyebrow="Publications" title="Articles & Writing" />

      <Carousel>
        {articles.map((article, i) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative flex flex-col justify-between rounded-xl border border-border/50 bg-card/40 backdrop-blur-md p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-primary/20 hover:shadow-xl hover:bg-card/60 h-full"
          >
            {article.imageUrl && (
              <div className="w-full h-40 mb-4 overflow-hidden rounded-lg bg-muted/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
                  {article.platform === "Medium" ? (
                    <FaMedium className="text-foreground" size={14} />
                  ) : (
                    <FaLinkedin className="text-blue-500" size={14} />
                  )}
                  {article.platform}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{article.date}</span>
              </div>
              
              <h3 className="mb-3 text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                  <span className="absolute inset-0"></span>
                </Link>
              </h3>
              
              <p className="text-sm text-muted-foreground line-clamp-3">
                {article.description}
              </p>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
}
