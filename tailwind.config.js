/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/*.jsx'],
  theme: {
    extend: {
      backgroundImage:{
        'cool-background':'url(.components/icons/background.png)'
      }
    },
  },
  daisyui: {
    themes: ["dracula"],
  },
  plugins: [require('daisyui')],
}
