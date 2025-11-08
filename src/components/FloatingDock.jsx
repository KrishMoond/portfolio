import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export const FloatingDock = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { path: "/", icon: FaHome, label: "Home" },
    { path: "/about", icon: FaUser, label: "About" },
    { path: "/skills", icon: FaCode, label: "Skills" },
    { path: "/projects", icon: FaBriefcase, label: "Projects" },
    { path: "/education", icon: FaGraduationCap, label: "Education" },
    { path: "/contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed top-8 right-8 z-40"
    >
      <div className="glass-card rounded-2xl px-3 py-4 flex flex-col items-center gap-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="text-xl" />
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FloatingDock;
