/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#a4663d',
        'secondary': '#dde4ba',
        'water': '#5d8a82'
      },
    },
  },
  plugins: [],
}
