/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          surface: '#242424',
          card: '#1A1A1A',
        },
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D4AF37',
          dark: '#AA820A',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [],
};
