
import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#3B82F6",
        // Finance Flare theme colors
        finance: {
          primary: '#0ea5e9',   // Main brand color
          secondary: '#7dd3fc', // Secondary brand color
          accent: '#0284c7',    // Accent color
          expense: '#ef4444',   // For expenses (red)
          income: '#22c55e',    // For income (green)
          saving: '#a855f7',    // For savings (purple)
          neutral: '#64748b',   // Neutral color
          light: '#f1f5f9',     // Light background
          dark: '#1e293b',      // Dark text/background
        }
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
    }
  },
  plugins: [],
} satisfies Config
