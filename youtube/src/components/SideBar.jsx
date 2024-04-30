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
import CircleButton from './CircleButton'
import Utils from '../utils'
import SideBarContent from './SideBarContent'

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
      <div className='h-[calc(100%-56px)]'>
        <SideBarContent />
      </div>
    </div>
  )
}



export default SideBar