import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSave, FaImage, FaTrash } from "react-icons/fa";

const API_URL = 'http://localhost:5000/api';

export const AdminBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    readTime: "",
    image: ""
  });
  const [status, setStatus] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setFormData(prev => ({ ...prev, image: data.url }));
      setStatus("Image uploaded!");
      setTimeout(() => setStatus(""), 2000);
    } catch (error) {
      setStatus("Error uploading image");
      console.error(error);
    }
  };

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
      setFormData({ title: "", excerpt: "", content: "", tags: "", readTime: "", image: "" });
      setImagePreview("");
      setImageFile(null);
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
            <label className="block text-gray-300 mb-2">Featured Image</label>
            <div className="flex gap-4 items-start">
              <label className="flex-1 cursor-pointer">
                <div className="w-full px-4 py-8 bg-white/5 border-2 border-dashed border-white/10 rounded-xl hover:border-blue-500 transition-colors flex flex-col items-center justify-center gap-2">
                  <FaImage className="text-4xl text-gray-400" />
                  <span className="text-gray-400">Click to upload image</span>
                  <span className="text-gray-500 text-sm">PNG, JPG up to 5MB</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {imagePreview && (
                <div className="relative w-48 h-32">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview("");
                      setImageFile(null);
                      setFormData(prev => ({ ...prev, image: "" }));
                    }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              )}
            </div>
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
