/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 0px 20px -5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

