/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite'
import path from 'path'

// eslint-disable-next-line no-undef
module.exports = {
    darkMode: ['class'],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '@JSP': path.resolve(__dirname, 'src/components/Pages/javascriptPrincipals'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@subComponents': path.resolve(__dirname, 'src/components/Sub_Components'),
            '@react': path.resolve(__dirname, 'src/components/Pages/react'),
            '@fundamentals': path.resolve(__dirname, 'src/components/Pages/fundamentals'),
        },
      },
    content: {
       files: ['./pages/**/*.{js,jsx}',
            './components/**/*.{js,jsx}',
            './app/**/*.{js,jsx}',
            './src/**/*.{js,jsx}'],
    },
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: ['barlow-semi-condensed-regular', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('tailwindcss-animate'), // Ensure this is the correct package name
        'prettier-plugin-tailwindcss',
        'daisyui', 'fluid',
    ],
}
