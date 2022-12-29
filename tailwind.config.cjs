/** @type {import('tailwindcss').Config} */
module.exports = {
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
        xs: '200px'
      },

      fontFamily: {
        quicksand: "'Quicksand', serif",
        source_code_pro: "'Source Code Pro', monospace",
        bebas_neue: "'Bebas Neue', sans-serif",
        fira_code: "'Fira Code', sans-serif",
        poppins: "'Poppins', sans-serif"
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