import { twMerge } from 'tailwind-merge'

const CircleButton = ({ children, className, icon }) => {

  return (
    <button className={twMerge('w-10 h-10 rounded-full center dark:hover:bg-rgb-39 dark:active:bg-rgb-60 active:scale-95 transition-all', className)}>
      {children}
      {icon}
    </button>
  )
}

export default CircleButton