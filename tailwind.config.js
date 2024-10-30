/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "lavender-indigo": "#7C5DFA",
      "soft-violet": "#9277FF",
      "deep-midnight": "#1E2139",
      "dark-navy": "#252945",
      "pale-blue": "#DFE3FA",
      "cool-gray": "#888EB0",
      "dusty-purple": "#7E88C3",
      "black-blue": "#0C0E16",
      "coral-red": "#EC5757",
      "light-red": "#FF9797",
      "light-gray": "#F8F8FB",
      "dark-slate": "#141625",
      white: "#FFFFFF",
    },

    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },

    fontWeight: {
      medium: 500,
      bold: 700,
    },

    extend: {
      fontSize: {
        "large-heading": [
          "2.25rem",
          { lineHeight: "2.0625rem", letterSpacing: "-1px", fontWeight: "700" },
        ],
        "medium-heading": [
          "1.5rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "-0.75px",
            fontWeight: "700",
          },
        ],
        "small-heading": [
          "0.9375rem",
          { lineHeight: "1.5rem", letterSpacing: "-0.25px", fontWeight: "700" },
        ],
        "small-heading-alt": [
          "0.9375rem",
          {
            lineHeight: "0.9375rem",
            letterSpacing: "-0.25px",
            fontWeight: "700",
          },
        ],

        body: [
          "0.8125rem",
          {
            lineHeight: "1.125rem",
            letterSpacing: "-0.1px",
            fontWeight: "500",
          },
        ],
        "body-alt": [
          "0.8125rem",
          {
            lineHeight: "0.9375rem",
            letterSpacing: "-0.1px",
            fontWeight: "500",
          },
        ],
      },

      boxShadow: {
        "dropdown-light": "0px 10px 20px 0px rgba(72,84,159,0.25)",
        "dropdown-dark": "0px 10px 20px 0px rgba(0,0,0,0.25)",
        card: "0px 10px 10px -10px rgba(72,84,159,0.1)",
        "buttons-container": "0px -24px 68px 0px rgba(0,0,0,0.1)",
      },

      content: {
        checkIcon: "url('./ui/icons/CheckIcon.svg')",
      },

      keyframes: {
        rotateUp: {
          "0%": {
            transform: "rotate(0)",
          },
          "25%": {
            transform: "rotate(-200deg)",
          },
          "50%": {
            transform: "rotate(-160deg)",
          },
          "100%": {
            transform: "rotate(-180deg)",
          },
        },

        rotateDown: {
          "0%": {
            transform: "rotate(-180deg)",
          },
          "25%": {
            transform: "rotate(20deg)",
          },
          "50%": {
            transform: "rotate(-20deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },

        slideRight: {
          from: {
            transform: "translateX(-100%)",
          },

          to: {
            transform: "translateX(0)",
          },
        },

        slideLeft: {
          from: {
            transform: "translateX(0)",
          },

          to: {
            transform: "translateX(-100%)",
          },
        },

        fadeIn: {
          from: {
            opacity: 0,
          },

          to: {
            opacity: 0.5,
          },
        },

        fadeOut: {
          from: {
            opacity: 0.5,
          },

          to: {
            opacity: 0,
          },
        },
      },

      animation: {
        rotateUp: "rotateUp 1000ms forwards",
        rotateDown: "rotateDown 1000ms forwards",
        slideRight: "slideRight 250ms ease-out forwards",
        slideLeft: "slideLeft 250ms ease-out forwards",
        fadeIn: "fadeIn 250ms forwards",
        fadeOut: "fadeOut 250ms forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
