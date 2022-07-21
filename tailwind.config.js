/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}","./index.html", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        variants: {
          animation: ["motion-safe"]
        }
      },
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
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
  ],
}
