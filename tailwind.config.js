/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      colors: {
        hash1: "#f2f7f7",
      },
    },
  },
  plugins: [],
};
