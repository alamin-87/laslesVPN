/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      
      padding: {
        DEFAULT: '35px',
        sm: '5rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '5rem',
      },
    },
     
    fontFamily: {
      'rubik': ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}