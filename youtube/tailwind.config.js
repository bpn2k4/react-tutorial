/** @type {import('./src/types').utilities} */
const utilities = {
  '.bg-primary': { '@apply bg-rgb-241 dark:bg-rgb-15': 0 },
  '.bg-primary-reverse': { '@apply bg-rgb-15 dark:bg-rgb-241': 0 },
  '.text-primary': { '@apply text-rgb-15 dark:text-rgb-241': 0 },
  '.text-primary-reverse': { '@apply text-rgb-241 dark:text-rgb-15': 0 },
  '.border-primary': { '@apply border-rgb-229 dark:border-rgb-63': 0 },
  '.border-secondary': { '@apply border-rgb-204 dark:border-rgb-63': 0 },
  '.divide-primary': { '@apply divide-rgb-229 dark:divide-rgb-63': 0 },
  '.divide-secondary': { '@apply divide-rgb-204 dark:divide-rgb-63': 0 },
  '.bg-modal': { '@apply bg-rgb-255 dark:bg-rgb-40': 0 },
  '.offset-0': { top: 0, left: 0, right: 0, bottom: 0 },
  '.center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  // '.clickable': { '@apply active:scale-95': 0 },
  // '.pause-animation': { animationPlayState: 'paused' },
  // '.run-animation': { animationPlayState: 'running' },
  // '.skeleton': { "@apply overflow-hidden bg-base-219 dark:bg-base-54 animate-pulse after:content-[''] after:absolute after:h-full after:w-40 after:-skew-x-6 after:bg-gradient-to-r after:from-base-219 after:via-base-232 after:to-base-221 after:left-0 after:animate-left-to-right dark:after:from-base-55 dark:after:via-base-83 dark:after:to-base-55": 0 },
  // '.shadow-main': { '@apply shadow-[0_0_3px_3px_rgba(0,0,0,0.3)] shadow-black/10 dark:shadow-white/30': 0 },
  // '.no-scrollbar': {},
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scale: {
        "98": "0.98",
        "99": "0.99"
      },
      colors: {
        rgb: {
          15: 'rgb(15,15,15)',
          39: 'rgb(39,39,39)',
          40: 'rgb(40,40,40)',
          48: 'rgb(48,48,48)',
          60: 'rgb(60,60,60)',
          61: 'rgb(61,61,61)',
          62: 'rgb(62,62,62)',
          63: 'rgb(63,63,63)',
          96: 'rgb(96,96,96)',
          170: 'rgb(170,170,170)',
          195: 'rgb(195,195,195)',
          204: 'rgb(204,204,204)',
          217: 'rgb(217,217,217)',
          229: 'rgb(229,229,229)',
          241: 'rgb(241,241,241)',
          242: 'rgb(242,242,242)',
          255: 'rgb(255,255,255)',
        }
      }
    },
  },
  plugins: [
    ({ addUtilities }) => addUtilities(utilities)
  ],
}