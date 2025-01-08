/** @format */

import "../Inicio/inicio.scss";
import Main from "./Main";
import FotoFerrari from "../../../assets/Ferrari-RomaCortada.png";
import { Link } from "react-router-dom";

const Inicio = () => {
   return (
      <>
         <div className="inicio-container">
            <div className="inicio-parrrafoSlogan">
               <p className="inicio-slogan">
                  "If you can dream it, you can do it."
               </p>
               <p className="inicio-autor">Enzo Ferrari</p>
            </div>
            <div className="inicio-ImgSlogan">
               <img src={FotoFerrari} alt="" />
            </div>
            <div className="inicio-buttonContainer">
               <Link to={'/Vehiculos'} className="inicio-button">Ver nuestros Vehículos</Link>
            </div>
         </div>

         <div>
           <Main/>
         </div>
      </>
   );
};

export default Inicio;
