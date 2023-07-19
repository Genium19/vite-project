/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor:{
        'primary': '#364F6B',
        'secondary': '#3FC1C9',
        'terciary': '#FC5185',
      },
      textColor:{
        'primary': '#364F6B',
        'secondary': '#3FC1C9',
        'terciary': '#FC5185',
      },
      fontFamily:{
      Unbounded: ['Unbounded', 'cursive']
      },
      screens: {
        'xs': '320px',
      },

    },
  },
  plugins: [],
}
