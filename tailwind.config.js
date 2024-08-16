/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(109.2deg, rgb(254, 3, 104) 9.3%, rgb(103, 3, 255) 89.5%)",
        "custom-gradient-2":
          "linear-gradient(90.4deg, rgb(248, 52, 246) 0.6%, rgb(152, 38, 252) 90%)",
      },
    },
  },
  plugins: [],
};
