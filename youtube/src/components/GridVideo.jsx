import { twMerge } from 'tailwind-merge'

import Api from '../apis'
import ItemVideo from './ItemVideo'

const GridVideo = ({ className }) => {


  return (
    <div className={twMerge(
      'w-full grid grid-cols-1 gap-4',
      'sm:grid-cols-2',
      'md:grid-cols-2',
      'lg:grid-cols-3',
      '2xl:grid-cols-4',
      className
    )}>
      {Api.Video.getListVideo().map(video => (<ItemVideo key={video.id} video={video} />))}
    </div>
  )
}

export default GridVideo