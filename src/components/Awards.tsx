"use client";

import { motion } from "framer-motion";
import { Award as AwardIcon, Image as ImageIcon } from "lucide-react";
import { awards } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Awards() {
  return (
    <section id="awards" className="section-container py-24">
      <SectionHeading eyebrow="Recognition" title="Awards & achievements" />

      <div className="space-y-4">
        {awards.map((award, i) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <AwardIcon size={18} />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold">{award.title}</h3>
                <span className="font-mono text-xs text-muted">{award.year}</span>
              </div>
              <p className="text-sm text-muted">{award.issuer}</p>
              {award.description && (
                <p className="mt-1 text-sm text-muted">{award.description}</p>
              )}
              {award.certificateUrl && (
                <a
                  href={award.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
                >
                  <ImageIcon size={14} /> View certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
