 import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "UNIGAMES",
      description:
        "A responsive eCommerce frontend built with React.js and Tailwind CSS, featuring dynamic product listings with search and filter functionality.",
      image: "/src/assets/unigames.png",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      link: "https://unigames-bice.vercel.app/",
      github: "https://github.com/KrishMoond/unigames",
      details: [
        "Developed a responsive eCommerce frontend using React.js and Tailwind CSS.",
        "Implemented dynamic product listings with search and filter functionality.",
        "Optimized website performance using lazy loading and virtual DOM.",
        "Ensured cross-browser compatibility and accessibility compliance.",
      ],
    },
    {
      id: 2,
      title: "Student Attendance System",
      description:
        "An interactive website for teachers to manage student attendance, featuring CRUD operations and cloud server storage on phpMyAdmin.",
      image: "/src/assets/Attendance.png",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/KrishMoond/php-attendance",
      details: [
        "Manage attendance using CRUD operations with cloud storage.",
        "Integrated real-time tracking with a database-driven backend.",
        "Optimized SQL queries for fast data retrieval.",
        "Enabled report generation and data export.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                  >
                    {activeProject === project.id ? "Hide Details" : "View Details"}
                  </motion.button>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                    >
                      <FaGithub size={22} />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {activeProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 border-t pt-4 border-gray-300 dark:border-gray-600"
                  >
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
