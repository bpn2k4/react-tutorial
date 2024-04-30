import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

import i18next from './languages/i18next'
import DefaultLayout from './layouts/DefaultLayout'
import GlobalComponent from './components/GlobalComponent'
import { ThemeProvider } from './hooks/useTheme'
import { StoreProvider } from './hooks/useStore'
import Home from './pages/Home'
import HomeLayout from './layouts/HomeLayout'
import Watch from './pages/Watch'

const routes = [
  {
    path: '/',
    element: (
      <DefaultLayout>
        <HomeLayout>
          <Home />
        </HomeLayout>
      </DefaultLayout>
    )
  },
  {
    path: '/watch',
    element: (
      <DefaultLayout>
        <Watch />
      </DefaultLayout>
    )
  },
]

const AppRouter = ({ children }) => {

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
      {children}
    </BrowserRouter>
  )
}

function App() {

  return (
    <I18nextProvider i18n={i18next}>
      <StoreProvider>
        <ThemeProvider>
          <AppRouter
            children={<GlobalComponent />}
          />
        </ThemeProvider>
      </StoreProvider>
    </I18nextProvider>
  )
}

export default App
