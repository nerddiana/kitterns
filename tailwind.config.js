const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto'],
      },
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
      backgroundColor: (theme) => ({
        sidebarcover: 'rgba(0, 0, 0, 0.75)',
      }),
      width: {
        sidebar: '300px',
      },
      translate: {
        sidebar: '-300px',
      },
    },
  },
}
