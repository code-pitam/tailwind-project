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
      colors: {
        primary: "#6BADE5",
        secondary: "#091637",
      },
    },
  },
  plugins: [],
};
