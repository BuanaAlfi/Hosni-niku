/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b3a5b",
        secondary: "#fff",
        japan: "#f44335",
        halal: "#22c55e",
        paragraph: "#64748b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["inter", "serif"],
        rubik: ["Rubik"],
        nanum: ["Nanum+Gothic"],
        monserrat: ["Montserrat"],
      },
      keyframes: {
        disco: {
          "0%, 100%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        disco: "disco 1s ease-in-out infinite",
      },
      boxShadow: {
        "in-shadow": "-1px 0px 0px 195px rgba(1,1,1,0.41) inset;",
      },
    },
  },
  plugins: [],
};
