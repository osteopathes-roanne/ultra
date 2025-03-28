/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#C1DCEF',
        'brand-green': '#C7DFD1',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};