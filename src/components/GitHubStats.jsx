import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

export const GitHubStats = ({ username = "KrishMoond" }) => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);
        
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        
        setStats({
          repos: userData.public_repos || 12,
          followers: userData.followers || 0,
          following: userData.following || 0,
        });
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch (error) {
        setStats({ repos: 12, followers: 0, following: 0 });
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="glass-card rounded-xl p-4 animate-pulse">
            <div className="h-8 bg-white/10 rounded mb-2"></div>
            <div className="h-4 bg-white/10 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Repositories", value: stats?.repos, icon: FaCodeBranch },
          { label: "Followers", value: stats?.followers, icon: FaStar },
          { label: "Following", value: stats?.following, icon: FaEye },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-4 text-center"
          >
            <stat.icon className="text-2xl text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.slice(0, 4).map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-4 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <h4 className="text-white font-semibold mb-2">{repo.name}</h4>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{repo.description || "No description"}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                {repo.language && <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {repo.language}
                </span>}
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {repo.stargazers_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
};

export default GitHubStats;
