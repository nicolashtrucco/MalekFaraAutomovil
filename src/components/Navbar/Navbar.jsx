import '../Navbar/navbar.scss'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import logo from '../../assets/MÁLEK-FARA-LogoBlanco.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navRef = useRef()

    const handleNavBar = () => {
        navRef.current.classList.toggle('responsive-navbar')
    }

  return (
    <header>
        
            <Link to={'/'}><img src={logo} alt="" className='navbar-logo'/></Link>

       
        <nav ref={navRef} className='navbar-container'>
            <Link to={'/Vehiculos'} href="" className='navbar-links'>Vehículos</Link>
            <Link to={'/Servicios'} href="">Servicios</Link>
            <Link to={'Nosotros'} href="">Nosotros</Link>
            <Link to={'Contacto'} href="">Contacto</Link>
            <button className='navbar-button navbar-buttonClose' onClick={handleNavBar}>
                <FaTimes/>
            </button>
        </nav>
        <div className='navbar-buttonContainer'>
            <button className='navbar-button' onClick={handleNavBar}>
            <FaBars/>
            </button>

        </div>
    </header>
  )
}

export default Navbar