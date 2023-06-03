/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {animation: {
        'bounce-slow': 'bounce 2s infinite ',
        'bounce-fast': 'bounce 0.5s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}

