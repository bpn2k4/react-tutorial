import { useTranslation } from 'react-i18next'

import Utils from '../utils'
import { Link } from 'react-router-dom'
import { IconThreeDot, IconVerify } from './Icon'

const ItemVideo = ({ video }) => {

  const { t } = useTranslation()

  const [num, viewRange] = Utils.getDisplayView(video.view)
  const view = viewRange ? `${num} ${t(viewRange)} ${t('View').toLowerCase()}` : `${num} ${t('View').toLowerCase()}`
  const [time, timeRange] = Utils.getDisplayPublish(video.publish)
  const publish = `${time} ${t(timeRange).toLowerCase()} ${t('Before').toLowerCase()}`

  return (
    <div
      key={video.id}
      className='flex flex-col group'>
      <div className='relative'>
        <Link>
          <img
            className='w-full aspect-video bg-no-repeat object-contain rounded-lg'
            src={`/${video.thumbnail}`} />
        </Link>
        <span className='absolute bottom-1 right-1 rounded text-xs leading-3 font-semibold !text-white px-1 py-[3px] !bg-black/80'>{video.length}</span>
      </div>
      <div className='w-full flex flex-row gap-3 py-3 pr-4 relative'>
        <button className='z-[1] absolute top-[11px] -right-1'>
          <IconThreeDot className='opacity-0 group-hover:opacity-100 transition-opacity' />
        </button>
        <Link>
          <img
            className='size-9 rounded-full'
            src={`/${video.channel.channel_image}`} />
        </Link>
        <div className='flex flex-col flex-1 z-[2]'>
          <Link>
            <span className='font-semibold line-clamp-2 leading-[22px]'>
              {video.title}
            </span>
          </Link>
          <div className='flex flex-row gap-1 text-sm text-rgb-96 dark:text-rgb-170 items-center mt-1'>
            <Link>
              <span className='hover:text-rgb-15 dark:hover:text-rgb-241'>{video.channel.channel_name}</span>
            </Link>
            {video.channel.channel_verified && <IconVerify className='w-[14px] h-[14px]' />}
          </div>
          <div className='text-rgb-96 dark:text-rgb-170 text-sm gap-1 flex flex-row'>
            <span>{view}</span>
            <span>{'•'}</span>
            <span>{publish}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemVideo