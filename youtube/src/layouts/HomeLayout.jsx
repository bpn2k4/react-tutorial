import { useEffect, useState } from 'react'
import SideBarContent from '../components/SideBarContent'
import { twMerge } from 'tailwind-merge'
import Utils from '../utils'

const HomeLayout = ({ children }) => {

  const [showHomeSideBar, setShowHomeSideBar] = useState(false)

  Utils.HomeSideBar = {
    isShow: showHomeSideBar,
    show: () => {
      setShowHomeSideBar(true)
    },
    hide: () => {
      setShowHomeSideBar(false)
    }
  }

  return (
    <div className="">
      <HomeSideBar className={twMerge(showHomeSideBar ? 'w-60' : 'w-0')} />
      <div className={twMerge('transition-all', showHomeSideBar ? 'ml-60' : 'ml-0')}>
        {children}
      </div>
    </div>
  )
}

const HomeSideBar = ({ className }) => {

  return (
    <div className={twMerge("fixed left-0 top-14 bottom-0 bg-primary z-[2] w-60 transition-all", className)}>
      <SideBarContent />
    </div>
  )
}

export default HomeLayout