/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        futuristicPurple: {
          DEFAULT: "#a855f7", // Base purple
          gradient: "linear-gradient(90deg, #a855f7, #6b21a8)", // Gradient purple
        },
        black: "#000000", // True black background
        white: "#ffffff", // White text
        gray: "#9ca3af", // Gray for subtexts
      },
    },
  },
  plugins: [],
};