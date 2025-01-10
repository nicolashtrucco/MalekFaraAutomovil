/** @format */

import "../Footer/footer.scss";
import LogoMalek from "../../assets/MÁLEK-FARA-LogoBlanco.webp";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
   return (
      <>
         <div className="footer-container">
            <div className="footer-logo">
               <Link to={'/'}><img src={LogoMalek} alt="MÁLEK-FARA-LogoBlanco.png" /></Link>
            </div>

            <div className="footer-contact">

              <div className="footer-icons">
                <FaLocationDot className="footer-icon"/>
                <div className="footer-location">
                  <p className="footer-p00">Palacio Alcorta</p>
                  <p className="footer-p01">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="footer-icons">
                <IoCallSharp className="footer-icon"/>
                <p>+54 11 6248 8738</p>
              </div>

              <div className="footer-icons">
                <MdMail className="footer-icon"/>
                <p>info@malekfara.com.ar</p>
              </div>

            </div>
         </div>

         <div className="footer-creditosContainer">
            <p>Copyright ©2025 Málek Fara. Todos los derechos reservados. Desarrollado por <span>Nicolas Trucco</span></p>
            <Link to={'https://www.instagram.com/nicolas.trucco/'}target="_blank"><RiInstagramFill/></Link>
         </div>
      </>
   );
};

export default Footer;
