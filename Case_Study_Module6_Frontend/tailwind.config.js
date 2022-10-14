/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#ffffff",
        "gray-2": "#6a6969",
        "gray-4": "#8491a4",
        "gray-3": "#ced4da",
        "gray-5": "#808080",
        blue: "#14f1d7",
        "regal-green": "#15f0d6",
        green: "#14f1d7",
        primary: "#101828",
        secondary: "#7F56D9",
      },
      backgroundImage: {
        banner:
          "url('https://firebasestorage.googleapis.com/v0/b/images-c1654.appspot.com/o/files%2Fbig-city.jpg?alt=media&token=8cf6b135-b966-40b8-88bf-083800166eb5')",
      },
      height: {
        128: "510px",
      },
      boxShadow: {
        1: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
    },
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1234px",
    },
  },

  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
