import { twMerge } from 'tailwind-merge'

import { IconMic, IconSearch } from './Icon'
import CircleButton from './CircleButton'

const SearchBar = () => {

  return (
    <div className='flex w-full items-center px-10 h-10 max-w-[640px]'>
      <div className='flex-1 flex items-center relative rounded-full overflow-hidden group focus-within:ring-1'>
        <div className='absolute z-[-1] border border-r-0 border-secondary rounded-tl-full flex items-center rounded-bl-full h-10 w-14 left-7 group-focus-within:left-0 transition-all'>
          <IconSearch className='absolute left-4 top-2 transition-all' />
        </div>
        <div className='flex-1 bg-primary border border-secondary border-x-0 h-10 ml-12'>
          <input
            placeholder='Search'
            className='w-full h-full pl-1 pr-2 outline-none bg-transparent' />
        </div>
        <div className={twMerge(
          'w-16 h-10 center cursor-pointer transition-all',
          'border border-secondary rounded-tr-full rounded-br-full',
          'hover:bg-rgb-217 active:bg-rgb-195 dark:hover:bg-rgb-61 dark:active:bg-rgb-60'
        )}>
          <IconSearch />
        </div>
      </div>
      <CircleButton className='ml-4 dark:bg-rgb-39 bg-rgb-242'>
        <IconMic />
      </CircleButton>
    </div>
  )
}

export default SearchBar