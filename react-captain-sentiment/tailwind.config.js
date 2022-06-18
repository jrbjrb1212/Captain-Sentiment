/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: False,
  theme: {
    extend: {},
  },
  plugins: [],
}
