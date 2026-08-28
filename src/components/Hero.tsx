"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-container flex min-h-[85vh] items-center py-24"
    >
      {/* Text on the left, photo on the right; photo drops below the text on small screens */}
      <div className="grid w-full items-center gap-12 md:grid-cols-[3fr_2fr]">
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent"
          >
            Hi 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-semibold sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-xl font-medium text-accent sm:text-2xl"
          >
            {profile.tagline}
          </motion.p>

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
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
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
            animate={{ opacity: 1, y: [0, 4, 0] }}
            transition={{ opacity: { delay: 0.8 }, y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
            className="mt-4 flex items-center gap-2 text-sm text-muted hover:text-foreground"
          >
            <ArrowDown size={16} />
            Scroll down
          </motion.a>
        </div>

        {/* Photo — drop your image at public/profile.png (see src/data/portfolio.ts). Cropped into a circle with a subtle ring for a clean, professional headshot look. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-first mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full border border-border shadow-sm md:order-last md:max-w-sm"
        >
          <Image
            src={profile.photoUrl}
            alt={profile.name}
            fill
            sizes="(min-width: 768px) 40vw, 80vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
