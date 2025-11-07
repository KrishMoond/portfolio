import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaSearch, FaPenNib } from "react-icons/fa";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const commands = [
    { name: "Home", path: "/", icon: FaHome, keywords: ["home", "main", "start"], color: "from-blue-500 to-cyan-500" },
    { name: "About", path: "/about", icon: FaUser, keywords: ["about", "bio", "profile"], color: "from-purple-500 to-pink-500" },
    { name: "Skills", path: "/skills", icon: FaCode, keywords: ["skills", "tech", "technologies"], color: "from-green-500 to-emerald-500" },
    { name: "Projects", path: "/projects", icon: FaBriefcase, keywords: ["projects", "work", "portfolio"], color: "from-orange-500 to-amber-500" },
    { name: "Education", path: "/education", icon: FaGraduationCap, keywords: ["education", "degree", "study"], color: "from-indigo-500 to-blue-500" },
    { name: "Blog", path: "/blog", icon: FaPenNib, keywords: ["blog", "posts", "articles"], color: "from-teal-500 to-cyan-500" },
    { name: "Contact", path: "/contact", icon: FaEnvelope, keywords: ["contact", "email", "reach"], color: "from-red-500 to-pink-500" },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.keywords.some((k) => k.includes(search.toLowerCase()))
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-32 px-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10"
          >
            {/* Search Input */}
            <div className="flex items-center gap-4 p-6 border-b border-white/10 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <FaSearch className="text-white" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type to search pages..."
                className="flex-1 bg-transparent text-white text-lg outline-none placeholder-gray-400"
                autoFocus
              />
              <kbd className="px-3 py-1.5 bg-white/10 rounded-lg text-sm text-gray-300 font-mono border border-white/20">ESC</kbd>
            </div>

            {/* Commands List */}
            <div className="max-h-96 overflow-y-auto p-3">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, index) => {
                  const Icon = cmd.icon;
                  return (
                    <motion.button
                      key={cmd.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSelect(cmd.path)}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 transition-all text-left group mb-2 border border-transparent hover:border-white/10"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${cmd.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                        <Icon className="text-lg" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white font-semibold text-lg block">{cmd.name}</span>
                        <span className="text-gray-400 text-sm">{cmd.keywords[0]}</span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">↵</kbd>
                      </div>
                    </motion.button>
                  );
                })
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaSearch className="text-white text-2xl" />
                  </div>
                  <p className="text-gray-400 text-lg">No results found</p>
                  <p className="text-gray-500 text-sm mt-2">Try a different search term</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 flex items-center justify-between text-sm text-gray-400 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono border border-white/20">⌘K</kbd>
                <span>to open</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono border border-white/20">↵</kbd>
                <span>to select</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
