import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export const WorkingContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/moqzgqpb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try email directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl p-8 space-y-6"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

      <div>
        <label className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Message</label>
        <textarea
          required
          rows="5"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>

      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 p-4 rounded-xl ${
            status.type === "success" ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
          }`}
        >
          {status.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
          <span>{status.message}</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <FaPaperPlane /> Send Message
          </>
        )}
      </button>
    </motion.form>
  );
};

export default WorkingContactForm;
