/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amazonClone:{
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEB069",
          DEFAULT: "#131921"
        }
      }
    },
  },
  plugins: [],
}

