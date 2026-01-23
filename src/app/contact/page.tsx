"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 text-sm font-medium mb-2">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            I&apos;m always open to discussing new projects, opportunities, or just 
            having a chat about tech and entrepreneurship.
          </p>
        </motion.div>

        {/* Contact options */}
        <div className="space-y-4 mb-16">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group flex items-center justify-between p-6 bg-[#111118] border border-white/5 rounded-xl hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">{personalInfo.email}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </motion.a>

          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group flex items-center justify-between p-6 bg-[#111118] border border-white/5 rounded-xl hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <p className="text-gray-400 text-sm">linkedin.com/in/dhairya-bhaumik-shah</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </motion.a>

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group flex items-center justify-between p-6 bg-[#111118] border border-white/5 rounded-xl hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Github className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-white font-medium">GitHub</p>
                <p className="text-gray-400 text-sm">github.com/DhairyaS450</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </motion.a>
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Open to */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-[#111118] border border-white/5 rounded-xl text-center"
        >
          <h2 className="text-xl font-bold text-white mb-4">Currently Open To</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Internship Opportunities",
              "Freelance Projects",
              "Hackathon Teams",
              "Collaboration",
              "Just Chatting",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-[#0a0a0f] border border-white/5 text-gray-400 rounded-lg text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
