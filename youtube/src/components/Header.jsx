import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router-dom'

import { IconThreeLine, IconYoutubeLogo } from './Icon'
import useStore from '../hooks/useStore'
import ButtonAvatarSetting from './ButtonAvatarSetting'
import ButtonLogin from './ButtonLogin'
import ButtonNotification from './ButtonNotification'
import CircleButton from './CircleButton'
import SearchBar from './SearchBar'
import Utils from '../utils'

const Header = () => {

  return (
    <header className={twMerge('h-14 z-[4] fixed top-0 left-0 right-2 px-4 flex flex-row items-center justify-between bg-primary')}>
      <div className='flex flex-row center'>
        <CircleButton
          icon={<IconThreeLine />}
          onClick={() => Utils.SideBarLeft.show()}
        />
        <Link to='/' className='px-4'>
          <IconYoutubeLogo />
        </Link>
      </div>
      <SearchBar />
      <HeaderRight />
    </header>
  )
}

const HeaderRight = () => {

  const { isLogin, login } = useStore()

  return (
    <div className='flex flex-row items-center gap-2'>
      <ButtonNotification />
      <ButtonAvatarSetting
        isLogin={isLogin} />
      {!isLogin && (
        <ButtonLogin onClick={login} />
      )}
    </div>
  )
}

export default Header