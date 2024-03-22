import { I18nextProvider } from 'react-i18next'
import i18next from './languages/i18next'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import { StoreProvider } from './hooks/useStore'

const routes = [
  {
    path: '/', element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    )
  }
]

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

function App() {

  return (
    <I18nextProvider i18n={i18next}>
      <StoreProvider>
        <ThemeProvider>
          <AppRouter
          />
        </ThemeProvider>
      </StoreProvider>
    </I18nextProvider>
  )
}

export default App
