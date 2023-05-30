/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        texto: "url('/text_encryption.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      }
    },
    plugins: []
  }
}
