/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      darkGrey: '#24232C',
      grey: '#817D92',
      lightGrey: '#E6E5EA',
      black: '#18171F',
      green: '#A4FFAF',
      red: '#F64A4A',
      orange: '#FB7C58',
      yellow: '#F8CD65',
      transparent: 'transparent'
    },

    fontFamily: {
      jetBrains: ['JetBrains Mono', 'monospace']
    },

    extend: {},
  },
  plugins: [],
}
