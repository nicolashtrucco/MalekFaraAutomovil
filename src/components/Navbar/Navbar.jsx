import '../Navbar/navbar.scss'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import logo from '../../assets/MÁLEK-FARA-LogoBlanco.webp'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const navRef = useRef()

    const handleNavBar = () => {
        navRef.current.classList.toggle('responsive-navbar')
    }

    return (
        <header>
            <Link to={'/'}>
                <img src={logo} alt="Logo Málek Fara" className='navbar-logo' />
            </Link>

            <nav ref={navRef} className='navbar-container'>
                <NavLink 
                    to="/Vehiculos" 
                    onClick={handleNavBar} 
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Vehículos
                </NavLink>
                <NavLink 
                    to="/Servicios" 
                    onClick={handleNavBar} 
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Servicios
                </NavLink>
                <NavLink 
                    to="/Nosotros" 
                    onClick={handleNavBar} 
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Nosotros
                </NavLink>
                <NavLink 
                    to="/Contacto" 
                    onClick={handleNavBar} 
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Contacto
                </NavLink>
                <button className='navbar-button navbar-buttonClose' onClick={handleNavBar}>
                    <FaTimes />
                </button>
            </nav>

            <div className='navbar-buttonContainer'>
                <button className='navbar-button' onClick={handleNavBar}>
                    <FaBars />
                </button>
            </div>
        </header>
    )
}

export default Navbar