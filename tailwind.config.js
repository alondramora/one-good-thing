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
          
          "primary": "#545CFC",
                   
          "secondary": "#7E5EF1",
                   
          "accent": "#F7839A",
                   
          "neutral": "#1C192A",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#F2A75B",
                   
          "success": "#a3e635",
                   
          "warning": "#fbbf24",
                   
          "error": "#FC4A86",
          },
        },
    ],
  },
}
