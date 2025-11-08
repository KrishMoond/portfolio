import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaCheckCircle, FaRocket } from "react-icons/fa";

export const WorkProcess = () => {
  const steps = [
    {
      icon: FaLightbulb,
      title: "Planning",
      description: "Understanding requirements, researching solutions, and creating a roadmap",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: FaCode,
      title: "Development",
      description: "Writing clean, maintainable code following best practices and design patterns",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaCheckCircle,
      title: "Testing",
      description: "Thorough testing across devices and browsers to ensure quality",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaRocket,
      title: "Deployment",
      description: "Launching the project and monitoring performance for optimization",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        How I <span className="text-gradient">Work</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                <Icon />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-500 font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
