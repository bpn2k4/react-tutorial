
const Utils = {

  getDisplayView: (view) => {
    if (view < 1000) return [view, null]
    if (view < 1000000) {
      const round = (view / 1000).toFixed(1).toString()
      const num = round.charAt(round.length - 1) == '0' ? round.slice(0, round.length - 2) : round.replace('.', ',')
      const range = 'Thousand'
      return [num, range]
    }
    if (view < 1000000000) {
      const round = (view / 1000000).toFixed(1).toString()
      const num = round.charAt(round.length - 1) == '0' ? round.slice(0, round.length - 2) : round.replace('.', ',')
      const range = 'Million'
      return [num, range]
    }
    const num = round.charAt(round.length - 1) == '0' ? round.slice(0, round.length - 2) : round.replace('.', ',')
    const range = 'Billion'
    return [num, range]
  },
  getDisplayPublish: (date) => {
    const dentalSeconds = Math.floor((new Date() - new Date(date)) / 1000)
    if (dentalSeconds < 60) {
      return [dentalSeconds, 'Second']
    }
    if (dentalSeconds < 60 * 60) {
      return [Math.ceil(dentalSeconds / 60), 'Minute']
    }
    if (dentalSeconds < 60 * 60 * 24) {
      return [Math.ceil(dentalSeconds / 60 / 60), 'Hour']
    }
    if (dentalSeconds < 60 * 60 * 24 * 7) {
      return [Math.ceil(dentalSeconds / 60 / 60 / 24), 'Day']
    }
    if (dentalSeconds < 60 * 60 * 24 * 7 * 4) {
      return [Math.ceil(dentalSeconds / 60 / 60 / 24 / 7), 'Week']
    }
    if (dentalSeconds < 60 * 60 * 24 * 365) {
      return [Math.ceil(dentalSeconds / 60 / 60 / 24 / 30), 'Month']
    }
    return [Math.ceil(dentalSeconds / 60 / 60 / 24 / 365), 'Year']
  },
  wait: (ms) => new Promise(e => setTimeout(e, ms)),

  SideBarLeft: {
    isShow: true,
    show: () => true,
    hide: () => true,
  },

  HomeSideBar: {
    isShow: true,
    isMount: false,
    show: () => true,
    hide: () => true,
  }
}

Utils.getDisplayPublish('2023-08-27T09:38:31.000Z')
export default Utils