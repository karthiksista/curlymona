/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'beige-light': '#F5F5DC',  // Light beige
        'beige-medium': '#EAD8C2', // Medium beige
        'beige-darker': '#D4B890',   // Dark beige
        'beige-accent': '#C5A87C', // Accent beige
        "beige-dark": '#6B4E31'
      },
    },
  },
  plugins: [],
};
