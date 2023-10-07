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
    text :{
      animation : 'opacity:0 ; animation : fade in 2s ease-in-out forwards'
    }
    ,
    fontFamily: {
      suk : ['Tourney', 'sans-serif'],
      par : ['Roboto', 'sans-serif'],
      high: ['Orbitron','sans-serif'],
    },
    extend: {
      //https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg
      //https://images.squarespace-cdn.com/content/v1/5c2d0f0231d4df5dc839bda8/1623793091596-0K3DZ83EP8ICPHTBT7HM/tech_anim1.gif?format=1000w
      backgroundImage:{
        'cool-background':'url(.components/icons/background.png)',
        'noob': 'url(https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg=)'
      },
      colors: {
        custom: {
            DEFAULT: '#10B981',
            light: '#D1FAE5'
        }
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
  plugins: [require('daisyui'),require('tailwind-scrollbar')],
}
