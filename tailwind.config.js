/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        main: "#5E0042",
        secondary: "#9B658B",
        gray: "#DFDFDF",
        nude: "#FFF3FF",
      },
      fontFamily: {
        martelRegular: ["var(--font-martel-regular)"],
        martelBold: ["var(--font-martel-bold)"],
        martelExtraBold: ["var(--font-martel-extrabold)"],
        martekExtraLight: ["var(--font-martel-extralight)"],
        martelLight: ["var(--font-martel-light)"],
        martelBlack: ["var(--font-martel-black)"],
        martelSemiBold: ["var(--font-martel-semibold)"],
        martelMedium: ["var(--font-martel-medium)"],
        rubikBlack: ["var(--font-rubik-black)"],
        rubikBold: ["var(--font-rubik-bold)"],
        rubikBoldItalic: ["var(--font-rubik-bolditalic)"],
        rubikItalic: ["var(--font-rubik-italic)"],
        rubikLight: ["var(--font-rubik-light)"],
        rubikLightItalic: ["var(--font-rubik-lightitalic)"],
        rubikMedium: ["var(--font-rubik-medium)"],
        rubikMediumItalic: ["var(--font-rubik-mediumitalic)"],
        rubikRegular: ["var(--font-rubik-regular)"],
        rubikSemiBold: ["var(--font-rubik-semibold)"],
        rubikSemiBoldItalic: ["var(--font-rubik-semibolditalic)"],
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
