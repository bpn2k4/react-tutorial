/** @type {import('./src/types').utilities} */
const utilities = {
  '.bg-primary': { '@apply bg-rgb-255 dark:bg-rgb-15': 0 },
  '.bg-primary-reverse': { '@apply bg-rgb-15 dark:bg-rgb-255': 0 },
  '.text-primary': { '@apply text-rgb-15 dark:text-rgb-240': 0 },
  '.text-primary-reverse': { '@apply text-rgb-240 dark:text-rgb-15': 0 },
  '.border-primary': { '@apply border-rgb-230 dark:border-rgb-65': 0 },
  '.border-secondary': { '@apply border-rgb-205 dark:border-rgb-65': 0 },
  '.divide-primary': { '@apply divide-rgb-230 dark:divide-rgb-65': 0 },
  '.divide-secondary': { '@apply divide-rgb-205 dark:divide-rgb-65': 0 },
  '.bg-modal': { '@apply bg-rgb-255 dark:bg-rgb-40': 0 },
  '.offset-0': { top: 0, left: 0, right: 0, bottom: 0 },
  '.center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  '.text-blue': { '@apply text-[#3ea6ff]': 0 },
  '.bg-blue': { '@apply bg-[#3ea6ff]': 0 },
  '.shadow-primary': { '@apply shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.1)]': 0 },
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
          40: 'rgb(40,40,40)',
          50: 'rgb(50,50,50)',
          60: 'rgb(60,60,60)',
          65: 'rgb(65,65,65)',
          85: 'rgb(85,85,85)',
          95: 'rgb(95,95,95)',
          100: 'rgb(100,100,100)',
          170: 'rgb(170,170,170)',
          195: 'rgb(195,195,195)',
          205: 'rgb(205,205,205)',
          215: 'rgb(215,215,215)',
          230: 'rgb(230,230,230)',
          240: 'rgb(240,240,240)',
          255: 'rgb(255,255,255)',
        }
      }
    },
  },
  plugins: [
    ({ addUtilities }) => addUtilities(utilities)
  ],
}