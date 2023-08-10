/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#33e2a0",
        purple: "#7c60d5",
        dark: "#1b0e3d",
        gray: "#868894",
        lightGray: "#686868"
      },
      boxShadow: {
        '3xl': '0 15px 40px 15px rgba(51 226 160 / 0.1)',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1120px",
      xl: "1240px",
    },

  },
  plugins: [],
};
