import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

import CircleButton from './CircleButton'
import {
  IconCaret,
  IconChangeAccount,
  IconEarth,
  IconFeedback,
  IconGoogle,
  IconGuard,
  IconHelp,
  IconKeyboard,
  IconLanguage,
  IconLogout,
  IconMemberShip,
  IconMoon,
  IconSetting,
  IconShield,
  IconThreeDot,
  IconYoutubeStudio
} from './Icon'
import useTheme from '../hooks/useTheme'
import useStore from '../hooks/useStore'

const ButtonAvatarSetting = () => {

  const [show, setShow] = useState(false)
  const { isLogin } = useStore()
  const buttonRef = useRef()
  const menuRef = useRef()

  const closeMenu = () => {
    setShow(false)
  }

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
    <div className='relative'>
      <div
        className='active:scale-95 transition-all'
        role='button'
        ref={buttonRef}
        onClick={() => setShow(!show)}>
        {isLogin ? (
          <div className='size-10'>
            <img
              className='size-10 rounded-full border border-primary'
              src='https://yt3.ggpht.com/FmNXsU1zi0Wr-JPC-vZiKoGpi7bFbkyv_lH_exsMORykO8SfPnhwdf3dXPI4O2rukkI5idGU9Q=s88-c-k-c0x00ffffff-no-rj' />
          </div>
        ) : (
          <CircleButton>
            <IconThreeDot />
          </CircleButton>
        )}
      </div>
      <div
        className={twMerge(
          'absolute top-10 right-0 bg-modal rounded-lg overflow-hidden transition-all origin-top-right',
          'w-[300px] min-h-40',
          show ? 'scale-100' : 'scale-0'
        )}
        ref={menuRef}>
        <Setting isLogin={isLogin} closeMenu={closeMenu} />
      </div>
    </div>
  )
}

const Setting = ({ isLogin, closeMenu }) => {

  const { t } = useTranslation()
  const { theme, changeTheme } = useTheme()
  const { logout } = useStore()

  return (
    <div className=''>
      {isLogin && (
        <div className='w-full flex flex-row p-4 border-b border-primary'>
          <img
            className='size-10 rounded-full border border-primary'
            src='https://yt3.ggpht.com/FmNXsU1zi0Wr-JPC-vZiKoGpi7bFbkyv_lH_exsMORykO8SfPnhwdf3dXPI4O2rukkI5idGU9Q=s88-c-k-c0x00ffffff-no-rj' />
          <div className='flex flex-col ml-4 items-start'>
            <span className='line-clamp-1'>Bùi Phương Nam</span>
            <span className='line-clamp-1'>@buiphuongnam911</span>
            <button className='text-sm mt-1 text-[#3ea6ff]'>{t('YourChannel')}</button>
          </div>
        </div>
      )}
      <div className={twMerge(
        'w-full overflow-y-auto text-sm',
        isLogin ? 'max-h-[calc(100vh-154px)]' : 'max-h-[calc(100vh-100px)]'
      )}>
        {isLogin && (
          <div className='py-1 border-b border-primary'>
            <ButtonRow
              icon={<IconGoogle />}
              title={t("GoogleAccount")}
            />
            <ButtonRow
              icon={<IconChangeAccount />}
              title={t("ChangeAccount")}
              caret={true}
            />
            <ButtonRow
              icon={<IconLogout />}
              title={t("Logout")}
              onClick={() => {
                closeMenu()
                logout()
              }}
            />
          </div>
        )}
        {isLogin && (
          <div className='py-1 border-b border-primary'>
            <ButtonRow
              icon={<IconYoutubeStudio />}
              title={t("YoutubeStudio")}
            />
            <ButtonRow
              icon={<IconMemberShip />}
              title={t("BillAndSubscribe")}
            />
          </div>
        )}
        <div className='py-1 border-b border-primary'>
          <ButtonRow
            icon={<IconGuard />}
            title={t("YourData")}
          />
          <ButtonRow
            icon={<IconMoon />}
            title={`${t("Theme")}: ${theme == 'light' ? t('Light') : t('Dark')}`}
            onClick={changeTheme}
            caret={true}
          />
          <ButtonRow
            icon={<IconLanguage />}
            title={`${t("Language")}: ${t("Vietnamese")}`}
            caret={true}
          />
          <ButtonRow
            icon={<IconShield />}
            title={`${t("LimitMode")}: ${t("On")}`}
            caret={true}
          />
          <ButtonRow
            icon={<IconEarth />}
            title={`${t("Location")}: ${t("Vietnamese")}`}
            caret={true}
          />
          <ButtonRow
            icon={<IconKeyboard />}
            title={t("Shortcut")}
          />
        </div>
        <div className='py-1 border-b border-primary'>
          <ButtonRow
            icon={<IconSetting />}
            title={t("Setting")}
          />
        </div>
        <div className='py-1'>
          <ButtonRow
            icon={<IconHelp />}
            title={t("Help")}
          />
          <ButtonRow
            icon={<IconFeedback />}
            title={t("SendFeedback")}
          />
        </div>
      </div>
    </div>
  )
}

const ButtonRow = ({ icon, title, caret, onClick }) => {

  return (
    <button
      className='w-full h-10 flex flex-row items-center px-4 hover:bg-rgb-242 dark:hover:bg-rgb-62 transition-colors'
      onClick={onClick}>
      <div className='size-6 mr-4'>{icon}</div>
      <span className='flex-1 text-left mr-4 line-clamp-1'>{title}</span>
      {caret && (<IconCaret />)}
    </button>
  )
}

export default ButtonAvatarSetting