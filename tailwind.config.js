/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF8F5',
        surface: '#FFFFFF',
        'surface-alt': '#F5EFE6',
        'surface-hover': '#FFFDFB',
        border: '#EFEAE2',
        'border-hover': '#DCD5CB',
        text: '#4A3E3D',
        'text-secondary': '#8A7E7D',
        'text-tertiary': '#B5A9A8',
        accent: {
          pink: {
            DEFAULT: '#FFC5D9',
            hover: '#FFAEC4',
          },
          purple: {
            DEFAULT: '#D6B4FC',
            hover: '#C296FA',
          }
        },
        // Chiikawa 马卡龙多色点缀系统
        chiikawa: {
          pink: {
            DEFAULT: '#FFD5E5',
            dark: '#853D55',
          },
          blue: {
            DEFAULT: '#D2EBF7',
            dark: '#2B5E75',
          },
          yellow: {
            DEFAULT: '#FFF1C5',
            dark: '#7A5F13',
          },
          purple: {
            DEFAULT: '#E8DDF2',
            dark: '#63437A',
          }
        }
      },
      fontFamily: {
        quicksand: ['Quicksand', 'Noto Sans SC', 'sans-serif'],
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        healing: '0 4px 20px rgba(74, 62, 61, 0.02)',
        'healing-hover': '0 12px 30px rgba(74, 62, 61, 0.05)',
      },
      animation: {
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 8s ease-in-out infinite',
        'float-fast': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

