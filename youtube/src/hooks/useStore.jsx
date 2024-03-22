import { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()

const initialState = {
  isLogin: false
}

const ACTION = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
}

const reducer = (_, action) => {
  switch (action.type) {
    case ACTION.LOGIN:
      return { ...initialState, isLogin: true }
    case ACTION.LOGOUT:
      return { ...initialState, isLogin: false }
  }
}

/**@type {import('../types').useStore} */
const useStore = () => {
  const { state, dispatch } = useContext(StoreContext)

  const login = () => {
    dispatch({ type: ACTION.LOGIN })
  }
  const logout = () => {
    dispatch({ type: ACTION.LOGOUT })
  }

  return { ...state, login, logout }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export default useStore
export { StoreProvider }