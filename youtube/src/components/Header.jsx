import { twMerge } from 'tailwind-merge'
import CircleButton from './CircleButton'
import { IconThreeLine, IconYoutubeLogo } from './Icon'
import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <header className={twMerge('h-14 fixed top-0 left-0 right-2 px-4 flex flex-row items-center justify-between')}>
      <div className='flex flex-row center'>
        <CircleButton
          icon={<IconThreeLine />}
        />
        <Link to='/' className='px-4'>
          <IconYoutubeLogo />
        </Link>
      </div>
    </header>
  )
}

export default Header