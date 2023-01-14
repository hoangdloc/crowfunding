/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Epilogue', 'sans-serif;']
      },
      colors: {
        primary: '#1DC071',
        secondary: '#6F49FD',
        text1: '#171725',
        text2: '#4B5264',
        text3: '#808191',
        text4: '#B2B3BD',
        'icon-color': '#A2A2A8',
        white: '#FFFFFF',
        'white-soft': '#FCFBFF',
        'gray-soft': '#FCFCFC',
        strock: '#F1F1F3',
        lite: '#FCFCFD',
        error: '#EB5757',
        darkbg: '#13131A',
        'dark-secondary': '#1C1C24',
        'soft-dark': '#22222C',
        'dark-soft': '#24242C',
        'dark-stroke': '#3A3A43',
        'dark-red': '#422C32'
      }
    }
  },
  plugins: []
};
