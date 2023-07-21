/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage:{
        'imghero': "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
        'imgpokomonos': "url(https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80)",
        'imgtodo': "url(https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)"
      },

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
        'xs': '300px',
      },

    },
  },
  plugins: [],
}
