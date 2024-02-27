/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/bg_home.jpg')",
      },
    },
    fontWeight: {
      'extra-bold': '900',
    },
    fontFamily: {
        'game1': ['VT323', 'monospace'],
        'game2': ['"Press Start 2P"', 'monospace'],
    }
  },
  plugins: [require("tailwindcss-animate")],
}; // Add a closing parenthesis here
