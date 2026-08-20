"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-container flex min-h-[85vh] flex-col justify-center gap-6 py-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent"
      >
        Hi, I&apos;m {profile.name.split(" ")[0]} 👋
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold tracking-tight sm:text-6xl"
      >
        {profile.tagline}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl text-lg text-muted"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center gap-4 pt-2"
      >
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Download resume
        </a>

        <div className="ml-2 flex items-center gap-4 text-muted">
          <a href={profile.socials.github} aria-label="GitHub" className="hover:text-foreground">
            <FaGithub size={20} />
          </a>
          <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-foreground">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { duration: 1.6, repeat: Infinity } }}
        className="mt-10 flex items-center gap-2 text-sm text-muted hover:text-foreground"
      >
        <ArrowDown size={16} />
        Scroll down
      </motion.a>
    </section>
  );
}
