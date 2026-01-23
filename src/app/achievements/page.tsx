"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { achievements } from "@/lib/data";
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

const categories = ["all", "entrepreneurship", "hackathon", "academic", "competition"];

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

function AchievementCard({ achievement, onOpen, index }: { achievement: Achievement; onOpen: () => void; index: number }) {
  const showRank = achievement.rank && achievement.rank <= 3;
  
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      onClick={onOpen}
      className="group relative w-full text-left overflow-hidden rounded-xl bg-[#111118] border border-white/5 aspect-[4/3] cursor-pointer"
    >
      {showRank && <RankBadge rank={achievement.rank!} />}
      
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
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded">{achievement.year}</span>
          <span className="text-xs text-gray-500 capitalize">{achievement.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
          {achievement.title}
        </h3>
        <p className="text-sm text-gray-400">{achievement.subtitle}</p>
      </div>

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
        <div className="relative h-64 md:h-80">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
        </div>

        <div className="p-6 -mt-16 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">{achievement.year}</span>
            <span className="text-xs text-gray-500 capitalize">{achievement.category}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{achievement.title}</h2>
          <p className="text-lg text-blue-400 mb-4">{achievement.subtitle}</p>
          <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
        </div>

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

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAchievements = activeCategory === "all"
    ? achievements
    : achievements.filter((a) => a.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-blue-500 text-sm font-medium mb-2">RECOGNITION</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A showcase of my proudest academic and extracurricular accomplishments.
            Click on any card to see more details.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-[#111118] text-gray-400 hover:text-white border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
                onOpen={() => setSelectedAchievement(achievement)}
              />
            ))}
          </AnimatePresence>
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
    </main>
  );
}
