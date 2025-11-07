import React, { useState, useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { AttentionBackground } from "./AttentionBackground";

export const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactMethod: "email"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree with form data
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('contactMethod', formData.contactMethod);

      const response = await fetch("https://formspree.io/f/moqzgqpb", {
        method: "POST",
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          contactMethod: "email"
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      id: "linkedin",
      name: "💼 LinkedIn Message",
      value: "krish-moond",
      href: "https://linkedin.com/in/krish-moond",
      icon: FaLinkedin,
      color: "from-blue-600 to-blue-800",
      description: "Send direct message on LinkedIn"
    },
    {
      id: "github",
      name: "💻 GitHub Discussion",
      value: "KrishMoond",
      href: "https://github.com/KrishMoond",
      icon: FaGithub,
      color: "from-gray-600 to-gray-800",
      description: "Start a discussion on GitHub"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <AttentionBackground />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Attention-grabbing header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-400/30 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl">🚀</span>
            <span className="text-pink-300 font-bold">Let's Build Something Amazing Together!</span>
          </motion.div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-neon-pulse">
              Touch
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            🌟 Ready to turn your ideas into reality? Choose your preferred way to connect and let's start the conversation!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 justify-center">
                <span className="text-4xl">📱</span>
                Choose Your Channel
              </h2>
              
              <div className="grid gap-6 max-w-2xl mx-auto">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.id}
                    href={method.href}
                    target="_blank"
                    className={`group relative p-8 rounded-xl glass-card hover:glass-button transition-all duration-300 block`}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`p-6 rounded-full bg-gradient-to-r ${method.color} text-white`}>
                        <method.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                          {method.name}
                        </h3>
                        <p className="text-gray-400 text-lg mt-2">{method.description}</p>
                        <p className="text-gray-300 font-mono text-sm mt-1">{method.value}</p>
                      </div>
                      <div className="text-white/50 group-hover:text-white transition-colors text-2xl">
                        →
                      </div>
                    </div>
                    
                    <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info Card */}
            <motion.div
              className="glass-card rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 justify-center">
                <span className="text-3xl">⚡</span>
                Quick Info
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                  <div>
                    <p className="text-white font-medium">📍 Location</p>
                    <p className="text-gray-400">India</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">🟢 Status</p>
                    <p className="text-green-400">Available for projects</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="text-yellow-400 text-2xl">⏰</div>
                  <div>
                    <p className="text-white font-medium">🕐 Response Time</p>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;