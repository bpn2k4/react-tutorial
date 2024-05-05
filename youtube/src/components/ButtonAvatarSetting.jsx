import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

import CircleButton from './CircleButton'
import ButtonRowIconStart from './ButtonRowIconStart'
import {
  IconArrow,
  IconChangeAccount,
  IconCheck,
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
import useForwardRef from '../hooks/useForwardRef'

const ButtonAvatarSetting = () => {

  const [show, setShow] = useState(true)
  const { isLogin } = useStore()
  const buttonRef = useRef()
  const menuRef = useRef()
  const ref = useForwardRef()

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

  useLayoutEffect(() => {
    if (show && ref?.setType) {
      ref?.setType(SettingTypes.DEFAULT)
    }
  }, [show])

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
          'absolute z-[4] top-10 right-0 bg-modal rounded-lg overflow-hidden transition-all origin-top-right',
          'w-[300px] min-h-24 shadow-[0_4px_32px_0_rgba(0,0,0,0.1)]',
          show ? 'scale-100' : 'scale-0'
        )}
        ref={menuRef}>
        <Setting isLogin={isLogin} forwardRef={ref} closeMenu={closeMenu} />
      </div>
    </div>
  )
}

const SettingTypes = {
  DEFAULT: 'DEFAULT',
  THEME: 'THEME',
  LANGUAGE: 'LANGUAGE',
  LIMIT: 'LIMIT',
  LOCATION: 'LOCATION',
}

const Setting = ({ isLogin, closeMenu, forwardRef }) => {

  const { t } = useTranslation()
  const { theme } = useTheme()
  const { logout } = useStore()
  const [type, setType] = useState(SettingTypes.DEFAULT)
  forwardRef.setType = setType

  switch (type) {
    case SettingTypes.THEME:
      return <ThemeMenu onClickBack={() => setType(SettingTypes.DEFAULT)} />
    case SettingTypes.LANGUAGE:
      return <LanguageMenu onClickBack={() => setType(SettingTypes.DEFAULT)} />
    case SettingTypes.LIMIT:
      return <LanguageMenu onClickBack={() => setType(SettingTypes.DEFAULT)} />
    case SettingTypes.LOCATION:
      return <LanguageMenu onClickBack={() => setType(SettingTypes.DEFAULT)} />
  }

  return (
    <div className='text-sm'>
      {isLogin && (
        <div className='w-full flex flex-row p-4 border-b border-primary'>
          <img
            className='size-10 rounded-full border border-primary'
            src='https://yt3.ggpht.com/FmNXsU1zi0Wr-JPC-vZiKoGpi7bFbkyv_lH_exsMORykO8SfPnhwdf3dXPI4O2rukkI5idGU9Q=s88-c-k-c0x00ffffff-no-rj' />
          <div className='flex flex-col ml-4 items-start'>
            <span className='line-clamp-1'>Bùi Phương Nam</span>
            <span className='line-clamp-1'>@buiphuongnam911</span>
            <button className='mt-1 text-[#3ea6ff]'>{t('YourChannel')}</button>
          </div>
        </div>
      )}
      <div className={twMerge(
        'w-full overflow-y-auto',
        isLogin ? 'max-h-[calc(100vh-154px)]' : 'max-h-[calc(100vh-100px)]'
      )}>
        {isLogin && (
          <div className='py-1 border-b border-primary'>
            <ButtonRowIconStart
              icon={<IconGoogle />}
              title={t("GoogleAccount")}
            />
            <ButtonRowIconStart
              icon={<IconChangeAccount />}
              title={t("ChangeAccount")}
              caret={true}
            />
            <ButtonRowIconStart
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
            <ButtonRowIconStart
              icon={<IconYoutubeStudio />}
              title={t("YoutubeStudio")}
            />
            <ButtonRowIconStart
              icon={<IconMemberShip />}
              title={t("BillAndSubscribe")}
            />
          </div>
        )}
        <div className='py-1 border-b border-primary'>
          <ButtonRowIconStart
            icon={<IconGuard />}
            title={t("YourData")}
          />
          <ButtonRowIconStart
            icon={<IconMoon />}
            title={`${t("Theme")}: ${theme == 'light' ? t('Light') : t('Dark')}`}
            onClick={() => setType(SettingTypes.THEME)}
            caret={true}
          />
          <ButtonRowIconStart
            icon={<IconLanguage />}
            title={`${t("Language")}: ${t("Vietnamese")}`}
            caret={true}
            onClick={() => setType(SettingTypes.LANGUAGE)}
          />
          <ButtonRowIconStart
            icon={<IconShield />}
            title={`${t("LimitMode")}: ${t("On")}`}
            caret={true}
          />
          <ButtonRowIconStart
            icon={<IconEarth />}
            title={`${t("Location")}: ${t("Vietnam")}`}
            caret={true}
          />
          <ButtonRowIconStart
            icon={<IconKeyboard />}
            title={t("Shortcut")}
          />
        </div>
        <div className='py-1 border-b border-primary'>
          <ButtonRowIconStart
            icon={<IconSetting />}
            title={t("Setting")}
          />
        </div>
        <div className='py-1'>
          <ButtonRowIconStart
            icon={<IconHelp />}
            title={t("Help")}
          />
          <ButtonRowIconStart
            icon={<IconFeedback />}
            title={t("SendFeedback")}
          />
        </div>
      </div>
    </div>
  )
}

const LanguageMenu = ({ onClickBack }) => {

  const { t, i18n } = useTranslation()

  const languages = [
    { name: t("Vietnamese"), value: 'vi' },
    { name: t("English"), value: 'en' },
  ]

  return (
    <SubMenu
      title={t('SelectYourLanguage')}
      onClickBack={onClickBack}>
      {languages.map(({ name, value }, index) => (
        <ButtonRowIconStart
          key={index}
          icon={value == i18n.language ? <IconCheck /> : ''}
          title={name}
          onClick={() => i18n.changeLanguage(value)} />
      ))}
    </SubMenu>
  )
}

const ThemeMenu = ({ onClickBack }) => {

  const { t } = useTranslation()
  const { theme, changeTheme } = useTheme()

  return (
    <SubMenu
      title={t('Theme')}
      onClickBack={onClickBack}>
      <ButtonRowIconStart
        icon={theme == 'light' ? <IconCheck /> : ''}
        title={t('Light')}
        onClick={theme == 'light' ? () => 1 : changeTheme} />
      <ButtonRowIconStart
        icon={theme == 'dark' ? <IconCheck /> : ''}
        title={t('Dark')}
        onClick={theme == 'dark' ? () => 1 : changeTheme} />
    </SubMenu>
  )
}

const SubMenu = ({ title, onClickBack, children }) => {

  return (
    <div className='text-sm'>
      <div className='w-full h-12 flex flex-row items-center border-b border-primary px-1 gap-1'>
        <CircleButton
          icon={<IconArrow />}
          onClick={onClickBack} />
        <span className='line-clamp-1'>{title}</span>
      </div>
      <div className={twMerge('w-full overflow-y-auto max-h-[calc(100vh-100px)] py-1')}>
        {children}
      </div>
    </div>
  )
}


export default ButtonAvatarSetting