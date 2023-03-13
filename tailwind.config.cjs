/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "xsm": "0px",
      
      "sm": "100px",

      "md": "481px",

      "lg": "769px",

      "xl": "1025px",

      "2xl": "1201px",
    }
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark", "cyberpunk","luxury"]
  },
  
};
