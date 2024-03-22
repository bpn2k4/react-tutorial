import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

import { IconUserCircle } from './Icon'

const ButtonLogin = ({ className, onClick }) => {

  const { t } = useTranslation()

  return (
    <button
      className={twMerge('h-9 w-[132px] center gap-1 border border-primary rounded-full text-[#3ea6ff] font-semibold hover:bg-[#def1ff] dark:hover:bg-[#263850] active:scale-99', className)}
      onClick={onClick}>
      <IconUserCircle />
      {t('Login')}
    </button>
  )
}

export default ButtonLogin