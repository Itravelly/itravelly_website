/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'bg-primary':'#FFFFFF',
      'bg-secondary':'#F2F2F2',
      'bg-tirtiary':'#999999',
      'bg-inverted-primary':'#706F6F',
      'bg-inverted-secondary':'#8D8C8C',
      'bg-inverted-tirtiary':'#A9A9A9',
      'bg-disabled':'#C6C5C5',
      'bg-button':'#1D71B8',
      'bg-button-hover':'#4A8DC6',
      'txt-primary':'#706F6F',
      'txt-secondary':'#8D8C8C',
      'txt-tirtiary':'#A9A9A9',
      'txt-inverted-primary':'#FFFFFF',
      'txt-inverted-secondary':'#F2F2F2',
      'txt-inverted-tiratiray':'#999999',
      'txt-disabled':'#E2E2E2',
      'negative': '#8B0000',
      'positive': '#00796B',
      'line-border':'#A9A9A9',
    },
    spacing: {
      /* By default the spacing scale is inherited by the padding, margin, width, minWidth, maxWidth, height, minHeight, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding core plugins. */
      "0":'0', //0px
      '1': '0.25rem', //4px
      '2': '0.5rem', //8px
      '3': '1rem',  //16px
      '4': '2rem',  //32px
      '5': '4rem',  //64px
      '6': '8rem', //128px
      '7': '16rem', //256px
      '8': '32rem', //512px
      '9': '50%', 
      '10': '100%', 
    },
    fontSize: {
      sm: ['0.833rem',{ //small
        lineHeight: '1rem'
      }], 
      base: ['1rem', { //base
        lineHeight: '1.5rem'
      }], 
      xl: ['1.25rem', { //h6 && large
        lineHeight: '1.5rem'
      }], 
      '2xl': ['1.44rem', { //h5
        lineHeight: '2rem'
      }], 
      '3xl': ['1.728rem', { //h4
        lineHeight: '2rem',
      }], 
      '4xl': ['2.074rem', { //h3
        lineHeight: '2.5rem'
      }], 
      '5xl': ['2.488rem', { //h2
        lineHeight: '3rem',
      }], 
      '6xl': ['2.986rem', { //h1
        lineHeight: '3.5rem',
        fontWeight: '600',
      }], 
    },
    extend: {
      
    },
  },
  plugins: [],
}

