import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaAward, FaBook } from "react-icons/fa";

export const ModernEducation = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Lovely Professional University",
      year: "2022 - 2026",
      grade: "7.97 CGPA",
      icon: FaGraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "12th with Science",
      field: "Science (PCM)",
      institution: "Shree Ram Ideal School",
      year: "2021 - 2022",
      grade: "81.40%",
      icon: FaBook,
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "10th",
      field: "Secondary Education",
      institution: "Shree Ram Ideal School",
      year: "2019 - 2020",
      grade: "88.8%",
      icon: FaBook,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const certifications = [
    {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Coursera",
      year: "March 2024",
      icon: FaCertificate,
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      year: "March 2023",
      icon: FaCertificate,
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL",
      year: "November 2024",
      icon: FaCertificate,
    },
  ];

  const achievements = [
    "Data Structures and Algorithms",
    "Problem-Solving",
    "Responsive Web Design",
    "Project Management",
  ];

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
            Education & <span className="text-gradient">Certifications</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Academic background and professional certifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-cyan-400 font-medium mb-4">{edu.field}</p>
                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {edu.institution}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {edu.year}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Grade: {edu.grade}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.year}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-3xl p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-2xl">
              <FaAward />
            </div>
            <h2 className="text-3xl font-bold text-white">Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 glass-button rounded-xl p-4"
              >
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernEducation;
