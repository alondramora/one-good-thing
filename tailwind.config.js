/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{ejs, .html}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
           "primary": "#140E06",
          
            "secondary": "#6A4B30",

            "accent": "#AE7B54",

            "neutral": "#A48A74",

            "base-100": "#FFFFFF",

            "info": "#f3f4f6",

            "success": "#15803d",

            "warning": "#1d4ed8",

            "error": "#9f1239",          
          },
        },
    ],
  },
}
