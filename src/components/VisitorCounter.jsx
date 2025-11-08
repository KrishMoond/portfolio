import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEye, FaUsers, FaGlobe } from "react-icons/fa";

export const VisitorCounter = () => {
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    online: 1
  });

  useEffect(() => {
    const stored = localStorage.getItem("visitorStats");
    const today = new Date().toDateString();
    
    if (stored) {
      const data = JSON.parse(stored);
      if (data.date === today) {
        setStats({ ...data, online: Math.floor(Math.random() * 3) + 1 });
      } else {
        const newStats = { total: data.total + 1, today: 1, date: today };
        localStorage.setItem("visitorStats", JSON.stringify(newStats));
        setStats({ ...newStats, online: 1 });
      }
    } else {
      const newStats = { total: 1, today: 1, date: today };
      localStorage.setItem("visitorStats", JSON.stringify(newStats));
      setStats({ ...newStats, online: 1 });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-28 right-6 glass-card rounded-xl p-4 z-40 hidden md:block"
    >
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <FaGlobe className="text-blue-400" />
          <span>Total: {stats.total}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <FaEye className="text-green-400" />
          <span>Today: {stats.today}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Online: {stats.online}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
