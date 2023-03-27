/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  prefix: 'jdp-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif']
      }
    }
  },
  plugins: []
};
