import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        paper: '#FFFFFF',
        mist: '#FAFAFA', // alternating section background
        // Text
        ink: '#18181B', // primary
        muted: '#52525B', // secondary
        faint: '#A1A1AA', // captions / tertiary
        // Structure
        line: '#E4E4E7', // hairline borders
        // Accent (used sparingly)
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          soft: '#EEF0FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        container: '68rem', // ~1088px content column
        prose: '44rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(24,24,27,0.04), 0 8px 24px rgba(24,24,27,0.04)',
        'card-hover': '0 2px 4px rgba(24,24,27,0.05), 0 16px 40px rgba(24,24,27,0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        blink: 'blink 1.4s ease-in-out infinite',
      },
      typography: () => ({
        ink: {
          css: {
            '--tw-prose-body': '#3F3F46',
            '--tw-prose-headings': '#18181B',
            '--tw-prose-links': '#4F46E5',
            '--tw-prose-bold': '#18181B',
            '--tw-prose-counters': '#A1A1AA',
            '--tw-prose-bullets': '#D4D4D8',
            '--tw-prose-hr': '#E4E4E7',
            '--tw-prose-quotes': '#52525B',
            '--tw-prose-quote-borders': '#4F46E5',
            '--tw-prose-captions': '#A1A1AA',
            '--tw-prose-code': '#18181B',
            '--tw-prose-pre-bg': '#FAFAFA',
            '--tw-prose-th-borders': '#E4E4E7',
            '--tw-prose-td-borders': '#E4E4E7',
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config
