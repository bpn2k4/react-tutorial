import { createContext, useContext, useReducer } from 'react'

const ThemeContext = createContext()

const getTheme = () => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    if (theme == 'light' || theme == 'dark') return theme
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'dark'
}
const initTheme = () => {
  const theme = getTheme()
  if (theme == 'dark') { document.documentElement.classList.add('dark') }
  else { document.documentElement.classList.remove('dark') }
  localStorage.setItem('theme', theme)
  return theme
}
const theme = initTheme()

const reducer = (_, action) => {
  return action.type == 'light-to-dark' ? 'dark' : 'light'
}

const useTheme = () => {
  const { state, dispatch } = useContext(ThemeContext)
  const changeTheme = () => {
    if (state == 'dark') {
      dispatch({ type: 'dark-to-light' })
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    else {
      dispatch({ type: 'light-to-dark' })
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
  return { theme: state, changeTheme }
}

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, theme)
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default useTheme
export { ThemeProvider }