/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
        Volkhov:['Volkhov','serif'],
      },
      width:{
        "width-1170":"1170px"
      },
      boxShadow:{
        '3xl': '0px 2px 80px 2px rgba(0, 0, 0, 0.06)',
        'card-a': '14px 24px 72px 0px rgba(102, 102, 102, 0.10)',
        'card-d': '0px 16px 80px 0px rgba(254, 147, 94, 0.20)',
        'comment':"0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0.00), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)"
      },
      colors:{
        Paragraph:"rgba(102, 102, 102, 1)",
        ColorB1:"rgba(68, 68, 68, 1)",
        CollorOff:"rgba(153, 153, 153, 1)",
        CollorOff1:"rgba(229, 229, 229, 1)",
        PrimaryB:"rgba(34, 34, 34, 1)",
        PrimaryO:"rgba(250, 116, 54, 1)",
      }
    },
  },
  plugins: [],
}