"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-container py-24">
      <SectionHeading eyebrow="Contact" title="Let's work together" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-xl border border-border bg-card p-8 shadow-sm"
      >
        <p className="mb-6 max-w-lg text-muted">
          I&apos;m open to internships, entry-level roles, and interesting
          collaborations. The fastest way to reach me is email — feel free to
          say hi.
          {/* Swap this section for a real form (e.g. Formspree, Web3Forms,
             or a Next.js Server Action + Resend) once you're ready — no
             database needed either way. */}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.socials.github}
            className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
