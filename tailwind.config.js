const { nextui } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{html,js,jsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: '#F1F1F1',
          primary: {
            50: '#effcfc',
            100: '#d7f5f6',
            200: '#b5eaec',
            300: '#81d9df',
            400: '#46c0ca',
            500: '#30b8c5',
            600: '#268494',
            700: '#256c79',
            800: '#265964',
            900: '#244b55',
            950: '#133039',
            DEFAULT: '#30b8c5',
            foreground: 'DEFAULT'

          }
        }
      },
      dark: {
        colors: {
          background: '#0d0c0c',
          primary: {
            50: '#effcfc',
            100: '#d7f5f6',
            200: '#b5eaec',
            300: '#81d9df',
            400: '#46c0ca',
            500: '#30b8c5',
            600: '#268494',
            700: '#256c79',
            800: '#265964',
            900: '#244b55',
            950: '#133039',
            DEFAULT: '#30b8c5',
            foreground: 'DEFAULT'

          }
        }
      }

    }
  })]
}
