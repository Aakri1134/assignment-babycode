import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { auth } from "../firebase/firebase"
import { onAuthStateChanged, type User } from "firebase/auth"

interface GlobalContextType {
  currentUser: User | null
  loggedIn: boolean
  loading: boolean
  mode : 'light' | 'dark'
  toggleMode : () => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
)

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const ex = onAuthStateChanged(auth, initializeUser)
    return ex
  }, [])


  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser(user)
      setLoggedIn(true)
      setLoading(false)
    } else {
      setCurrentUser(null)
      setLoggedIn(false)
      setLoading(true)
    }
  }

  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : "light")
  }

  return (
    <GlobalContext.Provider value={{ currentUser, loggedIn, loading, mode, toggleMode }}>
      {children}
    </GlobalContext.Provider>
  )
}
