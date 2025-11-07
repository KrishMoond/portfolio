import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";

export const ModernContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("moondkrish921@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect",
      link: "https://linkedin.com/in/krish-moond",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      description: "Check out my repositories",
      action: "Follow",
      link: "https://github.com/KrishMoond",
      color: "from-gray-700 to-gray-500",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: "moondkrish921@gmail.com",
      action: copied ? "Copied!" : "Copy Email",
      onClick: handleCopyEmail,
      color: "from-red-600 to-pink-500",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-6 mb-12 flex items-center justify-between bg-gradient-to-r from-green-500/10 to-emerald-500/10"
        >
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-white font-semibold text-lg">Available for Projects</p>
              <p className="text-gray-400 text-sm">Open to freelance and opportunities</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FaClock />
            <span className="text-sm">Usually responds in 24 hours</span>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    className={`block w-full px-4 py-2 bg-gradient-to-r ${method.color} text-white rounded-xl font-medium text-center hover:shadow-lg transition-all duration-300`}
                  >
                    {method.action}
                  </a>
                ) : (
                  <button
                    onClick={method.onClick}
                    className={`w-full px-4 py-2 bg-gradient-to-r ${method.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    {copied && <FaCheckCircle />}
                    {method.action}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">Trusted by clients and collaborators</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { label: "Projects Completed", value: "4+" },
              { label: "Technologies", value: "10+" },
              { label: "Response Time", value: "<24h" },
            ].map((stat) => (
              <div key={stat.label} className="glass-button rounded-xl px-6 py-4">
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernContact;
