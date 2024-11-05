/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'menuContainer': '1320px',
      },
      // Font Family 
      fontFamily: {
        'sans': ['DM Sans'], 
      },
      // Font Family
      // Colors
      colors: {
        'menuColor': '#767676',
        'menuHover': '#262626',
        'categoryBg': '#F5F5F3',
        'informationText': '#6D6D6D',
        
      },
      // Colors
      backgroundImage: {
        'bannerImg':"url('../src/assets/banner.png')",
      
      },
    },
  },
  plugins: [],
}

