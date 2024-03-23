import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import SideBar from './SideBar'
import Utils from '../utils'

const SideBarLeft = () => {

  const [show, setShow] = useState(false)
  Utils.SideBarLeft = {
    isShow: show,
    show: () => setShow(true),
    hide: () => setShow(false),
  }

  return (
    <div>
      {show && <div className='fixed z-[5] offset-0 bg-black/50' onClick={() => setShow(false)} />}
      <div
        className={twMerge(
          'fixed z-[6] top-0 bottom-0 left-0 w-60 bg-primary text-primary transition-all',
          show ? 'translate-x-0' : '-translate-x-full'
        )}>
        <SideBar />
      </div>
    </div>
  )
}

export default SideBarLeft