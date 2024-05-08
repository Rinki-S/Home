/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      plex: ['"IBM Plex Sans"', "sans-serif"],
      playfair: ['"Playfair Display"', "serif"],
      space: ['"Space Grotesk"', "sans-serif"],
      satoshi: ['"Satoshi-Variable"', "sans-serif"],
    },
    extend: {
      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  variants: {
    extend: {
      textShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [],
};
