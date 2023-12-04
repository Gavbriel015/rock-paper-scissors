/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: 'hsl(230, 89%, 65%)',
        scissors: 'hsl(40, 84%, 53%)',
        rock: 'hsl(349, 70%, 56%)',
      }
    },
  },
  plugins: [],
}

