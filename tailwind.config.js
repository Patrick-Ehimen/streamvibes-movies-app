/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   "fade-bottom": "linear-gradient(to top, rgba(0,0,0,1), transparent)",
      // }),
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      ss: "280px",
      ssm: "540px",
      sm: "640px",
      md: "768px",
      md1: "912px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  variants: {},
  plugins: [],
};
