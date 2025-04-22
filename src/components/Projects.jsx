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
  const [pageLoaded, setPageLoaded] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();

  // Add page entry animation on component mount
  useEffect(() => {
    // Set a small delay to ensure the navigation animation feels natural
    const pageEnterTimer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(pageEnterTimer);
  }, []);

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

  const pageEnterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const pageItemEnterVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: pageLoaded ? 0.2 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10"
      >
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
      </motion.div>
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
          animate={isVisible && pageLoaded ? { 
            opacity: [0, 0.7, 0],
            y: [startY, window.innerHeight + 100]
          } : { opacity: 0 }}
          transition={{ 
            duration,
            delay: startDelay + 0.8, // Add delay for page navigation feel
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: pageLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={`orb-${idx}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible && pageLoaded ? { 
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
              x: [0, 50, 0],
              y: [0, 30, 0],
            } : { opacity: 0 }}
            transition={{ 
              duration: 8 + idx * 2,
              delay: idx * 1.5 + 0.5, // Add delay for page navigation feel
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
      </motion.div>
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
            opacity: 0,
          }}
          animate={isVisible && pageLoaded ? {
            opacity: Math.random() * 0.5 + 0.2,
            x: [0, (Math.random() - 0.5) * 10, 0],
            y: [0, (Math.random() - 0.5) * 10, 0],
          } : { opacity: 0 }}
          transition={{ 
            opacity: { duration: 1, delay: i * 0.02 + 0.8 },
            x: { duration: 10 + Math.random() * 10, repeat: Infinity, repeatType: "reverse" },
            y: { duration: 10 + Math.random() * 10, repeat: Infinity, repeatType: "reverse" }
          }}
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
            opacity: 0,
            transform: `rotate(${angle}deg)`,
          }}
          animate={isVisible && pageLoaded ? {
            opacity: [0, 0.1, 0.2, 0.1],
            rotate: [angle, angle + (Math.random() - 0.5) * 10, angle]
          } : { opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.5, delay: i * 0.1 + 1, repeat: Infinity, repeatType: "reverse" },
            rotate: { duration: 15, repeat: Infinity, repeatType: "reverse", delay: 1 }
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
            animate={isVisible && pageLoaded ? { 
              opacity: [0, 0.7, 0],
              y: [-20, 20],
            } : { opacity: 0 }}
            transition={{ 
              duration: 8,
              delay: idx * 0.8 + 1.2, // Add delay for page navigation feel
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

  // New page enter animation variants
  const projectsHeaderVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3, 
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="projects" 
      ref={sectionRef} 
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors relative overflow-hidden"
      initial="hidden"
      animate={pageLoaded ? "visible" : "hidden"}
      variants={pageEnterVariants}
    >
      {/* Advanced Background Elements with staggered entrances */}
      <GridBackground />
      <GlowingOrbs />
      <ParallaxEffects />
      <CodingAnimation />
      <BinaryRain />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={projectsHeaderVariants}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block relative mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={pageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.h2
              variants={pageItemEnterVariants}
              className="text-5xl font-bold text-center text-gray-800 dark:text-white"
            >
              My <span className="text-blue-600 dark:text-blue-400 relative">
                Projects
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400"
                  initial={{ width: 0 }}
                  animate={pageLoaded ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </span>
            </motion.h2>
            
            {/* Sparkle animation around header */}
            {pageLoaded && Array.from({ length: 6 }).map((_, i) => (
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
                  delay: i * 0.3 + 1.2,
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
            variants={pageItemEnterVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Discover my latest works and creative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={{
                ...projectVariants,
                hidden: { 
                  opacity: 0, 
                  y: 100,
                  scale: 0.95
                },
                visible: (custom) => ({
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 80, 
                    damping: 12,
                    delay: custom * 0.3 + 0.7 // Add extra delay for navigation effect
                  },
                })
              }}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative group z-10"
            >
              {/* Project entrance spotlight effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2 + 1.2,
                  ease: "easeInOut",
                }}
              />
              
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
                  animate={pageLoaded ? { 
                    scale: 1, 
                    opacity: 1,
                    filter: ["blur(8px)", "blur(0px)"]
                  } : { scale: 1.2, opacity: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.3 + 0.8,
                    ease: "easeOut"
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={pageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 + 1 }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
                >
                  {project.icon}
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" 
                />

                {/* Tech Bubbles floating up from image on hover */}
                <AnimatePresence>
                  {pageLoaded && project.tech.map((tech, idx) => (
                    <motion.div
                      key={`${project.id}-tech-${idx}`}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ 
                        opacity: [0, 0.8, 0],
                        y: [-10, -60]
                      }}
                      transition={{
                        duration: 3 + idx,
                        delay: idx * 2 + 1.5,
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
                  animate={pageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + 1 }}
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
                      ease: "easeInOut",
                      delay: index * 0.3 + 1.2
                    }}
                  />
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={pageLoaded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 + 1 }}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={pageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + 1 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={pageLoaded ? { opacity: 1, x: 0 } : { opacity: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8 + idx * 0.1 + index * 0.2 + 1 
                      }}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={pageLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + index * 0.2 + 1.2,
                      type: "spring" 
                    }}
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
                        delay: index * 0.3 + 1.5
                      }}
                    />
                    <BiCodeAlt />
                    {activeProject === project.id ? "Hide Details" : "View Details"}
                  </motion.button>

                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={pageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.2 + 1.3 
                    }}
                  >
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
                  </motion.div>
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
    </motion.section>
  );
};