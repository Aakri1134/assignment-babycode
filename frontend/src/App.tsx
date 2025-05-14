import { createBrowserRouter, Navigate, RouterProvider} from 'react-router'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Update from './pages/Update'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ErrorPage from './pages/Error'
import { useGlobalContext } from './context/GlobalContext'

function App() {

  const context = useGlobalContext()

  const router = createBrowserRouter([
    {
      path : '/',
      element : (context && context.loggedIn)? <Home/> : <Navigate to='/login'/>,
      errorElement : <ErrorPage/>
    },
    {
      path : '/new',
      element : (context && context.loggedIn)? <New/> : <Navigate to='/login'/>,
      errorElement : <ErrorPage/>
    },
    {
      path : '/login',
      element : <Login/>,
      errorElement : <ErrorPage/>
    },
    {
      path : '/signup',
      element : <Signup/>,
      errorElement : <ErrorPage/>
    },
    {
      path : '/update',
      element : (context && context.loggedIn)? <Update/> : <Navigate to='/login'/>,
      errorElement : <ErrorPage/>,
    }

  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
