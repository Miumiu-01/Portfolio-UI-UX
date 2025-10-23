/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['"Afacad"', "sans-serif"],
        rubik: ['"Rubik"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
