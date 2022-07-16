/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      container: {
        screens: {
          DEFAULT: "100%",
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
        },
        center: true,
        padding: {
          DEFAULT: "30px",
          sm: "20px",
          xl: "0px",
        },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      backgroundImage: {
        detailBackdrop: "linear-gradient(to top, black 50%, rgba(0,0,0,0.4))",
      },
    },
  },
  plugins: [],
};
