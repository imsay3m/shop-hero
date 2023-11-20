/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '16': '4rem',
    },
    backgroundImage: {
      'banner-background-mobile': "url('/assets/images/header/banner-background-mobile.png')",
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        '14': '3.5rem',
      },
      spacing: {
        '16': '4rem',
        '41': '10.25rem',
        '47.25': '189px',
        '75': '18.75rem',
        '93.75': '375px',
      },
      colors: {
        "primary": "#1A187A",
        "primarylite": "#27448E",
        "secondery": "#FAFAFA",
        "seconderylite": "#EDEDED"
      }
    },
  },
  plugins: [],
}

