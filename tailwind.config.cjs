/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'html[data-theme="dark"]'],

  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
  ],

  theme: {

    fontFamily: {
      sans: 'var(--font-roboto)',
      alt: 'var(--font-bai-jamjuree)',
    },

    extend: {

      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
      },

      fontSize: {
        '5xl': '2.5rem',
      },

      backgroundColor: {},

      backgroundSize: {
        stripes: '100% 8px',
      },

      blur: {
        full: '194px',
      },

      colors: {},
    },


    /* TOFIX não está funcionando nos componentes  */
    monokai: {
      background: '#272822',
      text: '#f8f8f2',
      comment: '#75715e',
      string: '#e6db74',
      keyword: '#f92672',
      function: '#a6e22e',
      variable: '#f8f8f2',
      operator: '#f92672',
      number: '#ae81ff',
    },

    /* ... */
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },

  /* ... */
}

