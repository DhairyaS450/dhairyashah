"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Rocket, Code, Users } from "lucide-react";
import { experiences } from "@/lib/data";
import Link from "next/link";

const typeIcons: Record<string, typeof Briefcase> = {
  work: Briefcase,
  entrepreneurship: Rocket,
  research: Code,
  leadership: Users,
};

export function ExperienceSection() {
  const recentExperiences = experiences.slice(0, 3);

  return (
    <section className="py-24 bg-[#08080c]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 text-sm font-medium mb-2"
          >
            EXPERIENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Where I&apos;ve Worked
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-12">
            {recentExperiences.map((exp, index) => {
              const Icon = typeIcons[exp.type] || Briefcase;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Icon on timeline */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>

                  {/* Content */}
                  <div className="group">
                    <div className="flex items-start gap-4 mb-2">
                      <div className="hidden md:flex w-10 h-10 rounded-lg bg-[#111118] border border-white/5 items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <span className="text-gray-600">@</span>
                          <span className="text-gray-400">{exp.company}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

                        {/* Highlights */}
                        <ul className="space-y-1.5 mb-4">
                          {exp.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                              <span className="text-blue-500 mt-1.5">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech?.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs text-gray-600 border border-gray-800 px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            View full experience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
