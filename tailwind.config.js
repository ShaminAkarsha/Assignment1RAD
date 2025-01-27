const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.{js,jsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
