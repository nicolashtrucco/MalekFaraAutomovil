/** @format */

import "../Inicio/main.scss";
import LogoFerrari from "../../../assets/Prueba-Ferrari.webp";
import LogoLamborghini from "../../../assets/Prueba-Lamborghini.webp";
import LogoMaserati from "../../../assets/Prueba-Maserati.webp";
import LogoPorsche from "../../../assets/Prueba-porsche.webp";
import LogoBmw from "../../../assets/Prueba-Bmw.webp";
import LogoMercedes from "../../../assets/Prueba-Mercdes.webp";
import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import Formulario from "./Formulario";
import { Link } from "react-router-dom";

const Main = () => {

   return (
      <>
         <div className="main-container">
            <div className="main-tittle"></div>
            <div className="main-logoCars">
               <img className="main-logo" src={LogoFerrari} alt="" />
               <img className="main-logo" src={LogoLamborghini} alt="" />
               <img className="main-logo" src={LogoMaserati} alt="" />
               <img className="main-logo" src={LogoPorsche} alt="" />
               <img className="main-logo" src={LogoBmw} alt="" />
               <img className="main-logo" src={LogoMercedes} alt="" />
            </div>
         </div>

         <div className="main-Products">
            <ItemListContainer limit={3} />
            <Link  className="itemList-a" to={'/Vehiculos'}>Ver Más</Link>
         </div>

         <div className="main-Form">
               <Formulario/>
         </div>
      </>
   );
};

export default Main;
