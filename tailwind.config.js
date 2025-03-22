/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sky-50': '#e7f5ff',  // --color-bg
        'indigo-800': '#2c2c6c',  // --color-bg-variant
        'sky-400': '#4db5ff',  // --color-primary
        'sky-400-40': 'rgba(77, 181, 255, 0.4)',  // --color-primary-variant
        'white-60': 'rgba(255, 255, 255, 0.6)',  // --color-light
      },
      width: {
        '88': '22rem',
      },
      height: {
        '120': '30rem',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '90%',
          md: '86%',
          lg: '75%',
          xl: '75%',
          '2xl': '75%',
        },
      },
    },
  },
  plugins: [],
};