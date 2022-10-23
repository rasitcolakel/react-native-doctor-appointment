/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        primary: {
          DEFAULT: "#3F63FF",
          50: "#F7F8FF",
          100: "#E2E8FF",
          200: "#B9C6FF",
          300: "#91A5FF",
          400: "#6884FF",
          500: "#3F63FF",
          600: "#0735FF",
          700: "#0027CE",
          800: "#001C96",
          900: "#00125E",
        },
      },
    },
  },
  plugins: [],
};
