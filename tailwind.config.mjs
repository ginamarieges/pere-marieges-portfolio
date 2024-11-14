/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8F8F8",
        secondary: "#F0F7EE",
        // secondary: "#AC3931",
        tertiary: "#537d8d",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
