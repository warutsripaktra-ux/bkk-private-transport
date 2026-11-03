/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f9f9ff',
        surface: '#f9f9ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f0f3ff',
        'surface-container': '#eaeefb',
        'surface-container-high': '#e4e8f5',
        'surface-container-highest': '#dee2f0',
        'on-surface': '#171c25',
        'on-surface-variant': '#44474c',
        outline: '#75777d',
        'outline-variant': '#c5c6cd',
        primary: '#0E1A2B',
        'on-primary': '#ffffff',
        'primary-container': '#101c2d',
        secondary: '#775a00',
        'on-secondary': '#ffffff',
        'secondary-container': '#fece57',
        'on-secondary-container': '#735700',
        'secondary-fixed': '#ffdf98',
        gold: '#C59B27',
        success: '#166534',
      },
      fontFamily: {
        head: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Manrope', '"Noto Sans Thai"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 4px 18px -2px rgba(14,26,43,0.05)',
        raised: '0 12px 32px -4px rgba(14,26,43,0.10)',
      },
    },
  },
  plugins: [],
};
