/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customorange: "rgb(240, 147, 5)",
      },
    },
  },
  plugins: [],
};
