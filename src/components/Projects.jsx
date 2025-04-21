// // import React, { useState, useEffect, useRef } from "react";
// // import { FaGithub, FaExternalLinkAlt, FaReact, FaDatabase, FaCode, FaGamepad, FaLaptopCode } from "react-icons/fa";
// // import { SiTailwindcss, SiJavascript, SiPhp, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";

// // export const Projects = () => {
// //   const [activeProject, setActiveProject] = useState(null);
// //   const [animateBackground, setAnimateBackground] = useState(false);
// //   const [pageLoaded, setPageLoaded] = useState(false);
// //   const sectionRef = useRef(null);

// //   // Toggle background animation every 10 seconds
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setAnimateBackground(prev => !prev);
// //     }, 10000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   // Page entrance animation
// //   useEffect(() => {
// //     // Set a small delay to ensure DOM is ready
// //     const timer = setTimeout(() => {
// //       setPageLoaded(true);
// //     }, 100);

// //     // Add intersection observer for scrolling into view
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         if (entries[0].isIntersecting) {
// //           setPageLoaded(true);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       clearTimeout(timer);
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: "UNIGAMES",
// //       description:
// //         "A responsive eCommerce frontend built with React.js and Tailwind CSS, featuring dynamic product listings with search and filter functionality.",
// //       image: "/src/assets/unigames.png",
// //       tech: ["React.js", "Tailwind CSS", "Responsive Design"],
// //       link: "https://unigames-bice.vercel.app/",
// //       github: "https://github.com/KrishMoond/unigames",
// //       color: "from-blue-500/20 to-purple-500/20",
// //       glowColor: "blue",
// //       icons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <FaGamepad key="game" />],
// //       details: [
// //         "Developed a responsive eCommerce frontend using React.js and Tailwind CSS.",
// //         "Implemented dynamic product listings with search and filter functionality.",
// //         "Optimized website performance using lazy loading and virtual DOM.",
// //         "Ensured cross-browser compatibility and accessibility compliance.",
// //       ],
// //     },
// //     {
// //       id: 2,
// //       title: "Student Attendance System",
// //       description:
// //         "An interactive website for teachers to manage student attendance, featuring CRUD operations and cloud server storage on phpMyAdmin.",
// //       image: "/src/assets/Attendance.png",
// //       tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
// //       github: "https://github.com/KrishMoond/php-attendance",
// //       color: "from-green-500/20 to-cyan-500/20",
// //       glowColor: "green",
// //       icons: [<SiPhp key="php" />, <SiMysql key="mysql" />, <SiJavascript key="js" />, <SiHtml5 key="html" />, <SiCss3 key="css" />],
// //       details: [
// //         "Manage attendance using CRUD operations with cloud storage.",
// //         "Integrated real-time tracking with a database-driven backend.",
// //         "Optimized SQL queries for fast data retrieval.",
// //         "Enabled report generation and data export.",
// //       ],
// //     },
// //   ];

// //   // Generate tech-related floating elements for background
// //   const generateFloatingElements = (count) => {
// //     const elements = [];
// //     const icons = [
// //       <FaReact key="react" className="text-blue-400" />,
// //       <FaDatabase key="db" className="text-green-400" />,
// //       <FaCode key="code" className="text-purple-400" />,
// //       <SiJavascript key="js" className="text-yellow-400" />,
// //       <SiTailwindcss key="tailwind" className="text-cyan-400" />,
// //       <SiPhp key="php" className="text-indigo-400" />,
// //       <SiMysql key="mysql" className="text-blue-400" />,
// //       <FaLaptopCode key="laptop" className="text-green-400" />,
// //     ];
    
// //     for (let i = 0; i < count; i++) {
// //       const randomIcon = icons[Math.floor(Math.random() * icons.length)];
// //       const size = Math.floor(Math.random() * 24) + 16; // Random size between 16-40px
// //       const top = Math.floor(Math.random() * 100);
// //       const left = Math.floor(Math.random() * 100);
// //       const delay = Math.floor(Math.random() * 10);
// //       const duration = Math.floor(Math.random() * 20) + 10; // Random duration between 10-30s
      
// //       elements.push(
// //         <div
// //           key={i}
// //           className={`absolute opacity-0 hover:opacity-60 transition-opacity ${pageLoaded ? "animate-fadeIn" : ""}`}
// //           style={{
// //             top: `${top}%`,
// //             left: `${left}%`,
// //             fontSize: `${size}px`,
// //             animationDelay: `${delay + 1.5}s`,
// //             animationDuration: `${duration}s`,
// //             animation: pageLoaded ? `fadeIn 0.5s ${delay + 1.5}s forwards, floatIcon linear infinite ${duration}s ${delay}s` : "none"
// //           }}
// //         >
// //           {randomIcon}
// //         </div>
// //       );
// //     }
// //     return elements;
// //   };

// //   const particles = generateFloatingElements(20);

// //   // Generate neural network-like connections in background
// //   const generateConnections = (count) => {
// //     const connections = [];
    
// //     for (let i = 0; i < count; i++) {
// //       const width = Math.floor(Math.random() * 150) + 50;
// //       const height = Math.floor(Math.random() * 150) + 50;
// //       const top = Math.floor(Math.random() * 100);
// //       const left = Math.floor(Math.random() * 100);
// //       const delay = Math.floor(Math.random() * 5);
      
// //       connections.push(
// //         <div
// //           key={i}
// //           className={`absolute bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-full opacity-0 ${pageLoaded ? "animate-fadeIn" : ""}`}
// //           style={{
// //             top: `${top}%`,
// //             left: `${left}%`,
// //             width: `${width}px`,
// //             height: `${height}px`,
// //             animationDelay: `${delay + 1}s`,
// //             animation: pageLoaded ? `fadeIn 0.8s ${delay + 1}s forwards, pulseConnection 8s infinite ${delay}s` : "none"
// //           }}
// //         />
// //       );
// //     }
// //     return connections;
// //   };

// //   const connections = generateConnections(8);

// //   return (
// //     <section 
// //       ref={sectionRef}
// //       id="projects" 
// //       className={`py-16 relative overflow-hidden transition-all duration-1000 ${
// //         animateBackground ? "bg-gray-900" : "bg-gray-950"
// //       }`}
// //     >
// //       {/* Page entrance portal effect */}
// //       <div className={`absolute inset-0 bg-blue-500/10 rounded-full scale-0 z-20 ${pageLoaded ? "animate-portalIn" : ""}`}></div>
      
// //       {/* Animated background elements */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         {/* Tech patterns */}
// //         <div className={`absolute top-0 left-0 w-full h-full z-0 opacity-0 ${pageLoaded ? "animate-fadeIn animation-delay-1000" : ""}`}
// //              style={{ animationDelay: "1s", opacity: pageLoaded ? "0.1" : "0" }}>
// //           <div className="binary-rain"></div>
// //         </div>
        
// //         {/* Neural network connections */}
// //         <div className="absolute top-0 left-0 w-full h-full z-0">
// //           {connections}
// //         </div>
        
// //         {/* Floating technology icons */}
// //         <div className="absolute top-0 left-0 w-full h-full z-0">
// //           {particles}
// //         </div>
        
// //         {/* Glowing orbs */}
// //         <div className={`absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl opacity-0 ${pageLoaded ? "animate-fadeIn animation-delay-500" : ""}`}
// //              style={{ animationDelay: "0.5s", animationDuration: "1s" }}></div>
// //         <div className={`absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl opacity-0 ${pageLoaded ? "animate-fadeIn animation-delay-1000" : ""}`}
// //              style={{ animationDelay: "1s", animationDuration: "1s" }}></div>
// //         <div className={`absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl opacity-0 ${pageLoaded ? "animate-fadeIn animation-delay-1500" : ""}`}
// //              style={{ animationDelay: "1.5s", animationDuration: "1s" }}></div>
        
// //         {/* Code matrix effect - vertical lines */}
// //         <div className={`absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent opacity-0 ${pageLoaded ? "animate-slideDown" : ""}`}
// //              style={{ animationDelay: "0.3s" }}></div>
// //         <div className={`absolute top-0 left-2/4 h-full w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent opacity-0 ${pageLoaded ? "animate-slideDown" : ""}`}
// //              style={{ animationDelay: "0.6s" }}></div>
// //         <div className={`absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent opacity-0 ${pageLoaded ? "animate-slideDown" : ""}`}
// //              style={{ animationDelay: "0.9s" }}></div>
        
// //         {/* Horizontal scanner effect */}
// //         <div className={`absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent scanner-line opacity-0 ${pageLoaded ? "animate-fadeIn" : ""}`}
// //              style={{ animationDelay: "1.2s" }}></div>
// //       </div>
      
// //       {/* Digital circuit pattern */}
// //       <div className={`absolute top-0 left-0 w-full h-full opacity-0 circuit-pattern ${pageLoaded ? "animate-fadeIn" : ""}`}
// //            style={{ animationDelay: "0.8s", animationDuration: "1.5s" }}></div>
      
// //       <div className="container mx-auto px-4 relative z-10">
// //         <div className={`relative mb-16 text-center opacity-0 ${pageLoaded ? "animate-slideUp" : ""}`}>
// //           <h2 className="text-5xl font-bold text-white mb-4 inline-block">
// //             My <span className="text-blue-400 relative">
// //               Projects
// //               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 animate-pulse"></span>
// //             </span>
// //             <div className="absolute -top-8 -right-8 w-16 h-16 opacity-60">
// //               <div className="w-full h-full relative">
// //                 <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></div>
// //                 <div className="absolute inset-3 rounded-full bg-blue-400/50"></div>
// //               </div>
// //             </div>
// //           </h2>
// //           <p className="text-gray-300 max-w-2xl mx-auto">
// //             Explore my latest work and personal projects. Each one represents a unique challenge and learning opportunity.
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-10">
// //           {projects.map((project, index) => (
// //             <div
// //               key={project.id}
// //               className={`relative group opacity-0 ${pageLoaded ? "animate-slideInFromBottom" : ""}`}
// //               style={{ animationDelay: `${0.3 + index * 0.2}s` }}
// //             >
// //               {/* Project tech icons floating around card */}
// //               {project.icons.map((icon, i) => (
// //                 <div 
// //                   key={i}
// //                   className="absolute text-xl opacity-0 group-hover:opacity-70 transition-all duration-700"
// //                   style={{
// //                     top: `${-10 - i * 5}px`,
// //                     left: `${100 + i * 30}px`,
// //                     transform: 'scale(0)',
// //                     animation: `floatIcon${i % 3 + 1} 6s infinite ${i * 0.5}s`,
// //                     color: i % 2 === 0 ? '#60a5fa' : '#34d399'
// //                   }}
// //                 >
// //                   {icon}
// //                 </div>
// //               ))}
              
// //               {/* Card glow effect */}
// //               <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-tilt`}></div>
              
// //               <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:translate-y-1 hover:scale-[1.01]">
// //                 {/* Image overlay with tech tags floating effect */}
// //                 <div className="relative overflow-hidden">
// //                   <img
// //                     src={project.image}
// //                     alt={project.title}
// //                     className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  
// //                   {/* Animated scan line */}
// //                   <div className="absolute inset-0 scan-line opacity-20 group-hover:opacity-40"></div>
                  
// //                   {/* Animated tech tags */}
// //                   <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[70%]">
// //                     {project.tech.map((tech, idx) => (
// //                       <span
// //                         key={idx}
// //                         style={{
// //                           animationDelay: `${idx * 0.1}s`,
// //                           animationDuration: `${3 + idx * 0.5}s`
// //                         }}
// //                         className="px-3 py-1 bg-gray-800/80 text-gray-100 rounded-full text-xs font-semibold backdrop-blur-sm animate-float shadow-lg"
// //                       >
// //                         {tech}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
                
// //                 <div className="p-6">
// //                   <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors relative">
// //                     {project.title}
// //                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
// //                   </h3>
// //                   <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

// //                   <div className="flex justify-between items-center">
// //                     <button
// //                       onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
// //                       className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition relative overflow-hidden shadow-lg group"
// //                     >
// //                       {/* Button glow effect */}
// //                       <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></span>
// //                       <span className="relative z-10">{activeProject === project.id ? "Hide Details" : "View Details"}</span>
                      
// //                       {/* Pulsing dots on button */}
// //                       <span className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full animate-ping"></span>
// //                     </button>

// //                     <div className="flex space-x-4">
// //                       <a
// //                         href={project.github}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 relative"
// //                       >
// //                         <FaGithub size={22} />
// //                         <span className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100 animate-pulse"></span>
// //                       </a>
// //                       {project.link && (
// //                         <a
// //                           href={project.link}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                           className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 relative"
// //                         >
// //                           <FaExternalLinkAlt size={20} />
// //                           <span className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100 animate-pulse"></span>
// //                         </a>
// //                       )}
// //                     </div>
// //                   </div>

// //                   {activeProject === project.id && (
// //                     <div
// //                       className="mt-4 border-t pt-4 border-gray-600 relative overflow-hidden"
// //                     >
// //                       {/* Digital wave background */}
// //                       <div className="absolute inset-0 opacity-5 digital-wave"></div>
                      
// //                       <ul className="space-y-2 text-gray-300 text-sm relative z-10">
// //                         {project.details.map((detail, i) => (
// //                           <li 
// //                             key={i} 
// //                             className="flex items-start"
// //                             style={{
// //                               animationDelay: `${i * 0.1}s`,
// //                               opacity: 0,
// //                               animation: 'fadeIn 0.5s forwards'
// //                             }}
// //                           >
// //                             <span className={`mr-2 text-${project.glowColor}-400`}>•</span>
// //                             <span>{detail}</span>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Corner accent */}
// //                 <div className="absolute -bottom-1 -right-1 w-12 h-12">
// //                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-500 opacity-80 blur-sm animate-pulse"></div>
// //                 </div>
                
// //                 {/* Data visualization dots */}
// //                 <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
// //                 <div className="absolute top-2 left-6 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Connect dots with holographic projector effect */}
// //         <div className={`mt-16 flex justify-center opacity-0 ${pageLoaded ? "animate-fadeIn" : ""}`} style={{ animationDelay: "1.2s" }}>
// //           <div className="relative w-full max-w-lg">
// //             {/* Holographic projector beams */}
// //             <div className="absolute -left-10 bottom-2 w-4 h-20 bg-gradient-to-t from-blue-500/50 to-transparent transform skew-x-12 blur-sm"></div>
// //             <div className="absolute -right-10 bottom-2 w-4 h-20 bg-gradient-to-t from-blue-500/50 to-transparent transform -skew-x-12 blur-sm"></div>
            
// //             <div className="absolute top-0 left-0 w-full h-full">
// //               <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
// //               <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
// //               <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
// //             </div>
            
// //             <div className="relative">
// //               <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden">
// //                 {/* Holographic scan line */}
// //                 <div className="absolute inset-0 hologram-scan"></div>
// //                 <span className="relative z-10">View All Projects</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Add custom CSS for animations */}
// //       <style jsx global>{`
// //         @keyframes fadeIn {
// //           from { opacity: 0; transform: translateY(10px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
        
// //         @keyframes portalIn {
// //           0% { transform: scale(0); opacity: 0.8; }
// //           70% { transform: scale(2.5); opacity: 0.6; }
// //           100% { transform: scale(3); opacity: 0; }
// //         }
        
// //         @keyframes slideUp {
// //           from { opacity: 0; transform: translateY(30px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
        
// //         @keyframes slideInFromBottom {
// //           from { opacity: 0; transform: translateY(50px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
        
// //         @keyframes slideDown {
// //           0% { opacity: 0; transform: translateY(-100%); }
// //           100% { opacity: 1; transform: translateY(0); }
// //         }
        
// //         @keyframes float {
// //           0% { transform: translateY(0px); }
// //           50% { transform: translateY(-20px); }
// //           100% { transform: translateY(0px); }
// //         }
        
// //         @keyframes float2 {
// //           0% { transform: translateY(0px); }
// //           50% { transform: translateY(-10px); }
// //           100% { transform: translateY(0px); }
// //         }
        
// //         @keyframes floatIcon {
// //           0% { transform: translate(0, 0) rotate(0deg) scale(0.5); opacity: 0.2; }
// //           50% { transform: translate(30px, -20px) rotate(180deg) scale(1.5); opacity: 0.7; }
// //           100% { transform: translate(0, 0) rotate(360deg) scale(0.5); opacity: 0.2; }
// //         }
        
// //         @keyframes floatIcon1 {
// //           0% { transform: translate(0, 0) scale(0.7); opacity: 0.3; }
// //           50% { transform: translate(-20px, -20px) scale(1.2); opacity: 0.8; }
// //           100% { transform: translate(0, 0) scale(0.7); opacity: 0.3; }
// //         }
        
// //         @keyframes floatIcon2 {
// //           0% { transform: translate(0, 0) scale(0.5); opacity: 0.4; }
// //           50% { transform: translate(20px, -30px) scale(1.4); opacity: 0.9; }
// //           100% { transform: translate(0, 0) scale(0.5); opacity: 0.4; }
// //         }
        
// //         @keyframes floatIcon3 {
// //           0% { transform: translate(0, 0) scale(0.8); opacity: 0.3; }
// //           50% { transform: translate(-10px, -15px) scale(1.3); opacity: 0.7; }
// //           100% { transform: translate(0, 0) scale(0.8); opacity: 0.3; }
// //         }
        
// //         @keyframes shine {
// //           from { transform: translateX(-100%); }
// //           to { transform: translateX(100%); }
// //         }
        
// //         @keyframes tilt {
// //           0% { transform: rotate(0deg); }
// //           50% { transform: rotate(0.5deg); }
// //           100% { transform: rotate(0deg); }
// //         }
        
// //         @keyframes blob {
// //           0% { transform: translate(0px, 0px) scale(1); }
// //           33% { transform: translate(30px, -50px) scale(1.1); }
// //           66% { transform: translate(-20px, 20px) scale(0.9); }
// //           100% { transform: translate(0px, 0px) scale(1); }
// //         }
        
// //         @keyframes scanLine {
// //           0% { transform: translateY(-100%); }
// //           100% { transform: translateY(100%); }
// //         }
        
// //         @keyframes hologramScan {
// //           0% { transform: translateY(-100%); opacity: 0.5; }
// //           100% { transform: translateY(100%); opacity: 0; }
// //         }
        
// //         @keyframes pulseConnection {
// //           0% { transform: scale(0.8); opacity: 0.3; }
// //           50% { transform: scale(1.1); opacity: 0.7; }
// //           100% { transform: scale(0.8); opacity: 0.3; }
// //         }
        
// //         @keyframes moveBackground {
// //           0% { background-position: 0 0; }
// //           100% { background-position: 0 800px; }
// //         }
        
// //         @keyframes pulse {
// //           0% { opacity: 0.3; }
// //           50% { opacity: 0.7; }
// //           100% { opacity: 0.3; }
// //         }
        
// //         .scanner-line {
// //           animation: scanLine 8s linear infinite;
// //         }
        
// //         .scan-line {
// //           position: absolute;
// //           height: 2px;
// //           width: 100%;
// //           background: linear-gradient(to right, transparent, rgba(0, 255, 255, 0.5), transparent);
// //           animation: scanLine 2s linear infinite;
// //         }
        
// //         .hologram-scan {
// //           height: 5px;
// //           width: 100%;
// //           background: linear-gradient(to bottom, transparent, cyan, transparent);
// //           animation: hologramScan 1.5s ease-in-out infinite;
// //         }
        
// //         .animate-float {
// //           animation: float 6s ease-in-out infinite;
// //         }
        
// //         .animate-float2 {
// //           animation: float2 8s ease-in-out infinite;
// //         }
        
// //         .animate-shine {
// //           animation: shine 2s infinite;
// //         }
        
// //         .animate-tilt {
// //           animation: tilt 10s infinite linear;
// //         }
        
// //         .animate-blob {
// //           animation: blob 10s infinite linear;
// //         }
        
// //         .animate-fadeIn {
// //           animation: fadeIn 1s forwards;
// //         }
        
// //         .animate-slideUp {
// //           animation: slideUp 1s forwards;
// //         }
        
// //         .animate-slideInFromBottom {
// //           animation: slideInFromBottom 0.8s forwards;
// //         }
        
// //         .animate-slideDown {
// //           animation: slideDown 1.2s forwards;
// //         }
        
// //         .animate-portalIn {
// //           animation: portalIn 1.5s forwards;
// //         }
        
// //         .animation-delay-500 {
// //           animation-delay: 0.5s;
// //         }
        
// //         .animation-delay-1000 {
// //           animation-delay: 1s;
// //         }
        
// //         .animation-delay-1500 {
// //           animation-delay: 1.5s;
// //         }
        
// //         .animation-delay-2000 {
// //           animation-delay: 2s;
// //         }
        
// //         .animation-delay-4000 {
// //           animation-delay: 4s;
// //         }
        
// //         .binary-rain {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background: repeating-linear-gradient(0deg, 
// //             rgba(0, 200, 255, 0.1) 0%, 
// //             rgba(0, 200, 255, 0) 5%, 
// //             rgba(0, 200, 255, 0) 45%, 
// //             rgba(0, 200, 255, 0.1) 50%, 
// //             rgba(0, 200, 255, 0) 55%, 
// //             rgba(0, 200, 255, 0) 95%, 
// //             rgba(0, 200, 255, 0.1) 100%);
// //           background-size: 100% 80px;
// //           animation: moveBackground 30s linear infinite;
// //         }
        
// //         .circuit-pattern {
// //           background-image: 
// //             linear-gradient(rgba(0, 150, 255, 0.1) 1px, transparent 1px),
// //             linear-gradient(90deg, rgba(0, 150, 255, 0.1) 1px, transparent 1px);
// //           background-size: 20px 20px;
// //         }
        
// //         .digital-wave {
// //           background: repeating-radial-gradient(
// //             circle at 50% 50%,
// //             rgba(0, 150, 255, 0.1),
// //             rgba(0, 150, 255, 0.2) 10px,
// //             rgba(0, 150, 255, 0.1) 20px
// //           );
// //           animation: pulse 4s ease-in-out infinite;
// //         }

// //         /* Animation utility classes for floating icons */
// //         .float-icon {
// //           animation: floatIcon 15s ease-in-out infinite;
// //         }
        
// //         .float-icon-1 {
// //           animation: floatIcon1 12s ease-in-out infinite;
// //         }
        
// //         .float-icon-2 {
// //           animation: floatIcon2 18s ease-in-out infinite;
// //         }
        
// //         .float-icon-3 {
// //           animation: floatIcon3 10s ease-in-out infinite;
// //         }

// //         /* Pulse connection animation */
// //         .pulse-connection {
// //           animation: pulseConnection 3s ease-in-out infinite;
// //         }
// //     `}</style>
// //   </section>
// // );
// //  };

// import React, { useState, useEffect } from "react";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { BiCodeAlt } from "react-icons/bi";
// import { SiTailwindcss, SiReact, SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql } from "react-icons/si";

// export const Projects = () => {
//   const [activeProject, setActiveProject] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const controls = useAnimation();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           controls.start("visible");
//         }
//       },
//       { threshold: 0.2 }
//     );

//     const section = document.getElementById("projects");
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, [controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const techIcons = {
//     "React.js": <SiReact className="text-blue-400" />,
//     "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
//     JavaScript: <SiJavascript className="text-yellow-400" />,
//     HTML: <SiHtml5 className="text-orange-500" />,
//     CSS: <SiCss3 className="text-blue-500" />,
//     PHP: <SiPhp className="text-indigo-400" />,
//     MySQL: <SiMysql className="text-blue-600" />,
//   };

//   const projects = [
//     {
//       id: 1,
//       title: "UNIGAMES",
//       description:
//         "A responsive eCommerce frontend built with React.js and Tailwind CSS, featuring dynamic product listings with search and filter functionality.",
//       image: "/src/assets/unigames.png",
//       tech: ["React.js", "Tailwind CSS", "Responsive Design"],
//       link: "https://unigames-bice.vercel.app/",
//       github: "https://github.com/KrishMoond/unigames",
//       details: [
//         "Developed a responsive eCommerce frontend using React.js and Tailwind CSS.",
//         "Implemented dynamic product listings with search and filter functionality.",
//         "Optimized website performance using lazy loading and virtual DOM.",
//         "Ensured cross-browser compatibility and accessibility compliance.",
//       ],
//       color: "#3b82f6",
//       icon: <SiReact className="text-4xl" />,
//     },
//     {
//       id: 2,
//       title: "Student Attendance System",
//       description:
//         "An interactive website for teachers to manage student attendance, featuring CRUD operations and cloud server storage on phpMyAdmin.",
//       image: "/src/assets/Attendance.png",
//       tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
//       github: "https://github.com/KrishMoond/php-attendance",
//       details: [
//         "Manage attendance using CRUD operations with cloud storage.",
//         "Integrated real-time tracking with a database-driven backend.",
//         "Optimized SQL queries for fast data retrieval.",
//         "Enabled report generation and data export.",
//       ],
//       color: "#6366f1",
//       icon: <SiPhp className="text-4xl" />,
//     },
//   ];

//   const OrbBackground = () => {
//     return (
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {projects.map((project, idx) => (
//           <motion.div
//             key={`orb-${idx}`}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={isVisible ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0 }}
//             transition={{ 
//               duration: 2,
//               delay: idx * 0.3,
//               repeat: Infinity,
//               repeatType: "reverse",
//               repeatDelay: Math.random() * 3 + 2
//             }}
//             className="absolute rounded-full blur-xl"
//             style={{
//               background: project.color,
//               width: `${Math.random() * 150 + 100}px`,
//               height: `${Math.random() * 150 + 100}px`,
//               top: `${Math.random() * 80 + 10}%`,
//               left: `${Math.random() * 80 + 10}%`,
//               opacity: 0.1,
//             }}
//           />
//         ))}
//       </div>
//     );
//   };

//   const FloatingIcons = () => {
//     return (
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {projects.flatMap((project, idx) => 
//           project.tech.slice(0, 3).map((tech, techIdx) => (
//             techIcons[tech] && (
//               <motion.div
//                 key={`float-${idx}-${techIdx}`}
//                 initial={{ 
//                   opacity: 0, 
//                   x: Math.random() * 100 - 50,
//                   y: Math.random() * 100 - 50
//                 }}
//                 animate={isVisible ? { 
//                   opacity: [0.4, 0.8, 0.4],
//                   x: [
//                     Math.random() * 100 - 50,
//                     Math.random() * 100 - 50,
//                     Math.random() * 100 - 50
//                   ],
//                   y: [
//                     Math.random() * 100 - 50,
//                     Math.random() * 100 - 50,
//                     Math.random() * 100 - 50
//                   ]
//                 } : { opacity: 0 }}
//                 transition={{ 
//                   duration: 10 + Math.random() * 20,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   delay: Math.random() * 5
//                 }}
//                 className="absolute text-2xl"
//                 style={{
//                   top: `${(idx * 25) + Math.random() * 50}%`,
//                   left: `${(techIdx * 30) + Math.random() * 40}%`,
//                 }}
//               >
//                 {techIcons[tech]}
//               </motion.div>
//             )
//           ))
//         )}
//       </div>
//     );
//   };

//   const projectVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (custom) => ({
//       opacity: 1,
//       y: 0,
//       transition: { 
//         type: "spring",
//         stiffness: 100, 
//         damping: 12,
//         delay: custom * 0.2 
//       },
//     }),
//     hover: {
//       y: -10,
//       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//     }
//   };

//   return (
//     <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors relative overflow-hidden">
//       <OrbBackground />
//       <FloatingIcons />
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white"
//           >
//             My <span className="text-blue-600 dark:text-blue-400 relative">
//               Projects
//               <motion.span 
//                 className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400"
//                 initial={{ width: 0 }}
//                 animate={isVisible ? { width: "100%" } : { width: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               />
//             </span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
//           >
//             Discover my latest works and creative solutions
//           </motion.p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//           className="grid md:grid-cols-2 gap-12"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               custom={index}
//               variants={projectVariants}
//               whileHover="hover"
//               className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
//                 style={{ background: `linear-gradient(135deg, ${project.color}44, transparent)` }}
//               />
              
//               <div className="relative h-52 overflow-hidden bg-gray-300 dark:bg-gray-700">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                   initial={{ scale: 1.2, opacity: 0 }}
//                   animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
//                   transition={{ duration: 0.8, delay: index * 0.3 }}
//                 />
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                   transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
//                   className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
//                 >
//                   {project.icon}
//                 </motion.div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//               </div>
              
//               <div className="p-6 relative">
//                 <motion.h3 
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
//                   className="text-2xl font-bold mb-2 text-gray-800 dark:text-white flex items-center"
//                 >
//                   {project.title}
//                   <motion.div 
//                     className="ml-2 w-2 h-2 rounded-full"
//                     style={{ backgroundColor: project.color }}
//                     animate={{ 
//                       boxShadow: [`0 0 0 rgba(${project.color}, 0)`, `0 0 8px ${project.color}`, `0 0 0 rgba(${project.color}, 0)`]
//                     }}
//                     transition={{ 
//                       repeat: Infinity,
//                       duration: 2,
//                       ease: "easeInOut"
//                     }}
//                   />
//                 </motion.h3>
                
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
//                   className="text-gray-600 dark:text-gray-300 mb-4"
//                 >
//                   {project.description}
//                 </motion.p>
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
//                   className="flex flex-wrap gap-2 mb-6"
//                 >
//                   {project.tech.map((tech, idx) => (
//                     <motion.span
//                       key={idx}
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full text-xs font-semibold flex items-center gap-1"
//                     >
//                       {techIcons[tech] && <span className="mr-1">{techIcons[tech]}</span>}
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </motion.div>

//                 <div className="flex justify-between items-center">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-md"
//                     style={{ backgroundColor: project.color }}
//                   >
//                     <BiCodeAlt />
//                     {activeProject === project.id ? "Hide Details" : "View Details"}
//                   </motion.button>

//                   <div className="flex space-x-4">
//                     <motion.a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.2, rotate: 5 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
//                     >
//                       <FaGithub size={22} />
//                     </motion.a>
//                     {project.link && (
//                       <motion.a
//                         href={project.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.2, rotate: -5 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
//                       >
//                         <FaExternalLinkAlt size={20} />
//                       </motion.a>
//                     )}
//                   </div>
//                 </div>

//                 <AnimatePresence>
//                   {activeProject === project.id && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.4 }}
//                       className="mt-6 border-t pt-4 border-gray-300 dark:border-gray-600"
//                     >
//                       <ul className="space-y-3 text-gray-600 dark:text-gray-300">
//                         {project.details.map((detail, i) => (
//                           <motion.li 
//                             key={i} 
//                             initial={{ opacity: 0, x: -10 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: i * 0.1 }}
//                             className="flex items-start"
//                           >
//                             <motion.span 
//                               className="mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1.5"
//                               animate={{ 
//                                 scale: [1, 1.2, 1], 
//                                 opacity: [1, 0.8, 1] 
//                               }}
//                               transition={{ 
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 delay: i * 0.5 
//                               }}
//                               style={{ color: project.color }}
//                             >
//                               •
//                             </motion.span>
//                             <span>{detail}</span>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { SiTailwindcss, SiReact, SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql } from "react-icons/si";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
      sectionRef.current = section;
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (
          e.clientY >= rect.top && 
          e.clientY <= rect.bottom &&
          e.clientX >= rect.left &&
          e.clientX <= rect.right
        ) {
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const techIcons = {
    "React.js": <SiReact className="text-blue-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
    "JavaScript": <SiJavascript className="text-yellow-400" />,
    "HTML": <SiHtml5 className="text-orange-500" />,
    "CSS": <SiCss3 className="text-blue-500" />,
    "PHP": <SiPhp className="text-indigo-400" />,
    "MySQL": <SiMysql className="text-blue-600" />,
    "Responsive Design": <BiCodeAlt className="text-green-500" />,
  };

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
      color: "#3b82f6",
      icon: <SiReact className="text-4xl" />,
    },
    {
      id: 2,
      title: "Student Attendance System",
      description:
        "An interactive website for teachers to manage student attendance, featuring CRUD operations and cloud server storage on phpMyAdmin.",
      image: "/src/assets/Attendance.png",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/KrishMoond/php-attendance",
      details: [
        "Manage attendance using CRUD operations with cloud storage.",
        "Integrated real-time tracking with a database-driven backend.",
        "Optimized SQL queries for fast data retrieval.",
        "Enabled report generation and data export.",
      ],
      color: "#6366f1",
      icon: <SiPhp className="text-4xl" />,
    },
  ];

  // Dynamic Background Elements
  const GridBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-8">
          {Array.from({ length: 80 }).map((_, idx) => (
            <motion.div
              key={`grid-${idx}`}
              initial={{ opacity: 0 }}
              animate={isVisible ? { 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              } : { opacity: 0 }}
              transition={{ 
                duration: 3 + Math.random() * 5,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="border border-blue-200 dark:border-blue-900"
            />
          ))}
        </div>
      </div>
    );
  };

  const BinaryRain = () => {
    const binaryElements = [];
    for (let i = 0; i < 30; i++) {
      const startDelay = Math.random() * 10;
      const duration = 10 + Math.random() * 20;
      const xPos = Math.random() * 100;
      const startY = -100 - Math.random() * 500;
      
      binaryElements.push(
        <motion.div
          key={`binary-${i}`}
          initial={{ opacity: 0, y: startY }}
          animate={isVisible ? { 
            opacity: [0, 0.7, 0],
            y: [startY, window.innerHeight + 100]
          } : { opacity: 0 }}
          transition={{ 
            duration,
            delay: startDelay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5
          }}
          className="absolute text-xs font-mono text-blue-500 dark:text-blue-400 whitespace-nowrap"
          style={{ left: `${xPos}%` }}
        >
          {Array.from({ length: 8 + Math.floor(Math.random() * 10) }).map(() => 
            Math.random() > 0.5 ? '1' : '0'
          ).join(' ')}
        </motion.div>
      );
    }
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binaryElements}
      </div>
    );
  };

  const GlowingOrbs = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {projects.map((project, idx) => (
          <motion.div
            key={`orb-${idx}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { 
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
              x: [0, 50, 0],
              y: [0, 30, 0],
            } : { opacity: 0 }}
            transition={{ 
              duration: 8 + idx * 2,
              delay: idx * 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              background: project.color,
              width: `${200 + idx * 50}px`,
              height: `${200 + idx * 50}px`,
              top: `${20 + idx * 30}%`,
              left: `${10 + idx * 40}%`,
              filter: "blur(80px)",
              opacity: 0.15,
            }}
          />
        ))}
      </div>
    );
  };

  const ParallaxEffects = () => {
    // Create dots of various sizes for a constellation effect
    const dots = Array.from({ length: 40 }).map((_, i) => {
      const size = Math.random() * 4 + 1;
      return (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full bg-blue-100 dark:bg-blue-400"
          style={{
            width: size,
            height: size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={isVisible ? {
            x: (mousePosition.x - window.innerWidth / 2) / (20 + i % 10) * -1,
            y: (mousePosition.y - window.innerHeight / 2) / (20 + i % 10) * -1,
          } : {}}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      );
    });

    // Create connecting lines between some dots
    const lines = Array.from({ length: 15 }).map((_, i) => {
      const width = Math.random() * 100 + 50;
      const angle = Math.random() * 360;
      return (
        <motion.div
          key={`line-${i}`}
          className="absolute bg-blue-100 dark:bg-blue-900 rounded-full"
          style={{
            height: "1px",
            width: width,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1,
            transform: `rotate(${angle}deg)`,
          }}
          animate={isVisible ? {
            x: (mousePosition.x - window.innerWidth / 2) / (30 + i % 5) * -1,
            y: (mousePosition.y - window.innerHeight / 2) / (30 + i % 5) * -1,
            opacity: [0.1, 0.2, 0.1]
          } : {}}
          transition={{ 
            x: { type: "spring", stiffness: 20, damping: 30 },
            y: { type: "spring", stiffness: 20, damping: 30 },
            opacity: { duration: 3, repeat: Infinity, repeatType: "reverse" }
          }}
        />
      );
    });

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots}
        {lines}
      </div>
    );
  };

  const CodingAnimation = () => {
    const codeSnippets = [
      "<div className='project'>",
      "function loadProject() {",
      "const data = fetch('/api/projects');",
      "import React from 'react';",
      "return <Component {...props} />;",
      "const [state, setState] = useState();",
      "npm install framer-motion",
      "@keyframes glow { }",
      "SELECT * FROM projects;",
      "git commit -m 'Update UI'"
    ];
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, idx) => (
          <motion.div
            key={`code-${idx}`}
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { 
              opacity: [0, 0.7, 0],
              y: [-20, 20],
            } : { opacity: 0 }}
            transition={{ 
              duration: 8,
              delay: idx * 0.8,
              repeat: Infinity,
              repeatDelay: Math.random() * 15
            }}
            className="absolute font-mono text-xs text-gray-500 dark:text-gray-400"
            style={{ 
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>
    );
  };

  const MouseFollower = () => {
    return (
      <motion.div
        className="fixed w-40 h-40 rounded-full pointer-events-none opacity-20 blur-3xl"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
          backgroundColor: ["rgba(59, 130, 246, 0.4)", "rgba(99, 102, 241, 0.4)", "rgba(59, 130, 246, 0.4)"]
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          y: { type: "spring", stiffness: 300, damping: 30 },
          backgroundColor: { duration: 3, repeat: Infinity }
        }}
        style={{ zIndex: 5 }}
      />
    );
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100, 
        damping: 12,
        delay: custom * 0.2 
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Advanced Background Elements */}
      <GridBackground />
      <GlowingOrbs />
      <ParallaxEffects />
      <CodingAnimation />
      <BinaryRain />
      <MouseFollower />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block relative mb-4"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-bold text-center text-gray-800 dark:text-white"
            >
              My <span className="text-blue-600 dark:text-blue-400 relative">
                Projects
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.h2>
            
            {/* Sparkle animation around header */}
            {isVisible && Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-3 h-3 bg-blue-400 rounded-full blur-sm"
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 5 + Math.random() * 5
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  originX: 0.5,
                  originY: 0.5
                }}
              />
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Discover my latest works and creative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={projectVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative group z-10"
            >
              {/* Project glow effect on hover */}
              <motion.div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{ 
                  background: `linear-gradient(145deg, transparent, ${project.color}22, ${project.color}44, transparent)`,
                  zIndex: -1 
                }}
              />
              
              <div className="relative h-52 overflow-hidden bg-gray-300 dark:bg-gray-700">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
                >
                  {project.icon}
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" 
                />

                {/* Tech Bubbles floating up from image on hover */}
                <AnimatePresence>
                  {isVisible && project.tech.map((tech, idx) => (
                    <motion.div
                      key={`${project.id}-tech-${idx}`}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ 
                        opacity: [0, 0.8, 0],
                        y: [-10, -60]
                      }}
                      transition={{
                        duration: 3 + idx,
                        delay: idx * 2,
                        repeat: Infinity,
                        repeatDelay: 5,
                      }}
                      className="absolute bottom-0 text-sm font-medium px-2 py-1 rounded-lg bg-white/90 dark:bg-gray-800/90 shadow-sm"
                      style={{ 
                        left: `${15 + idx * 30}%`,
                        zIndex: 5
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              <div className="p-6 relative">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="text-2xl font-bold mb-2 text-gray-800 dark:text-white flex items-center"
                >
                  {project.title}
                  <motion.div 
                    className="ml-2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.color }}
                    animate={{ 
                      boxShadow: [`0 0 0 rgba(${project.color}, 0)`, `0 0 8px ${project.color}`, `0 0 0 rgba(${project.color}, 0)`]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full text-xs font-semibold flex items-center gap-1"
                    >
                      {techIcons[tech] && <span className="mr-1">{techIcons[tech]}</span>}
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-md overflow-hidden relative"
                    style={{ backgroundColor: project.color }}
                  >
                    {/* Button glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{
                        background: [
                          `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                          `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                        ],
                        backgroundPosition: ["-200% 0", "200% 0"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                    <BiCodeAlt />
                    {activeProject === project.id ? "Hide Details" : "View Details"}
                  </motion.button>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                    >
                      <FaGithub size={22} />
                    </motion.a>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 border-t pt-4 border-gray-300 dark:border-gray-600"
                    >
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        {project.details.map((detail, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start"
                          >
                            <motion.span 
                              className="mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1.5"
                              animate={{ 
                                scale: [1, 1.2, 1], 
                                opacity: [1, 0.8, 1] 
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.5 
                              }}
                              style={{ color: project.color }}
                            >
                              •
                            </motion.span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};