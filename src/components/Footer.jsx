import React from "react";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner py-8 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Krish Moond
            </a>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Computer Science Student & Web Developer
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              Made with <FaHeart className="mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              © {currentYear} Krish Moond. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};