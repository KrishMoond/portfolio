import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { SimpleBackground } from "./SimpleBackground";

export const OptimizedHome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <SimpleBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center" 
            variants={itemVariants}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <img
                src="/bimoji.png"
                alt="Krish Moond"
                className="relative z-10 rounded-full w-72 h-72 object-cover shadow-2xl border-4 border-white/10"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left space-y-6" 
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white leading-tight" 
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                Krish Moond
              </span>
            </motion.h1>

            <motion.div 
              className="text-2xl lg:text-3xl text-gray-300 font-medium" 
              variants={itemVariants}
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "UI/UX Enthusiast", 
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Crafting beautiful, responsive web experiences with modern technologies and creative design.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4" 
              variants={itemVariants}
            >
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me <FaEnvelope />
              </Link>
              <Link 
                to="/projects" 
                className="px-8 py-3 border-2 border-purple-400 text-purple-300 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Projects
              </Link>
              <a 
                href="/resume.pdf" 
                download 
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Download CV <FaDownload />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-6 justify-center lg:justify-start pt-6" 
              variants={itemVariants}
            >
              {[
                { href: "https://github.com/KrishMoond", icon: FaGithub, color: "hover:text-gray-400" },
                { href: "https://linkedin.com/in/krish-moond", icon: FaLinkedin, color: "hover:text-blue-400" },
                { href: "mailto:moondkrish921@gmail.com", icon: FaEnvelope, color: "hover:text-red-400" },
                { href: "tel:8708304851", icon: FaPhone, color: "hover:text-green-400" }
              ].map(({ href, icon: Icon, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  className={`text-white ${color} text-2xl hover:scale-125 transition-all duration-300`}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizedHome;