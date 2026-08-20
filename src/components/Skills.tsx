"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <SectionHeading eyebrow="Skills" title="Tools I work with" />

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
