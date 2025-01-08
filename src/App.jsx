import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Inicio from './components/pages/Inicio/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
      <BrowserRouter >
      <Navbar/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
