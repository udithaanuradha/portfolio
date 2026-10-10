"use client";

import { motion } from "framer-motion";
import { categorizedSkills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { Code2, Database, LayoutTemplate, Wrench, Cloud, Server } from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Languages":
      return <Code2 className="h-6 w-6 text-blue-400" />;
    case "Web and Mobile":
      return <LayoutTemplate className="h-6 w-6 text-emerald-400" />;
    case "Back-End and APIs":
      return <Server className="h-6 w-6 text-amber-400" />;
    case "Databases and ORMs":
      return <Database className="h-6 w-6 text-purple-400" />;
    case "DevOps and Cloud":
      return <Cloud className="h-6 w-6 text-cyan-400" />;
    case "Tools":
      return <Wrench className="h-6 w-6 text-gray-400" />;
    default:
      return <Code2 className="h-6 w-6 text-blue-400" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24 relative overflow-hidden">
      {/* Decorative background gradients - replaced purple with a very subtle neutral glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] -z-10" />

      <SectionHeading eyebrow="Expertise" title="Technical Arsenal" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorizedSkills.map((categoryGroup, index) => (
          <motion.div
            key={categoryGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            {/* Card Content without the neon purple glow */}
            <div className="relative h-full bg-card/40 backdrop-blur-md border border-border/40 rounded-2xl p-6 sm:p-8 flex flex-col hover:bg-card/60 hover:border-border transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-muted/50 rounded-xl ring-1 ring-border/50 shadow-inner">
                  {getCategoryIcon(categoryGroup.category)}
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {categoryGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {categoryGroup.items.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + (i * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative overflow-hidden rounded-lg border border-border/30 bg-background/30 hover:bg-muted/60 px-4 py-2 transition-all duration-300 cursor-default shadow-sm"
                  >
                    <span className="relative z-10 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
