/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'about': '7fr 9fr',
        'msgInput': '11fr 1fr',
        'skill-card': '1fr 9fr',
      },
      gridTemplateRows: {
        'about-sm': '6fr 9fr',
        'about-md': '18fr 20fr',
        'project-md': ' 1fr',
      },
      height:{
        '84': '21rem',
        '88': '22.5rem'
      },
      width:{
        '98': '27rem',
      },
    },
    fontFamily: {
      londrina : ['Londrina Outline', "cursive"],
      bungee: ['Bungee Outline', 'cursive'],
      sourceCodePro: ['Source Code Pro', 'monospace'],
    },
  },
  plugins: [],
}
