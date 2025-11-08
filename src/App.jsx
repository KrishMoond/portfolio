// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Education } from "./components/Education";
// import { Contact } from "./components/Contact";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";

// // Layout component that wraps each route with common elements
// const Layout = ({ children, isDarkMode, toggleDarkMode, particlesOptions, particlesInit }) => {
//   const location = useLocation();
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     // Extract the path without the leading slash to set active section
//     const path = location.pathname.substring(1) || "home";
//     setActiveSection(path);
//   }, [location]);

//   return (
//     <div className={`${isDarkMode ? "dark" : ""}`}>
//       <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         <Particles
//           id="tsparticles"
//           init={particlesInit}
//           options={particlesOptions}
//           className="fixed inset-0 -z-10"
//         />
//         <Navbar activeSection={activeSection} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//         <main className="flex-grow">
//           {children}
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   const particlesOptions = {
//     particles: {
//       number: {
//         value: 50,
//         density: {
//           enable: true,
//           value_area: 800,
//         },
//       },
//       color: {
//         value: isDarkMode ? "#ffffff" : "#000000",
//       },
//       shape: {
//         type: "circle",
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//       },
//       size: {
//         value: 3,
//         random: true,
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: isDarkMode ? "#ffffff" : "#000000",
//         opacity: 0.2,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 2,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//       },
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "grab",
//         },
//         onclick: {
//           enable: true,
//           mode: "push",
//         },
//         resize: true,
//       },
//       modes: {
//         grab: {
//           distance: 140,
//           line_linked: {
//             opacity: 0.5,
//           },
//         },
//         push: {
//           particles_nb: 4,
//         },
//       },
//     },
//     retina_detect: true,
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <Layout 
//             isDarkMode={isDarkMode} 
//             toggleDarkMode={toggleDarkMode}
//             particlesOptions={particlesOptions}
//             particlesInit={particlesInit}
//           >
//             <Home />
//           </Layout>
//         } />
//         <Route path="/home" element={<Navigate to="/" replace />} />
//         <Route path="/about" element={
//           <Layout 
//             isDarkMode={isDarkMode} 
//             toggleDarkMode={toggleDarkMode}
//             particlesOptions={particlesOptions}
//             particlesInit={particlesInit}
//           >
//             <About />
//           </Layout>
//         } />
//         <Route path="/skills" element={
//           <Layout 
//             isDarkMode={isDarkMode} 
//             toggleDarkMode={toggleDarkMode}
//             particlesOptions={particlesOptions}
//             particlesInit={particlesInit}
//           >
//             <Skills />
//           </Layout>
//         } />
//         <Route path="/projects" element={
//           <Layout 
//             isDarkMode={isDarkMode} 
//             toggleDarkMode={toggleDarkMode}
//             particlesOptions={particlesOptions}
//             particlesInit={particlesInit}
//           >
//             <Projects />
//           </Layout>
//         } />
//         <Route path="/education" element={
//           <Layout 
//             isDarkMode={isDarkMode} 
//             toggleDarkMode={toggleDarkMode}
//             particlesOptions={particlesOptions}
//             particlesInit={particlesInit}
//           >
//             <Education />
//           </Layout>
//         } />
//         <Route path="/contact" element={
//           <Layout 
//             isDarkMode={isDarkMode} 
//             toggleDarkMode={toggleDarkMode}
//             particlesOptions={particlesOptions}
//             particlesInit={particlesInit}
//           >
//             <Contact />
//           </Layout>
//         } />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThreeBackground } from "./components/ThreeBackground";
import { FloatingDock } from "./components/FloatingDock";
import { ScrollProgress } from "./components/ScrollProgress";
import { CommandPalette } from "./components/CommandPalette";
import { ModernFooter } from "./components/ModernFooter";
import { ThemeToggle } from "./components/ThemeToggle";
import { CursorTrail } from "./components/CursorTrail";
import { VisitorCounter } from "./components/VisitorCounter";

// Lazy load components
const BentoHome = lazy(() => import("./components/BentoHome"));
const TimelineAbout = lazy(() => import("./components/TimelineAbout"));
const InteractiveSkills = lazy(() => import("./components/InteractiveSkills"));
const ModernProjects = lazy(() => import("./components/ModernProjects"));
const ModernEducation = lazy(() => import("./components/ModernEducation"));
const ModernContact = lazy(() => import("./components/ModernContact"));
const Blog = lazy(() => import("./components/Blog"));
const AdminBlog = lazy(() => import("./components/AdminBlog"));


// Improved loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-t-purple-500 border-purple-200 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

// Layout component
const Layout = ({ children }) => {
  return (
    <div className="dark">
      <ThreeBackground />
      <ScrollProgress />
      <CommandPalette />
      <ThemeToggle />
      <CursorTrail />
      <VisitorCounter />
      <div className="min-h-screen flex flex-col bg-gradient-dark text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10 pointer-events-none"></div>
        <main className="flex-grow relative z-10 pb-24">
          <Suspense fallback={<LoadingFallback />}>
            {children}
          </Suspense>
        </main>
        <ModernFooter />
        <FloatingDock />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><BentoHome /></Layout>} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Layout><TimelineAbout /></Layout>} />
        <Route path="/skills" element={<Layout><InteractiveSkills /></Layout>} />
        <Route path="/projects" element={<Layout><ModernProjects /></Layout>} />
        <Route path="/education" element={<Layout><ModernEducation /></Layout>} />
        <Route path="/contact" element={<Layout><ModernContact /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/admin/blog" element={<Layout><AdminBlog /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;