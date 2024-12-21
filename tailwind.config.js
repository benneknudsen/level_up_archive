/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Game database color palette
        'bg-dark': '#121212',        // Deep background
        'bg-secondary': '#1E1E1E',   // Secondary background
        'accent-blue': '#00B4FF',    // Primary interaction color
        'accent-purple': '#7B1FA2',  // Secondary highlight
        'success-green': '#00E676',  // Success state
        'warning-orange': '#FF5722', // Warning/attention color
      },
      fontFamily: {
        'game': ['Inter', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'game-card': '12px',         // Soft, rounded corners
      },
      boxShadow: {
        'game-glow': '0 4px 15px rgba(0, 180, 255, 0.3)', // Neon glow effect
      },
      backgroundImage: {
        'game-gradient': 'linear-gradient(135deg, #121212, #1E1E1E)',
      }
    },
  },
  plugins: [],
}