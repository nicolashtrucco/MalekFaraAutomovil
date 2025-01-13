import '../Nosotros/nosotrosHeader.scss'
import '../Servicios/headerServicios.scss'
import LamborghiniHuracan from '../../../assets/Lamborghini-Huracan-Header00.jpg'

const NosotrosHeader = () => {
  return (
    <div className='contactoHeader-container'>
            
                    <div className="contactoHeader-ImgParrafo nosotrosHeader">
                        <img  className='servicio-img nosotros-img' src={LamborghiniHuracan} alt="" />
                    </div> 
                </div>
  )
}

export default NosotrosHeader