/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        lightPeach: "#FFAD9B",
        darkGrey: "#333136",
        lightGrey: "#F1F3F5",
        background: "#FDF3F0",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        bgPattern:
          "url('./src/assets/shared/desktop/bg-pattern-small-circle.svg')",
        bgTwoCircles:
          "url('./src/assets/shared/desktop/bg-pattern-two-circles.svg')",
      },
    },
  },
  plugins: [],
};
