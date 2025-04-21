/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
        animation: {
          typing: "typing 2s steps(20)",
        },
        keyframes: {
          typing: {
            from: { width: "0" },
            to: { width: "100%" },
          },
        },
      },
    },
    plugins: [],
  };
  