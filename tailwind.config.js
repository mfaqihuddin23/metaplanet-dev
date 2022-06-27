/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/**/*.{html,js,css}', './index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'ethno' :['Ethnocentric'],
      },
      colors: {
        meta:{
          100: '#FF9C00',
          200: '#90969D',
          300: '#452D80',
          400: '#3A2081',
          500: '#180D33',
          // 600: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
