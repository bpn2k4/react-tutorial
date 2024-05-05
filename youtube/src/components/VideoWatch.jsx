import { Link } from "react-router-dom"
import { IconCaret, IconCut, IconDownload, IconLike, IconNoNotify, IconNotify, IconNotifyActive, IconShare, IconThank, IconThreeDot, IconUnSubscribe, IconVerify } from "./Icon"
import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import VideoDescription from "./VideoDescription"
import VideoControl from "./VideoControl"

const VideoWatch = () => {

  const [showDescription, setShowDescription] = useState(true)

  return (
    <div className="w-full">
      <div className="w-full aspect-video relative">
        <img
          className="w-full h-full rounded-xl"
          src="/thumbnail-1ae18e5b-7fb6-4aab-a8fb-74b5893543ba.jpg" />
        <VideoControl />
      </div>
      <div className="mt-3">
        <h1 className="font-bold text-xl leading-7 line-clamp-2">
          (Goose Goose Duck #68) Độ Dân Phòng khám phá Hội Chợ mới và pha lượn tàu siêu tốc đi vào lòng đất.
        </h1>
      </div>
      <div className="mt-3 flex flex-row items-center">
        <div className="flex flex-row items-center">
          <Link>
            <img
              className="size-10 rounded-full"
              src="/channel-a7c90304-5200-4478-b20a-04d09080d193.jpg" />
          </Link>
          <div className="ml-3">
            <div className="flex flex-row items-center">
              <Link>
                <span className="font-[500] text-base line-clamp-1 leading-[22px]">
                  Mixigaming
                </span>
              </Link>
              <div className="ml-1">
                <IconVerify className='w-[14px] h-[14px] dark:fill-rgb-170' />
              </div>
            </div>
            <div className="dark:text-rgb-170 text-xs leading-[18px]">7.42M subscribers</div>
          </div>
        </div>
        <div className="flex flex-row items-center ml-5 gap-3">
          <button className="h-9 center px-4 rounded-full text-sm font-[500] bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 active:scale-98 transition-all">
            Join
          </button>
          <ButtonSubscribe />
        </div>
      </div>
      <div className="mt-3 flex flex-row gap-2 flex-wrap font-[500] text-sm">
        <div className="flex flex-row h-9">
          <button className="center gap-[6px] bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 rounded-l-full pr-3 pl-2 relative">
            <IconLike />
            <span>23K</span>
            <div className="absolute right-[0px] top-[6px] bottom-[6px] w-[1px] bg-rgb-215 dark:bg-rgb-100">
            </div>
          </button>
          <button className="rounded-r-full bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 pr-4 pl-2">
            <IconLike className='rotate-0' />
          </button>
        </div>
        <button className="center gap-[6px] rounded-full bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 pl-3 pr-4 active:scale-98 transition-all">
          <IconShare />
          <span>Share</span>
        </button>
        <button className="center gap-[6px] rounded-full bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 pl-3 pr-4 active:scale-98 transition-all">
          <IconDownload />
          <span>Download</span>
        </button>
        <button className="center gap-[6px] rounded-full bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 pl-3 pr-4 active:scale-98 transition-all">
          <IconThank />
          <span>Thanks</span>
        </button>
        <button className="center gap-[6px] rounded-full bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 pl-3 pr-4 active:scale-98 transition-all">
          <IconCut />
          <span>Clip</span>
        </button>
        <button className="center rounded-full bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 size-9">
          <IconThreeDot className='rotate-90' />
        </button>
      </div>
      <VideoDescription />
    </div>
  )
}

const ButtonSubscribe = () => {

  const [show, setShow] = useState(false)
  const buttonRef = useRef()
  const menuRef = useRef()

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

  return (
    <div className="relative">
      <button
        className="h-9 flex flex-row gap-[6px] items-center justify-center bg-rgb-240 dark:bg-rgb-40 hover:bg-rgb-230 dark:hover:bg-rgb-65 rounded-full px-2 active:scale-99 transition-all"
        ref={buttonRef}
        onClick={() => setShow(!show)}>
        <IconNotify />
        <span className="text-sm font-[500]">Subscribed</span>
        <IconCaret className='rotate-90' />
      </button>
      <div
        className={twMerge(
          "absolute w-[172px] dark:bg-rgb-40 py-2 rounded-lg top-0 left-full origin-top-left   transition-all",
          show ? 'scale-100' : 'scale-0'
        )}
        ref={menuRef}>
        <button className="w-full h-9 pl-4 pr-3 dark:hover:bg-rgb-85 flex flex-row items-center gap-4">
          <IconNotifyActive />
          <span>All</span>
        </button>
        <button className="w-full h-9 pl-4 pr-3 dark:hover:bg-rgb-85 flex flex-row items-center gap-4">
          <IconNotify />
          <span>Personalized</span>
        </button>
        <button className="w-full h-9 pl-4 pr-3 dark:hover:bg-rgb-85 flex flex-row items-center gap-4">
          <IconNoNotify />
          <span>None</span>
        </button>
        <button className="w-full h-9 pl-4 pr-3 dark:hover:bg-rgb-85 flex flex-row items-center gap-4">
          <IconUnSubscribe />
          <span>Unsubscribe</span>
        </button>
      </div>
    </div>
  )
}

export default VideoWatch