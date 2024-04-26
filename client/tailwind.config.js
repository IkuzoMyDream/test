const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "pale-blue-gray": "#E8F8F8",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
