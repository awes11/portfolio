import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, editorial palette — carried over from the original site
        paper: '#F5F4F1',
        'paper-2': '#ECEAE6',
        ink: '#1A1A1A',
        'ink-muted': '#5C5C5C',
        accent: '#8B7355',        // Warm brown
        'accent-soft': '#E8E4DD',
        border: '#D4D0C8',
      },
      fontFamily: {
        heading: ['Newsreader', 'Georgia', 'serif'],
        body: ['"DM Sans"', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        reading: '72ch',
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
    },
  },
  plugins: [],
};

export default config;
