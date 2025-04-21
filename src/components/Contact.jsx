// import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
// import Particles from "react-tsparticles";
// import { useSpring, animated } from 'react-spring';

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
      
//       // Reset status after 5 seconds
//       setTimeout(() => {
//         setSubmitStatus(null);
//       }, 5000);
//     }, 1500);
//   };

//   // Animation for the header using react-spring
//   const headerAnimation = useSpring({
//     opacity: 1,
//     transform: 'translateY(0)',
//     from: { opacity: 0, transform: 'translateY(-20px)' },
//     config: { tension: 150, friction: 20 }
//   });

//   return (
//     <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
//       <Particles 
//         options={{
//           particles: {
//             number: {
//               value: 30,
//             },
//             size: {
//               value: 3,
//             },
//             move: {
//               speed: 1,
//             },
//             links: {
//               enable: true,
//               distance: 150,
//             },
//           },
//         }} 
//         className="absolute top-0 left-0 w-full h-full z-0"
//       />
      
//       <div className="container mx-auto px-4 relative z-10">
//         <animated.h2 style={headerAnimation} className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
//           Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
//         </animated.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-6 transition-colors">
//               <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
//                     <FaMapMarkerAlt size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
//                     <p className="text-gray-600 dark:text-gray-300">Hisar, Haryana 125004</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
//                     <FaEnvelope size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
//                     <a
//                       href="mailto:moondkrish921@gmail.com"
//                       className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//                     >
//                       moondkrish921@gmail.com
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
//                     <FaPhone size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
//                     <a
//                       href="tel:8708304851"
//                       className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//                     >
//                       +91 8708304851
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">Social Profiles</h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://github.com/KrishMoond"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   <FaGithub size={20} />
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/krish-moond"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   <FaLinkedin size={20} />
//                 </a>
//                 <a
//                   href="mailto:moondkrish921@gmail.com"
//                   className="p-3 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   <FaEnvelope size={20} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-colors">
//             <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Send Me a Message</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="4"
//                   className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full py-3 px-6 ${
//                   isSubmitting
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-600 hover:bg-blue-700"
//                 } text-white font-medium rounded-md transition-colors shadow-md flex justify-center items-center`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>
//               {submitStatus === "success" && (
//                 <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
//                   Your message has been sent successfully! I'll get back to you soon.
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors relative">
      <Particles
        options={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              direction: "random",
              speed: 0.5,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-6 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Hisar, Haryana 125004</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                  <a
                    href="mailto:moondkrish921@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    moondkrish921@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                  <a
                    href="tel:8708304851"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    +91 8708304851
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">Social Profiles</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/KrishMoond"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/krish-moond"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:moondkrish921@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white font-medium rounded-md transition-colors shadow-md flex justify-center items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
