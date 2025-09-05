/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e3b4b',
        secondary: '#ffdd57',
        accent: '#007bff',
        dark: '#1a202c',
        light: '#f7fafc'
      },
    },
  },
  plugins: [],
}
