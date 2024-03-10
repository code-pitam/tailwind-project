/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["16px"],
      sm: ["18px"],
      ss: ["20px"],
      base: ["24px"],
      xl: ["37px"],
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        vector: "url('./src/assets/images/Frame.png')",
        vector2: "url('./src/assets/images/Group.png')",
      },
      colors: {
        primary: "#6BADE5",
        secondary: "#091637",
      },
    },
  },
  plugins: [],
};
