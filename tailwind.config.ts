import type { Config } from "tailwindcss";
// All the site colors live here. Change a hex value and it updates everywhere.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#EDE3D0",   // page background
        sage: "#3B4A42",    // main green, used for headings and dark sections
        tan: "#8B6F47",     // borders and small accents
        leather: "#5E4632", // body text
        gold: "#C9A85C",    // buttons and highlights
        oxblood: "#7A2E2A", // hover color
        bark: "#2B2117",    // footer background
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Karla", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
