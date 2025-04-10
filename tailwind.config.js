/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // 320px breakpoint
        "sm-425": "425px", // 400px
        // "range-500-640": { min: "500px", max: "640px" },
      },
    },
  },
  plugins: [],
};
