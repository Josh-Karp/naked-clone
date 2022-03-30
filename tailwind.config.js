module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#201A30',
        'light-purple': '#38304C',
        'highlight-turquoise': '#0DF5E3',
        'light-grey': '#707070',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
