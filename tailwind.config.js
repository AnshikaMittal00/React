module.exports = {
  darkMode: 'class', // This enables the .dark class strategy
  theme: {
    extend: {
      colors: {
        // 'background': 'var(--color-background)',
        // 'text-primary': 'var(--color-text-primary)',
         
        pink: {
          50: 'var(--color-pink-100)',
          100: 'var(--color-pink-100)',
          500: 'var(--color-pink-500)',
          600: 'var(--color-pink-600)',
          800: 'var(--color-pink-800)',
        },
        gray: {
          50: 'var(--color-gray-50)',
          400: 'var(--color-gray-400)',
          600: 'var(--color-gray-600)',
          800: 'var(--color-gray-800)',
        },
        white: 'var(--color-white)',
        black: 'var(--color-black)',
      },
    },
  },
  plugins: [],
};