import { twMerge } from 'tailwind-merge'
import useTheme from '../hooks/useTheme'


const Container = ({ children }) => {

  const { theme } = useTheme()

  return (
    <div className={twMerge('w-dvw h-dvh relative overflow-y-auto bg-primary text-primary', theme == 'light' ? 'track-light' : 'track-dark')}>
      {children}
    </div>
  )
}

export default Container