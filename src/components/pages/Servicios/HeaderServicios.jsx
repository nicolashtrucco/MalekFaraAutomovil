import '../Contacto/contactoHeader.scss'
import '../Servicios/headerServicios.scss'
import ImagenPorsche from '../../../assets/PorscheHeader02.jpg'

const HeaderServicios = () => {
  return (
    <div className='contactoHeader-container servicio-container'>
        
                <div className="contactoHeader-ImgParrafo servicio-header">
                    <img  className='servicio-img' src={ImagenPorsche} alt="" />
                </div> 
            </div>
  )
}

export default HeaderServicios