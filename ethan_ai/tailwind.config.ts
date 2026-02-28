import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', 'monospace'],
        oswald: ['"Oswald"', 'sans-serif'],
        rajdhani: ['"Rajdhani"', 'sans-serif'],
        sans: ['"Rajdhani"', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-cw": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-ccw": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glitch-out": {
          "0%": { opacity: "1", transform: "scale(1) translateX(0)", filter: "blur(0px)" },
          "15%": { opacity: "0.8", transform: "scale(1.02) translateX(-3px)", filter: "blur(1px)" },
          "30%": { opacity: "0.6", transform: "scale(0.98) translateX(5px) skewX(2deg)", filter: "blur(2px)" },
          "50%": { opacity: "0.4", transform: "scale(1.01) translateX(-4px) skewX(-3deg)", filter: "blur(3px)", clipPath: "inset(20% 0 30% 0)" },
          "70%": { opacity: "0.2", transform: "scale(0.95) translateX(6px) skewX(5deg)", filter: "blur(5px)", clipPath: "inset(40% 0 10% 0)" },
          "85%": { opacity: "0.1", transform: "scale(0.9) translateX(-2px)", filter: "blur(8px)", clipPath: "inset(10% 0 60% 0)" },
          "100%": { opacity: "0", transform: "scale(0.85)", filter: "blur(12px)" },
        },
        "glitch-in": {
          "0%": { opacity: "0", transform: "scale(0.85)", filter: "blur(12px)" },
          "15%": { opacity: "0.1", transform: "scale(0.9) translateX(3px)", filter: "blur(8px)", clipPath: "inset(60% 0 10% 0)" },
          "30%": { opacity: "0.3", transform: "scale(0.95) translateX(-5px) skewX(-4deg)", filter: "blur(5px)", clipPath: "inset(10% 0 40% 0)" },
          "50%": { opacity: "0.5", transform: "scale(1.01) translateX(4px) skewX(3deg)", filter: "blur(3px)", clipPath: "inset(30% 0 20% 0)" },
          "70%": { opacity: "0.7", transform: "scale(0.99) translateX(-3px) skewX(-1deg)", filter: "blur(1px)" },
          "85%": { opacity: "0.9", transform: "scale(1.01) translateX(1px)", filter: "blur(0.5px)" },
          "100%": { opacity: "1", transform: "scale(1) translateX(0)", filter: "blur(0px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-cw-slow": "spin-cw 30s linear infinite",
        "spin-ccw-slow": "spin-ccw 25s linear infinite",
        "spin-cw-med": "spin-cw 18s linear infinite",
        "spin-ccw-med": "spin-ccw 14s linear infinite",
        "spin-cw-fast": "spin-cw 10s linear infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "glitch-out": "glitch-out 0.4s ease-in forwards",
        "glitch-in": "glitch-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;