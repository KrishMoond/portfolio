import React, { useState, useEffect } from "react";
import { FaArrowUp, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const ModernFooter = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [konamiCode, setKonamiCode] = useState([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    const handleKeyDown = (e) => {
      const newCode = [...konamiCode, e.key].slice(-10);
      setKonamiCode(newCode);

      if (newCode.join(",") === konami.join(",")) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [konamiCode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" });

  return (
    <footer className="relative py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Krish Moond. Made with <FaHeart className="inline text-red-500 animate-pulse" /> using React & Tailwind
          </p>

          {/* Tech Stack */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Built with:</span>
            {["React", "Vite", "Tailwind", "Three.js"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-white/5 rounded">
                {tech}
              </span>
            ))}
          </div>

          {/* Last Updated */}
          <p className="text-gray-500 text-xs">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 z-40"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Easter Egg */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="text-6xl">🎉🎊✨</div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default ModernFooter;
