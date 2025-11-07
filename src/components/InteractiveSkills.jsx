import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiDjango, SiPostgresql, SiFirebase } from "react-icons/si";

export const InteractiveSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const skills = {
    Frontend: [
      { name: "React", level: 70, icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", level: 80, icon: FaReact, color: "#F7DF1E" },
      { name: "Tailwind CSS", level: 85, icon: SiTailwindcss, color: "#06B6D4" },
    ],
    Backend: [
      { name: "Node.js", level: 65, icon: FaNodeJs, color: "#339933" },
      { name: "PHP", level: 60, icon: FaPython, color: "#777BB4" },
    ],
    Database: [
      { name: "MySQL", level: 70, icon: SiMongodb, color: "#4479A1" },
      { name: "MongoDB", level: 65, icon: SiMongodb, color: "#47A248" },
    ],
    "Languages & Tools": [
      { name: "C++", level: 85, icon: FaGitAlt, color: "#00599C" },
      { name: "Java", level: 75, icon: FaGitAlt, color: "#007396" },
      { name: "Git", level: 75, icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", level: 80, icon: FaGitAlt, color: "#181717" },
    ],
  };

  const categories = Object.keys(skills);

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Expertise across modern web development technologies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                  : "glass-button text-gray-300 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skills[selectedCategory].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    <Icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass-card rounded-3xl p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Currently Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Data Structures" },
              { name: "Algorithms" },
              { name: "Problem Solving" },
            ].map((item) => (
              <div key={item.name} className="glass-button rounded-xl p-4">
                <span className="text-white font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { title: "Divide and Conquer, Sorting and Searching", issuer: "Coursera", year: "2024" },
            { title: "Programming in C++", issuer: "Coursera", year: "2023" },
            { title: "Ethical Hacking", issuer: "NPTEL", year: "2024" },
          ].map((cert) => (
            <div key={cert.title} className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-white font-semibold">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer} • {cert.year}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSkills;
