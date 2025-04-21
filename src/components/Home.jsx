import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const Home = () => {
  const canvasRef = useRef(null);

  // Particle Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#A5B4FC"; // indigo-300

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const profileImg = document.getElementById("profile-img");
      if (!profileImg) return;
      const rect = profileImg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (centerY - y) / 20;
      const tiltY = (x - centerX) / 20;
      profileImg.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
    };
    const handleMouseLeave = () => {
      const profileImg = document.getElementById("profile-img");
      if (profileImg) profileImg.style.transform = "";
    };
    const imgContainer = document.getElementById("img-container");
    if (imgContainer) {
      imgContainer.addEventListener("mousemove", handleMouseMove);
      imgContainer.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (imgContainer) {
        imgContainer.removeEventListener("mousemove", handleMouseMove);
        imgContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(99, 102, 241, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const gradientText = "bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 text-transparent bg-clip-text";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10 opacity-70 blur-sm" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="md:w-1/2 mb-12 md:mb-0 flex justify-center" variants={itemVariants}>
            <div id="img-container" className="relative group transition-transform duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100"></div>
              <img
                id="profile-img"
                src="/api/placeholder/400/400"
                alt="Krish Moond"
                className="relative z-10 rounded-full w-64 h-64 object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div className="md:w-1/2 text-center md:text-left" variants={itemVariants}>
            <motion.h1 className="text-5xl font-extrabold mb-4 text-white" variants={itemVariants}>
              Hi, I'm <span className={gradientText}>Krish Moond</span>
            </motion.h1>

            <motion.h2 className="text-2xl text-indigo-200 mb-6" variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  1000,
                  "Frontend Developer",
                  1000,
                  "UI/UX Enthusiast",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.p className="text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              Crafting delightful digital experiences with a blend of creative design and modern code.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start" variants={itemVariants}>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md flex items-center gap-2">
                  <span>Contact Me</span>
                  <FaEnvelope />
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/projects" className="px-6 py-3 border-2 border-indigo-400 text-indigo-200 rounded-lg flex items-center gap-2">
                  <span>View Projects</span>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="hidden md:block">
                <a href="/resume.pdf" download className="px-6 py-3 bg-pink-600 text-white rounded-lg flex items-center gap-2">
                  <span>Download CV</span>
                  <FaDownload />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="flex mt-10 space-x-6 justify-center md:justify-start" variants={itemVariants}>
              <motion.a href="https://github.com/KrishMoond" target="_blank" className="text-white hover:text-indigo-400" whileHover={{ scale: 1.2 }}>
                <FaGithub size={26} />
              </motion.a>
              <motion.a href="https://linkedin.com/in/krish-moond" target="_blank" className="text-white hover:text-blue-400" whileHover={{ scale: 1.2 }}>
                <FaLinkedin size={26} />
              </motion.a>
              <motion.a href="mailto:moondkrish921@gmail.com" className="text-white hover:text-red-400" whileHover={{ scale: 1.2 }}>
                <FaEnvelope size={26} />
              </motion.a>
              <motion.a href="tel:8708304851" className="text-white hover:text-green-400" whileHover={{ scale: 1.2 }}>
                <FaPhone size={26} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
