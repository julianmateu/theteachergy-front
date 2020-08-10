module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      title: ['Spartan', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        main: '#38A168',
        button: '#68D391',
        hover: '#48BB78',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {},
  plugins: [],
}
