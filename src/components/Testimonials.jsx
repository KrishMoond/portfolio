import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaLinkedin, FaStar } from "react-icons/fa";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Add Your Testimonial",
      role: "Client/Colleague",
      company: "Company Name",
      image: "https://ui-avatars.com/api/?name=Client&background=3b82f6&color=fff",
      text: "Working with Krish was an excellent experience. His technical skills and dedication to quality are outstanding.",
      rating: 5,
      linkedin: "#"
    },
    {
      name: "Add Another",
      role: "Team Lead",
      company: "Tech Company",
      image: "https://ui-avatars.com/api/?name=Lead&background=8b5cf6&color=fff",
      text: "Krish's problem-solving abilities and clean code practices make him a valuable team member.",
      rating: 5,
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-gray-400">Testimonials from colleagues and clients</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="glass-card rounded-3xl p-8 md:p-12"
            >
              <FaQuoteLeft className="text-4xl text-blue-400 mb-6" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[activeIndex].company}</p>
                </div>
                <a
                  href={testimonials[activeIndex].linkedin}
                  target="_blank"
                  className="ml-auto text-blue-400 hover:text-blue-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIndex ? "bg-blue-500 w-8" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
