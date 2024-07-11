/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          500: "#DAA520", // Gold color, adjust as needed
        },
      },
    },
  },
  plugins: [],
};
