import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaDatabase, FaCode, FaGamepad, FaLaptopCode } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPhp, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [animateBackground, setAnimateBackground] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Observer for section entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Toggle background animation every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateBackground(prev => !prev);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "UNIGAMES",
      description:
        "A responsive eCommerce frontend built with React.js and Tailwind CSS, featuring dynamic product listings with search and filter functionality.",
      image: "/src/assets/unigames.png",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      link: "https://unigames-bice.vercel.app/",
      github: "https://github.com/KrishMoond/unigames",
      details: [
        "Developed a responsive eCommerce frontend using React.js and Tailwind CSS.",
        "Implemented dynamic product listings with search and filter functionality.",
        "Optimized website performance using lazy loading and virtual DOM.",
        "Ensured cross-browser compatibility and accessibility compliance.",
      ],
      color: "from-blue-600 to-blue-400",
      glowColor: "blue",
      icons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <FaCode key="code" />],
    },
    {
      id: 2,
      title: "Student Attendance System",
      description:
        "An interactive website for teachers to manage student attendance, featuring CRUD operations and cloud server storage on phpMyAdmin.",
      image: "/src/assets/Attendance.png",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/KrishMoond/php-attendance",
      link: "", // Empty string if no live link available
      details: [
        "Manage attendance using CRUD operations with cloud storage.",
        "Integrated real-time tracking with a database-driven backend.",
        "Optimized SQL queries for fast data retrieval.",
        "Enabled report generation and data export.",
      ],
      color: "from-indigo-600 to-purple-400",
      glowColor: "indigo",
      icons: [<SiPhp key="php" />, <SiMysql key="mysql" />, <SiHtml5 key="html" />, <SiCss3 key="css" />],
    },
  ];

  // Generate tech-related floating elements for background
  const generateFloatingElements = (count) => {
    const elements = [];
    const icons = [
      <FaReact key="react" className="text-blue-400" />,
      <FaDatabase key="db" className="text-green-400" />,
      <FaCode key="code" className="text-purple-400" />,
      <SiJavascript key="js" className="text-yellow-400" />,
      <SiTailwindcss key="tailwind" className="text-cyan-400" />,
      <SiPhp key="php" className="text-indigo-400" />,
      <SiMysql key="mysql" className="text-blue-400" />,
      <FaLaptopCode key="laptop" className="text-green-400" />,
    ];
    
    for (let i = 0; i < count; i++) {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const size = Math.floor(Math.random() * 24) + 16; // Random size between 16-40px
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const delay = Math.floor(Math.random() * 10);
      const duration = Math.floor(Math.random() * 20) + 10; // Random duration between 10-30s
      
      elements.push(
        <div
          key={i}
          className={`absolute opacity-0 hover:opacity-60 transition-opacity ${isInView ? 'animate-fadeIn' : ''}`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            fontSize: `${size}px`,
            animationDelay: `${delay + 0.8}s`,
            animationDuration: `${duration}s`,
            animation: isInView ? `floatIcon linear infinite ${delay + 0.8}s` : 'none'
          }}
        >
          {randomIcon}
        </div>
      );
    }
    return elements;
  };

  const particles = generateFloatingElements(20);

  // Generate neural network-like connections in background
  const generateConnections = (count) => {
    const connections = [];
    
    for (let i = 0; i < count; i++) {
      const width = Math.floor(Math.random() * 150) + 50;
      const height = Math.floor(Math.random() * 150) + 50;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const delay = Math.floor(Math.random() * 5);
      
      connections.push(
        <div
          key={i}
          className={`absolute bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-full opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${width}px`,
            height: `${height}px`,
            animationDelay: `${delay + 0.5}s`,
            animation: isInView ? `pulseConnection 8s infinite ${delay + 0.5}s, fadeIn 0.8s forwards ${delay + 0.5}s` : 'none'
          }}
        />
      );
    }
    return connections;
  };

  const connections = generateConnections(8);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-16 relative overflow-hidden transition-all duration-1000 ${
        animateBackground ? "bg-gray-900" : "bg-gray-950"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Tech patterns */}
        <div className={`absolute top-0 left-0 w-full h-full z-0 opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
             style={{ animationDelay: '0.3s' }}>
          <div className="binary-rain"></div>
        </div>
        
        {/* Neural network connections */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {connections}
        </div>
        
        {/* Floating technology icons */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {particles}
        </div>
        
        {/* Glowing orbs */}
        <div className={`absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl opacity-0 ${isInView ? 'animate-scaleIn' : ''}`}
             style={{ animationDelay: '0.6s' }}></div>
        <div className={`absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl opacity-0 ${isInView ? 'animate-scaleIn' : ''}`}
             style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl opacity-0 ${isInView ? 'animate-scaleIn' : ''}`}
             style={{ animationDelay: '1.3s' }}></div>
        
        {/* Code matrix effect - vertical lines */}
        <div className={`absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
             style={{ animationDelay: '1.2s' }}></div>
        <div className={`absolute top-0 left-2/4 h-full w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
             style={{ animationDelay: '1.4s' }}></div>
        <div className={`absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
             style={{ animationDelay: '1.6s' }}></div>
        
        {/* Horizontal scanner effect */}
        <div className={`absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent scanner-line opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
             style={{ animationDelay: '1.8s' }}></div>
      </div>
      
      {/* Digital circuit pattern */}
      <div className={`absolute top-0 left-0 w-full h-full opacity-0 circuit-pattern ${isInView ? 'animate-fadeIn' : ''}`}
           style={{ animationDelay: '0.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`relative mb-16 text-center opacity-0 ${isInView ? 'animate-slideDown' : ''}`}>
          <h2 className="text-5xl font-bold text-white mb-4 inline-block">
            My <span className="text-blue-400 relative">
              Projects
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 animate-pulse"></span>
            </span>
            <div className="absolute -top-8 -right-8 w-16 h-16 opacity-60">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></div>
                <div className="absolute inset-3 rounded-full bg-blue-400/50"></div>
              </div>
            </div>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and personal projects. Each one represents a unique challenge and learning opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group opacity-0 ${isInView ? 'animate-slideUp' : ''}`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              {/* Project tech icons floating around card */}
              {project.icons.map((icon, i) => (
                <div 
                  key={i}
                  className="absolute text-xl opacity-0 group-hover:opacity-70 transition-all duration-700"
                  style={{
                    top: `${-10 - i * 5}px`,
                    left: `${100 + i * 30}px`,
                    transform: 'scale(0)',
                    animation: `floatIcon${i % 3 + 1} 6s infinite ${i * 0.5}s`,
                    color: i % 2 === 0 ? '#60a5fa' : '#34d399'
                  }}
                >
                  {icon}
                </div>
              ))}
              
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-tilt`}></div>
              
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:translate-y-1 hover:scale-[1.01]">
                {/* Image overlay with tech tags floating effect */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  
                  {/* Animated scan line */}
                  <div className="absolute inset-0 scan-line opacity-20 group-hover:opacity-40"></div>
                  
                  {/* Animated tech tags */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[70%]">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          animationDelay: `${idx * 0.1}s`,
                          animationDuration: `${3 + idx * 0.5}s`
                        }}
                        className="px-3 py-1 bg-gray-800/80 text-gray-100 rounded-full text-xs font-semibold backdrop-blur-sm animate-float shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors relative">
                    {project.title}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                      className={`px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition relative overflow-hidden shadow-lg group`}
                    >
                      {/* Button glow effect */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></span>
                      <span className="relative z-10">{activeProject === project.id ? "Hide Details" : "View Details"}</span>
                      
                      {/* Pulsing dots on button */}
                      <span className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full animate-ping"></span>
                    </button>

                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 relative"
                        >
                          <FaGithub size={22} />
                          <span className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100 animate-pulse"></span>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 relative"
                        >
                          <FaExternalLinkAlt size={20} />
                          <span className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100 animate-pulse"></span>
                        </a>
                      )}
                    </div>
                  </div>

                  {activeProject === project.id && (
                    <div
                      className="mt-4 border-t pt-4 border-gray-600 relative overflow-hidden"
                    >
                      {/* Digital wave background */}
                      <div className="absolute inset-0 opacity-5 digital-wave"></div>
                      
                      <ul className="space-y-2 text-gray-300 text-sm relative z-10">
                        {project.details.map((detail, i) => (
                          <li 
                            key={i} 
                            className="flex items-start"
                            style={{
                              animationDelay: `${i * 0.1}s`,
                              opacity: 0,
                              animation: 'fadeIn 0.5s forwards'
                            }}
                          >
                            <span className={`mr-2 text-${project.glowColor}-400`}>•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12">
                  <div className={`absolute inset-0 bg-gradient-to-tr from-transparent to-blue-500 opacity-80 blur-sm animate-pulse`}></div>
                </div>
                
                {/* Data visualization dots */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-2 left-6 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Connect dots with holographic projector effect */}
        <div className={`mt-16 flex justify-center opacity-0 ${isInView ? 'animate-slideUp' : ''}`}
             style={{ animationDelay: `0.8s` }}>
          <div className="relative w-full max-w-lg">
            {/* Holographic projector beams */}
            <div className="absolute -left-10 bottom-2 w-4 h-20 bg-gradient-to-t from-blue-500/50 to-transparent transform skew-x-12 blur-sm"></div>
            <div className="absolute -right-10 bottom-2 w-4 h-20 bg-gradient-to-t from-blue-500/50 to-transparent transform -skew-x-12 blur-sm"></div>
            
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            
            <div className="relative">
              <a 
                href="https://github.com/KrishMoond?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden inline-block"
              >
                {/* Holographic scan line */}
                <div className="absolute inset-0 hologram-scan "></div>
                <span className="relative z-10">View All Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 1s forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s forwards;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes floatIcon {
          0% { transform: translate(0, 0) rotate(0deg) scale(0.5); opacity: 0.2; }
          50% { transform: translate(30px, -20px) rotate(180deg) scale(1.5); opacity: 0.7; }
          100% { transform: translate(0, 0) rotate(360deg) scale(0.5); opacity: 0.2; }
        }
        
        @keyframes floatIcon1 {
          0% { transform: translate(0, 0) scale(0.7); opacity: 0.3; }
          50% { transform: translate(-20px, -20px) scale(1.2); opacity: 0.8; }
          100% { transform: translate(0, 0) scale(0.7); opacity: 0.3; }
        }
        
        @keyframes floatIcon2 {
          0% { transform: translate(0, 0) scale(0.5); opacity: 0.4; }
          50% { transform: translate(20px, -30px) scale(1.4); opacity: 0.9; }
          100% { transform: translate(0, 0) scale(0.5); opacity: 0.4; }
        }
        
        @keyframes floatIcon3 {
          0% { transform: translate(0, 0) scale(0.8); opacity: 0.3; }
          50% { transform: translate(-10px, -15px) scale(1.3); opacity: 0.7; }
          100% { transform: translate(0, 0) scale(0.8); opacity: 0.3; }
        }
        
        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        
        @keyframes tilt {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(0.5deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes hologramScan {
          0% { transform: translateY(-100%); opacity: 0.5; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes pulseConnection {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }
        
        .scanner-line {
          animation: scanLine 8s linear infinite;
        }
        
        .scan-line {
          position: absolute;
          height: 2px;
          width: 100%;
          background: linear-gradient(to right, transparent, rgba(0, 255, 255, 0.5), transparent);
          animation: scanLine 2s linear infinite;
        }
        
        .hologram-scan {
          height: 5px;
          width: 100%;
          background: linear-gradient(to bottom, transparent, cyan, transparent);
          animation: hologramScan 1.5s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float2 {
          animation: float2 8s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 2s infinite;
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .animate-blob {
          animation: blob 10s infinite linear;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .binary-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(0deg, 
            rgba(0, 200, 255, 0.1) 0%, 
            rgba(0, 200, 255, 0) 5%, 
            rgba(0, 200, 255, 0) 45%, 
            rgba(0, 200, 255, 0.1) 50%, 
            rgba(0, 200, 255, 0) 55%, 
            rgba(0, 200, 255, 0) 95%, 
            rgba(0, 200, 255, 0.1) 100%);
          background-size: 100% 80px;
          animation: moveBackground 30s linear infinite;
        }
        
        .circuit-pattern {
          background-image: 
            linear-gradient(rgba(0, 150, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .digital-wave {
          background: repeating-radial-gradient(
            circle at 50% 50%,
            rgba(0, 150, 255, 0.1),
            rgba(0, 150, 255, 0.2) 10px,
            rgba(0, 150, 255, 0.1) 20px
          );
          animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes moveBackground {
          0% { background-position: 0 0; }
          100% { background-position: 0 800px; }
        }
        
        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};