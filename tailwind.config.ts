
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				burgundy: {
					DEFAULT: '#5B0E2D',
					50: '#F6E9EE',
					100: '#EAC8D6',
					200: '#D18BA8',
					300: '#B5537B',
					400: '#8A1F49',
					500: '#5B0E2D',
					600: '#520C28',
					700: '#490B24',
					800: '#40091F',
					900: '#37081B'
				},
				gold: {
					DEFAULT: '#B6916E',
					50: '#F4F0EA',
					100: '#E9E0D5',
					200: '#D9C6B1',
					300: '#C9AD8D',
					400: '#B6916E',
					500: '#A37954',
					600: '#866345',
					700: '#694E37',
					800: '#4D3928',
					900: '#30241A'
				},
				charcoal: {
					DEFAULT: '#1A1A1A',
					50: '#E6E6E6',
					100: '#CCCCCC',
					200: '#999999',
					300: '#666666',
					400: '#333333',
					500: '#1A1A1A',
					600: '#171717',
					700: '#141414',
					800: '#121212',
					900: '#0F0F0F'
				},
				cream: {
					DEFAULT: '#F5F1E8',
					50: '#FEFDFB',
					100: '#FDFBF7',
					200: '#FAF7EF',
					300: '#F8F3E8',
					400: '#F5F1E8',
					500: '#E6D9C0',
					600: '#D7C298',
					700: '#C8AA70',
					800: '#B99247',
					900: '#987937'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
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
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"blur-in": {
					"0%": { filter: "blur(5px)", opacity: "0" },
					"100%": { filter: "blur(0)", opacity: "1" }
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-in-left": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-in-bottom": {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0)" }
				},
				"pulse-subtle": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-out": "fade-out 0.5s ease-out forwards",
				"scale-in": "scale-in 0.3s ease-out forwards",
				"blur-in": "blur-in 0.4s ease-out forwards",
				"slide-in-right": "slide-in-right 0.4s ease-out forwards",
				"slide-in-left": "slide-in-left 0.4s ease-out forwards",
				"slide-in-bottom": "slide-in-bottom 0.4s ease-out forwards",
				"pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
				"spin-slow": "spin-slow 20s linear infinite"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
