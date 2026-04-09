/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f2ea",
        foreground: "#171717",
        accent: "#b9833c",
        muted: "#6b685f",
        border: "#d9d0c2",
        surface: "#fbf8f3",
      },
      fontFamily: {
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 48px rgba(23, 23, 23, 0.08)",
      },
      letterSpacing: {
        tighterest: "-0.06em",
      },
    },
  },
  plugins: [],
}

