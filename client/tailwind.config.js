/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.65rem",
      },
      spacing: {
        "500px": "32rem",
        "720px": "45rem",
      },
    },
  },
  plugins: [],
};
