/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        "primary-100": "#a147eb",
        "primary-200": "#943bdd",
        "primary-300": "#872fd0",
        "primary-400": "#7B24C2",
        "primary-500": "#6e18b4",
        "primary-600": "#610ca7",
        "primary-700": "#540099",
        "secondary-100": "#8ce8e0",
        "secondary-200": "#75ccc5",
        "secondary-300": "#5db1a9",
        "secondary-400": "#46958e",
        "secondary-500": "#2f7973",
        "secondary-600": "#175e57",
        "secondary-700": "#00423c",
        "grey-100": "#575757",
        "grey-200": "#4f4e4e",
        "grey-300": "#464445",
        "grey-400": "#3e3b3c",
        "grey-500": "#353133",
        "grey-600": "#2d282a",
        "grey-700": "#241e21",
        info: "#3965e1",
        alert: "#e08f14",
        sucess: "#5ce059",
        error: "#ec5728",
        "green-50": "#DDF9F6",
        "dark-blue": "#1D262D"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      fontSize: {
        heading: {
          1: "44px",
          2: "36px",
          3: "32px",
          4: "28px",
          5: "24px",
          6: "20px",
          7: "16px"
        },
        body: {
          1: "16px",
          2: "14px",
          3: "12px",
          4: "10px,"
        }
      },
      screens: {
        sm: "22.5rem",
        md: "48rem",
        lg: "64rem",
        xl: "1280px"
      },
      minWidth: {
        "1/2": "20rem"
      },
      boxShadow: {
        card: "-8px 8px 10px -6px rgba(0, 0, 0, 0.3)"
      },
      animation: {
        "bounce-in-left": "bounce-in-left 1.1s both",
        "right-wing": "right-wing .5s linear alternate infinite",
        "left-wing": "left-wing .5s linear alternate infinite",
        fly: "fly 2s linear alternate infinite",
        "to-point": "to-point 1s linear alternate infinite",
        eyes: "eyes 5s linear alternate infinite",
        beak: "beak .8s linear alternate infinite"
      },
      keyframes: {
        "bounce-in-left": {
          "0%": {
            transform: "translateX(-600px)",
            "animation-timing-function": "ease-in",
            opacity: 0
          },
          "38%": {
            transform: "translateX(0)",
            "animation-timing-function": "ease-out",
            opacity: 1
          },
          "55%": {
            transform: "translateX(-68px)",
            "animation-timing-function": "ease-in"
          },
          "72%": {
            transform: "translateX(0)",
            "animation-timing-function": "ease-out"
          },
          "81%": {
            transform: "translateX(-28px)",
            "animation-timing-function": "ease-in"
          },
          "90%": {
            transform: "translateX(0)",
            "animation-timing-function": "ease-out"
          },
          "95%": {
            transform: "translateX(-8px)",
            "animation-timing-function": "ease-in"
          },
          "100%": {
            transform: "translateX(0)",
            "animation-timing-function": "ease-out"
          }
        },
        "right-wing": {
          "0%": {
            "transform-origin": "inherit"
          },
          "100%": {
            transform: "rotate(-5deg)",
            "transform-origin": "inherit"
          }
        },
        "left-wing": {
          "0%": {
            "transform-origin": "inherit",
            transform: "rotate(-5deg)"
          },
          "100%": {
            transform: "rotate(0deg)",
            "transform-origin": "inherit"
          }
        },
        fly: {
          "0%": {
            transform: "translate(0px, 0px)"
          },
          "100%": {
            transform: "translate(10px, 10px)"
          }
        },
        "to-point": {
          "0%": {
            "transform-origin": "inherit"
          },
          "100%": {
            transform: "rotate(5deg)",
            "transform-origin": "inherit"
          }
        },
        eyes: {
          "0%": {
            transform: "translate(0px, 0px)"
          },
          "25%": {
            transform: "translate(-10px, 10px)"
          },
          "50%": {
            transform: "translate(-10px, 10px)"
          },
          "75%": {
            transform: "translate(0px, 0px)"
          },
          "100%": {
            transform: "translate(0px, 0px)"
          }
        },
        beak: {
          "0%": {
            "transform-origin": "center",
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(2deg)",
            "transform-origin": "center"
          }
        }
      }
    }
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true }), require("tailwindcss-animate")]
};
