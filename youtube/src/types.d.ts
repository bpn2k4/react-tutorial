import { CSSProperties } from 'react'

export type utilities = {
  [key: string]: CSSProperties
}

type initialState = {
  isLogin: Boolean
}

export type useStore = () => initialState & {
  login: Function,
  logout: Function
}