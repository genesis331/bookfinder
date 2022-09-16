/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'light-emphasis': '#000000',
        'light-text-less-emphasis': '#b3b3b3',
        'light-component-less-emphasis': '#dcdcdc',
        'light-background': '#f3f3f3',
        'light-field': '#ffffff',
        'dark-emphasis': '#ffffff',
        'dark-text-less-emphasis': '#b3b3b3',
        'dark-component-less-emphasis': '#757575',
        'dark-background': '#262626',
        'dark-field': '#505050',
      },
    }
  },
  plugins: [
    'gatsby-plugin-postcss',
    require('preline/plugin'),
  ],
}
