/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        animation: {
          typing: "typing 2s steps(20)",
          gradient: "gradient 8s ease infinite",
          float: "float 6s ease-in-out infinite",
          glow: "glow 3s ease-in-out infinite",
        },
        keyframes: {
          typing: {
            from: { width: "0" },
            to: { width: "100%" },
          },
          gradient: {
            "0%, 100%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-8px)" },
          },
          glow: {
            "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
            "50%": { boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" },
          },
        },
        backgroundSize: {
          "200%": "200% 200%",
        },
      },
    },
    plugins: [],
  };
  