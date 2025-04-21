import React from "react";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";
import Particles from "react-tsparticles"; // Importing react-tsparticles
import { motion } from "framer-motion"; // Importing framer-motion

export const Skills = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus size={40} />, level: 85 },
    { name: "Java", icon: <FaJava size={40} />, level: 75 },
    { name: "JavaScript", icon: <SiJavascript size={40} />, level: 80 },
    { name: "React", icon: <FaReact size={40} />, level: 70 },
    { name: "Node.js", icon: <FaNodeJs size={40} />, level: 65 },
    { name: "PHP", icon: <SiPhp size={40} />, level: 60 },
    { name: "MySQL", icon: <SiMysql size={40} />, level: 70 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, level: 85 },
    { name: "Git", icon: <FaGitAlt size={40} />, level: 75 },
    { name: "GitHub", icon: <FaGithub size={40} />, level: 80 },
  ];

  const softSkills = [
    "Data Structures and Algorithms",
    "Problem-Solving",
    "Responsive Web Design",
    "Team Player",
    "Project Management",
    "Adaptability",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="py-16 relative"
    >
      {/* Particle Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#000",
              opacity: 0.5,
              width: 1,
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
          },
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md flex flex-col items-center transition-transform hover:scale-105 transform hover:translate-y-[-8px] ease-in-out duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3">{skill.icon}</div>
                <h4 className="font-medium text-center text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-600"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Other Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium transition-all transform hover:scale-110 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA Button with Slide-in Animation */}
        <div className="text-center mt-12">
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            initial={{ opacity: 0, x: 100 }} // Start off-screen (right)
            animate={{ opacity: 1, x: 0 }} // Animate to original position (slide in)
            transition={{ duration: 1, ease: "easeOut" }} // Duration and easing
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};
