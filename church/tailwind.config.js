const robotoArr = ['Roboto', 'sans-serif']

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'roboto': ['roboto', 'sans-serif']
    },
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': {transform: 'translateX(-1000px)'},
          '100%': {transform: 'translateX(0px)'}
        },
        slideInFromRight: {
          '0%': {transform: 'translateX(1000px)'},
          '100%': {transform: 'translateX(0px)'}
        },
        slideInFromBottom: {
          '0%': {transform: 'translateY(800px)'},
          '100%': {transform: 'translateY(0px)'}
        },
        slideInFromTop: {
          '0%': {transform: 'translateY(-300px)'},
          '100%': {transform: 'translateY(0px)'}
        },
        fadeInFull: {
          '0%': {opacity: '-1'},
          '100%': {opacity: '1'}
        }
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft .75s ease-in-out',
        slideInFromRight: 'slideInFromRight .75s ease-in-out',
        slideInFromBottom: 'slideInFromBottom 1s ease-in-out',
        slideInFromTop: 'slideInFromTop 1s ease-in-out',
        fadeInFull: 'fadeInFull .75s ease-in-out'
      }
      // screens: {'sm': '750px'}
    },
},
  plugins: [],
}