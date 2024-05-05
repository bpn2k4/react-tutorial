import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router-dom'

import { IconCaret } from './Icon'

const ButtonRowIconStart = ({ icon, title, caret, onClick, notify, className, to, type = 'button' }) => {

  const isLink = type == 'link'
  if (isLink) {
    return (
      <Link
        className={twMerge('w-full h-10 flex flex-row items-center px-4 hover:bg-rgb-240 dark:hover:bg-rgb-60 transition-colors', className)}
        to={to}
        onClick={onClick}>
        <div className='size-6 mr-4'>{icon}</div>
        <span className='flex-1 text-left mr-4 line-clamp-1'>{title}</span>
        {caret && (<IconCaret />)}
        {notify && (<div className='size-1 rounded-full bg-blue'></div>)}
      </Link>
    )
  }

  return (
    <button
      className={twMerge('w-full h-10 flex flex-row items-center px-4 hover:bg-rgb-240 dark:hover:bg-rgb-60 transition-colors', className)}
      onClick={onClick}>
      <div className='size-6 mr-4'>{icon}</div>
      <span className='flex-1 text-left mr-4 line-clamp-1'>{title}</span>
      {caret && (<IconCaret />)}
      {notify && (<div className='size-1 rounded-full bg-blue'></div>)}
    </button>
  )
}

export default ButtonRowIconStart