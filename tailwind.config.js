/** @type {import('tailwindcss').Config} */
module.exports = {
  

  content: ['./src/components/*.jsx'],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    hover: {
      improved: 'hover:shadow hover:animate-bounce'
    },
    fontFamily: {
      suk : ['Tourney', 'sans-serif'],
      par : ['Orbitron', 'sans-serif'],
    },
    extend: {
      //https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg
      backgroundImage:{
        'cool-background':'url(.components/icons/background.png)',
        'noob': 'url(https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg)'
      }
    },
    daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
    }
  },
  plugins: [require('daisyui')],
}
