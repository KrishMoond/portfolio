import React from "react";
import { FaCode, FaLaptopCode, FaServer, FaUsers } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a Computer Science and Engineering student at Lovely Professional University with a passion for web development
              and problem-solving. I enjoy creating responsive and user-friendly web applications using modern technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently pursuing my degree with a strong focus on programming fundamentals, data structures, and web technologies.
              I'm always eager to learn new skills and take on challenging projects.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">What I Do</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-600 dark:text-blue-400">
                  <FaCode size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Web Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Creating responsive websites</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-600 dark:text-blue-400">
                  <FaLaptopCode size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Frontend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, JavaScript, Tailwind</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-600 dark:text-blue-400">
                  <FaServer size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Backend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">PHP, MySQL, Node.js</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-600 dark:text-blue-400">
                  <FaUsers size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Team Projects</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Collaboration & Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Training</h3>
          <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            <h4 className="font-medium text-gray-800 dark:text-white">Summer Training - Board Infinity</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">May 2024 - July 2024</p>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Online summer training to learn JavaScript for web development</li>
              <li>• Gained expertise in JavaScript fundamentals, DOM manipulation, and asynchronous programming</li>
              <li>• Built interactive web applications using JavaScript</li>
              <li>• Implemented event handling, APIs, and local storage in practical projects</li>
              <li>• Worked with version control systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};