/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#121212',
        'bg-secondary': '#1E1E1E',
        'accent-blue': '#00B4FF',
        'accent-purple': '#7B1FA2',
        'success-green': '#00E676',
        'warning-orange': '#FF5722',
      },
      fontFamily: {
        // Make Playfair Display the default font
        'clash-grotesk': ['ClashGrotesk', 'sans-serif'],
        'VT323': ['VT323', 'monospace'],
        'playfair': ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'game-card': '12px',
      },
      boxShadow: {
        'game-glow': '0 4px 15px rgba(0, 180, 255, 0.3)',
      },
      backgroundImage: {
        'game-gradient': 'linear-gradient(135deg, #121212, #1E1E1E)',
      },
      keyframes: {
        logoGlow: {
          '0%, 100%': { 
            textShadow: '0 0 0 transparent',
            transform: 'scale(1)'
          },
          '50%': {
            textShadow: '0 0 10px rgba(76, 175, 80, 0.5)', // Softer green glow
            transform: 'scale(1.02)'
          }
        }
      },
      animation: {
        'logo-glow': 'logoGlow 3s ease-in-out infinite'
      }
    },
    // Override the default font family at the theme level
    fontFamily: {
      'sans': ['ClashGrotesk', 'sans-serif'],
      'clash-grotesk': ['ClashGrotesk', 'sans-serif'],
    }
  },
  plugins: [],
};