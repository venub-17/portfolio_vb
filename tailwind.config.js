/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "ultra-sm": { min: "320px", max: "376px" },
        "max-sm": { min: "376px", max: "426px" },
        sm: { min: "426px", max: "769px" },
        md: { min: "769px", max: "1025px" },
        lg: { min: "1025px", max: "1441px" },
        xl: { min: "1441px", max: "2559px" },
        "ultra-xl": { min: "2560px" },
      },
    },
  },
  plugins: [],
};
