import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C8776",
        secondary: "#45624E",
        accent: "#273526",
        secondaryAccent: "#C0CFB2",
        background: "#E4E6D9",
        cardlayanan: "#D9D9D9",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
