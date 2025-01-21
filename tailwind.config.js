/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0rem 0.3125rem 0.3125rem 0rem rgba(82, 63, 105, 0.3)", // Add your custom shadow
      },
    },
  },
  plugins: [],
};
