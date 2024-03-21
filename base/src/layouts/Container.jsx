import { twMerge } from 'tailwind-merge'
import useTheme from '../hooks/useTheme'


const Container = ({ children }) => {

  const { theme } = useTheme()

  return (
    <div className={twMerge('w-screen h-screen overflow-y-auto text-mau', theme == 'light' ? 'track-light' : 'track-dark')}>
      {children}
    </div>
  )
}

export default Container