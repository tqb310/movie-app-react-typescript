/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: "100%",
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
        },
        center: true,
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
