const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    screens: {

      md: '768px',

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'default': '#1D1F20',
      'white' : "#fff",
      "asher-blue" : "#2f395c",
      "asher-lblue" : "#bad8c7",
      "asher-pink" : "#dc7780",
      "about" : colors.red,
      "cartoons" : colors.amber,
      "press" : colors.emerald,
      "videos" : colors.blue,
      "writings" : colors.indigo,
      "contact" : colors.violet
    },
    extend: {
      spacing: {
        "navWidth" : "15rem",
        "xGap" : "1rem",
        'yGap' : "1.5rem"
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}