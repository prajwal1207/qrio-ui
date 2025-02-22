/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurpleStart: "#8A00FF",
        customPurpleEnd: "#D900FE",
        customBlue: "#020c14",
        Purple :'#31004A'

      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #8A00FF, #D900FE)",
        'card-gradient': 'linear-gradient(to bottom right, #121212, #000000)',
      },
    },
  },
  plugins: [],
};
