import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "354px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        mmd: "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "black-30": "rgba(0, 0, 0, 0.3)",
        "gray-30": "rgba(133, 133, 133, 0.08)",
        success: "#4AB247",
        stroke: "#F0F0F0",
        grey: {
          300: "#FAFCFE;",
          400: "#DFE3EA;",
          500: "#667085;",
          600: "#394357",
          700: "#B3BCCD",
          900: "#0D111B",
        },
        neutral: {
          50: '"#FAFAFA',
          60: "#FCFCFC",
          80: "#F0F0F0",
          100: "#F5F5F5",
          200: "#F9F9F9",
          300: "#F8F8F9",
        },
        slate: { 200: "#E4EAF1", 700: '"#384357' },
        primary: { 400: "#DD4B39", 500: "#DB4444", 600: "#CE371C" },
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "1rem" }], //10px
        "11": ["0.6875rem", { lineHeight: "1rem" }], //11px
        xs: ["0.75rem", { lineHeight: "1rem" }], //12px
        xsm: ["0.8125rem", { lineHeight: "1.25rem" }], //13px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], //14px
        base: ["1rem", { lineHeight: "1.5rem" }], //16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], //18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], //20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], //24px
        "3xl": ["2rem", { lineHeight: "2.261rem" }], //32px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], //36px
        "5xl": ["3rem", { lineHeight: "1" }], //48px
        "6xl": ["3.75rem", { lineHeight: "1" }], //60px
        "7xl": ["4.5rem", { lineHeight: "1" }], //72px
        "8xl": ["6rem", { lineHeight: "1" }], //96px
        "9xl": ["8rem", { lineHeight: "1" }], //128px
      },
      boxShadow: {
        xl: "0px 1px 2px 0px #EDF5F8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
