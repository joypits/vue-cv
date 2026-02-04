export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      colors: {
        body: '#6B6C6D',
        dark: '#2C2D2F',
        darker: '#17181B',
        light: '#e1e1e1',
      },
    },
  },
  plugins: [],
}
