/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      plex: ['"IBM Plex Sans"', "sans-serif"],
      playfair: ['"Instrument Serif"', "serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
