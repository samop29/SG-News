/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: "320px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
    "2xl": "1320px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 250s linear infinite',
      },
      fontFamily: {
        sans: ['Cinzel', 'serif'],
        "ray":['Rye','serif'], // Adds Roboto as the primary sans-serif font
      },
      colors:{
        "cwhite" : "#FCF8F3",
        "cblue":"#071952"
      }
    },
  },
  plugins: [],
};
