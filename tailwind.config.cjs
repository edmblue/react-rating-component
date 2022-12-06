/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.jsx',
  ] /* Los dos asteriscos significan "todos los archivos que esten en src y luego todos los que tengan .jsx" */,
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        basicGrey: 'hsl(213, 19%, 27%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        overPass: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
