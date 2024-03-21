import { I18nextProvider } from 'react-i18next'
import i18next from './languages/i18next'
import useTheme, { ThemeProvider } from './hooks/useTheme'
import Container from './layouts/Container'

const routes = [

]

const AppRouter = () => {

  const { theme, changeTheme } = useTheme()

  return (
    <Container>
      <div className='w-full h-[2000px]'>
        <h1>Hello</h1>
        <button onClick={changeTheme}>
          Click me
        </button>
      </div>
    </Container>
  )
}

function App() {

  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <AppRouter
        />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
