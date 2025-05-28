/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "ultra-sm": { min: "320px", max: "374px" },
        "max-sm": { min: "375px", max: "424px" },
        sm: { min: "425px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1439px" },
        xl: { min: "1440px", max: "2559px" },
        "ultra-xl": { min: "2560px" },
      },
    },
  },
  plugins: [],
};
