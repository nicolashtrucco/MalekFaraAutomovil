import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Inicio from './components/pages/Inicio/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Vehiculos from './components/pages/Vehículos/Vehiculos'

function App() {

  return (
    <div>
      <BrowserRouter >
      <Navbar/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Vehiculos' element={<Vehiculos/>}/>
      </Routes>

      <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App
