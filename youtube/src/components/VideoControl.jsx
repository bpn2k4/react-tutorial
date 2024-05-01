import { IconNext, IconPlay } from "./Icon"

const VideoControl = () => {

  return (
    <div className="absolute left-0 right-0 bottom-0 flex flex-col">
      <div>

      </div>
      <div className="flex flex-row justify-between h-12 px-2">
        <div className="flex flex-row">
          <button className="size-12 center">
            <IconPlay className="size-10" />
          </button>
          <button className="size-12 center">
            <IconNext className="size-12" />
          </button>
        </div>
        <div className="flex flex-row"></div>
      </div>
    </div>
  )
}

export default VideoControl