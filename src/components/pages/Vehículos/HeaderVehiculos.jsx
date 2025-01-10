import '../Vehículos/headerVehiculos.scss'
import ImagenFerrari from '../../../assets/Ferrari-296GTB-HeaderRecortadV2.webp'

const HeaderVehiculos = () => {
  return (
    <div className='headerVehiculos-container'>

        <div className="headerVehiculo-ImgParrafo">
            <img src={ImagenFerrari} alt="" />
        </div> 
    </div>
  )
}

export default HeaderVehiculos