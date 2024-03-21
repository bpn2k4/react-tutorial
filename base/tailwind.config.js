// /** @type {import('./src/types').utilities} */
const utilities = {
  '.bg-primary': { '@apply bg-rgb-241 dark:bg-rgb-15': 0 },
  '.bg-primary-reverse': { '@apply bg-rgb-15 dark:bg-rgb-241': 0 },
  '.text-primary': { '@apply text-rgb-15 dark:text-rgb-241': 0 },
  '.text-primary-reverse': { '@apply text-rgb-241 dark:text-rgb-15': 0 },
  // '.border-primary': { '@apply border-base-200 dark:border-base-100': 0 },
  // '.divide-primary': { '@apply divide-base-230 dark:divide-base-100': 0 },
  // '.offset-0': { top: 0, left: 0, right: 0, bottom: 0 },
  // '.center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
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
      colors: {
        rgb: {
          15: "rgb(15,15,15)",
          48: "rgb(48,48,48)",
          241: "rgb(241,241,241)",
        }
      }
    },
  },
  plugins: [
    ({ addUtilities }) => addUtilities(utilities)
  ],
}