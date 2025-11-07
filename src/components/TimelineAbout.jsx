import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";

export const TimelineAbout = () => {
  const timeline = [
    {
      year: "2024",
      title: "Summer Training - Board Infinity",
      type: "work",
      icon: FaCode,
      description: "JavaScript for Web Development - Mastered DOM manipulation, async JS, APIs, and Git",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2022 - 2026",
      title: "Computer Science and Engineering",
      type: "education",
      icon: FaGraduationCap,
      description: "Lovely Professional University - CGPA: 7.97",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2021 - 2022",
      title: "12th with Science",
      type: "education",
      icon: FaGraduationCap,
      description: "Shree Ram Ideal School - 81.40%",
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2019 - 2020",
      title: "10th",
      type: "education",
      icon: FaGraduationCap,
      description: "Shree Ram Ideal School - 88.8%",
      color: "from-amber-500 to-orange-500",
    },
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
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate developer with a love for creating elegant solutions to complex problems. 
            Constantly learning and evolving with the ever-changing tech landscape.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-8 mb-16 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50"></div>
            <img
              src="/bimoji.png"
              alt="Krish Moond"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white/20"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">Krish Moond</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a Computer Science and Engineering student at LPU with a passion for building responsive and user-friendly web applications. 
              I love diving into programming fundamentals, data structures, and real-world web tech. Always hungry to learn and take on challenges.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Problem Solver", "Team Player", "Quick Learner", "Adaptability"].map((trait) => (
                <span key={trait} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "justify-end" : "justify-start"}`}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                        <Icon />
                      </div>
                      <span className="text-gray-400 font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-900 z-10"></div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Projects Completed", value: "4+" },
            { label: "Technologies", value: "10+" },
            { label: "CGPA", value: "7.97" },
            { label: "Certifications", value: "3" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineAbout;
