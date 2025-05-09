/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#141850', // Navy
        light: '#F1F2FF',   // Light grey-blue
        white: '#FFFFFF',
        background: '#F2F2F7',
        cardGradientStart: '#FFFFFF',
        cardGradientEnd: '#E5E5EA'
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
        full: '9999px'
      },
      fontFamily: {
        sans: ['System']
      }
    }
  },
  plugins: [],
  corePlugins: require('tailwindcss-react-native/unsupported-core-plugins'),
};