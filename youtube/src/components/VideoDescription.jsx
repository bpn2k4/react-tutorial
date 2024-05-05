import { useState } from "react"
import { twMerge } from "tailwind-merge"

const VideoDescription = ({ className }) => {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className={twMerge(
      "mt-3 w-full p-3 bg-rgb-240 dark:bg-rgb-40 rounded-xl text-sm",
      className
    )}>
      <div className="font-[500] gap-2 flex flex-row">
        <span>
          7.8K views
        </span>
        <span>1 day ago</span>
      </div>
    </div>
  )
}

export default VideoDescription