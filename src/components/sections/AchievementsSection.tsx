"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import { achievements } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  year: string;
  category: string;
  rank?: number;
}

// Rank badge component
function RankBadge({ rank }: { rank: number }) {
  const colors = {
    1: "from-yellow-400 to-yellow-600 text-yellow-900",
    2: "from-gray-300 to-gray-400 text-gray-700",
    3: "from-amber-600 to-amber-700 text-amber-100",
  };
  
  return (
    <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br ${colors[rank as keyof typeof colors]} flex items-center justify-center font-bold text-lg shadow-lg z-10`}>
      #{rank}
    </div>
  );
}

// Podium card for top 3
function PodiumCard({ 
  achievement, 
  rank, 
  onOpen,
  podiumHeight 
}: { 
  achievement: Achievement; 
  rank: number;
  onOpen: () => void;
  podiumHeight: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: rank === 1 ? 0 : rank === 2 ? 0.1 : 0.2 }}
      className="flex flex-col items-center"
    >
      {/* Card */}
      <motion.button
        whileHover={{ scale: 1.03, y: -5 }}
        onClick={onOpen}
        className="group relative w-full text-left overflow-hidden rounded-xl bg-[#111118] border border-white/5 aspect-[4/3] cursor-pointer mb-4"
      >
        <RankBadge rank={rank} />
        
        <div className="absolute inset-0">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {achievement.title}
          </h3>
          <p className="text-sm text-gray-400">{achievement.subtitle}</p>
        </div>

        <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-4 h-4 text-white" />
        </div>
      </motion.button>

      {/* Podium stand */}
      <div 
        className={`w-full ${podiumHeight} bg-gradient-to-t from-blue-600/20 to-blue-500/10 rounded-t-lg border-t border-x border-blue-500/30 flex items-center justify-center`}
      >
        <span className="text-2xl font-bold text-blue-400/60">#{rank}</span>
      </div>
    </motion.div>
  );
}

function AchievementCard({ achievement, onOpen }: { achievement: Achievement; onOpen: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onClick={onOpen}
      className="group relative w-full text-left overflow-hidden rounded-xl bg-[#111118] border border-white/5 aspect-[4/3] cursor-pointer"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={achievement.image}
          alt={achievement.title}
          fill
          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
          {achievement.title}
        </h3>
        <p className="text-sm text-gray-400">{achievement.subtitle}</p>
      </div>

      {/* Expand icon */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="w-4 h-4 text-white" />
      </div>
    </motion.button>
  );
}

function AchievementModal({ achievement, onClose }: { achievement: Achievement; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#111118] rounded-2xl overflow-hidden border border-white/10"
      >
        {/* Image */}
        <div className="relative h-64 md:h-80">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 -mt-16 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
              {achievement.year}
            </span>
            <span className="text-xs text-gray-500 capitalize">
              {achievement.category}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{achievement.title}</h2>
          <p className="text-lg text-blue-400 mb-4">{achievement.subtitle}</p>
          <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  // Top 3 achievements for the main display
  const topAchievements = achievements.slice(0, 3);
  // Next 3 for honorable mentions
  const honorableMentions = achievements.slice(3, 6);

  // Reorder for podium: 2nd, 1st, 3rd
  const podiumOrder = [topAchievements[1], topAchievements[0], topAchievements[2]];
  const podiumHeights = ["h-16", "h-24", "h-12"]; // Silver, Gold, Bronze heights

  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 text-sm font-medium mb-2"
          >
            RECOGNITION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            A showcase of my proudest academic and extracurricular accomplishments.
            Click on any card to see more details.
          </motion.p>
        </div>

        {/* Podium Display - Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-12 mb-16 items-end">
          {podiumOrder.map((achievement, index) => {
            const ranks = [2, 1, 3]; // Order: Silver, Gold, Bronze
            return (
              <PodiumCard
                key={achievement.id}
                achievement={achievement}
                rank={ranks[index]}
                onOpen={() => setSelectedAchievement(achievement)}
                podiumHeight={podiumHeights[index]}
              />
            );
          })}
        </div>

        {/* Mobile: Regular cards with badges */}
        <div className="md:hidden space-y-4 mt-12 mb-16">
          {topAchievements.map((achievement, index) => (
            <motion.button
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedAchievement(achievement)}
              className="group relative w-full text-left overflow-hidden rounded-xl bg-[#111118] border border-white/5 aspect-[16/9] cursor-pointer"
            >
              <RankBadge rank={index + 1} />
              <div className="absolute inset-0">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-white mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Honorable Mentions */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white">Honorable Mentions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {honorableMentions.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              onOpen={() => setSelectedAchievement(achievement)}
            />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            View all achievements
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <AchievementModal
            achievement={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
