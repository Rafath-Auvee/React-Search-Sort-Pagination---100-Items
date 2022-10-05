module.exports = {
  variants: {
    //  margin: ['hover'],
     margin: ['responsive', 'hover'],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade"],
  },
}