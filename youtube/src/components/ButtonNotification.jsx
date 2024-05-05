import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next'

import CircleButton from './CircleButton'
import { IconNotify, IconNotifyActive, IconSetting } from './Icon'


const ButtonNotification = ({ className }) => {

  const [show, setShow] = useState(false)
  const buttonRef = useRef()
  const menuRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        setShow(false)
      }
      return
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={twMerge('relative', className)}>
      <button
        className={twMerge(
          'w-10 h-10 rounded-full center active:scale-95 transition-all',
          'hover:bg-rgb-215 active:bg-rgb-195',
          'dark:hover:bg-rgb-60 dark:active:bg-rgb-60',
        )}
        ref={buttonRef}
        onClick={() => setShow(!show)}>
        {show ? <IconNotifyActive /> : <IconNotify />}
      </button>
      <div
        className={twMerge(
          'absolute top-10 right-0 bg-modal rounded-lg overflow-hidden transition-all origin-top-right',
          'w-[480px] min-h-40 shadow-primary',
          show ? 'scale-100' : 'scale-0'
        )}
        ref={menuRef}>
        <ListNotification />
      </div>
    </div>
  )
}

const ListNotification = () => {

  const { t } = useTranslation()

  return (
    <div className=''>
      <div className='w-full h-12 px-4 flex items-center justify-between border-b border-primary'>
        {t('Notification')}
        <CircleButton>
          <IconSetting />
        </CircleButton>
      </div>
      <div className='w-full overflow-y-auto max-h-[calc(100vh-100px)]'>

      </div>
    </div>
  )
}

const ItemNotification = () => {
  return (
    1
  )
}

export default ButtonNotification
