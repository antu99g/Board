/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
        opensans: ["var(--font-opensans)"],
      },
      backgroundColor: {
        main: "rgba(245, 245, 245, 1)",
        green: "rgba(221, 239, 224, 1)",
        peach: "rgba(244, 236, 221, 1)",
        pink: "rgba(239, 218, 218, 1)",
        purple: "rgba(222, 224, 239, 1)",
      },
      colors: {
        link: "rgba(52, 107, 212, 1)",
        "custom-gray": "rgba(102, 102, 102, 1)",
      },
      borderColor: {
        green: "rgba(155, 221, 124, 1)",
        purple: "rgba(105, 114, 195, 1)",
      },
      fontSize: {
        xs: ".6rem",
        sm: "0.7rem",
        base: "0.8rem",
        lg: "1rem",
        xl: "1.2rem",
      },
      fontWeight: {
        thin: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
