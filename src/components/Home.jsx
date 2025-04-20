import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/api/placeholder/400/400"
              alt="Krish Moond"
              className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Krish Moond</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300">
              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  1000,
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
              Building innovative web solutions with a focus on responsive design and user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors shadow-md"
              >
                View Projects
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/KrishMoond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/krish-moond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:moondkrish921@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="tel:8708304851"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaPhone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};