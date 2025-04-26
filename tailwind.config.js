module.exports = {
  content: ["./*.html"],
  theme: {
        extend: {
          colors: {
            // You can easily change these colors to customize your theme
            primary: {
              bg: '#000000',      // Background color (currently black)
              text: '#ffffff',    // Primary text color (currently white)
            },
            secondary: {
              text: '#a0a0a0',    // Secondary text color (currently light gray)
            },
            button: {
              bg: '#e5e7eb',      // Button background (currently light gray)
              text: '#1f2937',    // Button text (currently dark gray)
              hover: '#d1d5db',   // Button hover background
            }
          }
        }
  },
  plugins: [],
}
