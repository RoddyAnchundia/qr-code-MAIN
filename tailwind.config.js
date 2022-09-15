/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    fontFamily:{
      'fuentePrincipal' : ["'Outfit'", "'sans-serif'" ]
    },
    extend: {
      colors: {
        'principal': '#D6E2EF',
        'text1' : '#1F3150',
        'text2' : '#9EA0A2',
      },
    }
  },
  plugins: [],
}
