/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        "pink-back": "#fff1f0",
        "pink-txt": "#e6aeaa",
        "gray-txt": "#aae2e6",
        "pink-2": "#ffc0cb",
      },
    },
  },
  plugins: [],
};
