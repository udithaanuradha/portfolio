"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <SectionHeading eyebrow="About me" title="A bit about my journey" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid gap-10 md:grid-cols-3"
      >
        <div className="md:col-span-2 space-y-4 text-muted">
          <p>
            {profile.summary} I&apos;m currently based in {profile.location}, always
            looking for opportunities to learn, build, and collaborate on
            interesting projects.
          </p>
          <p>
            Replace this paragraph with your own story — what got you into
            programming, what you&apos;re studying, and what kind of roles or
            projects you&apos;re looking for next.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Quick facts</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <span className="text-foreground">Role:</span> {profile.role}
            </li>
            <li>
              <span className="text-foreground">Location:</span> {profile.location}
            </li>
            <li>
              <span className="text-foreground">Focus:</span> Full-stack web
              development
            </li>
            <li>
              <span className="text-foreground">Currently learning:</span> add
              something here
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
