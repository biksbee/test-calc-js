/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1400px',
      xx: '900px',
      md: '768px'
    },
    fontFamily: {
      body: ['Montserrat Alternates'],
    },
    extend: {},
  },
  plugins: [],
}