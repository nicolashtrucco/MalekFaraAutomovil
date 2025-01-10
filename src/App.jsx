import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Inicio from './components/pages/Inicio/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Vehiculos from './components/pages/Vehículos/Vehiculos'
import Contacto from './components/pages/Contacto/Contacto'
import ScrollToTop from './components/scrollTop/scrollTop'

function App() {

  return (
    <div>
      <BrowserRouter >
      <ScrollToTop /> {/* Desplaza hacia arriba al cambiar de ruta */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Vehiculos' element={<Vehiculos/>}/>
        <Route path='/Contacto' element={<Contacto/>} />
      </Routes>

      <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App
