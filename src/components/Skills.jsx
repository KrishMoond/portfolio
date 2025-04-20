import React from "react";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";

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
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3">{skill.icon}</div>
                <h4 className="font-medium text-center text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Other Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};