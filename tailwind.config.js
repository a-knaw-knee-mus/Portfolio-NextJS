const { transform } = require("next/dist/build/swc");

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#0f172a',
        'lightgrey': '#ECECEC', 
        'darkblue-light': '#15213d',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          }, 
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      animation: {
        blob: "blob 7s infinite"
      }
    },
    fontFamily: {
      'overpass': ['Overpass', 'Arial']
    }
  },
  plugins: [],
}
