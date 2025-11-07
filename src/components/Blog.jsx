import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaClock, FaComment, FaHeart, FaSearch } from "react-icons/fa";

const API_URL = 'http://localhost:5000/api';

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);
      const data = await response.json();
      setPosts(data.map(post => ({ ...post, id: post._id })));
    } catch (error) {
      setPosts([
        {
          id: 1,
          title: "Getting Started with React",
          excerpt: "Learn the fundamentals of React and build your first component.",
          content: "React is a powerful JavaScript library for building user interfaces...",
          author: "Krish Moond",
          date: "2024-01-15",
          readTime: "5 min",
          likes: 24,
          comments: [],
          tags: ["React", "JavaScript", "Web Development"]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`${API_URL}/posts/${postId}/like`, {
        method: 'PATCH'
      });
      const updatedPost = await response.json();
      setPosts(posts.map(p => p.id === postId ? {...updatedPost, id: updatedPost._id} : p));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (postId, comment) => {
    try {
      const newComment = {
        text: comment,
        author: "Anonymous",
        date: new Date().toISOString()
      };
      const response = await fetch(`${API_URL}/posts/${postId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment)
      });
      const updatedPost = await response.json();
      setPosts(posts.map(p => p.id === postId ? {...updatedPost, id: updatedPost._id} : p));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Blog & <span className="text-gradient">Thoughts</span>
          </h1>
          <p className="text-gray-400 text-lg">Sharing knowledge and experiences</p>
        </motion.div>

        <div className="mb-8">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-white/10 rounded mb-4"></div>
                <div className="h-4 bg-white/10 rounded mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedPost(post)}
                className="glass-card rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FaCalendar /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(post.id);
                      }}
                      className="flex items-center gap-1 hover:text-red-400 transition-colors"
                    >
                      <FaHeart /> {post.likes || 0}
                    </button>
                    <span className="flex items-center gap-1">
                      <FaComment /> {post.comments?.length || 0}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedPost && (
          <BlogPostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            onComment={handleComment}
          />
        )}
      </div>
    </section>
  );
};

const BlogPostModal = ({ post, onClose, onComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onComment(post.id, comment);
      setComment("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
      >
        <button
          onClick={onClose}
          className="float-right text-gray-400 hover:text-white text-2xl"
        >
          ×
        </button>

        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-400 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} read</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{post.content}</p>
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-2xl font-bold text-white mb-4">Comments ({post.comments?.length || 0})</h3>
          
          <form onSubmit={handleSubmit} className="mb-6">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none resize-none"
              rows="3"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Post Comment
            </button>
          </form>

          <div className="space-y-4">
            {post.comments?.map((c, i) => (
              <div key={i} className="glass-button rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-white">{c.author}</span>
                  <span className="text-gray-500 text-sm">{new Date(c.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-300">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
