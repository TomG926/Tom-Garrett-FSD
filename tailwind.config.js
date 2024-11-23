// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' if preferred
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          400: '#7c3aed',
          600: '#4f46e5',
          700: '#3730a3',
        },
        purple: {
          600: '#6d28d9',
          700: '#5b21b6',
        },
      },
    },
  },
  plugins: [],
};
