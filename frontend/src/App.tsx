import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Update from './pages/Update'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='new' element={<New/>}/>
          <Route path='update' element={<Update/>}/>
          <Route path='auth'>
              <Route path='login' element={<Login/>}/>
              <Route path='signup' element={<Signup/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
