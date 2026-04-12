/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        obsidian: '#121212',
        surface: '#1a150e',
        'dark-border': '#332B1A',
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};