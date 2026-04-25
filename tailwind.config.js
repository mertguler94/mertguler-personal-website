/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#121314",
        "surface-dim": "#1b1c1d",
        "surface-container": "#1f2021",
        "surface-container-high": "#292a2b",
        "surface-container-low": "#1b1c1d",
        primary: "#d99846",
        "on-primary": "#2b1700",
        "on-surface": "#f5f5f5",
        "on-surface-variant": "#d1d1d1",
        "outline-variant": "#514537",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        xl: "0.5rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      fontFamily: {
        heading: ["Newsreader", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.5rem, 5vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        h2: ["clamp(2rem, 4vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["clamp(1.5rem, 3vw, 1.75rem)", { lineHeight: "1.3", fontWeight: "500" }],
      },
      spacing: {
        gutter: "1.5rem",
        margin: "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};