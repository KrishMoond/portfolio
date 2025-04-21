import React, { useEffect, useRef } from "react";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { Code, Database, FileCode, GitBranch, Terminal, Cpu, Network, Layers } from "lucide-react";

export const Skills = () => {
  const canvasRef = useRef(null);

  const skills = [
    { name: "C++", icon: <SiCplusplus size={40} />, level: 85 },
    { name: "Java", icon: <FaJava size={40} />, level: 75 },
    { name: "JavaScript", icon: <SiJavascript size={40} />, level: 80 },
    { name: "React", icon: <FaReact size={40} />, level: 70 },
    { name: "Node.js", icon: <FaNodeJs size={40} />, level: 65 },
    { name: "PHP", icon: <SiPhp size={40} />, level: 60 },
    { name: "MySQL", icon: <SiMysql size={40} />, level: 70 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, level: 85 },
    { name: "Git", icon: <FaGitAlt size={40} />, level: 75 },
    { name: "GitHub", icon: <FaGithub size={40} />, level: 80 },
  ];

  const softSkills = [
    "Data Structures and Algorithms",
    "Problem-Solving",
    "Responsive Web Design",
    "Team Player",
    "Project Management",
    "Adaptability",
  ];

  const techIcons = [
    { component: Code, color: "#3B82F6" },
    { component: Database, color: "#10B981" },
    { component: Terminal, color: "#EC4899" },
    { component: Cpu, color: "#F59E0B" },
    { component: Network, color: "#8B5CF6" },
    { component: FileCode, color: "#6366F1" },
    { component: Layers, color: "#EF4444" },
    { component: GitBranch, color: "#14B8A6" }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const numParticles = 50;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsla(${Math.random() * 60 + 200}, 70%, 50%, 0.8)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      drawConnections();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="py-16 relative min-h-screen bg-gray-900"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 overflow-hidden z-0 opacity-40">
        {techIcons.map((item, index) => {
          const Icon = item.component;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const scale = 0.5 + Math.random() * 1.5;
          
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ 
                left: `${randomX}%`, 
                top: `${randomY}%`,
                color: item.color
              }}
              animate={{
                x: [20, -20, 30, -30, 20],
                y: [10, -20, 30, -10, 10],
                rotate: [0, 10, -10, 5, 0],
                scale: [1, 1.1, 0.9, 1.2, 1]
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Icon size={30 * scale} />
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-white">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg shadow-blue-500/20 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
              >
                <div className="text-blue-400 mb-3">{skill.icon}</div>
                <h4 className="font-medium text-center text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Other Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(59, 130, 246, 0.4)"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/50 inline-block"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};