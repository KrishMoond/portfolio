import React from 'react';

export const AttentionBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Elegant gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  );
};