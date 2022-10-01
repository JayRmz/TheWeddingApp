/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        flip: "flip 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        flip: {
          from: { transform: "rotateX(0deg)", transformOrigin: "50% bottom " },
          to: { transform: "rotateX(180deg)", transformOrigin: "50% bottom " },
        },
      },
      colors: {
        // Configure your color palette here
        "principal-light": "#D4D2D2",
        "secondary-light": "#E1E1E1",
        "principal-dark": "#121212",
        "secondary-dark": "#222222",
        aqua: "#03FFE0",
        jade: "#034F60",
        lila: "#7C87F8",
        "principal-gray": "#d7e3e2",
        "pink-back": "#FFC0CB",
        "pink-txt": "#e67f90",
        "gray-txt": "#aae2e6",
        "pink-2": "#ffc0cb",
      },
    },
  },
  plugins: [],
};
