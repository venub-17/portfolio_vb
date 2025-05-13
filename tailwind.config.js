/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // 320px breakpoint
        "sm-425": "425px", // 400px
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
