import React, { useEffect, useState } from "react";

export const CursorTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };

      setTrail((prev) => [...prev.slice(-15), newDot]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((dot, i) => (
        <div
          key={dot.id}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            opacity: (i + 1) / trail.length * 0.5,
            transform: `scale(${(i + 1) / trail.length})`,
            transition: "opacity 0.3s, transform 0.3s"
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
