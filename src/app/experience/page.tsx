"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Heart } from "lucide-react";
import { experiences, leadership, volunteering, education } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-blue-500 text-sm font-medium mb-2">BACKGROUND</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            My journey through work, entrepreneurship, leadership, and volunteering.
          </p>
        </div>

        {/* Work Experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-500" />
            Work Experience
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    </div>

                    <div className="group">
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="text-gray-600">@</span>
                        <span className="text-gray-400">{exp.company}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{exp.period} • {exp.location}</p>
                      <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

                      <ul className="space-y-1.5 mb-4">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                            <span className="text-blue-500 mt-1.5">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            Education
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111118] rounded-xl border border-white/5 p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{education.school}</h3>
                <p className="text-gray-400">{education.program}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-blue-400">Expected {education.graduationYear}</p>
                <p className="text-gray-500">GPA: {education.gpa}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-sm text-gray-500 mb-2">CLUBS & ACTIVITIES</h4>
                <div className="flex flex-wrap gap-2">
                  {education.clubs.map((club) => (
                    <span key={club} className="text-sm text-gray-400 bg-[#0a0a0f] px-3 py-1 rounded">
                      {club}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-2">COURSEWORK</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span key={course} className="text-sm text-gray-400 bg-[#0a0a0f] px-3 py-1 rounded">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Leadership */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-500" />
            Leadership
          </h2>

          <div className="space-y-6">
            {leadership.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-gray-600 hidden md:inline">•</span>
                  <span className="text-gray-400">{item.organization}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Volunteering */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Heart className="w-6 h-6 text-blue-500" />
            Volunteering
          </h2>

          <div className="space-y-6">
            {volunteering.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-gray-600 hidden md:inline">•</span>
                  <span className="text-gray-400">{item.organization}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
