/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'hTitle': ['"Libre Baskerville"'],
        'body': ['Quicksand'],
        'logo': ['Oxanium'],
      },
      colors:{
        "myWhite": "#E6E8EDff",
        "myBlack": "#222528ff",
        "myAquamarine": "#A7FDCCff",
        "mySkyblue": "#15DBFCff",
        'myBlue': "#209FFEff",
        'grad1': "#1FA0FF",
        'grad2': "#12DAFB",
        'grad3': "#A7FDCC",
      },
      keyframes:{
        'open-menu':{
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.3)'},
          '100%': {transform: 'scaleY(1)'}
        },
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      backgroundImage:{
        'pic-of-me': "url('/img/Headshot_1.jpg')",
      }
    },
  },
  plugins: [],
}