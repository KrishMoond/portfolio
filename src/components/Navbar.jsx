// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// export const Navbar = ({ activeSection }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { id: "home", label: "Home", path: "/" },
//     { id: "about", label: "About", path: "/about" },
//     { id: "skills", label: "Skills", path: "/skills" },
//     { id: "projects", label: "Projects", path: "/projects" },
//     { id: "education", label: "Education", path: "/education" },
//     { id: "contact", label: "Contact", path: "/contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location]);

//   const navbarVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   const navItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.3 }
//     })
//   };

//   const mobileMenuVariants = {
//     closed: { opacity: 0, height: 0, transition: { when: "afterChildren" } },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//     }
//   };

//   const mobileNavItemVariants = {
//     closed: { opacity: 0, x: -20 },
//     open: { opacity: 1, x: 0 }
//   };

//   return (
//     <motion.nav
//       initial="hidden"
//       animate="visible"
//       variants={navbarVariants}
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-gray-800/90 backdrop-blur-lg shadow-lg"
//           : "bg-gray-800/60 backdrop-blur-sm"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <Link to="/" className="text-2xl font-bold">
//             <motion.span
//               className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 text-transparent bg-clip-text"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Krish's Portfolio
//             </motion.span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-1">
//             {navItems.map((item, i) => (
//               <motion.div
//                 key={item.id}
//                 custom={i}
//                 variants={navItemVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 <Link
//                   to={item.path}
//                   className={`relative px-4 py-2 rounded-lg mx-1 ${
//                     activeSection === item.id
//                       ? "text-indigo-400 font-medium"
//                       : "text-gray-300 hover:text-indigo-400"
//                   } transition-colors duration-300`}
//                 >
//                   {activeSection === item.id && (
//                     <motion.span
//                       className="absolute inset-0 bg-indigo-900/30 rounded-lg -z-10"
//                       layoutId="navHighlight"
//                       transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                     />
//                   )}
//                   {item.label}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-700"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {isMobileMenuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <motion.div
//           className="md:hidden overflow-hidden"
//           variants={mobileMenuVariants}
//           initial="closed"
//           animate={isMobileMenuOpen ? "open" : "closed"}
//         >
//           <div className="py-2 space-y-1">
//             {navItems.map((item) => (
//               <motion.div key={item.id} variants={mobileNavItemVariants}>
//                 <Link
//                   to={item.path}
//                   className={`block px-4 py-3 rounded-lg ${
//                     activeSection === item.id
//                       ? "bg-indigo-900/30 text-indigo-400 font-medium"
//                       : "text-gray-300 hover:bg-gray-700"
//                   } transition-colors duration-300`}
//                 >
//                   {item.label}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/", icon: "🏠" },
    { id: "about", label: "About", path: "/about", icon: "👤" },
    { id: "skills", label: "Skills", path: "/skills", icon: "🛠️" },
    { id: "projects", label: "Projects", path: "/projects", icon: "📂" },
    { id: "education", label: "Education", path: "/education", icon: "🎓" },
    { id: "contact", label: "Contact", path: "/contact", icon: "📧" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0, 
      transition: { 
        when: "afterChildren", 
        duration: 0.3, 
        ease: "easeInOut" 
      } 
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2, 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };
  
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, rotate: 5 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-indigo-900/10" 
          : "bg-gray-900/80 backdrop-blur-sm"
      } text-gray-100`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold">K</span>
            </motion.div>
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Krish's Portfolio
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.path}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg mx-1 ${
                    activeSection === item.id
                      ? "text-indigo-300 font-medium" 
                      : "text-gray-300 hover:text-indigo-300"
                  } transition-colors duration-300`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute inset-0 bg-indigo-900/30 rounded-lg -z-10"
                      layoutId="navHighlight"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.span 
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="hidden sm:inline-block"
                  >
                    {item.icon}
                  </motion.span>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-2 space-y-1 bg-gray-800 rounded-lg my-2">
                {navItems.map((item) => (
                  <motion.div key={item.id} variants={mobileNavItemVariants}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                        activeSection === item.id
                          ? "bg-indigo-900/30 text-indigo-300 font-medium" 
                          : "text-gray-300 hover:bg-gray-700 hover:text-indigo-300"
                      } transition-colors duration-300`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;