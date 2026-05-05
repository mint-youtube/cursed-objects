/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1A1410',
        'bg-secondary': '#241B14',
        fg: '#E0D4BC',
        muted: '#9C8A6E',
        accent: '#B8945E',
        accent2: '#8A6E3F',
        border: '#3A2E22',
        hover: '#241B14',
      },
      fontFamily: {
        heading: ["'Stylish', serif", 'system-ui', 'sans-serif'],
        body: ["'Nanum Myeongjo', serif", 'system-ui', 'sans-serif'],
        mono: ['ui-monospace, monospace', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#E0D4BC',
            '--tw-prose-headings': '#E0D4BC',
            '--tw-prose-links': '#B8945E',
            '--tw-prose-bold': '#B8945E',
            '--tw-prose-quotes': '#9C8A6E',
            '--tw-prose-quote-borders': '#B8945E',
            '--tw-prose-code': '#B8945E',
            '--tw-prose-borders': '#3A2E22',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #3A2E22',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#241B14',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#241B14',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #3A2E22',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
