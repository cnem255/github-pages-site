/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png,jpg,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mountain": "url('./assets/img/mountain.jpg')"
      },

      screens: {
        xs: '300px'
      },

      fontFamily: {
        "quicksand": "'Quicksand', serif",
        "source-code-pro": "'Source Code Pro', monospace",
        "bebas-neue": "'Bebas Neue', sans-serif",
        "fira-code": "'Fira Code', sans-serif",
        "poppins": "'Poppins', sans-serif"
      },

      daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
        themes: [],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar"),
  ],
}