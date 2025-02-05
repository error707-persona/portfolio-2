
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      
      extend: {
        animation: {
          "meteor-effect": "meteor 5s linear infinite",
        },
        keyframes: {
          meteor: {
            "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
            "70%": { opacity: "1" },
            "100%": {
              transform: "rotate(215deg) translateX(-500px)",
              opacity: "0",
            },
          },
        },
        colors: {
          black: {
            DEFAULT: '#000',
            100: '#010103',
            200: '#0E0E10',
            300: '#1C1C21',
            500: '#3A3A49',
            600: '#1A1A1A',
          },
          white: {
            DEFAULT: '#FFFFFF',
            800: '#E4E4E6',
            700: '#D6D9E9',
            600: '#AFB0B6',
            500: '#62646C',
          },
        },
        backgroundImage: {
          terminal: "url('/assets/terminal.png')",
        },
      },
    },
    plugins: [
      require("tailwind-scrollbar-hide"),
      addVariablesForColors
    ],
  };

  function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
      ":root": newVars,
    });
  }