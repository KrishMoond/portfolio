import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSave } from "react-icons/fa";

const API_URL = 'http://localhost:5000/api';

export const AdminBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    readTime: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Publishing...");

    try {
      await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(",").map(t => t.trim()),
          author: "Krish Moond",
          date: new Date().toISOString().split('T')[0],
          likes: 0,
          comments: []
        })
      });

      setStatus("Published successfully!");
      setFormData({ title: "", excerpt: "", content: "", tags: "", readTime: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      setStatus("Error publishing post");
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Create <span className="text-gradient">Blog Post</span>
          </h1>
          <p className="text-gray-400">Share your thoughts with the world</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-300 mb-2">Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none"
              placeholder="Post title"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Excerpt</label>
            <input
              type="text"
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none"
              placeholder="Brief description"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Content</label>
            <textarea
              required
              rows="12"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none resize-none"
              placeholder="Write your post content..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Tags (comma separated)</label>
              <input
                type="text"
                required
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                placeholder="React, JavaScript, Web"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Read Time</label>
              <input
                type="text"
                required
                value={formData.readTime}
                onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                placeholder="5 min"
              />
            </div>
          </div>

          {status && (
            <div className={`p-4 rounded-xl ${status.includes("success") ? "bg-green-500/20 text-green-300" : "bg-blue-500/20 text-blue-300"}`}>
              {status}
            </div>
          )}

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
          >
            <FaSave /> Publish Post
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default AdminBlog;
