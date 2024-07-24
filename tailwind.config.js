/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{vue, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6 rem',
        },
      },

      colors:{
        primary:{
          100: '#131127',
          200: '#673ADF',
          300: '#4D4CEE',
          400: '#282554',
          500: '#615386',
        },
        light:{
          100: '#FEFEFE',
        }
      }
    },
  },
  plugins: [],
}

