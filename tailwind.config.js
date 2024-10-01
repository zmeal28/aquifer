/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: "#eaf5fb",
        royalblue: {
          "100": "#1a73e8",
          "200": "rgba(26, 115, 232, 0.3)",
        },
        "colors-white": "#fff",
        "colors-text": "rgba(21, 20, 57, 0.4)",
        "colors-heading": "#1e0e62",
        gray: {
          "100": "#212529",
          "200": "#161c2d",
          "300": "rgba(0, 0, 0, 0.65)",
          "400": "rgba(22, 28, 45, 0.7)",
        },
        tomato: {
          "100": "#f64b4b",
          "200": "rgba(246, 75, 75, 0.1)",
        },
        lightgreen: "rgba(104, 213, 133, 0.1)",
        mediumblue: "rgba(71, 59, 240, 0.1)",
        cornflowerblue: "#79a9e8",
        yellow: "#f2c94c",
        darkseagreen: "#8ec5b1",
        lightblue: "#b3e3fd",
        black: "#000",
        darkturquoise: "#00c4cc",
      },
      spacing: {},
      fontFamily: {
        "gilroy-medium": "Gilroy-Medium",
        poly: "Poly",
        fontawesome: "FontAwesome",
        "buttons-middle": "'DM Sans'",
        poppins: "Poppins",
        "gilroy-regular": "Gilroy-Regular",
      },
      borderRadius: {
        "81xl": "100px",
        "3xs": "10px",
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      lg: "18px",
      sm: "14px",
      "23xl": "42px",
      "6xl": "25px",
      "15xl": "34px",
      "3xl": "22px",
      mid: "17px",
      "17xl": "36px",
      "10xl": "29px",
      smi: "13px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "2xl": "21px",
      "5xl": "24px",
      xl: "20px",
      "29xl": "48px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
