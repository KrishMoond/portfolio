// import React from "react";
// import { Link } from "react-router-dom";
// import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
// import { motion } from "framer-motion";

// export const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };
  
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-white dark:bg-gray-800 shadow-inner">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-transparent bg-clip-text text-xl font-bold"
//             >
//               Krish Moond
//             </motion.div>
//             <p className="text-gray-600 dark:text-gray-400 mt-1">
//               Building the web, one pixel at a time.
//             </p>
//           </div>
//           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
//             <div className="flex space-x-4">
//               <motion.a
//                 href="https://github.com/KrishMoond"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//                 whileHover={{ y: -3, scale: 1.1 }}
//               >
//                 <FaGithub size={22} />
//               </motion.a>
//               <motion.a
//                 href="https://linkedin.com/in/krish-moond"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 whileHover={{ y: -3, scale: 1.1 }}
//               >
//                 <FaLinkedin size={22} />
//               </motion.a>
//               <motion.a
//                 href="mailto:moondkrish921@gmail.com"
//                 className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
//                 whileHover={{ y: -3, scale: 1.1 }}
//               >
//                 <FaEnvelope size={22} />
//               </motion.a>
//             </div>
//             <div className="mt-4 md:mt-0">
//               <nav className="flex space-x-6">
//                 <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                   Home
//                 </Link>
//                 <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                   About
//                 </Link>
//                 <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                   Projects
//                 </Link>
//                 <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                   Contact
//                 </Link>
//               </nav>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-500 dark:text-gray-400 text-sm">
//             © {currentYear} Krish Moond. All rights reserved.
//           </p>
//           <motion.button
//             onClick={scrollToTop}
//             className="mt-4 md:mt-0 bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-600 transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaArrowUp size={16} />
//           </motion.button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaCode, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const copyEmail = () => {
    navigator.clipboard.writeText("moondkrish921@gmail.com");
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };
  
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" }
  ];
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/KrishMoond",
      icon: <FaGithub size={22} />,
      hoverColor: "hover:text-white",
      bgHoverColor: "hover:bg-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/krish-moond",
      icon: <FaLinkedin size={22} />,
      hoverColor: "hover:text-white",
      bgHoverColor: "hover:bg-blue-600"
    },
    {
      name: "Email",
      action: copyEmail,
      icon: <FaEnvelope size={22} />,
      hoverColor: "hover:text-white",
      bgHoverColor: "hover:bg-red-500"
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const scrollButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-gray-300 shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Brief */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 text-transparent bg-clip-text text-2xl font-bold">
                  Krish Moond
                </span>
              </motion.div>
            </Link>
            
            <p className="text-gray-400 max-w-xs">
              Full-stack developer passionate about creating elegant, user-friendly web experiences and solving complex problems.
            </p>
            
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  whileHover={{ y: -3 }}
                >
                  {link.url ? (
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 ${link.hoverColor} ${link.bgHoverColor} transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ) : (
                    <motion.button
                      onClick={link.action}
                      aria-label={link.name}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 ${link.hoverColor} ${link.bgHoverColor} transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.button>
                  )}
                  
                  {/* Tooltip for email copy */}
                  {link.name === "Email" && isEmailCopied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                    >
                      Email copied!
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-1 py-1"
                >
                  <span className="text-indigo-500">›</span> {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
          
          {/* Column 3: Newsletter/Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <p className="text-gray-400">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </Link>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Based in San Francisco, California
              </p>
              <p className="text-sm text-gray-500">
                Available for remote work worldwide
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} Krish Moond. All rights reserved. Made with <FaHeart className="text-red-500" size={12} /> and <FaCode className="text-indigo-500" size={14} />
          </p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            {" · "}
            <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Use</Link>
          </p>
        </motion.div>
      </div>
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={scrollButtonVariants}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
};

export default Footer;