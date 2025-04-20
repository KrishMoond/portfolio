import React from "react";
import { FaGraduationCap, FaMedal } from "react-icons/fa";

export const Education = () => {
  const education = [
    {
      title: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "2022 - 2026",
      grade: "CGPA: 7.84",
      icon: <FaGraduationCap size={24} />,
    },
    {
      title: "12th with Science",
      institution: "Shree Ram Ideal School",
      location: "Hisar, Haryana",
      period: "2021 - 2022",
      grade: "Percentage: 81.40%",
      icon: <FaGraduationCap size={24} />,
    },
    {
      title: "10th with Science",
      institution: "Shree Ram Ideal School",
      location: "Hisar, Haryana",
      period: "2019 - 2020",
      grade: "Percentage: 88.8%",
      icon: <FaGraduationCap size={24} />,
    },
  ];

  const certificates = [
    {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Coursera",
      date: "March 2024",
      link: "https://coursera.org/verify/879A328B4C9B",
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      date: "March 2023",
      link: "https://coursera.org/verify/specialization/EJ4RT6FP2Y9W",
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL",
      date: "November 2024",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S45690045604100568",
    },
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Education & <span className="text-blue-600 dark:text-blue-400">Certificates</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <FaGraduationCap className="mr-2 text-blue-600 dark:text-blue-400" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 pb-8 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 bg-blue-600 dark:bg-blue-400 rounded-full p-1 text-white">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.period}</span>
                  <h4 className="text-lg font-medium mt-1 text-gray-800 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{item.location}</p>
                  <p className="mt-1 text-gray-700 dark:text-gray-300 font-medium">{item.grade}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <FaMedal className="mr-2 text-blue-600 dark:text-blue-400" />
              Certificates
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-medium text-gray-800 dark:text-white">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cert.issuer} • {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};