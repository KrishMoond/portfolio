import React from "react";
import { FaCode, FaLaptopCode, FaServer, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const About = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="about" className="relative py-16 bg-gray-100 dark:bg-gray-900 transition-colors overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#111827" } },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#60A5FA" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a Computer Science and Engineering student at LPU with a passion for building responsive and user-friendly web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I love diving into programming fundamentals, data structures, and real-world web tech. Always hungry to learn and take on challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">What I Do</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaCode />, title: "Web Development", text: "Creating responsive websites" },
                { icon: <FaLaptopCode />, title: "Frontend", text: "React, JavaScript, Tailwind" },
                { icon: <FaServer />, title: "Backend", text: "PHP, MySQL, Node.js" },
                { icon: <FaUsers />, title: "Team Projects", text: "Collaboration & Git" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Training</h3>
          <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            <h4 className="font-medium text-gray-800 dark:text-white">Summer Training - Board Infinity</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">May 2024 - July 2024</p>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li>JavaScript for Web Development</li>
              <li>Mastered DOM manipulation & async JS</li>
              <li>Created interactive apps</li>
              <li>Worked with APIs, events, and local storage</li>
              <li>Used Git for version control</li>
            </ul>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Let’s Connect 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
