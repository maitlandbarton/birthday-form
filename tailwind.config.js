/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        aqua: '#98fcff',
        rose: '#edc2d5',
        ltPink: '#fbf2f8',
        mauve: '#bd969d',
        purple: '#bcb7d3',
        dkMauve: '#907887',
        dark: '#88636f'
      },
      fontFamily: {
        primary: "Bubble",
      },
    },
  },
  plugins: [],
}

