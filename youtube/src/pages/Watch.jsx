import VideoComment from "../components/VideoComment"
import VideoRelation from "../components/VideoRelation"
import VideoWatch from "../components/VideoWatch"


const Watch = () => {

  return (
    <div className="w-full max-w-[1754px] mx-auto h-[2000px] flex flex-col xl:flex-row pt-6">
      <div className="w-full max-w-[688px] xl:px-6">
        <VideoWatch />
        <VideoComment />
      </div>
      <VideoRelation />
    </div>
  )
}

export default Watch