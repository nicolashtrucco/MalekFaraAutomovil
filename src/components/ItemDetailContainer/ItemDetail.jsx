/** @format */

import { useState } from "react";
import "./itemDetail.scss";
import { PiEngineFill } from "react-icons/pi";
import { IoCarSportSharp } from "react-icons/io5";
import { SiSpeedtest } from "react-icons/si";
import { FaRoad } from "react-icons/fa6";

const ItemDetail = ({ product }) => {
   if (!product || !product.img) {
      return <p>Cargando producto...</p>;
   }

   const [currentImg, setCurrentImg] = useState(product.img[0]);

   const handleImageClick = (image) => {
      setCurrentImg(image);
   };

   return (
      <div className="itemDetail-container">
         <div className="itemDetail-content">
            {/* Contenedor 1: Imágenes */}
            <div className="itemDetail-images">
               <img
                  className="itemDetail-mainImg"
                  src={currentImg}
                  alt="Imagen principal"
               />
               <div className="itemDetail-thumbnails">
                  {product.img.map((image) => (
                     <img
                        className="itemDetail-thumbnail"
                        src={image}
                        key={image}
                        alt="Miniatura"
                        onClick={() => handleImageClick(image)}
                     />
                  ))}
               </div>
            </div>

            {/* Contenedor 2: Especificaciones */}
            <div className="itemDetail-info">
               <h1>{product.name}</h1>
               <p className="itemDetail-infoP">{product.description}</p>
               <div className="itemDetail-specsContainer">
                  <div className="itemDetail-spec">
                     <IoCarSportSharp />
                     <p>{product.carroceria}</p>
                  </div>
                  <div className="itemDetail-spec">
                     <PiEngineFill />
                     <p>{product.motor}</p>
                  </div>
                  <div className="itemDetail-spec">
                     <SiSpeedtest />
                     <p>{product.velocidadMax} km/h</p>
                  </div>
                  <div className="itemDetail-spec">
                     <FaRoad />
                     <p>{product.kilometraje} km</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ItemDetail;
