import '../Contacto/contactoHeader.scss'
import ImagenMaserati from '../../../assets/Maserati-Levante-Header.webp'

const ContactoHeader = () => {
  return (
    <div className='contactoHeader-container'>
    
            <div className="contactoHeader-ImgParrafo">
                <img src={ImagenMaserati} alt="" />
            </div> 
        </div>
  )
}

export default ContactoHeader