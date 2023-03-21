/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        height: {
          header: '560px',
          rate: '400px',
        },
        fontSizes: {
          h1: '2.6rem',
        },
        screens: {
          xs: '475px',
        },
        main: '#080A1A',
        submain: '#F20000',
        dry: '#0B0F29',
        star: '#FFB000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5',
      },
    },
  },
  plugins: [],
};
