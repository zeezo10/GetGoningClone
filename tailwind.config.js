/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-xl': '0 10px 15px rgba(0, 0, 0, 0.3)',  // Example of a larger shadow
        'custom-soft': '0 4px 8px rgba(0, 0, 0, 0.15)',  // Softer shadow
        'custom-searchBar': '0 1px 30px #EF4444',  // Softer shadow
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
    },
  },
  plugins: [],
}

