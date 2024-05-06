import Api from "../apis"
import ItemVideo from "./ItemVideo"

const VideoRelation = () => {

  return (
    <div className="w-full max-w-[424px] grid grid-cols-1 gap-3">
      {Api.Video.getListVideo().map(video => (
      <ItemVideo 
      key={video.id}
      className="flex-row" 
      type="row"
      video={video} />
      ))}
    </div>
  )
}

export default VideoRelation