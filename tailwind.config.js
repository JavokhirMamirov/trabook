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
        'card-a': '14px 24px 72px 0px rgba(102, 102, 102, 0.10)'
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