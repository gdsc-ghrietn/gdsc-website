/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
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
    }
  },
  plugins: [require("tailwindcss-animate"), daisyui],
  daisyui: {
    themes: [],
  },
 
};
