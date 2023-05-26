/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm'  : '640px',
      'md'  : '768px',
      'lg'  : '1024px',
      'xl'  : '1280px',
      '2xl' : '1536px',
      '2k'  : '1920px',
      '4k'  : '2560px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT  :'1.25rem',
        md       :'1.75rem',
        lg       :'0.875rem',
        xl       :'2.25rem',
        '2xl'    :'3rem',
        '2k'     :'1rem',
      },
    },
    fontFamily: {
      primary  : ['Source Sans Pro', 'sans-serif']
    },
    extend: {
      fontSize: {
        'xs'   : ['.75rem', '1.1rem'],
        'sm'   : ['.875rem', '1.356rem'],
        'base' : ['1rem', '1.45rem'],
        'lg'   : ['1.125rem', '1.75rem'],
        'xl'   : ['1.25rem', '1.875rem'],
        '22'   : ['1.375rem', '2.063rem'],
        '28'   : ['1.75rem', '2.375rem'],
        '2xl'  : ['1.5rem', '2.25rem'],
        '26'   : ['1.625rem', '2.25rem'],
        '3xl'  : ['1.875rem', '2.5rem'],
        '4xl'  : ['2.25rem', '2.75rem'],
        '5xl'  : ['3rem', '3.75rem'],
        '6xl'  : ['3.75rem', '5rem'],
        '7xl'  : ['4.375rem', '5.625rem'],
      },
      colors: {
        primary: {
          DEFAULT: '#0B2D61',
        },
        secondary: {
          DEFAULT: '#EE3139',
        },
      },
      boxShadow: {
        'shadow': '0px 0px 10px rgba(0, 0, 0, 0.09)',
      },
      boxShadow: {
        '3xl': '0px 0px 5px rgba(0, 0, 0, 0.1)',
        'red': '0px 0px 1px 2px #FE4D5F',
        'black': '0px 0px 1px 2px rgba(36, 36, 39, 0.6)',
      }
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}