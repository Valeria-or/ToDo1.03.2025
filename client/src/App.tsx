import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './components/AboutPage/AboutPage'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AboutPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </>
  )
}

export default App
