/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'SF-Pro-Display' : ['"SF-Pro-Display"'],
      },
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1420px",
      },
      colors: {
        'cl-blue': 'var(--cl-blue)',
        'cl-dark-blue': 'var(--cl-dark-blue)',
      },
      container: {
        center:true,
      },
    },
  },
  plugins: [],
}