/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'class', // This enables dark mode
  variants: {
    extend: {
      backgroundColor: ['hover', 'dark'], // This enables background color change on hover and in dark mode
      textColor: ['hover', 'dark'], // This enables text color change on hover and in dark mode
      // Add more utilities here as needed
    },
  },
  plugins: [],
};