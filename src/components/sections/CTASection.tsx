"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function CTASection() {
  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            I&apos;m always open to discussing new projects, opportunities, or just having a chat 
            about tech and entrepreneurship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white font-medium rounded-lg transition-colors"
            >
              Learn more about me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
