/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  content: [
    "./node_modules/flowbite.{js,ts}"
],
  variants: {
    extend: {
      height: ['hover'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite')
    // ...
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '50%': '50%',
     
     '16': '4rem',
     '100%': '100%',
     '90%': '90%',
    },
    borderRadius: {
      'none': '0',
      'sm': '10px',
      'md': '12px',
      'lg': '14px',
      'full': '9999px'
    },
    container: {
      center: true,
      
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1240px',
    },

    backgroundSize: {
      'fg': '100%'
    },
    extend: {
      colors: {
        tip: '#8C9CBA',
        card: '#1A2231',
        bg: '#0E1420',
        iconBg:"#242B39",
        input:"#141B28",
        active:"#5868E9",
        gold:"#FFD060",
        cyan:"#60FFEF",
        purple1:"#A060FF",
        from:"#1B2332",
        to:"#1c2332",
        hovers:"#1D2331",
        item:"#161B28",
        btnText:"#0B121E",

        gren:"#27DE90"
      },
      gridColumnStart: {
        '1.32': '1.32',
        '0.68': '0.68',
        '15': '15',
        '16': '16',
        '17': '17',
       }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}