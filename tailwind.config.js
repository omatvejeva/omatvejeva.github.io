// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./cards.html",
    "./**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "900px",  
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [],
};
