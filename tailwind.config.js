const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
        'primary-black': '#080708',
        'purple-light': '#D6CCFF',
        purple: '#8061FF',
        yellow: '#FFDA02',
        cielo: '#B7E8EE',
        lime: '#B4E687',
        pink: '#FFA9F1',
        alert: '#F30530',
      },
    },
  },
}
