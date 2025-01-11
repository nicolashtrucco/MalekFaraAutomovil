/** @format */

import { Link } from "react-router-dom";
import "../Servicios/mainServicios.scss";
import  Leasing from '../../../assets/Leasing.jpg'
import ComprarYVender from '../../../assets/Comprar-y-Vender.webp'
import Consignacion from '../../../assets/Consignacion.webp'
import Gestoria from '../../../assets/Gestoria.webp'
import Transferencia from '../../../assets/Transferencia.webp'
import AsesoramientoImpositivo from '../../../assets/Asesoramiento-Impositivo.webp'

const MainServicios = () => {
   return (
      <div className="main-ServiciosContainer">
         <div className="servicios">
            <div className="servicios-container">
               <div className="servicio-container">
                  <img className="servicio-img" src={ComprarYVender} alt="" />
                  <h1 className="servicio-name">Compra y Venta</h1>
                  <p>Nos encargamos de facilitar la compra y venta de vehículos, asegurándonos de que cada transacción sea rápida, segura y al mejor precio.</p>
                  <Link className="servicio-buttom" to={"/Contacto"}>
                     Contactar
                  </Link>
               </div>

               <div className="servicio-container">
                  <img className="servicio-img" src={Leasing} alt="" />
                  <h1 className="servicio-name">Leasing</h1>
                  <p>Disfruta de tu auto sin complicaciones con nuestro servicio de leasing. Ofrecemos planes flexibles para que conduzcas el vehículo que necesitas con cómodas cuotas.</p>
                  <Link className="servicio-buttom" to={"/Contacto"}>
                     Contactar
                  </Link>
               </div>

               <div className="servicio-container">
                  <img className="servicio-img" src={Consignacion} alt="" />
                  <h1 className="servicio-name">Consignaciones</h1>
                  <p>Deja tu vehículo en manos de expertos. Gestionamos la venta de tu auto en consignación para que obtengas el mejor valor sin preocupaciones.</p>
                  <Link className="servicio-buttom" to={"/Contacto"}>
                     Contactar
                  </Link>
               </div>

               <div className="servicio-container">
                  <img className="servicio-img" src={Gestoria} alt="" />
                  <h1 className="servicio-name">Gestoría</h1>
                  <p>Nos encargamos de todos los trámites administrativos relacionados con tu vehículo, para que no tengas que preocuparte por nada. Somos tu aliado en gestoría vehicular.</p>
                  <Link className="servicio-buttom" to={"/Contacto"}>
                     Contactar
                  </Link>
               </div>

               <div className="servicio-container">
                  <img className="servicio-img" src={Transferencia} alt="" />
                  <h1 className="servicio-name">Transferencia</h1>
                  <p>Realiza la transferencia de tu vehículo de manera ágil y segura. Nos ocupamos de todos los detalles para garantizar que el proceso sea sencillo y transparente.</p>
                  <Link className="servicio-buttom" to={"/Contacto"}>
                     Contactar
                  </Link>
               </div>

               <div className="servicio-container">
                  <img className="servicio-img" src={AsesoramientoImpositivo} alt="" />
                  <h1 className="servicio-name">Asesoramiento Impositivo</h1>
                  <p>Contamos con expertos en asesoramiento impositivo que te ayudarán a gestionar los impuestos y obligaciones relacionados con tu vehículo de forma eficiente.</p>
                  <Link className="servicio-buttom" to={"/Contacto"}>
                     Contactar
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MainServicios;
