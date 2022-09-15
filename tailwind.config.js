/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    fontFamily:{
      'fuentePrincipal' : ["'Outfit'", "'sans-serif'" ]
    },
    extend: {
      colors: {
        'principal': '#D6E2EF',
        'text1' : '#1F3150',
        'text2' : '#ABAFB3'
      },
    }
  },
  plugins: [],
}