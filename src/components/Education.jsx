import React, { useState } from "react";
import { FaGraduationCap, FaMedal, FaAward, FaBook, FaStar, FaCodeBranch, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export const Education = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  
  const education = [
    {
      title: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "2022 - 2026",
      grade: "CGPA: 7.84",
      icon: <FaGraduationCap size={24} />,
      color: "#4F46E5", // indigo
      floatingIcons: [<FaLaptopCode />, <FaCodeBranch />]
    },
    {
      title: "12th with Science",
      institution: "Shree Ram Ideal School",
      location: "Hisar, Haryana",
      period: "2021 - 2022",
      grade: "Percentage: 81.40%",
      icon: <FaBook size={24} />,
      color: "#0EA5E9", // sky blue
      floatingIcons: [<FaStar />, <FaBook />]
    },
    {
      title: "10th",
      institution: "Shree Ram Ideal School",
      location: "Hisar, Haryana",
      period: "2019 - 2020",
      grade: "Percentage: 88.8%",
      icon: <FaAward size={24} />,
      color: "#10B981", // emerald
      floatingIcons: [<FaMedal />, <FaStar />]
    },
  ];

  const certificates = [
    {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Coursera",
      date: "March 2024",
      link: "https://coursera.org/verify/879A328B4C9B",
      color: "#8B5CF6", // violet
      icon: <FaCodeBranch />
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      date: "March 2023",
      link: "https://coursera.org/verify/specialization/EJ4RT6FP2Y9W",
      color: "#EC4899", // pink
      icon: <FaLaptopCode />
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL",
      date: "November 2024",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S45690045604100568",
      color: "#F59E0B", // amber
      icon: <FaCodeBranch />
    },
  ];

  // Generate random floating objects
  const floatingObjects = Array(25).fill().map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 10 + Math.random() * 30,
    duration: 15 + Math.random() * 25,
    delay: Math.random() * 10,
    opacity: 0.1 + Math.random() * 0.3,
    type: Math.random() > 0.6 ? 'circle' : Math.random() > 0.3 ? 'square' : 'icon',
    color: [
      "#4F46E5", "#0EA5E9", "#10B981", 
      "#8B5CF6", "#EC4899", "#F59E0B"
    ][Math.floor(Math.random() * 6)],
    icon: [<FaGraduationCap />, <FaBook />, <FaStar />, <FaCodeBranch />, <FaLaptopCode />][Math.floor(Math.random() * 5)]
  }));

  // Create a set of glowing orbs
  const glowingOrbs = Array(6).fill().map((_, i) => ({
    id: i,
    size: 100 + Math.random() * 200,
    duration: 20 + Math.random() * 40,
    delay: Math.random() * 10,
    color: [
      "rgba(79, 70, 229, 0.03)", // indigo
      "rgba(14, 165, 233, 0.03)", // sky
      "rgba(16, 185, 129, 0.03)", // emerald
      "rgba(139, 92, 246, 0.03)", // violet
      "rgba(236, 72, 153, 0.03)", // pink
      "rgba(245, 158, 11, 0.03)"  // amber
    ][i % 6]
  }));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="py-16 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {glowingOrbs.map((orb) => (
          <motion.div
            key={`orb-${orb.id}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: orb.color,
              opacity: 0.7,
            }}
            animate={{
              x: [
                `calc(${Math.random() * 100}% - ${orb.size / 2}px)`, 
                `calc(${Math.random() * 100}% - ${orb.size / 2}px)`, 
                `calc(${Math.random() * 100}% - ${orb.size / 2}px)`
              ],
              y: [
                `calc(${Math.random() * 100}% - ${orb.size / 2}px)`, 
                `calc(${Math.random() * 100}% - ${orb.size / 2}px)`, 
                `calc(${Math.random() * 100}% - ${orb.size / 2}px)`
              ],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
              times: [0, 0.33, 0.66, 1]
            }}
          />
        ))}
      </div>

      {/* Floating icons and shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingObjects.map((obj) => (
          <motion.div
            key={obj.id}
            className={`absolute ${obj.type === 'circle' ? 'rounded-full' : obj.type === 'square' ? 'rounded-md rotate-45' : ''}`}
            style={{
              top: `${obj.y}%`,
              left: `${obj.x}%`,
              width: `${obj.size}px`,
              height: `${obj.size}px`,
              backgroundColor: obj.type !== 'icon' ? obj.color : 'transparent',
              color: obj.type === 'icon' ? obj.color : 'transparent',
              opacity: obj.opacity,
              fontSize: obj.type === 'icon' ? `${obj.size / 2}px` : '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            animate={{
              x: [
                Math.random() * 50 - 25, 
                Math.random() * 50 - 25, 
                Math.random() * 50 - 25, 
                Math.random() * 50 - 25
              ],
              y: [
                Math.random() * 50 - 25, 
                Math.random() * 50 - 25, 
                Math.random() * 50 - 25, 
                Math.random() * 50 - 25
              ],
              rotate: obj.type === 'circle' ? 0 : [45, 135, 225, 315, 45], // Fixed rotation array
              scale: [1, 1 + Math.random() * 0.3, 1 - Math.random() * 0.2, 1],
              opacity: [obj.opacity, obj.opacity * 1.5, obj.opacity * 0.8, obj.opacity],
            }}
            transition={{
              duration: obj.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: obj.delay,
              times: [0, 0.33, 0.66, 1]
            }}
          >
            {obj.type === 'icon' && obj.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center relative mb-4 text-gray-800 dark:text-white inline-block mx-auto w-full">
            <motion.span
              className="absolute -inset-10 rounded-full bg-blue-400/5 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            Education & <span className="text-blue-600 dark:text-blue-400 relative">
              Certificates
              <motion.span 
                className="absolute inset-0 bg-blue-400 opacity-20 blur-md rounded-lg"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Orbiting stars */}
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={`star-${i}`}
                  className="absolute text-yellow-400"
                  style={{
                    top: `-${10 + i * 5}px`,
                    right: `-${5 + i * 10}px`,
                    fontSize: `${10 + i * 2}px`,
                    opacity: 0.7 - (i * 0.15)
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                    x: [0, i % 2 === 0 ? 5 : -5, 0]
                  }}
                  transition={{ 
                    duration: 3 + i * 2, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.5
                  }}
                >
                  <FaStar />
                </motion.div>
              ))}
            </span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full relative"
            whileHover={{ width: "32px", x: "0%" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: ["0 0 5px #3b82f6", "0 0 20px #3b82f6", "0 0 5px #3b82f6"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Sliding light effect */}
            <motion.div 
              className="absolute top-0 left-0 w-10 h-full bg-white opacity-30 blur-sm"
              animate={{ x: [-20, 100] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated gradient background */}
            <motion.div 
              className="absolute -inset-4 rounded-xl blur-xl" 
              style={{ background: "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))" }}
              animate={{ 
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mr-2 text-blue-600 dark:text-blue-400 relative"
                >
                  <FaGraduationCap size={24} className="filter drop-shadow-md" />
                  
                  {/* Animated ring around icon */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                Education
              </h3>
              
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 pb-8 last:pb-0 group"
                    style={{ borderColor: item.color }}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    {/* Glowing dot with animated halo */}
                    <motion.div 
                      className="absolute -left-3 top-0 rounded-full p-1 text-white z-10"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.icon}
                      
                      {/* Pulsing halo effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-full"
                        animate={{ 
                          boxShadow: [
                            `0 0 0px ${item.color}`,
                            `0 0 10px ${item.color}`,
                            `0 0 0px ${item.color}`
                          ],
                          scale: [1, 1.3, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    {/* Independent floating icons - total of 5 per education item */}
                    {[...Array(5)].map((_, iconIndex) => {
                      // Determine which icon to use - alternate between provided icons and basic shapes
                      const iconElement = iconIndex < item.floatingIcons.length 
                        ? item.floatingIcons[iconIndex % item.floatingIcons.length] 
                        : iconIndex % 2 === 0 ? <FaStar /> : <FaAward />;
                      
                      // Calculate random positions around the education item
                      const posX = 20 + (iconIndex * 15) + (Math.random() * 20);
                      const posY = 20 + (iconIndex * 25) + (Math.random() * 15);
                      const size = 8 + (Math.random() * 8);
                      const opacity = 0.2 + (Math.random() * 0.3);
                      
                      return (
                        <motion.div
                          key={`float-${index}-${iconIndex}`}
                          className="absolute text-xs"
                          style={{ 
                            color: item.color,
                            left: `${posX}px`,
                            top: `${posY}px`,
                            fontSize: `${size}px`,
                            opacity: opacity
                          }}
                          animate={{
                            y: [0, -15 - (iconIndex * 5), 10, -5, 0],
                            x: [0, iconIndex % 2 === 0 ? 15 : -15, iconIndex % 3 === 0 ? -10 : 5, 0],
                            rotate: [0, iconIndex % 2 === 0 ? 360 : -360, 0],
                            scale: [1, 1.2, 0.9, 1.1, 1],
                            opacity: [opacity, opacity + 0.2, opacity - 0.1, opacity]
                          }}
                          transition={{
                            duration: 10 + (iconIndex * 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.25, 0.5, 0.75, 1],
                            delay: iconIndex * 1.2
                          }}
                        >
                          {iconElement}
                        </motion.div>
                      );
                    })}
                    
                    {/* Animated progress line */}
                    <motion.div 
                      className="absolute left-0 top-0 w-0.5 h-0"
                      style={{ backgroundColor: item.color }}
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.5 }}
                    />
                    
                    <motion.span 
                      className="text-sm font-medium"
                      style={{ color: item.color }}
                    >
                      {item.period}
                    </motion.span>
                    
                    <motion.h4 
                      className="text-lg font-medium mt-1 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      {item.title}
                      
                      {/* Highlight effect on hover */}
                      <motion.span 
                        className="absolute inset-0 bg-current opacity-0 group-hover:opacity-5 rounded"
                        initial={false}
                        animate={false}
                      />
                    </motion.h4>
                    
                    <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.location}</p>
                    
                    <motion.div 
                      className="mt-2 inline-block relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.p 
                        className="px-3 py-1 text-gray-700 dark:text-gray-300 font-medium rounded-full"
                        style={{ backgroundColor: `${item.color}20` }}  // Using hex with alpha
                      >
                        {item.grade}
                      </motion.p>
                      
                      {/* Subtle shimmer effect */}
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated gradient background */}
            <motion.div 
              className="absolute -inset-4 rounded-xl blur-xl" 
              style={{ background: "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))" }}
              animate={{ 
                rotate: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mr-2 text-blue-600 dark:text-blue-400 relative"
                >
                  <FaMedal size={24} className="filter drop-shadow-md" />
                  
                  {/* Animated ring around icon */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                Certificates
              </h3>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/70 dark:bg-gray-700/70 p-4 rounded-lg shadow-md transition-all relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      backgroundColor: `${cert.color}05`  // Very subtle background tint on hover
                    }}
                    onHoverStart={() => setHoveredCert(index)}
                    onHoverEnd={() => setHoveredCert(null)}
                  >
                    {/* Background animated gradient */}
                    <motion.div 
                      className="absolute inset-0 opacity-0"
                      animate={{ 
                        opacity: hoveredCert === index ? 0.15 : 0,
                      }}
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${cert.color}, transparent 70%)`
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Dynamic corner decoration */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-12 h-12 rotate-45 opacity-10"
                      style={{ backgroundColor: cert.color }}
                      animate={{ 
                        rotate: hoveredCert === index ? 45 : 0,
                        opacity: hoveredCert === index ? 0.2 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating certificate icon */}
                    <motion.div
                      className="absolute top-3 right-3"
                      style={{ color: cert.color, opacity: 0.7 }}
                      animate={{ 
                        y: [0, -5, 2, -3, 0],
                        x: [0, 2, -2, 1, 0],
                        rotate: [0, 10, -5, 3, 0],
                        scale: [1, 1.1, 0.95, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {cert.icon}
                    </motion.div>
                    
                    {/* Mini floating icons around certificate card */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`cert-float-${index}-${i}`}
                        className="absolute text-xs"
                        style={{ 
                          color: cert.color,
                          opacity: 0.2,
                          fontSize: `${8 + Math.random() * 4}px`,
                          right: `${10 + (i * 15) + Math.random() * 10}px`,
                          bottom: `${5 + (i * 8) + Math.random() * 5}px`
                        }}
                        animate={{
                          y: [0, -10, -5, -12, 0],
                          x: [0, 5, -3, 6, 0],
                          rotate: [0, 180, 270, 360, 0],
                          scale: [1, 1.2, 0.9, 1.1, 1],
                          opacity: [0.2, 0.3, 0.15, 0.25, 0.2]
                        }}
                        transition={{
                          duration: 10 + i * 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 2
                        }}
                      >
                        <FaStar />
                      </motion.div>
                    ))}
                    
                    <h4 className="font-medium text-gray-800 dark:text-white pr-6">{cert.title}</h4>
                    
                    <div className="flex items-center mt-1">
                      <motion.div 
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: cert.color }}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
                        <span>{cert.issuer}</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span>{cert.date}</span>
                      </p>
                    </div>
                    
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm relative group overflow-hidden"
                      style={{ color: cert.color }}
                      whileHover={{ x: 2 }}
                    >
                      <span className="relative z-10">View Certificate</span>
                      
                      {/* Underline animation */}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 transform origin-left"
                        style={{ backgroundColor: cert.color }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Glow effect */}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 blur-sm transform origin-left"
                        style={{ backgroundColor: cert.color }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                      
                      {/* Arrow indicator animation */}
                      <motion.span 
                        className="inline-block ml-1 relative"
                        animate={{ x: hoveredCert === index ? 3 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};