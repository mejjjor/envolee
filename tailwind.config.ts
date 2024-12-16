import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
    },

    animation: {
      // fadein: 'fadeIn 2s ease-in-out',
      fly: "fly 8s ease-in-out 1",
    },
    keyframes: {
      // fadeIn: {
      //   '0%': { opacity: "0" },
      //   '100%': { opacity: "1" },
      // },
      fly: {
        "0%": { opacity: "0" },
        "30%": { opacity: "1" },
        "31%": {
          opacity: "1",
          filter: "blur(0px)",
          transform: "scale(1) translate(0, 0) skew(0, 0)",
        },

        // '0%': { opacity: "1",filter:"blur(0px)", transform: "scale(1) translate(0, 0) skew(0, 0)"},
        // '10%': { opacity: "1",filter:"blur(0px)", transform: "scale(1) translate(0, 0) skew(0, 0)"},
        // '50%': { opacity: "0", filter:"blur(7px)", transform: "scale(2) translate(30px, 0) skew(20deg, -20deg)"},
        "85%": {
          opacity: "0",
          filter: "blur(7px)",
          transform: "scale(2) translate(30px, 0) skew(20deg, -20deg)",
        },
        "86%": {
          opacity: "0",
          filter: "blur(0px)",
          transform: "scale(1) translate(0, 0) skew(0, 0)",
        },
        "100%": {
          opacity: "1",
          filter: "blur(0px)",
          transform: "scale(1) translate(0, 0) skew(0, 0)",
        },

        // '51%': { opacity: "0", filter:"blur(7px)", transform: "scale(2) translate(-30px, 0) skew(-20deg, 20deg)"},
        // // '75%': { opacity: "1",filter:"blur(0px)", transform: "scale(1) translate(0, 0) skew(0, 0)"},
        // '100%': { opacity: "1",filter:"blur(0px)", transform: "scale(1) translate(0, 0) skew(0, 0)"},
      },
    },
  },
  plugins: [],
} satisfies Config;
