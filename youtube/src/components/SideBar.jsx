import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import {
  IconCaret,
  IconChannelSubscribe,
  IconClock,
  IconFeedback,
  IconFlag,
  IconGaming,
  IconHelp,
  IconHistory,
  IconHome,
  IconMusic,
  IconMusicYoutube,
  IconNews,
  IconSetting,
  IconShort,
  IconStudioYoutube,
  IconThreeLine,
  IconTrend,
  IconTrophy,
  IconYourChannel,
  IconYourVideo,
  IconYoutubeKid,
  IconYoutubeLogo,
  IconYoutubeRed
} from './Icon'
import ButtonRowIconStart from './ButtonRowIconStart'
import CircleButton from './CircleButton'
import Utils from '../utils'

const SideBar = () => {

  const { t } = useTranslation()

  return (
    <div className='w-full h-full overflow-hidden text-sm'>
      <div className='w-full h-14 flex flex-row items-center px-4'>
        <CircleButton
          icon={<IconThreeLine />}
          onClick={() => Utils.SideBarLeft.hide()} />
        <Link to='/' className='px-4'>
          <IconYoutubeLogo />
        </Link>
      </div>
      <div className='w-full h-[calc(100%-56px)] overflow-y-auto'>
        <div className='w-full px-3 py-3 border-b border-primary'>
          <ButtonRowIconStart
            icon={<IconHome />}
            className='rounded-md'
            title={t('Home')} />
          <ButtonRowIconStart
            icon={<IconShort />}
            className='rounded-md'
            title={t('Shorts')} />
          <ButtonRowIconStart
            icon={<IconChannelSubscribe />}
            className='rounded-md'
            title={t('SubscribeChannel')} />
        </div>
        <div className='w-full px-3 py-3 border-b border-primary'>
          <ButtonRowIconStart
            icon={<span className='font-semibold text-base'>{t('You')}</span>}
            className='rounded-md'
            title={<IconCaret className='-ml-2' />} />
          <ButtonRowIconStart
            icon={<IconYourChannel />}
            className='rounded-md'
            title={t('YourChannel')} />
          <ButtonRowIconStart
            icon={<IconHistory />}
            className='rounded-md'
            title={t('WatchedVideo')} />
          <ButtonRowIconStart
            icon={<IconYourVideo />}
            className='rounded-md'
            title={t('YourVideo')} />
          <ButtonRowIconStart
            icon={<IconClock />}
            className='rounded-md'
            title={t('WatchLater')} />
          <ButtonRowIconStart
            icon={<IconCaret className='rotate-90' />}
            className='rounded-md'
            title={t('More')} />
        </div>
        <div className='w-full px-3 py-3 border-b border-primary'>
          <span className='text-base font-semibold mb-1 block'>{t("SubscribeChannel")}</span>
          <ButtonRowIconStart
            notify={true}
            icon={<Avatar src='https://yt3.ggpht.com/ytc/AIdro_m7lNGyOBRjPkis3Hlr8cNDLAhTa9o-lxR8PjMluA=s88-c-k-c0x00ffffff-no-rj' />}
            className='rounded-md'
            title={t('Mixigaming')} />
          <ButtonRowIconStart
            notify={true}
            icon={<Avatar src='https://yt3.ggpht.com/kj7Bo1BChCXP4FdC9X8nR2Zwp6yU6SEXZYC0WbEqdwV6Ff_OSeXUsj6k0crXz1FYG7ZKWyeQ2w=s88-c-k-c0x00ffffff-no-rj' />}
            className='rounded-md'
            title={t('The Reviewer')} />
          <ButtonRowIconStart
            notify={false}
            icon={<Avatar src='https://yt3.ggpht.com/35IjTIm5lu0wSAqPt-wSbcocxIYW3tSJIgprmO6UX96oqCGmThrSd4uyRV43fNLWPz8edS_f=s88-c-k-c0x00ffffff-no-rj' />}
            className='rounded-md'
            title={t('haketu')} />
          <ButtonRowIconStart
            notify={false}
            icon={<Avatar src='https://yt3.ggpht.com/Ra6aqmfC6SMoY4I4dFJRfEfk8xk_c3NlwgAKVdkxDbSQDlH-HHgR8GWr6fE7qa4sNQH3bIHuEg=s88-c-k-c0x00ffffff-no-rj' />}
            className='rounded-md'
            title={t('Quanhh')} />
          <ButtonRowIconStart
            notify={true}
            icon={<Avatar src='https://yt3.ggpht.com/ytc/AIdro_nSWitfTyK_mMHwAKTFfPoG3ruOBZ7rmeG3zrj9fg=s88-c-k-c0x00ffffff-no-rj' />}
            className='rounded-md'
            title={t('Quý Acoustic')} />
        </div>
        <div className='w-full px-3 py-3 border-b border-primary'>
          <span className='text-base font-semibold mb-1 block'>{t("Discover")}</span>
          <ButtonRowIconStart
            icon={<IconTrend />}
            className='rounded-md'
            title={t('Trend')} />
          <ButtonRowIconStart
            icon={<IconMusic />}
            className='rounded-md'
            title={t('Music')} />
          <ButtonRowIconStart
            icon={<IconGaming />}
            className='rounded-md'
            title={t('Game')} />
          <ButtonRowIconStart
            icon={<IconNews />}
            className='rounded-md'
            title={t('News')} />
          <ButtonRowIconStart
            icon={<IconTrophy />}
            className='rounded-md'
            title={t('Sport')} />
        </div>
        <div className='w-full px-3 py-3 border-b border-primary'>
          <span className='text-base font-semibold mb-1 block'>{t("OtherYoutubeService")}</span>
          <ButtonRowIconStart
            icon={<IconYoutubeRed />}
            className='rounded-md'
            title={t('YoutubePremium')} />
          <ButtonRowIconStart
            icon={<IconStudioYoutube />}
            className='rounded-md'
            title={t('YoutubeStudio')} />
          <ButtonRowIconStart
            icon={<IconMusicYoutube />}
            className='rounded-md'
            title={t('YoutubeMusic')} />
          <ButtonRowIconStart
            icon={<IconYoutubeKid />}
            className='rounded-md'
            title={t('YoutubeKids')} />
        </div>
        <div className='w-full px-3 py-3 border-b border-primary'>
          <ButtonRowIconStart
            icon={<IconSetting />}
            className='rounded-md'
            title={t('Setting')} />
          <ButtonRowIconStart
            icon={<IconFlag />}
            className='rounded-md'
            title={t('ReportHistory')} />
          <ButtonRowIconStart
            icon={<IconHelp />}
            className='rounded-md'
            title={t('Help')} />
          <ButtonRowIconStart
            icon={<IconFeedback />}
            className='rounded-md'
            title={t('SendFeedback')} />
        </div>
      </div>
    </div>
  )
}

const Avatar = ({ src }) => {

  return (
    <img
      className='size-6 rounded-full'
      src={src} />
  )
}

export default SideBar