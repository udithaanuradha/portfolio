"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-container relative flex min-h-[85vh] items-center py-24"
    >
      <div className="grid w-full items-center gap-12 md:grid-cols-[3fr_2fr] z-10">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit backdrop-blur-sm"
          >
            Hi there 👋
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-xl font-medium text-muted-foreground sm:text-3xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-8 py-3.5 text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Download size={16} />
              Resume
            </a>

            <div className="ml-4 flex items-center gap-5 text-muted-foreground">
              <a href={profile.socials.github} aria-label="GitHub" className="hover:text-primary transition-colors hover:scale-110">
                <FaGithub size={22} />
              </a>
              <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-primary transition-colors hover:scale-110">
                <FaLinkedin size={22} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-primary transition-colors hover:scale-110">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 4, 0] }}
            transition={{ opacity: { delay: 0.8 }, y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
            className="mt-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-fit"
          >
            <ArrowDown size={16} className="animate-bounce" />
            Discover more
          </motion.a>
        </div>

        {/* Photo with glowing background effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-first mx-auto w-full max-w-xs md:order-last md:max-w-md group"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 opacity-50 blur-2xl transition duration-500 group-hover:opacity-100 group-hover:blur-3xl" />
          <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-primary/20 shadow-2xl bg-card">
            <Image
              src={profile.photoUrl}
              alt={profile.name}
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
