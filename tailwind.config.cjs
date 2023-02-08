/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light_gray': '#d6e2f0',
        'grayish_blue': '#7b879d',
        'dark_blue': '#1f3251'
      },
      fontFamily: {
        'sans': ['Outfit']
      },
      screens: {
        sm: '375px',
      },
    },
  },
  plugins: [],
}
