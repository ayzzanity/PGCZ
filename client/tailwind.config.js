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
      colors: {
        "silph-gray": "#2e2e2e",
        "silph-black": "#212121",
        "silph-bg": "#2d2d2d",
        "silph-btn": "#3f3d3b",
      },
    },
  },
  plugins: [],
};
