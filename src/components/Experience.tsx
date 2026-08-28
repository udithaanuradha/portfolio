"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-24">
      <SectionHeading eyebrow="Experience & Education" title="Where I've been" />

      {/* Vertical line the dots sit on, positioned to line up with each icon */}
      <div className="relative space-y-8 border-l border-border pl-8">
        {experience.map((item, i) => {
          const Icon = item.type === "work" ? Briefcase : GraduationCap;
          return (
            <motion.div
              key={`${item.title}-${item.organization}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              {/* Dot marker, offset to sit on top of the vertical line */}
              <div className="absolute left-[-2.55rem] flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-accent shadow-sm">
                <Icon size={16} />
              </div>

              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold">{item.title}</h3>
                <span className="font-mono text-xs text-muted">{item.period}</span>
              </div>
              <p className="text-sm text-muted">
                {item.organization}
                {item.location && ` · ${item.location}`}
              </p>
              {item.description && (
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
