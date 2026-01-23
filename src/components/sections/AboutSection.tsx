"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail, Github, Linkedin } from "lucide-react";
import { personalInfo, skills, hobbies, education } from "@/lib/data";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-24 bg-[#08080c]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Photo + Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            {/* Profile photo */}
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-[#111118] border border-white/5 mb-6">
              <Image
                src="/images/profile1.jpg"
                alt="Dhairya Shah"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span>{education.school}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111118] border border-white/5 text-gray-500 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111118] border border-white/5 text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right: About text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <p className="text-blue-500 text-sm font-medium mb-2">ABOUT ME</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building things that matter
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                I&apos;m Dhairya, a full-stack developer and IB student at Cameron Heights CI 
                with a passion for building AI-powered solutions that actually solve problems.
              </p>
              <p>
                As the Co-Founder of TidalTasks, I&apos;ve led the development of an intelligent 
                scheduling platform that helps students manage their time — currently serving 200+ 
                monthly active users. I&apos;ve also worked as a Software Engineer Intern, freelanced 
                for local businesses (generating $2,000+ in a summer), and built custom solutions 
                for nonprofits.
              </p>
              <p>
                When I&apos;m not coding, you can find me playing chess (1700 rated), practicing guitar, 
                or at the gym. I speak English, Gujarati, Hindi, and some French.
              </p>
            </div>

            {/* Skills - inline list style */}
            <div className="mb-8">
              <h3 className="text-sm text-gray-500 mb-3">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.languages, ...skills.frameworks.slice(0, 3)].map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-gray-400 bg-[#111118] border border-white/5 px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-sm text-gray-500 mb-3">INTERESTS</h3>
              <div className="flex gap-4">
                {hobbies.map((hobby) => (
                  <div key={hobby.name} className="flex items-center gap-2 text-gray-400">
                    <span className="text-lg">{hobby.emoji}</span>
                    <span className="text-sm">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
