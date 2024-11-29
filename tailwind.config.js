import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: false,
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-2": "fadeIn 2s ease-out forwards",
        "fade-in-3": "fadeIn 3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        primary: "#6C8776",
        secondary: "#45624E",
        accent: "#273526",
        accent2: "#255B4A",
        secondaryAccent: "#C0CFB2",
        background: "#E4E6D9",
        cardlayanan: "#D9D9D9",
        bgBtn: "#16312B",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
