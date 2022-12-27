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

      fontFamily: {
        quicksand: "'Quicksand', serif",
        source_code_pro: "'Source Code Pro', monospace"
      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
