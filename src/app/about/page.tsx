"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail, Github, Linkedin } from "lucide-react";
import { personalInfo, skills, hobbies, languages, education } from "@/lib/data";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header with photo */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-[#111118] border border-white/5 shrink-0"
          >
            <Image
              src="/images/profile1.jpg"
              alt="Dhairya Shah"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-blue-500 text-sm font-medium mb-2">ABOUT ME</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hey, I&apos;m Dhairya
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Full-Stack Developer & Entrepreneur based in Kitchener, Ontario
            </p>

            <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                {education.school}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#111118] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#111118] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">My Story</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I&apos;m an ambitious full-stack developer and IB student with a passion for 
              building AI-powered solutions that actually solve real problems. My journey into 
              tech started with a curiosity about how things work, which quickly evolved into 
              a drive to create things that make a difference.
            </p>
            <p>
              As the Co-Founder of TidalTasks, I lead the development of an intelligent 
              scheduling platform that helps students manage their time more effectively. 
              What started as a personal frustration with existing productivity tools has 
              grown into a platform with over 200 monthly active users and a $1,000 grant 
              from the Waterloo Youth Creativity Fund.
            </p>
            <p>
              Beyond TidalTasks, I&apos;ve worked as a Software Engineer Intern at TMAS Academy, 
              built websites for local businesses (generating $2,000+ in freelance revenue), 
              and developed custom solutions for nonprofits like Youth Venture International. 
              I&apos;ve also won multiple hackathons, including Best Use of MongoDB at SproutHacks 
              and 3rd place overall at Neodev.
            </p>
            <p>
              When I&apos;m not coding, you can find me playing chess (1700 rated on Chess.com), 
              practicing guitar, or at the gym. I speak four languages: English, Gujarati, 
              Hindi, and some French.
            </p>
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-500 mb-3">LANGUAGES</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[#111118] border border-white/5 text-gray-300 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 mb-3">FRAMEWORKS & LIBRARIES</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[#111118] border border-white/5 text-gray-300 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 mb-3">BACKEND & DATABASES</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[#111118] border border-white/5 text-gray-300 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 mb-3">AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[#111118] border border-white/5 text-gray-300 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Languages & Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Languages</h2>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="text-gray-300">{lang.name}</span>
                  <span className="text-gray-500 text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Hobbies</h2>
            <div className="space-y-4">
              {hobbies.map((hobby) => (
                <div key={hobby.name} className="flex items-center gap-4">
                  <span className="text-2xl">{hobby.emoji}</span>
                  <div>
                    <p className="text-gray-300">{hobby.name}</p>
                    <p className="text-gray-500 text-sm">{hobby.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
