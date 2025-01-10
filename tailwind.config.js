/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust paths to match your project structure
    "./public/index.html",  // Include your HTML files for Tailwind to scan
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1e40af', // Add custom colors
        customGreen: '#10b981',
        alif: '#FFFFFF',
      },
      spacing: {
        128: '32rem', // Custom spacing values
        144: '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add custom fonts
        
      },
    },
  },
  plugins: [],
};
