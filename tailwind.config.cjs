/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "sm": "100px",
      // => @media (min-width: 640px) { ... }

      "md": "481px",
      // => @media (min-width: 768px) { ... }

      "lg": "769px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1025px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1201px",
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark", "cyberpunk","luxury"]
  },
  
};
