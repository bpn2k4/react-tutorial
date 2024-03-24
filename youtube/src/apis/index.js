import data from "../data"

const getChannelByUrl = (url) => {
  return data.channels.filter(channel => channel.channel_url == url)[0] ?? null
}

const Api = {
  Video: {
    getListVideo: () => {
      const videos = data.videos.slice(0, 100)
      return videos.map(item => ({
        ...item,
        channel: getChannelByUrl(item.channel)
      }))
    }
  }
}

export default Api