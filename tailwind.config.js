/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,}',
  ],
  theme: {
    fontFamily: {
      primary: 'poppins',
      secondary: 'sora',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [],
};


