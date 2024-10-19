module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        font: {
          '0%': { transform: 'translateX(1000px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        sabat: {
          '0%': { transform: 'translateY(-1000px)', opacity: '0' }, 
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        font: 'font 3s ease-in-out',
        sabat: 'sabat 3s ease-in-out', 
      },
    },
  },
  plugins: [],
}
