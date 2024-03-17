/** @type {import('tailwindcss').Config} */
export default {
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
      'extraextrabold': '900',
    },
    fontFamily: {
      'game1': ['VT323', 'monospace'],
      'game2': ['"Press Start 2P"', 'monospace'],
      'retro': ['"Vast Shadow"', 'serif']
    }
  },
  plugins: [require("tailwindcss-animate")],
};
