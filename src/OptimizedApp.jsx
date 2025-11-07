import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Lazy load components
const Home = lazy(() => import("./components/OptimizedHome"));
const About = lazy(() => import("./components/About").then(module => ({ default: module.About })));
const Skills = lazy(() => import("./components/Skills").then(module => ({ default: module.Skills })));
const Projects = lazy(() => import("./components/Projects").then(module => ({ default: module.Projects })));
const Education = lazy(() => import("./components/Education").then(module => ({ default: module.Education })));
const Contact = lazy(() => import("./components/Contact").then(module => ({ default: module.Contact })));

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
const Layout = ({ children, isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveSection(path);
  }, [location]);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <Navbar activeSection={activeSection} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

function OptimizedApp() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const layoutProps = {
    isDarkMode,
    toggleDarkMode
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout {...layoutProps}>
            <Home />
          </Layout>
        } />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={
          <Layout {...layoutProps}>
            <About />
          </Layout>
        } />
        <Route path="/skills" element={
          <Layout {...layoutProps}>
            <Skills />
          </Layout>
        } />
        <Route path="/projects" element={
          <Layout {...layoutProps}>
            <Projects />
          </Layout>
        } />
        <Route path="/education" element={
          <Layout {...layoutProps}>
            <Education />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout {...layoutProps}>
            <Contact />
          </Layout>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default OptimizedApp;