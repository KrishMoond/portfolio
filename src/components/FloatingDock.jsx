import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaPenNib } from "react-icons/fa";
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
    { path: "/blog", icon: FaPenNib, label: "Blog" },
    { path: "/contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass-card rounded-2xl px-4 py-3 flex items-end gap-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 3;
          const scale = hoveredIndex !== null ? Math.max(1, 1.5 - distance * 0.2) : 1;

          return (
            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="text-xl" />
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
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
