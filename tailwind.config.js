/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.php'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
}

