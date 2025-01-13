/** @format */

import "../Nosotros/nosotrosMain.scss";
import PalacioAlcorta from "../../../assets/PalacioAlcorta-Fachada01.jpg";

const NosotrosMain = () => {
   return (
      <div className="nosotros-container">
         <div className="nosotros-imgAndTittle">
          <div className="nosotros-img">
            <img src={PalacioAlcorta} alt="" />

          </div>
            <div className="nosotros-info">
               <h1>Nuestra Filosofía</h1>
               {/* <h2>Para cada cliente, un trato excelente.</h2> */}
               <p>
                  En <span>Málek Fara</span>, nos especializamos en el proceso integral de
                  elección, asesoramiento, gestión y compraventa de vehículos de
                  alta gama. Nuestro objetivo es ofrecer soluciones
                  personalizadas que reflejen la exclusividad y excelencia que
                  nuestros clientes merecen.
               </p>

               <p>
                  Con más de 10 años de experiencia, hemos construido una
                  reputación sólida basada en la atención detallada, la
                  transparencia y un compromiso inquebrantable con la
                  satisfacción de nuestros clientes. Ya sea que busque un
                  Porsche, Ferrari, Lamborghini u otro vehículo de alta gama,
                  superaremos sus expectativas en cada paso del camino.
               </p>

               <p>
                  Nuestras oficinas, ubicadas en el emblemático Palacio Alcorta,
                  en Palermo Chico, ofrecen un entorno que refleja la
                  sofisticación y calidad de nuestro servicio.
               </p>

               <p>
                  En <span>Málek Faras</span>, no solo vendemos automóviles, creamos
                  experiencias únicas y memorables para quienes buscan lo mejor.
               </p>
            </div>
         </div>
         <div className="nosotros-parrafo">
            <p>
               En <span>Málek Fara</span>, la satisfacción a largo plazo de nuestros clientes
               es la base de nuestro negocio. Cuando adquiere un automóvil con
               nosotros, tanto usted como su vehículo reciben el más alto nivel
               de cuidado y atención, lo que nos convierte en su elección de
               confianza una y otra vez. Ya sea que prefiera un <span>Porsche,
               Ferrari, Lamborghini</span> u otro vehículo de alta gama, nuestro
               compromiso es superar sus expectativas, creando una experiencia
               única que querrá repetir.
            </p>
         </div>
      </div>
   );
};

export default NosotrosMain;
