import { useState } from "react"
import { twMerge } from "tailwind-merge"

const VideoDescription = ({ className }) => {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className={twMerge(
      "w-full p-3 bg-rgb-39 rounded-xl text-sm",
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