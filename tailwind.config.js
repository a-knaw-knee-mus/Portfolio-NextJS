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
      },
    },
    fontFamily: {
      'overpass': ['Overpass', 'Arial'],
    }
  },
  plugins: [require('tailwind-scrollbar'),],
}
