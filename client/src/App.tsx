import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './components/AboutPage/AboutPage'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AboutPage/>}/>
      </Routes>
      
    </>
  )
}

export default App
