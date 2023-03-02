/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      15: "16rem",
    },
    textColor: {
      white: "#FFF",
      black: "#000",
      gray: "rgb(123, 123, 123)",
      textG: "rgb(41 37 36)",
    },
    extend: {},
    backgroundImage: {
      path: "url('../public/main.jpeg')",
    },
    colors: {
      trans: "rgba(0, 0, 0, 0.4)",
    },
  },
  plugins: [],
};
