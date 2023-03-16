const { fontFamily } = require("tailwindcss/defaultTheme");

const pxToRem = (px) => {
  return `${px / 16}rem`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#31C3BD",
          "light-h": "#65E9E4",
          shadow: "#118C87",
        },
        yellow: {
          light: "#F2B137",
          "light-h": "#FFC860",
          shadow: "#CC8B13",
        },
        navy: {
          dark: "#1A2A33",
          "semi-dark": "#1F3641",
          shadow: "#10212A",
        },
        silver: "#A8BFC9",
        "silver-h": "#DBE8ED",
        "silver-dark": "##6B8997",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", ...fontFamily.sans],
      },
      boxShadow: {
        big: "inset 0 -8px 0px",
        small: "inset 0px -4px 0px",
      },
      fontSize: {
        l: [
          pxToRem(40),
          {
            lineHeight: pxToRem(50),
            letterSpacing: pxToRem(2.5),
            fontWeight: 700,
          },
        ],
        m: [
          pxToRem(24),
          {
            lineHeight: pxToRem(30),
            letterSpacing: pxToRem(1.5),
            fontWeight: 700,
          },
        ],
        s: [
          pxToRem(20),
          {
            lineHeight: pxToRem(25),
            letterSpacing: pxToRem(1.25),
            fontWeight: 700,
          },
        ],
        xs: [
          pxToRem(16),
          {
            lineHeight: pxToRem(20),
            letterSpacing: pxToRem(1),
            fontWeight: 700,
          },
        ],
        body: [
          pxToRem(14),
          {
            lineHeight: pxToRem(18),
            letterSpacing: pxToRem(0.875),
            fontWeight: 500,
          },
        ],
      },
    },
  },
  plugins: [],
};
