import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export const ModernProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "🌾 AgriLink",
      description: "A comprehensive mobile-first web application connecting farmers directly with consumers, eliminating middlemen and ensuring fair pricing through secure transactions.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&crop=center",
      tech: ["React 18", "Node.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
      category: "Full Stack",
      github: "https://github.com/KrishMoond/agrilink",
      live: "",
      metrics: { features: "5+", tech: "MERN" }
    },
    {
      title: "🌱 Sustainability Hub",
      description: "A comprehensive Django-based platform connecting sustainability enthusiasts through collaborative projects, events, forums, and resource sharing.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&crop=center",
      tech: ["Django 4.2", "Python", "SQLite", "Bootstrap", "JavaScript"],
      category: "Full Stack",
      github: "https://github.com/KrishMoond/sustainability-hub",
      live: "",
      metrics: { modules: "5+", stack: "Django" }
    },
    {
      title: "UNIGAMES",
      description: "A responsive eCommerce frontend built with React.js and Tailwind CSS, featuring dynamic product listings with search and filter functionality.",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop&crop=center",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      category: "Frontend",
      github: "https://github.com/KrishMoond/unigames",
      live: "https://unigames-bice.vercel.app/",
      metrics: { performance: "Optimized", responsive: "Yes" }
    },
    {
      title: "Student Attendance System",
      description: "An interactive website for teachers to manage student attendance, featuring CRUD operations and cloud server storage on phpMyAdmin.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Full Stack",
      github: "https://github.com/KrishMoond/php-attendance",
      live: "",
      metrics: { crud: "Full", cloud: "phpMyAdmin" }
    }
  ];

  const categories = ["All", "Full Stack", "Frontend"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "glass-button text-gray-300 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="break-inside-avoid cursor-pointer group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-3xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="p-8">
                  <h2 className="text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="glass-button rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-white mb-1">{value}</p>
                        <p className="text-gray-400 text-sm capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        className="flex-1 px-6 py-3 glass-button text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ModernProjects;
