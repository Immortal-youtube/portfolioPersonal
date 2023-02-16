/** @type {import('tailwindcss').Config} */
module.exports = {
  

  content: ['./src/components/*.jsx'],
  theme: {
    fontFamily: {
      suk : ['Tourney', 'sans-serif'],
      par : ['Orbitron', 'sans-serif'],
    },
    extend: {
      backgroundImage:{
        'cool-background':'url(.components/icons/background.png)',
        'noob': 'url(https://wallpaperaccess.com/full/1567665.png)'
      }
    },
  },
  daisyui: {
    themes: ["dracula"],
  },
  plugins: [require('daisyui')],
}
