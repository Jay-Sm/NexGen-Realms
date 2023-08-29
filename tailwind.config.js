/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4153C",
        secondary: "#7449E2",
        accent: "#100F14",
        "primary-dark": "#1A090C",
        "secondary-dark": "#130B1A",
      },
      fontFamily: {
        russo: "Russo One",
        inter: "Inter",
      },
    },
    fontSize: {
      base: "21px",
      lg: "28px",
      xl: "37px",
      "2xl": "50px",
      "3xl": "66px",
      "4xl": "88px",
    },
    boxShadow: {
      button: "4px 4px 5px 0px rgba(0, 0, 0, 0.38)",
    },
  },
  plugins: [],
};
