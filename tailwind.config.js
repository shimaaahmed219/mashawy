/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        domine:["Domine"],
        Anek:["Anek Gurmukhi"],
        Georgian:["Noto_Sans_Georgian"],
        tinos:['Tinos'],
        Dancing:["Dancing Script"]

      },
      colors:{
        main:"#846a06",
        second:"#4a3700",
        categores:"#f9f7f3",
        trasnsparent:"#0000004a",
        tr:"#00000076",
        bg:"#dad5ae",
        text:"#604b33",
        footer:"#1c1c21",

      },
      screens: {
        "phon":"499px"
        
              },
    },
  },
  plugins: [],
}