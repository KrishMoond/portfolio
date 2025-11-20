import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaRocket, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import GitHubStats from "./GitHubStats";
import ThreeHero from "./ThreeHero";

export const BentoHome = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [githubStats] = useState({ repos: 12, contributions: "500+" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const MagneticButton = ({ children, href, to, className }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = React.useRef(null);

    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

    const Component = to ? Link : "a";
    const props = to ? { to } : { href, target: href?.startsWith("http") ? "_blank" : undefined };

    return (
      <Component
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        {...props}
      >
        {children}
      </Component>
    );
  };

  const TiltCard = ({ children, className }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const cardRef = React.useRef(null);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientY - rect.top - rect.height / 2) / 20;
      const y = -(e.clientX - rect.left - rect.width / 2) / 20;
      setTilt({ x, y });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="min-h-screen py-20 px-6 pb-32" id="main-content" role="main">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] mb-8">
          
          {/* Profile Card - Large */}
          <TiltCard className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50"></div>
                  <img
                    src="/bimoji.png"
                    alt="Krish Moond - Frontend Developer"
                    loading="eager"
                    className="relative w-24 h-24 rounded-full object-cover border-2 border-white/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900"></div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Krish Moond</h1>
                  <p className="text-cyan-400 text-lg font-medium">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Crafting exceptional web experiences with React, Three.js, and modern technologies. Specializing in interactive 3D interfaces and performance-optimized applications.
              </p>
              <div className="flex gap-3">
                <MagneticButton
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  <FaEnvelope /> Contact
                </MagneticButton>
                <MagneticButton
                  href="/resume.pdf"
                  className="px-6 py-3 glass-button text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <FaDownload /> Resume
                </MagneticButton>
              </div>
            </div>
          </TiltCard>

          {/* 3D Interactive Object */}
          <motion.div
            className="md:row-span-2 glass-card rounded-3xl p-6 flex items-center justify-center overflow-hidden relative group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
            <ThreeHero />
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <FaGithub className="text-4xl text-gray-400 mb-4" />
            <div>
              <p className="text-5xl font-bold text-white mb-2">{githubStats.repos}</p>
              <p className="text-gray-400">Public Repos</p>
            </div>
          </motion.div>

          {/* Contributions */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-between bg-gradient-to-br from-green-500/10 to-emerald-500/10"
          >
            <FaCode className="text-4xl text-green-400 mb-4" />
            <div>
              <p className="text-5xl font-bold text-white mb-2">{githubStats.contributions}</p>
              <p className="text-gray-400">Contributions</p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <FaClock className="text-4xl text-amber-400 mb-4" />
            <div>
              <p className="text-5xl font-bold text-white mb-2">10+</p>
              <p className="text-gray-400">Technologies</p>
            </div>
          </motion.div>

          {/* Projects Showcase */}
          <TiltCard className="md:col-span-2 glass-card rounded-3xl p-6 flex flex-col justify-between bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <div>
              <FaRocket className="text-3xl text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Latest Projects</h3>
              <p className="text-gray-400 mb-4">Building innovative solutions with cutting-edge tech</p>
            </div>
            <MagneticButton
              to="/projects"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 w-fit"
            >
              View All Projects →
            </MagneticButton>
          </TiltCard>

          {/* GitHub Live Stats */}
          <motion.div
            className="md:col-span-2 glass-card rounded-3xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">GitHub Activity</h3>
            <GitHubStats />
          </motion.div>

          {/* Social Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-center"
          >
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {[
                { href: "https://github.com/KrishMoond", icon: FaGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/krish-moond", icon: FaLinkedin, label: "LinkedIn" },
                { href: "mailto:moondkrish921@gmail.com", icon: FaEnvelope, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-white text-2xl hover:scale-125 transition-all duration-300"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-4 flex items-center justify-between bg-gradient-to-r from-green-500/10 to-emerald-500/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-white font-semibold text-sm">Available for Work</p>
            </div>
            <MagneticButton
              to="/contact"
              className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-all duration-300"
            >
              Let's Talk
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoHome;
