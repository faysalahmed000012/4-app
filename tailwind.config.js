/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
// import flowbite from "flowbite-react/tailwind";
// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      // primary: "#6CF953",
      primary: "#1DED51",
      secondary: "#ccff9d",
      "light-black": "#050315",
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
