/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    backgroundImage:{
      'MyPic': 'url(/images/MyPic.jpg)'
    },
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    fontFamily: {
      body:['Noto Serif']
    },
    extend: {},
  },

  theme: {
    extend: {
      width: {
        '128': '500px',
      }
    }
  
  },
  plugins: [],
}

