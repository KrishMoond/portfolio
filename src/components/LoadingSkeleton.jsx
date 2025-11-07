import React from "react";

export const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen py-20 px-6 animate-pulse">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-white/10 rounded-xl w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-white/10 rounded-lg w-96 mx-auto"></div>
        </div>

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-card rounded-2xl p-6">
              <div className="h-48 bg-white/10 rounded-xl mb-4"></div>
              <div className="h-6 bg-white/10 rounded-lg mb-2"></div>
              <div className="h-4 bg-white/10 rounded-lg w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
